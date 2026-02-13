const state = {
  auth: {
    pendingUsername: "",
    isAuthenticated: false,
    memberName: ""
  },
  ui: {
    activePanel: "dashboard-panel",
    adminMode: false,
    paymentDecision: "",
    hardshipPath: "",
    planTermsAgreed: false,
    lastFullPaymentReceipt: null,
    lastPlanReceipt: null
  },
  account: {
    memberId: "BECU-204981",
    product: "Visa Signature",
    outstandingBalance: 5280.43,
    principalBalance: 4820.0,
    interestBalance: 290.25,
    feeBalance: 170.18,
    status: "Post-Charge-Off",
    cohort: "HIGH_INTENT_DIGITAL",
    failedPayments: 0,
    disputeFlag: false,
    bankruptcyFlag: false,
    contactAttemptsToday: 2,
    contactLimitDaily: 7,
    quietHoursStart: 21,
    quietHoursEnd: 8,
    timezone: "America/Los_Angeles",
    smsConsent: true,
    emailConsent: true,
    originalDueDate: "2025-09-20",
    chargeOffDate: "2025-11-05",
    snapshotFrozen: false,
    freezeReason: "",
    freezeNextSteps: "",
    lastActivity: "Smart-link engagement recorded",
    lastActivityAt: new Date(Date.now() - 2 * 60 * 60 * 1000).toISOString()
  },
  offers: [
    {
      id: "settle-45",
      type: "SETTLEMENT",
      title: "45% Lump-Sum Settlement",
      amount: 2376.19,
      expiresAt: "2026-03-02T23:59:59Z",
      eligibilityCohorts: ["HIGH_INTENT_DIGITAL", "SMS_RESPONDER"],
      minBalance: 1000,
      status: "ACTIVE",
      approvedBy: "Offer Strategy Committee"
    },
    {
      id: "plan-12",
      type: "INSTALLMENT",
      title: "12-Month Flex Plan",
      downPayment: 300,
      months: 12,
      apr: 0,
      eligibilityCohorts: ["HIGH_INTENT_DIGITAL", "STANDARD"],
      status: "ACTIVE",
      approvedBy: "Recovery Strategy Engine"
    },
    {
      id: "settle-expired",
      type: "SETTLEMENT",
      title: "50% Rapid Resolution",
      amount: 2640.22,
      expiresAt: "2025-12-01T23:59:59Z",
      status: "ACTIVE",
      approvedBy: "Recovery Strategy Engine"
    },
    {
      id: "pay-in-full",
      type: "PAYMENT",
      title: "Pay Current Outstanding Balance",
      amount: 5280.43,
      status: "ACTIVE",
      approvedBy: "Default"
    }
  ],
  selectedOfferId: "",
  statementItems: [
    {
      id: "s1",
      date: "2025-11-05",
      type: "CHARGE_OFF_PRINCIPAL",
      description: "Charge-off principal transfer",
      amount: 4820.0,
      runningBalance: 4820.0
    },
    {
      id: "s2",
      date: "2025-12-05",
      type: "INTEREST_ACCRUAL",
      description: "Accrued interest",
      amount: 150.25,
      runningBalance: 4970.25
    },
    {
      id: "s3",
      date: "2026-01-04",
      type: "FEE",
      description: "Recovery servicing fee",
      amount: 170.18,
      runningBalance: 5140.43
    },
    {
      id: "s4",
      date: "2026-01-30",
      type: "INTEREST_ACCRUAL",
      description: "Accrued interest",
      amount: 140.0,
      runningBalance: 5280.43
    }
  ],
  activityFeed: [
    {
      at: new Date(Date.now() - 2 * 60 * 60 * 1000).toISOString(),
      message: "SMS notification sent to member with payment portal link."
    },
    {
      at: new Date(Date.now() - 26 * 60 * 60 * 1000).toISOString(),
      message: "Email reminder sent for account recovery options."
    },
    {
      at: new Date(Date.now() - 3 * 24 * 60 * 60 * 1000).toISOString(),
      message: "Voice outreach completed by customer service team."
    }
  ],
  recurringPlans: [],
  reminders: [],
  auditTrail: [],
  apiLog: [],
  orchestrationFeed: [],
  smartLink: null,
  realtimeTick: 0
};

const dom = {};

function buildDefaultDemoData() {
  return {
    account: {
      memberId: "BECU-204981",
      product: "Visa Signature",
      outstandingBalance: 5280.43,
      principalBalance: 4820.0,
      interestBalance: 290.25,
      feeBalance: 170.18,
      status: "Post-Charge-Off",
      cohort: "HIGH_INTENT_DIGITAL",
      failedPayments: 0,
      disputeFlag: false,
      bankruptcyFlag: false,
      contactAttemptsToday: 2,
      contactLimitDaily: 7,
      quietHoursStart: 21,
      quietHoursEnd: 8,
      timezone: "America/Los_Angeles",
      smsConsent: true,
      emailConsent: true,
      originalDueDate: "2025-09-20",
      chargeOffDate: "2025-11-05",
      snapshotFrozen: false,
      freezeReason: "",
      freezeNextSteps: "",
      lastActivity: "Smart-link engagement recorded",
      lastActivityAt: new Date(Date.now() - 2 * 60 * 60 * 1000).toISOString()
    },
    offers: [
      {
        id: "settle-45",
        type: "SETTLEMENT",
        title: "45% Lump-Sum Settlement",
        amount: 2376.19,
        expiresAt: "2026-03-02T23:59:59Z",
        eligibilityCohorts: ["HIGH_INTENT_DIGITAL", "SMS_RESPONDER"],
        minBalance: 1000,
        status: "ACTIVE",
        approvedBy: "Offer Strategy Committee"
      },
      {
        id: "plan-12",
        type: "INSTALLMENT",
        title: "12-Month Flex Plan",
        downPayment: 300,
        months: 12,
        apr: 0,
        eligibilityCohorts: ["HIGH_INTENT_DIGITAL", "STANDARD"],
        status: "ACTIVE",
        approvedBy: "Recovery Strategy Engine"
      },
      {
        id: "settle-expired",
        type: "SETTLEMENT",
        title: "50% Rapid Resolution",
        amount: 2640.22,
        expiresAt: "2025-12-01T23:59:59Z",
        status: "ACTIVE",
        approvedBy: "Recovery Strategy Engine"
      },
      {
        id: "pay-in-full",
        type: "PAYMENT",
        title: "Pay Current Outstanding Balance",
        amount: 5280.43,
        status: "ACTIVE",
        approvedBy: "Default"
      }
    ],
    statementItems: [
      {
        id: "s1",
        date: "2025-11-05",
        type: "CHARGE_OFF_PRINCIPAL",
        description: "Charge-off principal transfer",
        amount: 4820.0,
        runningBalance: 4820.0
      },
      {
        id: "s2",
        date: "2025-12-05",
        type: "INTEREST_ACCRUAL",
        description: "Accrued interest",
        amount: 150.25,
        runningBalance: 4970.25
      },
      {
        id: "s3",
        date: "2026-01-04",
        type: "FEE",
        description: "Recovery servicing fee",
        amount: 170.18,
        runningBalance: 5140.43
      },
      {
        id: "s4",
        date: "2026-01-30",
        type: "INTEREST_ACCRUAL",
        description: "Accrued interest",
        amount: 140.0,
        runningBalance: 5280.43
      }
    ],
    activityFeed: [
      {
        at: new Date(Date.now() - 2 * 60 * 60 * 1000).toISOString(),
        message: "SMS notification sent to member with payment portal link."
      },
      {
        at: new Date(Date.now() - 26 * 60 * 60 * 1000).toISOString(),
        message: "Email reminder sent for account recovery options."
      },
      {
        at: new Date(Date.now() - 3 * 24 * 60 * 60 * 1000).toISOString(),
        message: "Voice outreach completed by customer service team."
      }
    ]
  };
}

const mockProcessorApi = {
  async getAccountSummary(payload) {
    await wait(130);
    const response = {
      memberId: payload.memberId,
      outstandingBalance: roundMoney(state.account.outstandingBalance),
      principalBalance: roundMoney(state.account.principalBalance),
      interestBalance: roundMoney(state.account.interestBalance),
      feeBalance: roundMoney(state.account.feeBalance),
      status: state.account.status,
      disputeFlag: state.account.disputeFlag,
      bankruptcyFlag: state.account.bankruptcyFlag
    };
    logApi("/account/summary", payload, response, "SUCCESS");
    return response;
  },

  async tokenize(payload) {
    await wait(180);
    const response = {
      tokenId: `tok_${Math.random().toString(36).slice(2, 10)}`,
      maskedAccount: payload.method === "ACH_BANK" ? "****6789" : "****1122",
      paymentMethod: payload.method,
      processor: "SWBC-MOCK"
    };
    logApi("/processor/tokenize", payload, response, "SUCCESS");
    return response;
  },

  async authorize(payload) {
    await wait(250);

    const risky = state.account.failedPayments >= 2 && payload.amount > 100;
    const shouldFail = payload.amount > 8000 || (risky && Math.random() < 0.5);

    if (shouldFail) {
      const response = {
        approved: false,
        code: "R01",
        message: "Authorization declined by issuing network"
      };
      logApi("/processor/authorize", payload, response, "FAILED");
      return response;
    }

    const response = {
      approved: true,
      authId: `auth_${Math.random().toString(36).slice(2, 11)}`,
      approvedAt: new Date().toISOString()
    };
    logApi("/processor/authorize", payload, response, "SUCCESS");
    return response;
  },

  async allocate(payload) {
    await wait(200);
    const allocation = previewAllocation(payload.amount);
    const response = {
      allocationId: `alloc_${Math.random().toString(36).slice(2, 11)}`,
      allocations: allocation,
      settlementType: payload.settlementType || "STANDARD"
    };
    logApi("/processor/allocate", payload, response, "SUCCESS");
    return response;
  },

  async flagHardship(payload) {
    await wait(120);
    const response = {
      accepted: true,
      hardshipId: `hardship_${Math.random().toString(36).slice(2, 9)}`,
      type: payload.type
    };
    logApi("/account/hardship-flag", payload, response, "SUCCESS");
    return response;
  }
};

