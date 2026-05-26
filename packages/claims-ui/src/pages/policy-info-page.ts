import { html } from 'lit'
import { customElement, property } from 'lit/decorators.js'
import { LightDomElement } from '../lib/light-dom.js'
import { claimProductFromAttr, type ClaimProduct } from '../lib/claim-product.js'
import { MaterialIcons } from '../lib/material-icons.js'
import '../components/claims-badge.js'
import '../components/claims-card.js'

@customElement('claims-policy-info-page')
export class ClaimsPolicyInfoPage extends LightDomElement {
  @property({ type: String, attribute: 'claim-product' }) claimProduct: ClaimProduct = 'death'
  @property({ type: String, attribute: 'claim-group' }) claimGroup = 'workbench'

  render() {
    const product = claimProductFromAttr(this.claimProduct)

    return html`
      <div class="claims-page">
        <div class="grid grid-cols-2 gap-2.5">
          <div>
            <claims-card title="Policy details" icon=${MaterialIcons.dollarSign}>
              <claims-field-row label="Policy number">TL12345</claims-field-row>
              <claims-field-row label="Product">20-year term life</claims-field-row>
              <claims-field-row label="Face value"
                ><span class="text-[#1D9E75]">$500,000.00</span></claims-field-row
              >
              <claims-field-row label="Issue date">03/15/2024</claims-field-row>
              <claims-field-row label="Issue state">TX</claims-field-row>
              <claims-field-row label="Insured residence state">TX</claims-field-row>
              <claims-field-row label="Policy status"
                ><claims-badge variant="success">In force</claims-badge></claims-field-row
              >
              <claims-field-row label="Grace period default"
                ><claims-badge variant="success">No</claims-badge></claims-field-row
              >
              <claims-field-row label="Lapsed / reinstated"
                ><claims-badge variant="success">No</claims-badge></claims-field-row
              >
              <claims-field-row label="Annual premium">$1,240.00</claims-field-row>
              <claims-field-row label="Last premium paid">02/01/2026</claims-field-row>
            </claims-card>

            <claims-card title="Riders & benefits" icon=${MaterialIcons.shield}>
              ${product === 'ti'
                ? html`
                    <claims-field-row label="Terminal illness rider"
                      ><claims-badge variant="success">Present</claims-badge></claims-field-row
                    >
                    <claims-field-row label="Quoted accelerated benefit">$42,000.00</claims-field-row>
                    <claims-field-row label="Prior TI claim paid (T-16)"
                      ><claims-badge variant="success">None</claims-badge></claims-field-row
                    >
                    <claims-field-row label="Policy termination on pay"
                      ><claims-badge variant="warning">Yes</claims-badge></claims-field-row
                    >
                  `
                : html`
                    <claims-field-row label="ADB rider"
                      ><claims-badge variant="info">Present — under review</claims-badge></claims-field-row
                    >
                    <claims-field-row label="Terminal illness rider"
                      ><claims-badge variant="neutral">Not present</claims-badge></claims-field-row
                    >
                    <claims-field-row label="Prior TI claim paid"
                      ><claims-badge variant="success">None</claims-badge></claims-field-row
                    >
                  `}
            </claims-card>

            ${this.claimGroup === 'intake'
              ? html`
                  <claims-card title="Rider verification (intake)" icon=${MaterialIcons.shield} .ai=${true}>
                    <div class="space-y-2 text-[12px]">
                      <claims-field-row label="Active rider status"><claims-badge variant="success">Confirmed In-Force</claims-badge></claims-field-row>
                      <claims-field-row label="Rider premium verification"><claims-badge variant="success">Paid-Up</claims-badge></claims-field-row>
                      <claims-field-row label="Contestability clause"><claims-badge variant="warning">Within 2-Yr Window</claims-badge></claims-field-row>
                      <claims-field-row label="Eligibility Review"><claims-badge variant="success">Eligible</claims-badge></claims-field-row>
                    </div>
                  </claims-card>
                `
              : this.claimGroup === 'workbench'
                ? html`
                    <claims-card title="Financial reserves" icon=${MaterialIcons.dollarSign}>
                      <div class="space-y-3">
                        <p class="text-xs text-muted-foreground">Adjust examiner reserve and financial limits for this policy:</p>
                        <claims-field-row label="Current reserve amount"><span class="font-bold text-slate-800">$500,000.00</span></claims-field-row>
                        <claims-field-row label="Adjustment limit"><span class="text-emerald-600 font-medium">Within Authority</span></claims-field-row>
                        <div class="flex gap-2 pt-1">
                          <claims-button variant="primary" size="sm">Modify Reserves</claims-button>
                        </div>
                      </div>
                    </claims-card>
                  `
                : html`
                    <claims-card title="Referral policy audit" icon=${MaterialIcons.shieldCheck}>
                      <div class="space-y-2 text-[12px]">
                        <claims-field-row label="Policy audit status"><claims-badge variant="success">100% Passed</claims-badge></claims-field-row>
                        <claims-field-row label="Pru-routing flag"><claims-badge variant="success">Ready</claims-badge></claims-field-row>
                      </div>
                    </claims-card>
                  `}
          </div>

          <div>
            ${product === 'ti'
              ? html`
                  <claims-card title="TI eligibility (T-04)" icon=${MaterialIcons.shield}>
                    <claims-field-row label="TI rider verified"
                      ><claims-badge variant="success">Yes</claims-badge></claims-field-row
                    >
                    <claims-field-row label="Grace period default"
                      ><claims-badge variant="success">No</claims-badge></claims-field-row
                    >
                    <claims-field-row label="Irrevocable bene Section 4 (T-14)"
                      ><claims-badge variant="success">N/A</claims-badge></claims-field-row
                    >
                    <claims-field-row label="Reinstated within 2 years (T-15)"
                      ><claims-badge variant="success">No</claims-badge></claims-field-row
                    >
                  </claims-card>

                  <claims-card title="Quote on file (C4)" icon=${MaterialIcons.dollarSign}>
                    <claims-field-row label="Quote reference">TIQ-20260518-00042</claims-field-row>
                    <claims-field-row label="Days remaining">29</claims-field-row>
                    <claims-field-row label="Recalculation (T-22)"
                      ><claims-badge variant="success">Not required</claims-badge></claims-field-row
                    >
                  </claims-card>

                  <claims-card title="Beneficiary designations" icon=${MaterialIcons.users}>
                    <claims-field-row label="Primary beneficiary">Jane Smith</claims-field-row>
                    <claims-field-row label="Irrevocable beneficiary"
                      ><claims-badge variant="neutral">No</claims-badge></claims-field-row
                    >
                  </claims-card>
                `
              : html`
            <claims-card title="Misstatement of age (D-06)" icon=${MaterialIcons.clock}>
              <claims-field-row label="DOB on policy">09/04/1978</claims-field-row>
              <claims-field-row label="DOB on death certificate">09/04/1978</claims-field-row>
              <claims-field-row label="Discrepancy"
                ><claims-badge variant="success">None — DOBs match</claims-badge></claims-field-row
              >
              <claims-info-box variant="info" className="mt-2">
                <div class="font-medium text-[#0C447C] mb-1">Waiver thresholds (if insured is older)</div>
                <div class="text-[#185FA5] leading-relaxed">
                  1 yr diff → waive up to $16,000 benefit&nbsp;&nbsp;2 yr → $8,000&nbsp;&nbsp;3 yr →
                  $6,000&nbsp;&nbsp;4 yr → $4,000&nbsp;&nbsp;5 yr → $3,000
                </div>
                <div class="text-[#185FA5] mt-1">
                  Beyond threshold: refer to Actuary for recalculation. Send Increased/Decreased benefit
                  letter.
                </div>
              </claims-info-box>
              <claims-field-row label="Actuary referral needed"
                ><claims-badge variant="neutral">No</claims-badge></claims-field-row
              >
            </claims-card>

            <claims-card title="Beneficiary & special designations" icon=${MaterialIcons.users}>
              <claims-field-row label="Primary beneficiary">Jane Smith — 100%</claims-field-row>
              <claims-field-row label="Contingent beneficiary">Michael Smith (son)</claims-field-row>
              <claims-field-row label="Irrevocable beneficiary"
                ><claims-badge variant="neutral">No</claims-badge></claims-field-row
              >
              <claims-field-row label="Ex-spouse beneficiary"
                ><claims-badge variant="neutral">No</claims-badge></claims-field-row
              >
              <claims-field-row label="Divorce revocation check (D-09)"
                ><claims-badge variant="neutral">N/A</claims-badge></claims-field-row
              >
              <claims-field-row label="Minor beneficiary (D-10)"
                ><claims-badge variant="success">No — age 42</claims-badge></claims-field-row
              >
              <claims-field-row label="FL/OK non-divorce statement"
                ><claims-badge variant="neutral">N/A — TX policy</claims-badge></claims-field-row
              >
              <claims-field-row label="Incompetent/incapacitated bene"
                ><claims-badge variant="neutral">No</claims-badge></claims-field-row
              >
            </claims-card>

            <claims-card title="Funeral home assignment (D-12)" icon=${MaterialIcons.building}>
              <claims-field-row label="Assignee">Oakwood Funeral Services</claims-field-row>
              <claims-field-row label="Assignment amount">$8,500.00</claims-field-row>
              <claims-field-row label="W-9 / TIN verified"
                ><claims-badge variant="warning">Pending</claims-badge></claims-field-row
              >
              <claims-field-row label="Signatures confirmed"
                ><claims-badge variant="warning">Pending</claims-badge></claims-field-row
              >
              <claims-field-row label="Payment split">FH $8,500 · Bene $491,500</claims-field-row>
            </claims-card>

            <claims-card title="State requirements check (D-23)" icon=${MaterialIcons.mapPin}>
              <claims-field-row label="Issue state">TX</claims-field-row>
              <claims-field-row label="IL 45-day letter"
                ><claims-badge variant="neutral">N/A — not IL</claims-badge></claims-field-row
              >
              <claims-field-row label="TX standard rules apply"
                ><claims-badge variant="success">Confirmed</claims-badge></claims-field-row
              >
            </claims-card>
                `}
          </div>
        </div>
      </div>
    `
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'claims-policy-info-page': ClaimsPolicyInfoPage
  }
}
