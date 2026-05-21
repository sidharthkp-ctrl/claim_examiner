import { html } from 'lit'
import { customElement } from 'lit/decorators.js'
import { LightDomElement } from '../lib/light-dom.js'
import { Icons } from '../lib/icons.js'
import { MaterialIcons } from '../lib/material-icons.js'
import '../components/claims-badge.js'
import '../components/claims-card.js'

@customElement('claims-policy-info-page')
export class ClaimsPolicyInfoPage extends LightDomElement {
  render() {
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
              <claims-field-row label="ADB rider"
                ><claims-badge variant="info">Present — under review</claims-badge></claims-field-row
              >
              <claims-field-row label="Terminal illness rider"
                ><claims-badge variant="neutral">Not present</claims-badge></claims-field-row
              >
              <claims-field-row label="Waiver of premium"
                ><claims-badge variant="neutral">Not present</claims-badge></claims-field-row
              >
              <claims-field-row label="Prior TI claim paid"
                ><claims-badge variant="success">None</claims-badge></claims-field-row
              >
              <claims-field-row label="Prior death claim"
                ><claims-badge variant="success">None</claims-badge></claims-field-row
              >
            </claims-card>
          </div>

          <div>
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
              <claims-field-row label="CA Fair Claim"
                ><claims-badge variant="neutral">N/A — not CA</claims-badge></claims-field-row
              >
              <claims-field-row label="DOI notice states trigger"
                ><claims-badge variant="success">Not triggered</claims-badge></claims-field-row
              >
              <claims-field-row label="NY 5-day acknowledgment"
                ><claims-badge variant="neutral">N/A — not NY</claims-badge></claims-field-row
              >
              <claims-field-row label="TX standard rules apply"
                ><claims-badge variant="success">Confirmed</claims-badge></claims-field-row
              >
            </claims-card>
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