document.addEventListener("DOMContentLoaded", async () => {
  cacheDom();
  bindEvents();
  initState();
  processSmartLink();
  await refreshSummary();
  renderAll();
  startRealtimeEngine();
});

function cacheDom() {
  dom.loginView = document.getElementById("login-view");
  dom.portalView = document.getElementById("portal-view");
  dom.loginForm = document.getElementById("login-form");
  dom.mfaForm = document.getElementById("mfa-form");
  dom.resetDemoBtn = document.getElementById("reset-demo-btn");
  dom.signOutBtn = document.getElementById("sign-out-btn");
  dom.navButtons = Array.from(document.querySelectorAll(".nav-btn"));
  dom.panels = Array.from(document.querySelectorAll(".panel"));
  dom.adminTabBtn = document.getElementById("admin-tab-btn");

  dom.memberMeta = document.getElementById("member-meta");
  dom.accountStatusPill = document.getElementById("account-status-pill");
  dom.smartLinkBanner = document.getElementById("smart-link-banner");

  dom.balanceValue = document.getElementById("balance-value");
  dom.principalValue = document.getElementById("principal-value");
  dom.interestValue = document.getElementById("interest-value");
  dom.feesValue = document.getElementById("fees-value");
  dom.dueDatesValue = document.getElementById("due-dates-value");
  dom.balanceCue = document.getElementById("balance-cue");
  dom.snapshotFreezeNote = document.getElementById("snapshot-freeze-note");
  dom.activityFeed = document.getElementById("activity-feed");
  dom.contactInfoBlock = document.getElementById("contact-info-block");
  dom.statementTableBody = document.querySelector("#statement-table tbody");
  dom.downloadStatementBtn = document.getElementById("download-statement-btn");

  dom.paymentsBalanceSummary = document.getElementById("payments-balance-summary");
  dom.paymentsLockedNote = document.getElementById("payments-locked-note");
  dom.decisionPayBtn = document.getElementById("decision-pay-btn");
  dom.decisionUnableBtn = document.getElementById("decision-unable-btn");
  dom.makePaymentFlow = document.getElementById("make-payment-flow");
  dom.hardshipFlow = document.getElementById("hardship-flow");

  dom.paymentForm = document.getElementById("payment-form");
  dom.paymentAmount = document.getElementById("payment-amount");
  dom.paymentMethod = document.getElementById("payment-method");
  dom.cardFields = document.getElementById("card-fields");
  dom.cardNumber = document.getElementById("card-number");
  dom.cardExpiry = document.getElementById("card-expiry");
  dom.cardCvv = document.getElementById("card-cvv");
  dom.achFields = document.getElementById("ach-fields");
  dom.routingNumber = document.getElementById("routing-number");
  dom.bankAccountLast4 = document.getElementById("bank-account-last4");
  dom.paymentDate = document.getElementById("payment-date");
  dom.enableRecurring = document.getElementById("enable-recurring");
  dom.fullPaymentNote = document.getElementById("full-payment-note");
  dom.recurringFields = document.getElementById("recurring-fields");
  dom.recurringFrequency = document.getElementById("recurring-frequency");
  dom.paymentStatus = document.getElementById("payment-status");
  dom.downloadPaymentReceiptBtn = document.getElementById("download-payment-receipt-btn");
  dom.processorPreview = document.getElementById("processor-preview");

  dom.hardshipPath = document.getElementById("hardship-path");
  dom.bankruptcyPanel = document.getElementById("bankruptcy-panel");
  dom.submitBankruptcyBtn = document.getElementById("submit-bankruptcy-btn");
  dom.bankruptcyStatus = document.getElementById("bankruptcy-status");
  dom.disputePanel = document.getElementById("dispute-panel");
  dom.otherOptionsPanel = document.getElementById("other-options-panel");

  dom.disputeType = document.getElementById("dispute-type");
  dom.disputeFullNote = document.getElementById("dispute-full-note");
  dom.partialDisputeFields = document.getElementById("partial-dispute-fields");
  dom.disputeAmount = document.getElementById("dispute-amount");
  dom.disputeReason = document.getElementById("dispute-reason");
  dom.submitDisputeBtn = document.getElementById("submit-dispute-btn");
  dom.disputeStatus = document.getElementById("dispute-status");

  dom.planTerm = document.getElementById("plan-term");
  dom.planMonthlyAmount = document.getElementById("plan-monthly-amount");
  dom.planStartDate = document.getElementById("plan-start-date");
  dom.planSummary = document.getElementById("plan-summary");
  dom.savePlanBtn = document.getElementById("save-plan-btn");
  dom.planStatus = document.getElementById("plan-status");
  dom.planTermsBox = document.getElementById("plan-terms-box");
  dom.planTermsAgree = document.getElementById("plan-terms-agree");
  dom.planPaymentForm = document.getElementById("plan-payment-form");
  dom.planPaymentMethod = document.getElementById("plan-payment-method");
  dom.planPaymentAccount = document.getElementById("plan-payment-account");
  dom.planPaymentExpiry = document.getElementById("plan-payment-expiry");
  dom.planPaymentCvv = document.getElementById("plan-payment-cvv");
  dom.planPaymentStatus = document.getElementById("plan-payment-status");
  dom.downloadPlanReceiptBtn = document.getElementById("download-plan-receipt-btn");

  dom.disclosureList = document.getElementById("disclosure-list");
  dom.logContactAttemptBtn = document.getElementById("log-contact-attempt-btn");
  dom.toggleSmsConsentBtn = document.getElementById("toggle-sms-consent-btn");
  dom.complianceStatus = document.getElementById("compliance-status");
  dom.offerHistoryTableBody = document.querySelector("#offer-history-table tbody");
  dom.ruleTemplateBlock = document.getElementById("rule-template-block");
  dom.activityLogTableBody = document.querySelector("#activity-log-table tbody");
  dom.auditTableBody = document.querySelector("#audit-table tbody");
  dom.apiLogTableBody = document.querySelector("#api-log-table tbody");
  dom.outcomeTableBody = document.querySelector("#outcome-table tbody");

  dom.toast = document.getElementById("toast");
  dom.errorModal = document.getElementById("error-modal");
  dom.errorModalMessage = document.getElementById("error-modal-message");
  dom.errorModalClose = document.getElementById("error-modal-close");
}

function bindEvents() {
  dom.loginForm.addEventListener("submit", handleLoginSubmit);
  dom.mfaForm.addEventListener("submit", handleMfaSubmit);
  dom.resetDemoBtn.addEventListener("click", resetDemoAccount);
  dom.signOutBtn.addEventListener("click", handleSignOut);

  dom.navButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const panelId = button.dataset.panel;
      if (panelId) {
        activatePanel(panelId);
      }
    });
  });

  dom.downloadStatementBtn.addEventListener("click", downloadStatementCsv);

  dom.decisionPayBtn.addEventListener("click", () => setPaymentDecision("MAKE_PAYMENT"));
  dom.decisionUnableBtn.addEventListener("click", () => setPaymentDecision("UNABLE_FULL"));

  dom.paymentMethod.addEventListener("change", handlePaymentMethodChange);
  dom.cardNumber.addEventListener("input", handleCardNumberInputFormat);
  dom.cardExpiry.addEventListener("input", handleCardExpiryInputFormat);
  dom.paymentForm.addEventListener("submit", handlePaymentSubmit);
  dom.downloadPaymentReceiptBtn.addEventListener("click", handleDownloadFullPaymentReceipt);
  dom.enableRecurring.addEventListener("change", () => {
    dom.recurringFields.classList.toggle("hidden", !dom.enableRecurring.checked);
    renderProcessorPreview();
  });

  // Progressive validation lowers input errors before submission.
  [
    dom.paymentAmount,
    dom.paymentDate,
    dom.cardNumber,
    dom.cardExpiry,
    dom.cardCvv,
    dom.routingNumber,
    dom.bankAccountLast4,
    dom.paymentMethod,
    dom.recurringFrequency
  ].forEach((element) => {
    element.addEventListener("input", () => {
      updateRecurringEligibility();
      validatePaymentForm(false);
      renderProcessorPreview();
    });
    element.addEventListener("change", () => {
      updateRecurringEligibility();
      validatePaymentForm(false);
      renderProcessorPreview();
    });
  });

  dom.hardshipPath.addEventListener("change", handleHardshipPathChange);
  dom.submitBankruptcyBtn.addEventListener("click", submitBankruptcy);
  dom.disputeType.addEventListener("change", handleDisputeTypeChange);
  dom.submitDisputeBtn.addEventListener("click", submitDispute);

  dom.planTerm.addEventListener("change", handlePlanTermChange);
  dom.planStartDate.addEventListener("change", handlePlanStartDateChange);
  dom.savePlanBtn.addEventListener("click", savePlanRequest);
  dom.planTermsAgree.addEventListener("change", handlePlanTermsToggle);
  dom.planPaymentMethod.addEventListener("change", populatePlanPaymentDummy);
  dom.planPaymentForm.addEventListener("submit", handlePlanPaymentSubmit);
  dom.downloadPlanReceiptBtn.addEventListener("click", handleDownloadPlanReceipt);

  dom.logContactAttemptBtn.addEventListener("click", logContactAttempt);
  dom.toggleSmsConsentBtn.addEventListener("click", toggleSmsConsent);
  dom.errorModalClose.addEventListener("click", hideErrorModal);

  document.addEventListener("keydown", (event) => {
    if (event.ctrlKey && event.shiftKey && event.key.toLowerCase() === "a") {
      state.ui.adminMode = !state.ui.adminMode;
      updateAdminVisibility();
      toast(state.ui.adminMode ? "Admin simulation enabled." : "Admin simulation hidden.");
      if (!state.ui.adminMode && state.ui.activePanel === "admin-panel") {
        activatePanel("dashboard-panel");
      }
    }
  });
}

