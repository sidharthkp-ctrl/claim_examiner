import { html } from 'lit'
import { customElement } from 'lit/decorators.js'
import { LightDomElement } from '../lib/light-dom.js'
import { Icons } from '../lib/icons.js'
import { MaterialIcons } from '../lib/material-icons.js'
import '../components/claims-badge.js'
import '../components/claims-card.js'

@customElement('claims-event-details-page')
export class ClaimsEventDetailsPage extends LightDomElement {
  render() {
    return html`
      <div class="claims-page">
        <div class="grid grid-cols-2 gap-2.5">
          <div>
            <claims-card title="Death event" icon=${MaterialIcons.fileText}>
              <claims-field-row label="Date of death">02/28/2026</claims-field-row>
              <claims-field-row label="Place of death">Austin, TX — Domestic</claims-field-row>
              <claims-field-row label="Foreign death flag"
                ><claims-badge variant="success">No</claims-badge></claims-field-row
              >
              <claims-field-row label="Declared manner (claimant)"
                ><claims-badge variant="warning">Natural</claims-badge></claims-field-row
              >
              <claims-field-row label="Certificate manner"
                ><claims-badge variant="danger">Accidental</claims-badge></claims-field-row
              >
              <claims-field-row label="Cause stated on certificate">Blunt force trauma</claims-field-row>
              <claims-field-row label="Certifying physician">Dr. Robert Lee, MD</claims-field-row>
              <claims-field-row label="Certificate #">TX-2026-03921</claims-field-row>
              <claims-field-row label="AI extraction confidence"
                ><claims-badge variant="success">94%</claims-badge></claims-field-row
              >
            </claims-card>

            <claims-card title="Key dates & contestability" icon=${MaterialIcons.calendar}>
              <claims-field-row label="Policy issue date">03/15/2024</claims-field-row>
              <claims-field-row label="Date of death">02/28/2026</claims-field-row>
              <claims-field-row label="Months since issue">23 months</claims-field-row>
              <claims-field-row label="Within contestable period"
                ><claims-badge variant="warning">Yes — 2-yr window</claims-badge></claims-field-row
              >
              <claims-field-row label="HORD (date claim received)">04/20/2026</claims-field-row>
              <claims-field-row label="Claim submitted on">04/20/2026</claims-field-row>
            </claims-card>
          </div>

          <div>
            <claims-card title="Manner discrepancy (D-08)" icon=${MaterialIcons.alertTriangle}>
              <claims-info-box variant="danger" className="mb-2">
                <div class="font-medium text-[#A32D2D]">Mismatch — examiner action required</div>
                <div class="mt-1 text-[#791F1F]">
                  Claimant declared Natural; death certificate states Accidental. Must be reconciled before
                  decision. ADB rider on policy requires separate accidental death verification.
                </div>
              </claims-info-box>
              <claims-field-row label="ADB rider present"
                ><claims-badge variant="info">Yes — two-check process</claims-badge></claims-field-row
              >
              <claims-field-row label="Resolution status"
                ><claims-badge variant="warning">Pending examiner action</claims-badge></claims-field-row
              >
              <div class="mt-2">
                <label class="text-[11px] text-muted-foreground">Examiner resolution notes</label>
                <textarea
                  class="w-full mt-1 border border-border rounded-md p-2 text-[12px] min-h-[60px] resize-y"
                  placeholder="Document how manner discrepancy was resolved..."
                ></textarea>
              </div>
            </claims-card>

            <claims-card title="Special manner handling" icon=${MaterialIcons.gavel}>
              <claims-field-row label="Homicide review (D-08)"
                ><claims-badge variant="neutral">N/A — not homicide</claims-badge></claims-field-row
              >
              <claims-field-row label="Suicide review (D-08)"
                ><claims-badge variant="neutral">N/A</claims-badge></claims-field-row
              >
              <claims-field-row label="Suicide exclusion period"
                ><claims-badge variant="neutral">Not applicable</claims-badge></claims-field-row
              >
              <claims-field-row label="Undetermined — investigation"
                ><claims-badge variant="neutral">N/A</claims-badge></claims-field-row
              >
              <claims-info-box variant="info" className="mt-2">
                If manner were suicide: verify contestable period (1-yr in some states, 2-yr in others).
                Payment = return of premiums paid to DOD, not face value.
              </claims-info-box>
            </claims-card>

            <claims-card title="Foreign death (D-11)" icon=${MaterialIcons.globe}>
              <claims-field-row label="Death location">Austin, TX — USA</claims-field-row>
              <claims-field-row label="Foreign death triggered"
                ><claims-badge variant="success">No</claims-badge></claims-field-row
              >
              <claims-info-box variant="info" className="mt-1.5">
                If foreign: gather domestic info first, refer to Pru. Vendor estimate ≤$1,000 can proceed
                without Pru approval.
              </claims-info-box>
            </claims-card>
          </div>
        </div>
      </div>
    `
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'claims-event-details-page': ClaimsEventDetailsPage
  }
}
