import { html } from 'lit'
import { customElement } from 'lit/decorators.js'
import { LightDomElement } from '../lib/light-dom.js'
import { Icons } from '../lib/icons.js'
import { MaterialIcons } from '../lib/material-icons.js'
import '../components/claims-badge.js'
import '../components/claims-button.js'
import '../components/claims-card.js'

@customElement('claims-referral-page')
export class ClaimsReferralPage extends LightDomElement {
  render() {
    return html`
      <div class="claims-page">
        <div class="grid grid-cols-2 gap-2.5">
          <div>
            <claims-card title="Prudential referral status" icon=${MaterialIcons.send}>
              <claims-field-row label="Referral required">
                <claims-badge variant="warning">Yes — over TPA limit</claims-badge>
              </claims-field-row>
              <claims-field-row label="TPA death limit">$100,000</claims-field-row>
              <claims-field-row label="Claim amount">
                <span class="text-[#A32D2D]">$492,750.00</span>
              </claims-field-row>
              <claims-field-row label="Referral status">
                <claims-badge variant="info">Not yet submitted</claims-badge>
              </claims-field-row>
              <claims-field-row label="Contestable referral">
                <claims-badge variant="warning">Required — 23 months</claims-badge>
              </claims-field-row>

              <claims-info-box variant="info" className="mt-2">
                Claims exceeding TPA authority limits must be referred to Prudential for approval before
                payment can be issued.
              </claims-info-box>
            </claims-card>

            <claims-card title="Referral package checklist" icon=${MaterialIcons.fileText}>
              <div class="space-y-2">
                <label class="flex items-center gap-2 text-[12px]">
                  <input type="checkbox" checked class="rounded" />
                  Claim summary completed
                </label>
                <label class="flex items-center gap-2 text-[12px]">
                  <input type="checkbox" checked class="rounded" />
                  All documents uploaded
                </label>
                <label class="flex items-center gap-2 text-[12px]">
                  <input type="checkbox" class="rounded" />
                  Contestable investigation complete
                </label>
                <label class="flex items-center gap-2 text-[12px]">
                  <input type="checkbox" checked class="rounded" />
                  Manner discrepancy resolved
                </label>
                <label class="flex items-center gap-2 text-[12px]">
                  <input type="checkbox" class="rounded" />
                  Funeral assignment validated
                </label>
                <label class="flex items-center gap-2 text-[12px]">
                  <input type="checkbox" checked class="rounded" />
                  Benefit calculation confirmed
                </label>
              </div>

              <div class="mt-3 flex gap-2">
                <claims-button variant="primary" className="text-[11px]"
                  >Submit referral to Prudential</claims-button
                >
              </div>
            </claims-card>
          </div>

          <div>
            <claims-card title="Referral history" icon=${MaterialIcons.clock}>
              <div class="text-[12px] text-muted-foreground text-center py-4">
                No previous referrals for this claim.
              </div>
            </claims-card>

            <claims-card title="Examiner recommendation" icon=${MaterialIcons.gavel}>
              <div class="mb-2">
                <label class="text-[11px] text-muted-foreground">Recommendation</label>
                <select class="w-full mt-1 border border-border rounded-md p-1.5 text-[12px]">
                  <option>Approve — Pay full benefit</option>
                  <option>Approve — Pay with adjustments</option>
                  <option>Deny — Material misrepresentation</option>
                  <option>Deny — Policy exclusion</option>
                  <option>Recommend rescission</option>
                </select>
              </div>

              <div class="mb-2">
                <label class="text-[11px] text-muted-foreground">Recommendation notes</label>
                <textarea
                  class="w-full mt-1 border border-border rounded-md p-2 text-[12px] min-h-[80px] resize-y"
                  placeholder="Provide detailed rationale for recommendation..."
                >
Recommend approval pending contestable investigation completion. Manner discrepancy resolved — certificate shows Accidental, ADB rider conditions met. Awaiting medical records to complete contestable review per BOG 6.1.</textarea>
              </div>
            </claims-card>
          </div>
        </div>

        <div class="text-[11px] font-medium text-muted-foreground mt-4 mb-2 uppercase tracking-wide">
          Medical &amp; contestable review
        </div>
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-2.5">
          <div>
            <claims-card title="Medical records request (D-18)" icon=${MaterialIcons.stethoscope}>
              <claims-field-row label="Contestable period">
                <claims-badge variant="warning">Active — 23 months</claims-badge>
              </claims-field-row>
              <claims-field-row label="Records requested">Austin Regional Clinic</claims-field-row>
              <claims-field-row label="Date range requested">03/15/2022 — 03/15/2024</claims-field-row>
              <claims-field-row label="Request sent">04/19/2026</claims-field-row>
              <claims-field-row label="Status">
                <claims-badge variant="warning">Pending response</claims-badge>
              </claims-field-row>
              <claims-info-box variant="info" className="mt-2">
                Per BOG 6.1: For contestable claims, request medical records for 2 years prior to policy
                issue date to check for material misrepresentation.
              </claims-info-box>
            </claims-card>

            <claims-card title="Medical history summary" icon=${MaterialIcons.fileText}>
              <claims-field-row label="Pre-existing conditions">
                <claims-badge variant="warning">Under review</claims-badge>
              </claims-field-row>
              <claims-field-row label="Application disclosures">Hypertension disclosed</claims-field-row>
              <claims-field-row label="Undisclosed conditions">
                <claims-badge variant="warning">Pending records</claims-badge>
              </claims-field-row>
              <claims-field-row label="Materiality assessment">
                <claims-badge variant="warning">Pending</claims-badge>
              </claims-field-row>
            </claims-card>
          </div>

          <div>
            <claims-card title="Contestable investigation (D-19)" icon=${MaterialIcons.alertTriangle}>
              <claims-field-row label="Investigation status">
                <claims-badge variant="info">In progress</claims-badge>
              </claims-field-row>
              <claims-field-row label="Assigned investigator">Medical Review Team</claims-field-row>
              <claims-field-row label="Target completion">05/04/2026</claims-field-row>

              <div class="mt-3">
                <div class="text-[11px] text-muted-foreground mb-1">Investigation notes</div>
                <textarea
                  class="w-full border border-border rounded-md p-2 text-[12px] min-h-[80px] resize-y"
                  placeholder="Document investigation findings..."
                >
Hypertension disclosed on application. Awaiting medical records to verify no additional undisclosed conditions. Will assess materiality once records received.</textarea>
              </div>

              <div class="mt-2 flex gap-2">
                <claims-button className="text-[11px]">Save notes</claims-button>
                <claims-button variant="primary" className="text-[11px]"
                  >Request additional records</claims-button
                >
              </div>
            </claims-card>

            <claims-card title="MRX results" icon=${MaterialIcons.stethoscope}>
              <claims-field-row label="MRX check run">04/20/2026</claims-field-row>
              <claims-field-row label="Prescription history">No red flags</claims-field-row>
              <claims-field-row label="Hospital admissions">None found in period</claims-field-row>
              <claims-field-row label="Specialist visits">
                <claims-badge variant="warning">1 cardiology visit — reviewing</claims-badge>
              </claims-field-row>
            </claims-card>
          </div>
        </div>
      </div>
    `
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'claims-referral-page': ClaimsReferralPage
  }
}