function initState() {
  const today = toDateInputValue(new Date());
  const maxPlanDate = toDateInputValue(addDays(new Date(), 14));
  dom.paymentDate.value = today;
  dom.paymentDate.min = today;
  dom.planStartDate.value = today;
  dom.planStartDate.min = today;
  dom.planStartDate.max = maxPlanDate;
  dom.paymentAmount.value = state.account.outstandingBalance.toFixed(2);
  dom.planTermsAgree.checked = false;

  const params = new URLSearchParams(window.location.search);
  state.ui.adminMode = params.get("admin") === "1";
  updateAdminVisibility();

  addAudit("SYSTEM", "Portal initialized", "Initial state seeded for live demo.");
  buildReminderSchedule();
  handlePaymentMethodChange();
  updateRecurringEligibility();
  renderPlanSummary();
}

async function refreshSummary() {
  const summary = await mockProcessorApi.getAccountSummary({ memberId: state.account.memberId });
  state.account.status = summary.status;
}

function updateAdminVisibility() {
  if (!state.ui.adminMode) {
    dom.adminTabBtn.classList.add("hidden");
    dom.adminTabBtn.setAttribute("aria-hidden", "true");
    return;
  }
  dom.adminTabBtn.classList.remove("hidden");
  dom.adminTabBtn.setAttribute("aria-hidden", "false");
}

function handleLoginSubmit(event) {
  event.preventDefault();
  const form = new FormData(dom.loginForm);
  state.auth.pendingUsername = String(form.get("username") || "").trim();
  state.auth.memberName = toTitleCase(state.auth.pendingUsername || "Alex Member");

  dom.mfaForm.classList.remove("hidden");
  dom.loginForm.classList.add("hidden");

  addAudit("MEMBER", "Login credentials submitted", "MFA challenge generated.");
  toast("Verification code sent (demo code: 123456).");
}

function handleMfaSubmit(event) {
  event.preventDefault();
  const form = new FormData(dom.mfaForm);
  const code = String(form.get("mfa-code") || "").trim();

  if (code !== "123456") {
    toast("Invalid MFA code. Use 123456 for this demo.");
    addAudit("SYSTEM", "MFA verification failed", `Code ${code || "(empty)"} rejected.`);
    return;
  }

  state.auth.isAuthenticated = true;
  dom.loginView.classList.remove("active");
  dom.loginView.classList.add("hidden");
  dom.portalView.classList.remove("hidden");
  dom.portalView.classList.add("active");

  addAudit("SYSTEM", "MFA verified", "Member authenticated successfully.");
  recordActivity("Member authenticated and entered the portal.");
  renderAll();
}

function handleSignOut() {
  state.auth.isAuthenticated = false;
  state.auth.pendingUsername = "";
  dom.mfaForm.reset();
  dom.loginForm.reset();
  dom.loginForm.classList.remove("hidden");
  dom.mfaForm.classList.add("hidden");

  dom.portalView.classList.remove("active");
  dom.portalView.classList.add("hidden");
  dom.loginView.classList.remove("hidden");
  dom.loginView.classList.add("active");

  addAudit("MEMBER", "Sign out", "Session ended by member.");
}

function resetDemoAccount() {
  const seed = buildDefaultDemoData();

  state.account = seed.account;
  state.offers = seed.offers;
  state.selectedOfferId = "";
  state.statementItems = seed.statementItems;
  state.activityFeed = seed.activityFeed;
  state.recurringPlans = [];
  state.reminders = [];
  state.auditTrail = [];
  state.apiLog = [];
  state.orchestrationFeed = [];
  state.smartLink = null;
  state.realtimeTick = 0;
  state.ui.paymentDecision = "";
  state.ui.hardshipPath = "";
  state.ui.planTermsAgreed = false;
  state.ui.lastFullPaymentReceipt = null;
  state.ui.lastPlanReceipt = null;

  const today = toDateInputValue(new Date());
  const maxPlanDate = toDateInputValue(addDays(new Date(), 14));

  dom.paymentForm.reset();
  dom.planPaymentForm.reset();
  dom.paymentAmount.value = state.account.outstandingBalance.toFixed(2);
  dom.paymentDate.value = today;
  dom.paymentDate.min = today;
  dom.planStartDate.value = today;
  dom.planStartDate.min = today;
  dom.planStartDate.max = maxPlanDate;
  dom.hardshipPath.value = "";
  dom.disputeType.value = "FULL";
  dom.disputeAmount.value = "";
  dom.disputeReason.value = "";
  dom.planTerm.value = "2";
  dom.planTermsAgree.checked = false;
  dom.makePaymentFlow.classList.add("hidden");
  dom.hardshipFlow.classList.add("hidden");
  dom.bankruptcyPanel.classList.add("hidden");
  dom.disputePanel.classList.add("hidden");
  dom.otherOptionsPanel.classList.add("hidden");
  dom.planTermsBox.classList.add("hidden");
  dom.planPaymentForm.classList.add("hidden");
  dom.downloadPaymentReceiptBtn.classList.add("hidden");
  dom.downloadPlanReceiptBtn.classList.add("hidden");
  dom.partialDisputeFields.classList.add("hidden");
  dom.disputeFullNote.classList.remove("hidden");
  setStatus(dom.paymentStatus, "", false);
  setStatus(dom.planStatus, "", false);
  setStatus(dom.planPaymentStatus, "", false);
  setStatus(dom.disputeStatus, "", false);
  setStatus(dom.bankruptcyStatus, "", false);
  setStatus(dom.complianceStatus, "", false);

  handlePaymentMethodChange();
  buildReminderSchedule();
  addAudit("SYSTEM", "Demo reset", "Account details reset to default demo state.");
  recordActivity("Demo account was reset to default values.");
  activatePanel("dashboard-panel");
  renderAll();
  toast("Demo account details reset.");
}

function activatePanel(panelId) {
  if (panelId === "admin-panel" && !state.ui.adminMode) {
    return;
  }

  state.ui.activePanel = panelId;
  dom.panels.forEach((panel) => panel.classList.toggle("active", panel.id === panelId));
  dom.navButtons.forEach((button) => button.classList.toggle("active", button.dataset.panel === panelId));

  if (panelId === "payments-panel") {
    renderPaymentsSummary();
  }
}

function setPaymentDecision(decision) {
  if (state.account.snapshotFrozen && decision === "MAKE_PAYMENT") {
    setStatus(dom.paymentsLockedNote, `Payments are currently unavailable. ${state.account.freezeNextSteps}`, true);
    dom.paymentsLockedNote.classList.remove("hidden");
    return;
  }

  state.ui.paymentDecision = decision;

  // Progressive disclosure: only reveal the path the member selected.
  dom.makePaymentFlow.classList.toggle("hidden", decision !== "MAKE_PAYMENT");
  dom.hardshipFlow.classList.toggle("hidden", decision !== "UNABLE_FULL");

  dom.decisionPayBtn.classList.toggle("secondary", decision === "MAKE_PAYMENT");
  dom.decisionUnableBtn.classList.toggle("secondary", decision === "UNABLE_FULL");

  if (decision === "MAKE_PAYMENT") {
    dom.paymentAmount.value = state.account.outstandingBalance.toFixed(2);
    updateRecurringEligibility();
    validatePaymentForm(false);
    renderProcessorPreview();
  }

  if (decision === "UNABLE_FULL") {
    setStatus(dom.paymentStatus, "", false);
  }
}

function handlePaymentMethodChange() {
  const method = dom.paymentMethod.value;
  const isAch = method === "ACH_BANK";
  dom.cardFields.classList.toggle("hidden", isAch);
  dom.achFields.classList.toggle("hidden", !isAch);
  validatePaymentForm(false);
  renderProcessorPreview();
}

