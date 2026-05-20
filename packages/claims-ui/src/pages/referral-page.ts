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
      </div>
    `
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'claims-referral-page': ClaimsReferralPage
  }
}
