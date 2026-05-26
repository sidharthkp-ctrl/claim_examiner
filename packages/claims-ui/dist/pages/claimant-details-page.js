var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { html, nothing } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { LightDomElement } from '../lib/light-dom.js';
import { beneficiaryFullName } from '../lib/beneficiary-data.js';
import { claimProductFromAttr } from '../lib/claim-product.js';
import { MaterialIcons } from '../lib/material-icons.js';
import '../components/claims-badge.js';
import '../components/claims-button.js';
import '../components/claims-card.js';
import '../components/claims-scope-banner.js';
import '../components/claims-beneficiaries-section.js';
let ClaimsClaimantDetailsPage = class ClaimsClaimantDetailsPage extends LightDomElement {
    constructor() {
        super(...arguments);
        this.caseId = '';
        this.beneficiaries = [];
        this.claimProduct = 'death';
        this.claimGroup = 'workbench';
    }
    _filingParty() {
        return this.beneficiaries.find((b) => b.isFilingParty);
    }
    render() {
        const product = claimProductFromAttr(this.claimProduct);
        const filingParty = this._filingParty();
        return html `
      <div class="flex flex-col flex-1 min-h-0 overflow-hidden">
        <div class="claims-page">
          <claims-scope-banner
            scope="case"
            title="Claimant details"
            description=${product === 'ti'
            ? 'Policy owner, beneficiaries, and contact from TI submission.'
            : 'Claimant, all beneficiaries (S5–S6), and tax certification per beneficiary (S13).'}
            .entityId=${this.caseId}
          ></claims-scope-banner>

          ${product === 'ti'
            ? html `
                <claims-card title="Policy owner (C2 — About You)" icon=${MaterialIcons.user}>
                  <div class="claims-fields-grid--2">
                    <claims-field-row label="Policy owner">John A. Smith (insured)</claims-field-row>
                    <claims-field-row label="Role">Policy Owner — not POA</claims-field-row>
                    <claims-field-row label="Date of birth">09/04/1978</claims-field-row>
                    <claims-field-row label="State of residence">Texas</claims-field-row>
                    <claims-field-row label="Relationship to insured">Self</claims-field-row>
                    <claims-field-row label="POA verification (T-06)"
                      ><claims-badge variant="success">N/A</claims-badge></claims-field-row
                    >
                  </div>
                </claims-card>

                <claims-card title="Contact information (S5)" icon=${MaterialIcons.messageCircle}>
                  <claims-field-row label="Phone">(512) 555-0142 — Mobile</claims-field-row>
                  <claims-field-row label="Email">john.smith@email.com</claims-field-row>
                  <claims-field-row label="Mailing address"
                    >123 Oak Lane, Austin, TX 78701</claims-field-row
                  >
                  <claims-field-row label="SMS consent"
                    ><claims-badge variant="success">Yes</claims-badge></claims-field-row
                  >
                  <claims-field-row label="E-delivery consent"
                    ><claims-badge variant="success">Yes</claims-badge></claims-field-row
                  >
                </claims-card>

                <claims-beneficiaries-section
                  title="Beneficiaries & tax (T-14)"
                  description="Policy owner and irrevocable beneficiary — Section 4 consent tracked per bene."
                  mode="full"
                  .beneficiaries=${this.beneficiaries}
                ></claims-beneficiaries-section>
              `
            : html `
                <claims-card title="Filing party (S2)" icon=${MaterialIcons.user}>
                  ${filingParty
                ? html `
                        <div class="claims-fields-grid--2">
                          <claims-field-row label="Name">${beneficiaryFullName(filingParty)}</claims-field-row>
                          <claims-field-row label="Role">Yes — beneficiary (filing claim)</claims-field-row>
                          <claims-field-row label="Relationship">${filingParty.relationship}</claims-field-row>
                          <claims-field-row label="Designation"
                            >${filingParty.designation} — ${filingParty.sharePercent}%</claims-field-row
                          >
                          <claims-field-row label="Incorrect claimant (D-04)"
                            ><claims-badge variant="success">No — matches record</claims-badge></claims-field-row
                          >
                        </div>
                      `
                : html `
                        <p class="text-[12px] text-muted-foreground">No filing party identified.</p>
                      `}
                </claims-card>

                <claims-beneficiaries-section
                  title="Beneficiaries (S5–S6) & tax certification (S13)"
                  description="All beneficiaries named on the policy with contact details and per-beneficiary tax certification."
                  mode="full"
                  .beneficiaries=${this.beneficiaries}
                ></claims-beneficiaries-section>
              `}

          ${this.claimGroup === 'intake' && product === 'death'
            ? html `
                <claims-card title="Beneficiary validation (intake)" icon=${MaterialIcons.shieldCheck} .ai=${true}>
                  <p class="text-[11px] text-muted-foreground mb-3">
                    Per-beneficiary validation from intake (D-05, D-10):
                  </p>
                  ${this.beneficiaries.map((b) => html `
                      <div class="flex flex-wrap items-center justify-between gap-2 border-b border-border py-2 last:border-0">
                        <span class="font-medium text-[12px]">${beneficiaryFullName(b)}</span>
                        <div class="flex gap-1.5 flex-wrap">
                          <claims-badge variant=${b.ssnVerified ? 'success' : 'warning'}
                            >SSN ${b.ssnVerified ? 'verified' : 'pending'}</claims-badge
                          >
                          <claims-badge variant=${b.isMinor ? 'warning' : 'success'}
                            >${b.isMinor ? 'Minor — guardian docs' : 'Not minor'}</claims-badge
                          >
                          <claims-badge variant=${b.tax.certified ? 'success' : 'warning'}
                            >Tax ${b.tax.certified ? 'certified' : 'pending'}</claims-badge
                          >
                        </div>
                      </div>
                    `)}
                  <div class="flex gap-2 mt-3.5">
                    <claims-button variant="primary" size="sm">Force approve all</claims-button>
                    <claims-button size="sm">Flag discrepancy</claims-button>
                  </div>
                </claims-card>
              `
            : this.claimGroup === 'workbench'
                ? html `
                  <claims-card title="Claimant communication & outreach" icon=${MaterialIcons.messageCircle}>
                    <p class="text-[11px] text-muted-foreground mb-2">
                      Outreach targets by beneficiary (D-03):
                    </p>
                    ${this.beneficiaries.map((b) => html `
                        <claims-field-row label=${beneficiaryFullName(b)}
                          >${b.phone} · ${b.email}</claims-field-row
                        >
                      `)}
                    <claims-field-row label="Outstanding"
                      ><claims-badge variant="warning">Funeral assignment form</claims-badge></claims-field-row
                    >
                  </claims-card>
                `
                : this.claimGroup === 'referral'
                    ? html `
                    <claims-card title="Pre-referral audit verification" icon=${MaterialIcons.shield} .ai=${true}>
                      <p class="text-[11px] text-muted-foreground mb-2">
                        Beneficiary audit summary for referral bundle:
                      </p>
                      ${this.beneficiaries.map((b) => html `
                          <claims-field-row label=${beneficiaryFullName(b)}
                            ><claims-badge variant="success">Audited</claims-badge></claims-field-row
                          >
                        `)}
                    </claims-card>
                  `
                    : nothing}
        </div>

        <claims-action-bar>
          <claims-button>Save draft</claims-button>
        </claims-action-bar>
      </div>
    `;
    }
};
__decorate([
    property({ type: String })
], ClaimsClaimantDetailsPage.prototype, "caseId", void 0);
__decorate([
    property({ type: Array })
], ClaimsClaimantDetailsPage.prototype, "beneficiaries", void 0);
__decorate([
    property({ type: String, attribute: 'claim-product' })
], ClaimsClaimantDetailsPage.prototype, "claimProduct", void 0);
__decorate([
    property({ type: String, attribute: 'claim-group' })
], ClaimsClaimantDetailsPage.prototype, "claimGroup", void 0);
ClaimsClaimantDetailsPage = __decorate([
    customElement('claims-claimant-details-page')
], ClaimsClaimantDetailsPage);
export { ClaimsClaimantDetailsPage };
