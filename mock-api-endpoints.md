# Mock API Endpoints and Sample Payloads

This demo simulates processor, account, and orchestration APIs for a credit union post-charge-off portal.

## 1) Balance Retrieval

`POST /account/summary`

```json
{
  "memberId": "BECU-204981"
}
```

```json
{
  "memberId": "BECU-204981",
  "outstandingBalance": 5280.43,
  "principalBalance": 4820.0,
  "interestBalance": 290.25,
  "feeBalance": 170.18,
  "status": "Post-Charge-Off",
  "disputeFlag": false,
  "bankruptcyFlag": false
}
```

## 2) Tokenization

`POST /processor/tokenize`

```json
{
  "memberId": "BECU-204981",
  "method": "ACH_BANK",
  "accountRef": "RT-123456780"
}
```

```json
{
  "tokenId": "tok_ab12cd34",
  "maskedAccount": "****6789",
  "paymentMethod": "ACH_BANK",
  "processor": "SWBC-MOCK"
}
```

## 3) Authorization

`POST /processor/authorize`

```json
{
  "memberId": "BECU-204981",
  "amount": 850.0,
  "method": "DEBIT_CARD",
  "tokenId": "tok_ab12cd34",
  "scheduleType": "POST_DATED",
  "scheduledFor": "2026-02-18T12:00:00.000Z"
}
```

```json
{
  "approved": true,
  "authId": "auth_7f9c3d14",
  "approvedAt": "2026-02-13T19:32:11.000Z"
}
```

Failure example:

```json
{
  "approved": false,
  "code": "R01",
  "message": "Authorization declined by issuing network"
}
```

## 4) Settlement Allocation

`POST /processor/allocate`

```json
{
  "memberId": "BECU-204981",
  "amount": 850.0,
  "authId": "auth_7f9c3d14",
  "settlementType": "STANDARD",
  "allocationStrategy": "FEES_THEN_INTEREST_THEN_PRINCIPAL"
}
```

```json
{
  "allocationId": "alloc_0019ab31",
  "allocations": {
    "fees": 170.18,
    "interest": 290.25,
    "principal": 389.57
  },
  "settlementType": "STANDARD"
}
```

## 5) Hardship / Dispute Flagging

`POST /account/hardship-flag`

```json
{
  "memberId": "BECU-204981",
  "type": "DISPUTE_PARTIAL",
  "amount": 350.0,
  "reason": "Merchant charge was duplicated"
}
```

```json
{
  "accepted": true,
  "hardshipId": "hardship_7w2jk9z",
  "type": "DISPUTE_PARTIAL"
}
```

## 6) Orchestration Disposition Update (Skit/BECU)

`POST /orchestration/disposition-update`

```json
{
  "memberId": "BECU-204981",
  "outcome": "partial",
  "channel": "WEB",
  "reference": "auth_7f9c3d14",
  "outstandingBalance": 4430.43,
  "at": "2026-02-13T19:33:41.000Z"
}
```

```json
{
  "accepted": true,
  "dispositionId": "disp_17400"
}
```

## 7) Outcome Codes

- `paid`: balance resolved
- `partial`: payment posted, balance remains
- `abandoned`: path initiated but not completed
- `error`: processor, validation, or integration failure
