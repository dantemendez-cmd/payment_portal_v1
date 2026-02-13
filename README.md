# Credit Union Post-Charge-Off Payment Portal

Web demo implementing a member-facing self-service payment portal with a simplified two-tab layout, dynamic payment/hardship behavior, mock processor integration, and hidden admin simulation controls.

## Run

1. Open `index.html` in a browser.
2. Sign in with any username/password.
3. Enter MFA code `123456`.


## Admin Simulation

Admin controls are hidden from member view by default.

Enable admin tab:
- Add `?admin=1` in URL, or
- Press `Ctrl+Shift+A` after login.

Admin area includes:
- Compliance & audit controls
- Activity log
- Offer history and rule templates
- Processor/orchestration integration logs

## Feature Summary

- Login + MFA simulation
- Two-tab member layout (`Dashboard`, `Payments`)
- Dashboard with prominent `Outstanding Balance`, principal/interest/fees, original due dates
- Statement table + CSV download
- Unified payments panel with progressive disclosure
- Make-payment flow (card/debit/ACH, today or post-dated date, recurring support)
- Unable-to-pay flow (bankruptcy, dispute full/partial, other payment options up to 6 months)
- Mock APIs for balance retrieval, payment submission, and hardship/dispute flagging
- Dynamic offer strategy and event reactions
- Compliance controls and complete audit trail

## Accessibility Notes

- Semantic landmarks and labeled regions (`role="region"`, ARIA labels on major panels).
- Keyboard-friendly controls with visible focus styles.
- Live status regions (`aria-live="polite"`) for payment/dispute confirmations.
- Form labels are explicit and bound to inputs for screen-reader clarity.

## Security + Validation Notes

- Security microcopy is displayed near payment entry to reinforce trust without adding friction.
- Client-side validation provides immediate error prevention for card/routing/date/amount inputs.
- Payment data is tokenized before authorization in mock flows.
- Disclosure acknowledgement is required before payment submission.

## Files

- `/Users/dantemendez/Documents/Codex Projects/cu-post-chargeoff-portal/index.html`
- `/Users/dantemendez/Documents/Codex Projects/cu-post-chargeoff-portal/styles.css`
- `/Users/dantemendez/Documents/Codex Projects/cu-post-chargeoff-portal/app.js`
- `/Users/dantemendez/Documents/Codex Projects/cu-post-chargeoff-portal/mock-api-endpoints.md`