async function handlePaymentSubmit(event) {
  event.preventDefault();

  if (state.account.snapshotFrozen) {
    setStatus(dom.paymentStatus, `Payments are locked. ${state.account.freezeNextSteps}`, true);
    return;
  }

  const validation = validatePaymentForm(true);
  if (!validation.valid) {
    setStatus(dom.paymentStatus, validation.message, true);
    return;
  }

  const priorOutstanding = state.account.outstandingBalance;
  const amount = Number(dom.paymentAmount.value);
  const method = dom.paymentMethod.value;
  const paymentDate = dom.paymentDate.value;
  const isFullPaymentIntent = Math.abs(amount - state.account.outstandingBalance) <= 0.01;
  const recurring = isFullPaymentIntent ? false : dom.enableRecurring.checked;

  const scheduleType = paymentDate > toDateInputValue(new Date()) ? "POST_DATED" : "NOW";
  const request = {
    memberId: state.account.memberId,
    amount: roundMoney(amount),
    method,
    scheduleType,
    scheduledFor: new Date(`${paymentDate}T12:00:00`).toISOString(),
    recurring,
    recurringFrequency: recurring ? dom.recurringFrequency.value : null,
    offerId: state.selectedOfferId || null,
    settlementType: state.selectedOfferId ? "NEGOTIATED" : "STANDARD"
  };

  setStatus(dom.paymentStatus, "Submitting payment through processor flow...", false);

  const tokenized = await mockProcessorApi.tokenize({
    memberId: request.memberId,
    method: request.method,
    accountRef: request.method === "ACH_BANK" ? `RT-${dom.routingNumber.value}` : `CARD-${onlyDigits(dom.cardNumber.value).slice(-4)}`
  });

  const authorization = await mockProcessorApi.authorize({
    memberId: request.memberId,
    amount: request.amount,
    method: request.method,
    tokenId: tokenized.tokenId,
    scheduleType: request.scheduleType,
    scheduledFor: request.scheduledFor
  });

  if (!authorization.approved) {
    state.account.failedPayments += 1;
    setStatus(dom.paymentStatus, `Payment failed: ${authorization.message}`, true);
    addAudit("PROCESSOR", "Payment authorization failed", `${authorization.code}: ${authorization.message}`);
    recordActivity(`Payment attempt of ${formatCurrency(request.amount)} failed (${authorization.code}).`);
    refreshOfferStrategy("FAILED_PAYMENT");
    buildReminderSchedule();
    renderAll();
    await sendOutcome("error", authorization.code, "WEB");
    return;
  }

  const allocationResponse = await mockProcessorApi.allocate({
    memberId: request.memberId,
    amount: request.amount,
    authId: authorization.authId,
    settlementType: request.settlementType,
    allocationStrategy: "FEES_THEN_INTEREST_THEN_PRINCIPAL"
  });

  applyAllocationToBalance(allocationResponse.allocations);

  state.statementItems.push({
    id: `p_${Date.now()}`,
    date: toDateInputValue(new Date()),
    type: request.scheduleType === "POST_DATED" ? "SCHEDULED_PAYMENT" : "PAYMENT",
    description: `${request.method} payment ${request.scheduleType === "POST_DATED" ? "(post-dated)" : "(today)"}`,
    amount: -request.amount,
    runningBalance: roundMoney(state.account.outstandingBalance)
  });

  if (request.recurring) {
    createRecurringPlan(request.amount, request.method, request.recurringFrequency, request.scheduledFor);
  }

  const paymentFullyResolved = state.account.outstandingBalance <= 0.01;
  if (paymentFullyResolved) {
    state.ui.lastFullPaymentReceipt = {
      receiptTime: new Date().toISOString(),
      memberId: state.account.memberId,
      paymentAmount: request.amount,
      paymentMethod: request.method,
      scheduledFor: request.scheduledFor,
      authId: authorization.authId,
      allocation: allocationResponse.allocations,
      status: "PAID_IN_FULL"
    };
    dom.downloadPaymentReceiptBtn.classList.remove("hidden");
    state.account.outstandingBalance = 0;
    state.account.principalBalance = 0;
    state.account.interestBalance = 0;
    state.account.feeBalance = 0;
    state.account.status = "Resolved";
    freezeAccountSnapshot(
      "Your full payment has been processed and the due amount is now frozen.",
      "Please download your receipt/statement for your records. No additional payment is required."
    );
    addAudit("SYSTEM", "Account resolved", "Outstanding balance fully paid.");
  } else {
    state.ui.lastFullPaymentReceipt = null;
    dom.downloadPaymentReceiptBtn.classList.add("hidden");
    refreshOfferStrategy("PARTIAL_PAYMENT");
  }

  setStatus(dom.paymentStatus, "Payment accepted and account totals updated.", false, true);
  addAudit("MEMBER", "Payment submitted", `${formatCurrency(request.amount)} via ${request.method}.`);
  recordActivity(`Payment posted for ${formatCurrency(request.amount)} via ${request.method}.`);
  buildReminderSchedule();
  renderAll();

  const outcome = state.account.outstandingBalance === 0 || amount >= priorOutstanding ? "paid" : "partial";
  await sendOutcome(outcome, authorization.authId, "WEB");
}

async function handleHardshipPathChange() {
  if (state.account.snapshotFrozen) {
    setStatus(dom.paymentsLockedNote, `Account is frozen. ${state.account.freezeNextSteps}`, true);
    dom.paymentsLockedNote.classList.remove("hidden");
    dom.hardshipPath.value = "";
    return;
  }

  const path = dom.hardshipPath.value;
  state.ui.hardshipPath = path;

  dom.bankruptcyPanel.classList.add("hidden");
  dom.disputePanel.classList.add("hidden");
  dom.otherOptionsPanel.classList.add("hidden");

  if (!path) {
    return;
  }

  if (path === "BANKRUPTCY") {
    dom.bankruptcyPanel.classList.remove("hidden");
  }

  if (path === "DISPUTE") {
    dom.disputePanel.classList.remove("hidden");
    handleDisputeTypeChange();
  }

  if (path === "OTHER_OPTIONS") {
    dom.otherOptionsPanel.classList.remove("hidden");
    renderPlanSummary();
  }

  renderAll();
}

function handleDisputeTypeChange() {
  const partial = dom.disputeType.value === "PARTIAL";
  dom.partialDisputeFields.classList.toggle("hidden", !partial);
  dom.disputeFullNote.classList.toggle("hidden", partial);
}

function handlePlanTermChange() {
  resetPlanTermsFlow();
  renderPlanSummary();
}

function handlePlanStartDateChange() {
  resetPlanTermsFlow();
  if (!isWithin14DayLimit(dom.planStartDate.value)) {
    showErrorModal("The start date cannot be more than 14 days from today.");
    dom.planStartDate.value = toDateInputValue(new Date());
    setStatus(dom.planStatus, "Start date reset. Please choose a date within 14 days.", true);
  }
  renderPlanSummary();
}

function resetPlanTermsFlow() {
  state.ui.planTermsAgreed = false;
  dom.planTermsAgree.checked = false;
  dom.planTermsBox.classList.add("hidden");
  dom.planPaymentForm.classList.add("hidden");
  setStatus(dom.planPaymentStatus, "", false);
}

async function submitBankruptcy() {
  if (state.account.snapshotFrozen) {
    setStatus(dom.bankruptcyStatus, "This account is already frozen for review.", true);
    return;
  }

  await mockProcessorApi.flagHardship({ memberId: state.account.memberId, type: "BANKRUPTCY" });
  state.account.bankruptcyFlag = true;
  state.account.status = "Bankruptcy Review";
  freezeAccountSnapshot(
    "Bankruptcy notice submitted. Snapshot is now frozen during review.",
    "Please email support@creditunion.com with relevant documentation or call 1-800-123-45678."
  );
  addAudit("HARDSHIP", "Bankruptcy submitted", "Member submitted bankruptcy notice from hardship flow.");
  setStatus(
    dom.bankruptcyStatus,
    "Submission received. Please email support@creditunion.com with documentation or call 1-800-123-45678.",
    false,
    true
  );
  await sendOutcome("abandoned", "BANKRUPTCY_SUBMITTED", "WEB");
  renderAll();
}

async function submitDispute() {
  if (state.account.snapshotFrozen) {
    setStatus(dom.disputeStatus, "This account is already frozen for review.", true);
    return;
  }

  const type = dom.disputeType.value;

  if (type === "PARTIAL") {
    const amount = Number(dom.disputeAmount.value);
    const reason = String(dom.disputeReason.value || "").trim();

    if (!Number.isFinite(amount) || amount <= 0 || amount > state.account.outstandingBalance) {
      setStatus(dom.disputeStatus, "Enter a valid partial dispute amount within your outstanding balance.", true);
      return;
    }

    if (reason.length < 8) {
      setStatus(dom.disputeStatus, "Please provide a short reason for the partial dispute.", true);
      return;
    }

    await mockProcessorApi.flagHardship({
      memberId: state.account.memberId,
      type: "DISPUTE_PARTIAL",
      amount: roundMoney(amount),
      reason
    });

    state.account.disputeFlag = true;
    state.account.status = "Dispute Review";
    freezeAccountSnapshot(
      "Partial dispute submitted. Snapshot is now frozen during investigation.",
      "An agent will contact you for more information. You can also email dispute@creditunion.com or call 1-800-123-45678."
    );
    addAudit("HARDSHIP", "Partial dispute submitted", `${formatCurrency(amount)} disputed.`);
    recordActivity(`Partial dispute submitted for ${formatCurrency(amount)}.`);
    setStatus(
      dom.disputeStatus,
      "An agent will contact you for more information. You can also email dispute@creditunion.com or call 1-800-123-45678.",
      false,
      true
    );
    await sendOutcome("abandoned", "DISPUTE_PARTIAL", "WEB");
    renderAll();
    return;
  }

  await mockProcessorApi.flagHardship({
    memberId: state.account.memberId,
    type: "DISPUTE_FULL"
  });

  state.account.disputeFlag = true;
  state.account.status = "Dispute Review";
  freezeAccountSnapshot(
    "Full-balance dispute submitted. Snapshot is now frozen during investigation.",
    "Please complete the dispute form and send to dispute@creditunion.com or call 1-800-123-45678."
  );
  addAudit("HARDSHIP", "Full balance dispute submitted", "Member requested full balance dispute review.");
  recordActivity("Full balance dispute intake submitted.");
  setStatus(
    dom.disputeStatus,
    "Please complete the dispute form here and send to dispute@creditunion.com.",
    false,
    true
  );
  await sendOutcome("abandoned", "DISPUTE_FULL", "WEB");
  renderAll();
}

function renderPlanSummary() {
  const months = Number(dom.planTerm.value || 2);
  const total = roundMoney(state.account.outstandingBalance);
  const monthly = months > 0 ? roundMoney(total / months) : 0;
  dom.planMonthlyAmount.value = monthly.toFixed(2);

  dom.planSummary.innerHTML = `
    <p><strong>Plan Summary:</strong></p>
    <p>Term: ${months} month${months > 1 ? "s" : ""}</p>
    <p>Monthly Amount (auto-calculated): ${monthly > 0 ? formatCurrency(monthly) : "Not set"}</p>
    <p>Total Planned Amount (Principal + Interest + Fees): ${total > 0 ? formatCurrency(total) : "Not set"}</p>
    <p>Start Date: ${dom.planStartDate.value || "Not set"}</p>
  `;
}

async function savePlanRequest() {
  if (state.account.snapshotFrozen) {
    setStatus(dom.planStatus, `Plan setup unavailable. ${state.account.freezeNextSteps}`, true);
    return;
  }

  const months = Number(dom.planTerm.value);
  const monthly = Number(dom.planMonthlyAmount.value);
  const startDate = dom.planStartDate.value;

  if (!Number.isInteger(months) || months < 2 || months > 6) {
    setStatus(dom.planStatus, "Installment term must be between 2 and 6 months.", true);
    return;
  }

  if (!startDate) {
    setStatus(dom.planStatus, "Select a start date for the plan.", true);
    return;
  }

  if (!isWithin14DayLimit(startDate)) {
    showErrorModal("The plan start date must be within 14 days from today.");
    setStatus(dom.planStatus, "Start date must be within 14 days from today.", true);
    return;
  }

  resetPlanTermsFlow();
  dom.planTermsBox.classList.remove("hidden");
  setStatus(dom.planStatus, "Review the terms and check the agreement box to continue.", false, true);
}

