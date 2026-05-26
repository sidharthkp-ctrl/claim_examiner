import { html } from 'lit'
import { customElement, property } from 'lit/decorators.js'
import { LightDomElement } from '../lib/light-dom.js'
import { claimProductFromAttr, type ClaimProduct } from '../lib/claim-product.js'
import { MaterialIcons } from '../lib/material-icons.js'
import '../components/claims-badge.js'
import '../components/claims-button.js'
import '../components/claims-card.js'
import '../components/claims-scope-banner.js'

@customElement('claims-claimant-details-page')
export class ClaimsClaimantDetailsPage extends LightDomElement {
  @property({ type: String }) caseId = ''
  @property({ type: String, attribute: 'claim-product' }) claimProduct: ClaimProduct = 'death'
  @property({ type: String, attribute: 'claim-group' }) claimGroup = 'workbench'

  render() {
    const product = claimProductFromAttr(this.claimProduct)

    return html`
      <div class="flex flex-col flex-1 min-h-0 overflow-hidden">
        <div class="claims-page">
          <claims-scope-banner
            scope="case"
            title="Claimant details"
            description=${product === 'ti'
              ? 'Policy owner and contact from TI submission (About You, Contact Information).'
              : 'Claimant, beneficiary, and contact from death submission (S4–S6).'}
            .entityId=${this.caseId}
          ></claims-scope-banner>

          ${product === 'ti'
            ? html`
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
              `
            : html`
                <claims-card title="Claimant & beneficiary (S4–S6)" icon=${MaterialIcons.user}>
                  <div class="claims-fields-grid--2">
                    <claims-field-row label="Insured">John A. Smith</claims-field-row>
                    <claims-field-row label="Date of death">02/28/2026</claims-field-row>
                    <claims-field-row label="Filing party">Jane A. Smith</claims-field-row>
                    <claims-field-row label="Role (S2)">Yes — beneficiary</claims-field-row>
                    <claims-field-row label="Relationship">Spouse</claims-field-row>
                    <claims-field-row label="Beneficiary on policy">Jane Smith — Primary 100%</claims-field-row>
                    <claims-field-row label="Minor beneficiary (D-10)"
                      ><claims-badge variant="success">No — age 42</claims-badge></claims-field-row
                    >
                    <claims-field-row label="Incorrect claimant (D-04)"
                      ><claims-badge variant="success">No — matches record</claims-badge></claims-field-row
                    >
                  </div>
                </claims-card>

                <claims-card title="Contact information (S5)" icon=${MaterialIcons.messageCircle}>
                  <claims-field-row label="Phone">(512) 555-0198 — Mobile</claims-field-row>
                  <claims-field-row label="Email">jane.smith@email.com</claims-field-row>
                  <claims-field-row label="Address">456 Maple Dr, Austin, TX 78702</claims-field-row>
                  <claims-field-row label="Outstanding outreach (D-03)"
                    ><claims-badge variant="warning">Funeral assignment form</claims-badge></claims-field-row
                  >
                </claims-card>
              `}

          ${this.claimGroup === 'intake'
            ? html`
                <claims-card title="Beneficiary validation (intake)" icon=${MaterialIcons.shieldCheck} .ai=${true}>
                  <div class="space-y-3">
                    <div class="flex items-center justify-between border-b border-border pb-1.5">
                      <span class="text-slate-700 font-medium">SSN Validation (SSDI matches)</span>
                      <claims-badge variant="success">Verified (100% Match)</claims-badge>
                    </div>
                    <div class="flex items-center justify-between border-b border-border pb-1.5">
                      <span class="text-slate-700 font-medium">OFAC Sanctions List Check</span>
                      <claims-badge variant="success">Passed (Not Flagged)</claims-badge>
                    </div>
                    <div class="flex items-center justify-between border-b border-border pb-1.5">
                      <span class="text-slate-700 font-medium">Spousal Marriage License Verification</span>
                      <claims-badge variant="success">Document Verified</claims-badge>
                    </div>
                    <div class="flex items-center justify-between border-b border-border pb-1.5">
                      <span class="text-slate-700 font-medium">Address Match (SSDI vs Claim Form)</span>
                      <claims-badge variant="warning">Partial Match (91%)</claims-badge>
                    </div>
                    <div class="flex gap-2 mt-3.5">
                      <claims-button variant="primary" size="sm">Force Approve Validation</claims-button>
                      <claims-button size="sm">Flag Discrepancy</claims-button>
                    </div>
                  </div>
                </claims-card>
              `
            : this.claimGroup === 'workbench'
              ? html`
                  <claims-card title="Claimant communication & outreach" icon=${MaterialIcons.messageCircle}>
                    <div class="space-y-2 text-[12px]">
                      <p class="text-muted-foreground mb-2">Activities and outreach logs related to securing additional beneficiary declarations:</p>
                      <claims-field-row label="Phone Interview scheduled">05/29/2026 - 10:00 AM</claims-field-row>
                      <claims-field-row label="Sent Funeral Home Assignment form"><claims-badge variant="info">Waiting response</claims-badge></claims-field-row>
                      <claims-field-row label="Claimant status"><claims-badge variant="success">Active outreach</claims-badge></claims-field-row>
                    </div>
                  </claims-card>
                `
              : html`
                  <claims-card title="Pre-referral audit verification" icon=${MaterialIcons.shield} .ai=${true}>
                    <div class="space-y-2 text-[12px]">
                      <p class="text-muted-foreground mb-2">Verification details compiled for the referral bundle:</p>
                      <claims-field-row label="Claimant audit state"><claims-badge variant="success">Audited & Verified</claims-badge></claims-field-row>
                      <claims-field-row label="SSDI discrepancy check"><claims-badge variant="success">Cleared</claims-badge></claims-field-row>
                    </div>
                  </claims-card>
                `}
        </div>

        <claims-action-bar>
          <claims-button>Save draft</claims-button>
        </claims-action-bar>
      </div>
    `
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'claims-claimant-details-page': ClaimsClaimantDetailsPage
  }
}