function handlePlanTermsToggle() {
  if (!dom.planTermsAgree.checked) {
    state.ui.planTermsAgreed = false;
    dom.planPaymentForm.classList.add("hidden");
    return;
  }

  state.ui.planTermsAgreed = true;
  populatePlanPaymentDummy();
  dom.planPaymentForm.classList.remove("hidden");
}

function populatePlanPaymentDummy() {
  const method = dom.planPaymentMethod.value;
  if (method === "ACH_BANK") {
    dom.planPaymentAccount.value = "Routing 123456780";
    dom.planPaymentExpiry.value = "Account ****6789";
    dom.planPaymentCvv.value = "N/A";
    return;
  }

  if (method === "DEBIT_CARD") {
    dom.planPaymentAccount.value = "5555 4444 3333 2222";
    dom.planPaymentExpiry.value = "11/30";
    dom.planPaymentCvv.value = "456";
    return;
  }

  dom.planPaymentAccount.value = "4111 1111 1111 1111";
  dom.planPaymentExpiry.value = "12/30";
  dom.planPaymentCvv.value = "123";
}

async function handlePlanPaymentSubmit(event) {
  event.preventDefault();

  if (state.account.snapshotFrozen) {
    setStatus(dom.planPaymentStatus, `Plan payment unavailable. ${state.account.freezeNextSteps}`, true);
    return;
  }

  if (!state.ui.planTermsAgreed || !dom.planTermsAgree.checked) {
    setStatus(dom.planPaymentStatus, "You must agree to the terms before submitting plan payment.", true);
    return;
  }

  const months = Number(dom.planTerm.value);
  const monthly = Number(dom.planMonthlyAmount.value);
  const startDate = dom.planStartDate.value;
  const total = roundMoney(state.account.outstandingBalance);

  if (!isWithin14DayLimit(startDate)) {
    showErrorModal("The plan start date must be within 14 days from today.");
    setStatus(dom.planPaymentStatus, "Start date must be within 14 days from today.", true);
    return;
  }

  await mockProcessorApi.flagHardship({
    memberId: state.account.memberId,
    type: "OTHER_PAYMENT_OPTIONS",
    plan: {
      months,
      monthly,
      total,
      startDate,
      method: dom.planPaymentMethod.value
    }
  });

  const planOffer = {
    id: `plan_6m_${Date.now()}`,
    type: "INSTALLMENT",
    title: `${months}-Month Hardship Plan Request`,
    months,
    installment: monthly,
    downPayment: 0,
    status: "ACTIVE",
    approvedBy: "Member Hardship Flow",
    startDate
  };

  state.offers.unshift(planOffer);
  refreshOfferStrategy("NEW_PLAN_OPTION");
  createRecurringPlan(monthly, dom.planPaymentMethod.value, "MONTHLY", new Date(`${startDate}T12:00:00`).toISOString());
  state.ui.lastPlanReceipt = {
    receiptTime: new Date().toISOString(),
    memberId: state.account.memberId,
    months,
    monthly,
    total,
    startDate,
    method: dom.planPaymentMethod.value,
    account: dom.planPaymentAccount.value,
    status: "PLAN_PAYMENT_SUBMITTED"
  };
  dom.downloadPlanReceiptBtn.classList.remove("hidden");
  addAudit("HARDSHIP", "Installment request submitted", `${months} months at ${formatCurrency(monthly)}.`);  
  recordActivity(`Hardship plan request submitted (${months} months).`);
  setStatus(dom.planPaymentStatus, "Plan payment submitted. Click the receipt button to download your .txt receipt.", false, true);
  await sendOutcome("partial", "OTHER_OPTIONS_PLAN_PAYMENT", "WEB");
  renderAll();
}

function validatePaymentForm(showInlineMessage) {
  if (state.account.snapshotFrozen) {
    return { valid: false, message: `Payments are locked. ${state.account.freezeNextSteps}` };
  }

  const amount = Number(dom.paymentAmount.value);
  const dateValue = dom.paymentDate.value;
  const method = dom.paymentMethod.value;

  if (!Number.isFinite(amount) || amount <= 0) {
    markFieldState(dom.paymentAmount, false);
    return { valid: false, message: "Enter a valid payment amount." };
  }
  markFieldState(dom.paymentAmount, true);

  if (amount > state.account.outstandingBalance + 0.01) {
    markFieldState(dom.paymentAmount, false);
    return { valid: false, message: "Amount cannot exceed outstanding balance." };
  }

  const isFullPayment = state.account.outstandingBalance > 0 && Math.abs(amount - state.account.outstandingBalance) <= 0.01;
  if (isFullPayment && dom.enableRecurring.checked) {
    return { valid: false, message: "Recurring payments are not available for full-balance payments." };
  }

  if (!dateValue) {
    markFieldState(dom.paymentDate, false);
    return { valid: false, message: "Select a payment date." };
  }

  const today = toDateInputValue(new Date());
  if (dateValue < today) {
    markFieldState(dom.paymentDate, false);
    return { valid: false, message: "Payment date cannot be in the past." };
  }
  markFieldState(dom.paymentDate, true);

  if (method === "ACH_BANK") {
    const routingValid = /^[0-9]{9}$/.test(dom.routingNumber.value);
    const accountValid = /^[0-9]{4}$/.test(dom.bankAccountLast4.value);

    markFieldState(dom.routingNumber, routingValid);
    markFieldState(dom.bankAccountLast4, accountValid);

    if (!routingValid || !accountValid) {
      return { valid: false, message: "Enter a valid 9-digit routing number and account last 4." };
    }
  } else {
    const cardNumber = onlyDigits(dom.cardNumber.value);
    const cardValid = cardNumber.length === 16;
    const expiryValid = String(dom.cardExpiry.value || "").trim().length > 0;
    const cvvValid = String(dom.cardCvv.value || "").trim().length > 0;

    markFieldState(dom.cardNumber, cardValid);
    markFieldState(dom.cardExpiry, expiryValid);
    markFieldState(dom.cardCvv, cvvValid);

    if (!cardValid || !expiryValid || !cvvValid) {
      return { valid: false, message: "Card number must be 16 digits. Expiry and CVV are required." };
    }
  }

  const disclosureChecked = document.getElementById("payment-disclosure").checked;
  if (!disclosureChecked) {
    return { valid: false, message: "Please acknowledge disclosures before submitting." };
  }

  if (showInlineMessage) {
    setStatus(dom.paymentStatus, "Validation complete. Submitting payment...", false);
  }

  return { valid: true, message: "" };
}

function markFieldState(element, valid) {
  element.classList.remove("field-valid", "field-invalid");
  element.classList.add(valid ? "field-valid" : "field-invalid");
}

function handleCardNumberInputFormat() {
  const digits = onlyDigits(dom.cardNumber.value).slice(0, 16);
  dom.cardNumber.value = digits.replace(/(\d{4})(?=\d)/g, "$1 ").trim();
}

function handleCardExpiryInputFormat() {
  const digits = onlyDigits(dom.cardExpiry.value).slice(0, 4);
  if (digits.length <= 2) {
    dom.cardExpiry.value = digits;
    return;
  }
  dom.cardExpiry.value = `${digits.slice(0, 2)}/${digits.slice(2)}`;
}

function renderAll() {
  renderPortalHeader();
  renderDashboardSummary();
  renderActivityFeed();
  renderStatementTable();
  renderContactInfo();
  renderPaymentsSummary();
  updatePaymentLockUI();
  updateRecurringEligibility();
  renderProcessorPreview();
  renderPlanSummary();
  renderDisclosures();
  renderOfferHistory();
  renderRuleTemplates();
  renderActivityLogTable();
  renderAuditTable();
  renderApiLogTable();
  renderOutcomeTable();
}

function renderPortalHeader() {
  dom.memberMeta.textContent = `${state.auth.memberName || "Member"} | ${state.account.memberId} | ${state.account.product}`;

  const statusParts = [state.account.status];
  if (state.account.disputeFlag) {
    statusParts.push("Dispute Review");
  }
  if (state.account.bankruptcyFlag) {
    statusParts.push("Bankruptcy Flagged");
  }
  dom.accountStatusPill.textContent = statusParts.join(" | ");

  if (state.smartLink) {
    dom.smartLinkBanner.classList.remove("hidden");
    dom.smartLinkBanner.innerHTML = `
      <strong>Smart link imported from ${state.smartLink.channel}</strong>
      <p>Negotiated offer ${formatCurrency(state.smartLink.offerAmount)} is pre-loaded until ${formatDate(state.smartLink.expiresAt)}.</p>
    `;
  } else {
    dom.smartLinkBanner.classList.add("hidden");
  }
}

function renderDashboardSummary() {
  dom.balanceValue.textContent = formatCurrency(state.account.outstandingBalance);
  dom.principalValue.textContent = formatCurrency(state.account.principalBalance);
  dom.interestValue.textContent = formatCurrency(state.account.interestBalance);
  dom.feesValue.textContent = formatCurrency(state.account.feeBalance);
  dom.dueDatesValue.textContent = formatDate(state.account.originalDueDate);

  if (state.account.snapshotFrozen) {
    dom.snapshotFreezeNote.classList.remove("hidden");
    setStatus(
      dom.snapshotFreezeNote,
      `${state.account.freezeReason} Next steps: ${state.account.freezeNextSteps}`,
      false,
      true
    );
  } else {
    dom.snapshotFreezeNote.classList.add("hidden");
  }

  if (state.account.outstandingBalance > 5000) {
    dom.balanceCue.textContent = "Large balance tier: payment plans and settlement offers may update after each event.";
  } else if (state.account.outstandingBalance > 0) {
    dom.balanceCue.textContent = "Balance tier reduced: lower-balance offers may become available.";
  } else {
    dom.balanceCue.textContent = "Balance resolved. Thank you for completing your account recovery.";
  }
}

function renderActivityFeed() {
  const outreachItems = state.activityFeed.filter((item) => isOutreachActivity(item.message)).slice(0, 8);

  if (outreachItems.length === 0) {
    dom.activityFeed.innerHTML = "<li><strong>No recent outreach attempts</strong><br>Communication activity will appear here.</li>";
    return;
  }

  dom.activityFeed.innerHTML = outreachItems
    .map((item) => `<li><strong>${formatDateTime(item.at)}</strong><br>${item.message}</li>`)
    .join("");
}

function renderStatementTable() {
  const sorted = [...state.statementItems].sort((a, b) => new Date(a.date) - new Date(b.date));

  dom.statementTableBody.innerHTML = sorted
    .map((item) => {
      return `
        <tr>
          <td>${formatDate(item.date)}</td>
          <td>${item.type}</td>
          <td>${item.description}</td>
          <td>${formatCurrency(item.amount)}</td>
          <td>${formatCurrency(item.runningBalance)}</td>
        </tr>
      `;
    })
    .join("");
}

function renderContactInfo() {
  dom.contactInfoBlock.innerHTML = `
    <p><strong>Email:</strong> <a href="mailto:support@creditunion.com">support@creditunion.com</a></p>
    <p><strong>Phone:</strong> <a href="tel:180012345678">1-800-123-45678</a></p>
    <p><strong>Website:</strong> <a href="https://www.creditunion.com" target="_blank" rel="noopener noreferrer">www.creditunion.com</a></p>
    <p><strong>Operating Hours:</strong> Monday-Friday, 8:00 AM-6:00 PM PT</p>
    <p class="muted top-gap"><strong>Notice:</strong> This is an attempt to collect a debt, and any information obtained will be used for that purpose.</p>
  `;
}

function renderPaymentsSummary() {
  dom.paymentsBalanceSummary.textContent = `Outstanding Balance: ${formatCurrency(state.account.outstandingBalance)} | Principal ${formatCurrency(state.account.principalBalance)} | Interest ${formatCurrency(state.account.interestBalance)} | Fees ${formatCurrency(state.account.feeBalance)}`;

  if (state.account.snapshotFrozen) {
    dom.paymentsLockedNote.classList.remove("hidden");
    setStatus(dom.paymentsLockedNote, `Payments are unavailable. ${state.account.freezeReason} ${state.account.freezeNextSteps}`, true);
  } else {
    dom.paymentsLockedNote.classList.add("hidden");
  }
}

function updatePaymentLockUI() {
  const locked = state.account.snapshotFrozen;
  const disableElements = [
    dom.decisionPayBtn,
    dom.decisionUnableBtn,
    dom.paymentAmount,
    dom.paymentMethod,
    dom.cardNumber,
    dom.cardExpiry,
    dom.cardCvv,
    dom.routingNumber,
    dom.bankAccountLast4,
    dom.paymentDate,
    dom.enableRecurring,
    dom.recurringFrequency,
    dom.hardshipPath,
    dom.submitBankruptcyBtn,
    dom.submitDisputeBtn,
    dom.planTerm,
    dom.planStartDate,
    dom.savePlanBtn,
    dom.planTermsAgree,
    dom.planPaymentMethod,
    dom.planPaymentAccount,
    dom.planPaymentExpiry,
    dom.planPaymentCvv
  ];

  disableElements.forEach((element) => {
    element.disabled = locked;
  });

  const submitButton = dom.paymentForm.querySelector("button[type=\"submit\"]");
  submitButton.disabled = locked;
  const planSubmitButton = dom.planPaymentForm.querySelector("button[type=\"submit\"]");
  planSubmitButton.disabled = locked;

  if (locked) {
    dom.makePaymentFlow.classList.add("hidden");
    dom.hardshipFlow.classList.add("hidden");
  }
}

function updateRecurringEligibility() {
  if (!dom.enableRecurring) {
    return;
  }

  const amount = Number(dom.paymentAmount.value || 0);
  const fullPaymentSelected = state.account.outstandingBalance > 0 && Math.abs(amount - state.account.outstandingBalance) <= 0.01;
  const mustDisable = fullPaymentSelected || state.account.snapshotFrozen;

  dom.enableRecurring.disabled = mustDisable;
  if (mustDisable) {
    dom.enableRecurring.checked = false;
    dom.recurringFields.classList.add("hidden");
  }

  if (fullPaymentSelected) {
    dom.fullPaymentNote.classList.remove("hidden");
  } else {
    dom.fullPaymentNote.classList.add("hidden");
  }
}

function freezeAccountSnapshot(reason, nextSteps) {
  state.account.snapshotFrozen = true;
  state.account.freezeReason = reason;
  state.account.freezeNextSteps = nextSteps;
  addAudit("SYSTEM", "Account snapshot frozen", reason);
  recordActivity(`Account frozen: ${reason}`);
}

function renderProcessorPreview() {
  const amount = Number(dom.paymentAmount.value || 0);
  const paymentDate = dom.paymentDate.value || toDateInputValue(new Date());

  const preview = {
    tokenizeRequest: {
      memberId: state.account.memberId,
      paymentMethod: dom.paymentMethod.value,
      accountReference: dom.paymentMethod.value === "ACH_BANK" ? `routing_${dom.routingNumber.value || "pending"}` : "card_on_file"
    },
    authorizeRequest: {
      memberId: state.account.memberId,
      amount: roundMoney(amount),
      scheduledFor: new Date(`${paymentDate}T12:00:00`).toISOString(),
      scheduleType: paymentDate > toDateInputValue(new Date()) ? "POST_DATED" : "NOW",
      recurring: dom.enableRecurring.checked,
      recurringFrequency: dom.enableRecurring.checked ? dom.recurringFrequency.value : null,
      offerId: state.selectedOfferId || null
    },
    allocateRequest: {
      allocationStrategy: "FEES_THEN_INTEREST_THEN_PRINCIPAL",
      settlementType: state.selectedOfferId ? "NEGOTIATED" : "STANDARD",
      projectedAllocation: previewAllocation(Math.max(0, amount))
    }
  };

  dom.processorPreview.textContent = JSON.stringify(preview, null, 2);
}

function renderDisclosures() {
  const inQuietHours = isInQuietHours();

  // Compliance controls are mirrored here for internal audit simulation.
  const disclosures = [
    {
      label: "Required disclosure acknowledgement before payment submission",
      status: "ENFORCED"
    },
    {
      label: `Contact attempts today: ${state.account.contactAttemptsToday}/${state.account.contactLimitDaily}`,
      status: state.account.contactAttemptsToday >= state.account.contactLimitDaily ? "LIMIT REACHED" : "IN RANGE"
    },
    {
      label: `Quiet hours policy (${state.account.quietHoursStart}:00-${state.account.quietHoursEnd}:00 ${state.account.timezone})`,
      status: inQuietHours ? "ACTIVE - OUTREACH BLOCKED" : "OUTREACH ALLOWED"
    },
    {
      label: `SMS consent: ${state.account.smsConsent ? "Enabled" : "Disabled"}`,
      status: state.account.smsConsent ? "OPTED IN" : "OPTED OUT"
    },
    {
      label: "MFA enforced for account access",
      status: state.auth.isAuthenticated ? "VERIFIED" : "PENDING"
    }
  ];

  dom.disclosureList.innerHTML = disclosures
    .map((item) => `<li class=\"compliance-item\"><strong>${item.status}</strong><br>${item.label}</li>`)
    .join("");
}

function renderOfferHistory() {
  const evaluated = getEvaluatedOffers();

  dom.offerHistoryTableBody.innerHTML = evaluated
    .slice(0, 20)
    .map((offer) => {
      const expiry = offer.expiresAt ? formatDate(offer.expiresAt) : "-";
      return `
        <tr>
          <td>${offer.title}</td>
          <td>${offer.type}</td>
          <td>${offer.disabled ? `Disabled (${offer.reason})` : offer.status || "ACTIVE"}</td>
          <td>${offer.approvedBy || "-"}</td>
          <td>${expiry}</td>
        </tr>
      `;
    })
    .join("");
}

function renderRuleTemplates() {
  dom.ruleTemplateBlock.textContent = `Rule Templates\n\n1) Dispute Freeze\nIf disputeFlag=true, disable settlement/installment offers.\n\n2) Failed Payment Throttle\nIf failedPayments >= 2, reduce settlement eligibility.\n\n3) Bankruptcy Hold\nIf bankruptcyFlag=true, block outbound collection actions and mark account for legal review.\n\n4) Allocation Sequence\nApply payment to fees, then interest, then principal.`;
}

function renderActivityLogTable() {
  dom.activityLogTableBody.innerHTML = state.activityFeed
    .slice(0, 25)
    .map((entry) => `
      <tr>
        <td>${formatDateTime(entry.at)}</td>
        <td>${entry.message}</td>
      </tr>
    `)
    .join("");
}

function renderAuditTable() {
  dom.auditTableBody.innerHTML = state.auditTrail
    .slice(0, 40)
    .map((entry) => {
      return `
        <tr>
          <td>${formatDateTime(entry.at)}</td>
          <td>${entry.actor}</td>
          <td>${entry.event}</td>
          <td>${entry.details}</td>
        </tr>
      `;
    })
    .join("");
}

function renderApiLogTable() {
  if (state.apiLog.length === 0) {
    dom.apiLogTableBody.innerHTML = "<tr><td colspan=\"4\">No API calls recorded yet.</td></tr>";
    return;
  }

  dom.apiLogTableBody.innerHTML = state.apiLog
    .slice(0, 30)
    .map((entry) => {
      return `
        <tr>
          <td>${formatDateTime(entry.at)}</td>
          <td>${entry.endpoint}</td>
          <td>${entry.status}</td>
          <td>${entry.summary}</td>
        </tr>
      `;
    })
    .join("");
}

function renderOutcomeTable() {
  if (state.orchestrationFeed.length === 0) {
    dom.outcomeTableBody.innerHTML = "<tr><td colspan=\"4\">No disposition events sent yet.</td></tr>";
    return;
  }

  dom.outcomeTableBody.innerHTML = state.orchestrationFeed
    .slice(0, 25)
    .map((event) => {
      return `
        <tr>
          <td>${formatDateTime(event.at)}</td>
          <td>${event.outcome}</td>
          <td>${event.channel}</td>
          <td>${event.reference}</td>
        </tr>
      `;
    })
    .join("");
}

function getEvaluatedOffers() {
  return state.offers.map(evaluateOffer);
}

function evaluateOffer(offer) {
  let disabled = false;
  let reason = "Eligible";

  if (offer.status && offer.status !== "ACTIVE") {
    disabled = true;
    reason = `Inactive (${offer.status})`;
  }

  if (offer.expiresAt && new Date(offer.expiresAt) < new Date()) {
    disabled = true;
    reason = "Expired";
  }

  if (!disabled && offer.eligibilityCohorts && !offer.eligibilityCohorts.includes(state.account.cohort)) {
    disabled = true;
    reason = "Not available for current member segment";
  }

  if (!disabled && state.account.disputeFlag && ["SETTLEMENT", "INSTALLMENT"].includes(offer.type)) {
    disabled = true;
    reason = "Paused during dispute review";
  }

  if (!disabled && state.account.bankruptcyFlag) {
    disabled = true;
    reason = "Paused during bankruptcy review";
  }

  if (!disabled && offer.minBalance && state.account.outstandingBalance < offer.minBalance) {
    disabled = true;
    reason = "No longer valid for current balance";
  }

  if (!disabled && state.account.failedPayments >= 2 && offer.type === "SETTLEMENT") {
    disabled = true;
    reason = "Temporarily disabled after failed payments";
  }

  return { ...offer, disabled, reason };
}

function getNextBestOffer() {
  const eligible = getEvaluatedOffers().filter((offer) => !offer.disabled);
  if (eligible.length === 0) {
    return null;
  }

  if (state.account.disputeFlag || state.account.bankruptcyFlag) {
    const payInFull = eligible.find((offer) => offer.id === "pay-in-full") || eligible[0];
    return { ...payInFull, recommendationReason: "Account flagged; options are limited pending review." };
  }

  if (state.account.failedPayments > 0) {
    const installment = eligible.find((offer) => offer.type === "INSTALLMENT") || eligible[0];
    return { ...installment, recommendationReason: "Installment options reduce risk after failed payment activity." };
  }

  if (state.account.outstandingBalance <= 3000) {
    const settlement = eligible.find((offer) => offer.type === "SETTLEMENT") || eligible[0];
    return { ...settlement, recommendationReason: "Balance tier qualifies for stronger settlement conversion strategy." };
  }

  const settlement = eligible.find((offer) => offer.type === "SETTLEMENT") || eligible[0];
  return { ...settlement, recommendationReason: "Highest recovery propensity based on digital engagement cohort." };
}

function refreshOfferStrategy(trigger) {
  if (trigger === "FAILED_PAYMENT") {
    state.offers.forEach((offer) => {
      if (offer.type === "SETTLEMENT" && !offer.id.startsWith("pay-in-full")) {
        offer.minBalance = Math.max(offer.minBalance || 0, state.account.outstandingBalance * 0.5);
      }
    });
    addAudit("STRATEGY_ENGINE", "Offer strategy updated", "Failed payment event tightened settlement thresholds.");
  }

  if (trigger === "PARTIAL_PAYMENT") {
    const hasStepDown = state.offers.some((offer) => offer.id === "stepdown-plan");
    if (!hasStepDown) {
      state.offers.unshift({
        id: "stepdown-plan",
        type: "INSTALLMENT",
        title: "Step-Down Recovery Plan",
        downPayment: 100,
        months: 9,
        installment: roundMoney(Math.max(0, state.account.outstandingBalance - 100) / 9),
        status: "ACTIVE",
        eligibilityCohorts: [state.account.cohort],
        approvedBy: "Recovery Strategy Engine"
      });
      addAudit("STRATEGY_ENGINE", "Next-best offer sequenced", "Step-down plan unlocked after partial payment.");
    }
  }

  if (trigger === "NEW_PLAN_OPTION") {
    state.offers = state.offers.map((offer) => {
      if (offer.id === "plan-12") {
        return { ...offer, status: "INACTIVE" };
      }
      return offer;
    });
  }
}

function processSmartLink() {
  const params = new URLSearchParams(window.location.search);
  const token = params.get("token");
  const offerAmount = Number(params.get("offerAmount"));
  const channel = params.get("channel") || "SMS";
  const expiresAt = params.get("expires") || new Date(Date.now() + 5 * 24 * 60 * 60 * 1000).toISOString();

  if (!token) {
    return;
  }

  const validToken = /^SL-[A-Za-z0-9_-]{4,40}$/.test(token);
  const validAmount = Number.isFinite(offerAmount) && offerAmount > 0;
  const notExpired = new Date(expiresAt) > new Date();

  if (!validToken || !validAmount || !notExpired) {
    addAudit("SMART_LINK", "Smart link rejected", "Token, amount, or expiry failed validation.");
    toast("Smart link detected but could not be applied.");
    return;
  }

  const smartOffer = {
    id: `smart_${token}`,
    type: "SETTLEMENT",
    title: `Negotiated ${channel} Settlement Offer`,
    amount: roundMoney(offerAmount),
    expiresAt,
    status: "ACTIVE",
    eligibilityCohorts: [state.account.cohort],
    approvedBy: "Voice/SMS Negotiation"
  };

  state.offers = [smartOffer, ...state.offers.filter((offer) => offer.id !== smartOffer.id)];
  state.selectedOfferId = smartOffer.id;
  state.smartLink = {
    token,
    channel,
    offerAmount: smartOffer.amount,
    expiresAt
  };

  dom.paymentAmount.value = smartOffer.amount.toFixed(2);
  addAudit("SMART_LINK", "Smart link applied", `${token} injected ${formatCurrency(smartOffer.amount)} offer.`);
  recordActivity(`SMS notification sent with negotiated offer link (${channel}).`);
}

async function sendOutcome(outcome, reference, channel) {
  const payload = {
    memberId: state.account.memberId,
    outcome,
    channel,
    reference,
    outstandingBalance: roundMoney(state.account.outstandingBalance),
    at: new Date().toISOString()
  };

  await wait(140);

  state.orchestrationFeed.unshift(payload);
  logApi("/orchestration/disposition-update", payload, { accepted: true, dispositionId: `disp_${Date.now()}` }, "SUCCESS");
}

function logContactAttempt() {
  const hour = getLocalHour(state.account.timezone);
  const inQuietHours = hour >= state.account.quietHoursStart || hour < state.account.quietHoursEnd;

  if (inQuietHours) {
    setStatus(dom.complianceStatus, "Blocked: contact attempt in quiet hours (Reg F control).", true);
    addAudit("COMPLIANCE", "Contact blocked", "Quiet hours check prevented outreach attempt.");
    return;
  }

  if (state.account.contactAttemptsToday >= state.account.contactLimitDaily) {
    setStatus(dom.complianceStatus, "Blocked: daily contact limit reached.", true);
    addAudit("COMPLIANCE", "Contact blocked", "Daily contact cap reached.");
    return;
  }

  state.account.contactAttemptsToday += 1;
  setStatus(dom.complianceStatus, "Outbound attempt logged under contact policy.", false, true);
  addAudit("COLLECTIONS", "Outbound attempt logged", `Attempts today: ${state.account.contactAttemptsToday}`);
  renderAll();
}

function toggleSmsConsent() {
  state.account.smsConsent = !state.account.smsConsent;
  const status = state.account.smsConsent ? "enabled" : "disabled";
  addAudit("MEMBER", "SMS consent updated", `SMS consent ${status}.`);
  setStatus(dom.complianceStatus, `SMS consent ${status}.`, false, true);
  buildReminderSchedule();
  renderAll();
}

function buildReminderSchedule() {
  const reminders = [];
  const now = new Date();

  state.recurringPlans.forEach((plan) => {
    if (plan.status !== "ACTIVE") {
      return;
    }

    const draftDate = new Date(plan.nextDraftAt);
    reminders.push({
      when: draftDate.toISOString(),
      type: "Upcoming recurring draft",
      channel: state.account.smsConsent ? "SMS" : "Email",
      status: "PENDING"
    });

    const preReminder = new Date(draftDate.getTime() - 24 * 60 * 60 * 1000);
    reminders.push({
      when: preReminder.toISOString(),
      type: "Pre-draft reminder",
      channel: state.account.smsConsent ? "SMS" : "Email",
      status: "PENDING"
    });
  });

  if (state.account.failedPayments > 0) {
    reminders.push({
      when: new Date(now.getTime() + 6 * 60 * 60 * 1000).toISOString(),
      type: "Failed payment follow-up",
      channel: state.account.emailConsent ? "Email" : "Manual",
      status: "PENDING"
    });
  }

  state.reminders = reminders.sort((a, b) => new Date(a.when) - new Date(b.when)).slice(0, 20);
}

function startRealtimeEngine() {
  setInterval(async () => {
    state.realtimeTick += 1;
    if (state.account.snapshotFrozen) {
      return;
    }

    if (state.realtimeTick % 2 === 0) {
      await refreshSummary();
    }

    rotateRecurringDrafts();
    buildReminderSchedule();
    renderAll();
  }, 10000);
}

function rotateRecurringDrafts() {
  state.recurringPlans.forEach((plan) => {
    if (plan.status !== "ACTIVE") {
      return;
    }

    const next = new Date(plan.nextDraftAt);
    if (next < new Date()) {
      plan.nextDraftAt = advanceDate(next.toISOString(), plan.frequency).toISOString();
    }
  });
}

function createRecurringPlan(amount, method, frequency, firstDraftIso) {
  const plan = {
    id: `rc_${Math.random().toString(36).slice(2, 8)}`,
    amount: roundMoney(amount),
    method,
    frequency,
    nextDraftAt: firstDraftIso,
    status: "ACTIVE"
  };

  state.recurringPlans.push(plan);
  addAudit("MEMBER", "Recurring plan created", `${plan.id} ${frequency} for ${formatCurrency(plan.amount)}.`);
  recordActivity(`Recurring payment schedule ${plan.id} created (${frequency}).`);
}

function applyAllocationToBalance(allocations) {
  state.account.feeBalance = roundMoney(Math.max(0, state.account.feeBalance - allocations.fees));
  state.account.interestBalance = roundMoney(Math.max(0, state.account.interestBalance - allocations.interest));
  state.account.principalBalance = roundMoney(Math.max(0, state.account.principalBalance - allocations.principal));
  state.account.outstandingBalance = roundMoney(state.account.feeBalance + state.account.interestBalance + state.account.principalBalance);
}

function previewAllocation(amount) {
  let remaining = roundMoney(amount);
  const fees = roundMoney(Math.min(remaining, state.account.feeBalance));
  remaining = roundMoney(remaining - fees);

  const interest = roundMoney(Math.min(remaining, state.account.interestBalance));
  remaining = roundMoney(remaining - interest);

  const principal = roundMoney(Math.min(remaining, state.account.principalBalance));

  return { fees, interest, principal };
}

function advanceDate(iso, frequency) {
  const date = new Date(iso);
  if (frequency === "WEEKLY") {
    date.setDate(date.getDate() + 7);
  }
  if (frequency === "BIWEEKLY") {
    date.setDate(date.getDate() + 14);
  }
  if (frequency === "MONTHLY") {
    date.setMonth(date.getMonth() + 1);
  }
  return date;
}

function downloadStatementCsv() {
  const header = ["Date", "Type", "Description", "Amount", "Running Balance"];
  const rows = [...state.statementItems]
    .sort((a, b) => new Date(a.date) - new Date(b.date))
    .map((item) => [item.date, item.type, item.description, roundMoney(item.amount), roundMoney(item.runningBalance)]);

  const csv = [header, ...rows]
    .map((row) => row.map((cell) => `"${String(cell).replace(/"/g, '""')}"`).join(","))
    .join("\n");

  const blob = new Blob([csv], { type: "text/csv;charset=utf-8;" });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = `statement_${state.account.memberId}_${toDateInputValue(new Date())}.csv`;
  document.body.appendChild(link);
  link.click();
  link.remove();
  URL.revokeObjectURL(url);

  addAudit("MEMBER", "Statement download", "CSV statement downloaded from dashboard.");
  toast("Statement download started.");
}

function handleDownloadFullPaymentReceipt() {
  if (!state.ui.lastFullPaymentReceipt) {
    toast("No full-payment receipt is available yet.");
    return;
  }
  downloadFullPaymentReceiptTxt(state.ui.lastFullPaymentReceipt);
}

function handleDownloadPlanReceipt() {
  if (!state.ui.lastPlanReceipt) {
    toast("No payment-plan receipt is available yet.");
    return;
  }
  downloadPlanReceiptTxt(state.ui.lastPlanReceipt);
}

function downloadFullPaymentReceiptTxt(details) {
  const lines = [
    "Payment Receipt",
    `Receipt Time: ${details.receiptTime}`,
    `Member ID: ${details.memberId}`,
    `Status: ${details.status}`,
    `Payment Amount: ${formatCurrency(details.paymentAmount)}`,
    `Payment Method: ${details.paymentMethod}`,
    `Scheduled For: ${details.scheduledFor}`,
    `Authorization ID: ${details.authId}`,
    `Allocation - Fees: ${formatCurrency(details.allocation.fees)}`,
    `Allocation - Interest: ${formatCurrency(details.allocation.interest)}`,
    `Allocation - Principal: ${formatCurrency(details.allocation.principal)}`
  ];

  const blob = new Blob([lines.join("\n")], { type: "text/plain;charset=utf-8;" });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = `payment_receipt_${details.memberId}_${toDateInputValue(new Date())}.txt`;
  document.body.appendChild(link);
  link.click();
  link.remove();
  URL.revokeObjectURL(url);

  addAudit("MEMBER", "Payment receipt downloaded", "Full-payment .txt receipt downloaded.");
  toast("Payment receipt downloaded.");
}

function downloadPlanReceiptTxt(details) {
  const timestamp = new Date().toISOString();
  const lines = [
    "Payment Plan Receipt",
    `Receipt Time: ${details.receiptTime || timestamp}`,
    `Member ID: ${details.memberId}`,
    `Plan Term: ${details.months} months`,
    `Monthly Amount: ${formatCurrency(details.monthly)}`,
    `Total Planned Amount: ${formatCurrency(details.total)}`,
    `Start Date: ${details.startDate}`,
    `Payment Method: ${details.method}`,
    `Payment Account: ${details.account}`,
    "Status: Submitted"
  ];

  const blob = new Blob([lines.join("\n")], { type: "text/plain;charset=utf-8;" });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = `plan_receipt_${details.memberId}_${toDateInputValue(new Date())}.txt`;
  document.body.appendChild(link);
  link.click();
  link.remove();
  URL.revokeObjectURL(url);

  addAudit("MEMBER", "Plan payment receipt downloaded", `Receipt generated for ${details.months}-month plan.`);
}

function isWithin14DayLimit(dateValue) {
  if (!dateValue) {
    return false;
  }
  const selected = new Date(`${dateValue}T12:00:00`);
  if (Number.isNaN(selected.getTime())) {
    return false;
  }

  const today = new Date();
  today.setHours(0, 0, 0, 0);
  const max = addDays(today, 14);
  max.setHours(23, 59, 59, 999);

  return selected >= today && selected <= max;
}

function showErrorModal(message) {
  dom.errorModalMessage.textContent = message;
  dom.errorModal.classList.remove("hidden");
}

function hideErrorModal() {
  dom.errorModal.classList.add("hidden");
}

function addAudit(actor, event, details) {
  state.auditTrail.unshift({
    at: new Date().toISOString(),
    actor,
    event,
    details
  });
}

function logApi(endpoint, request, response, status) {
  const summary = `${status} | reqKeys=${Object.keys(request).length} respKeys=${Object.keys(response).length}`;
  state.apiLog.unshift({
    at: new Date().toISOString(),
    endpoint,
    status,
    summary,
    request,
    response
  });
}

function recordActivity(message) {
  state.activityFeed.unshift({ at: new Date().toISOString(), message });
  state.account.lastActivity = message;
  state.account.lastActivityAt = new Date().toISOString();
}

function isOutreachActivity(message) {
  const text = String(message || "").toLowerCase();
  return (
    text.includes("voice outreach") ||
    text.includes("sms notification") ||
    text.includes("email reminder") ||
    text.includes("email sent") ||
    text.includes("sms sent") ||
    text.includes("outreach") ||
    text.includes("notification sent")
  );
}

function setStatus(target, message, isError, isSuccess) {
  target.textContent = message;
  target.classList.remove("error", "success");
  if (isError) {
    target.classList.add("error");
  }
  if (isSuccess) {
    target.classList.add("success");
  }
}

function toast(message) {
  dom.toast.textContent = message;
  dom.toast.classList.remove("hidden");
  setTimeout(() => dom.toast.classList.add("hidden"), 2800);
}

function onlyDigits(value) {
  return String(value || "").replace(/\D/g, "");
}

function luhn(numberString) {
  let sum = 0;
  let shouldDouble = false;

  for (let i = numberString.length - 1; i >= 0; i -= 1) {
    let digit = Number(numberString[i]);
    if (shouldDouble) {
      digit *= 2;
      if (digit > 9) {
        digit -= 9;
      }
    }
    sum += digit;
    shouldDouble = !shouldDouble;
  }

  return sum % 10 === 0;
}

function isCardExpired(expiry) {
  const match = /^(0[1-9]|1[0-2])\/(\d{2})$/.exec(expiry);
  if (!match) {
    return true;
  }

  const month = Number(match[1]);
  const year = Number(match[2]) + 2000;
  const now = new Date();
  const expiryDate = new Date(year, month, 0, 23, 59, 59, 999);

  return expiryDate < now;
}

function wait(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

function roundMoney(value) {
  return Math.round((Number(value) + Number.EPSILON) * 100) / 100;
}

function formatCurrency(value) {
  return new Intl.NumberFormat("en-US", { style: "currency", currency: "USD" }).format(Number(value || 0));
}

function formatDate(value) {
  return new Date(value).toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" });
}

function formatDateTime(value) {
  return new Date(value).toLocaleString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
    hour: "numeric",
    minute: "2-digit"
  });
}

function toTitleCase(value) {
  return value
    .split(/\s+/)
    .filter(Boolean)
    .map((part) => part[0].toUpperCase() + part.slice(1).toLowerCase())
    .join(" ");
}

function toDateInputValue(date) {
  return new Date(date.getTime() - date.getTimezoneOffset() * 60000).toISOString().slice(0, 10);
}

function addDays(date, days) {
  const copy = new Date(date);
  copy.setDate(copy.getDate() + days);
  return copy;
}

function getLocalHour(timezone) {
  const hour = new Intl.DateTimeFormat("en-US", {
    timeZone: timezone,
    hour: "2-digit",
    hourCycle: "h23"
  }).format(new Date());
  return Number(hour);
}

function isInQuietHours() {
  const hour = getLocalHour(state.account.timezone);
  return hour >= state.account.quietHoursStart || hour < state.account.quietHoursEnd;
}
