import { html } from 'lit'
import { customElement, property } from 'lit/decorators.js'
import { LightDomElement } from '../lib/light-dom.js'
import { MaterialIcons } from '../lib/material-icons.js'
import type { ClaimsSelectorItem } from '../lib/case-data.js'
import '../components/claims-badge.js'
import '../components/claims-button.js'
import '../components/claims-card.js'
import '../components/claims-scope-banner.js'

@customElement('claims-case-context-page')
export class ClaimsCaseContextPage extends LightDomElement {
  @property({ type: String }) caseId = ''
  @property({ type: String }) insuredName = ''
  @property({ type: String }) dateOfDeath = ''
  @property({ type: Array }) claimsInCase: ClaimsSelectorItem[] = []

  private _openClaim(claimId: string) {
    this.dispatchEvent(
      new CustomEvent('open-claim', {
        detail: { claimId, page: 'claim-overview' },
        bubbles: true,
        composed: true,
      })
    )
  }

  render() {
    return html`
      <div class="flex flex-col flex-1 min-h-0 overflow-hidden">
        <div class="claims-page">
          <claims-scope-banner
            scope="case"
            title="Case details"
            description="Shared for all claims in this case. Select a claim above to work claim-specific pages."
            .entityId=${this.caseId}
          ></claims-scope-banner>

          <div class="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-4">
            <claims-stat-card label="Claims in case" value=${String(this.claimsInCase.length)}></claims-stat-card>
            <claims-stat-card label="Case age" value="0 days"></claims-stat-card>
            <claims-stat-card label="Open case flags" value="2" color="#A32D2D"></claims-stat-card>
          </div>

          <claims-card title="Case summary" icon=${MaterialIcons.info}>
            <div class="claims-fields-grid--2">
              <claims-field-row label="Case ID">${this.caseId}</claims-field-row>
              <claims-field-row label="Insured">${this.insuredName}</claims-field-row>
              <claims-field-row label="Date of death">${this.dateOfDeath}</claims-field-row>
              <claims-field-row label="Assigned examiner">Sarah M.</claims-field-row>
              <claims-field-row label="Case source"
                ><claims-badge variant="info">BAU</claims-badge></claims-field-row
              >
            </div>
          </claims-card>

          <claims-card title="Claims filed under this case" icon=${MaterialIcons.files}>
            <div class="overflow-x-auto">
              <table class="w-full border-collapse text-left">
                <thead>
                  <tr class="border-b border-border bg-secondary">
                    <th class="text-[10px] font-medium text-muted-foreground p-2">Claim ID</th>
                    <th class="text-[10px] font-medium text-muted-foreground p-2">Type</th>
                    <th class="text-[10px] font-medium text-muted-foreground p-2">Status</th>
                    <th class="text-[10px] font-medium text-muted-foreground p-2">Policies</th>
                    <th class="text-[10px] font-medium text-muted-foreground p-2">Action</th>
                  </tr>
                </thead>
                <tbody>
                  ${this.claimsInCase.map(
                    (claim) => html`
                      <tr class="border-b border-border">
                        <td class="p-2 text-[12px] font-medium">${claim.id}</td>
                        <td class="p-2 text-[12px]">${claim.type}</td>
                        <td class="p-2">
                          <claims-badge variant="warning">${claim.status}</claims-badge>
                        </td>
                        <td class="p-2 text-[12px]">${claim.policies.map((p) => p.id).join(', ')}</td>
                        <td class="p-2">
                          <claims-button size="sm" @click=${() => this._openClaim(claim.id)}
                            >Open claim</claims-button
                          >
                        </td>
                      </tr>
                    `
                  )}
                </tbody>
              </table>
            </div>
          </claims-card>

          <claims-card title="Case document confidence (shared)" .ai=${true} icon=${MaterialIcons.bot}>
            <div class="claims-fields-grid">
              <claims-field-row label="Death certificate"
                ><claims-badge variant="success">94%</claims-badge></claims-field-row
              >
              <claims-field-row label="Authorization to release"
                ><claims-badge variant="success">91%</claims-badge></claims-field-row
              >
              <claims-field-row label="Identity / SSDI"
                ><claims-badge variant="success">Verified</claims-badge></claims-field-row
              >
            </div>
            <claims-info-box variant="info" className="mt-2">
              Death certificate and authorization apply to the whole case. Per-claim forms are on Claim
              Documents.
            </claims-info-box>
          </claims-card>

          <claims-card title="Case-level flags (all claims)" icon=${MaterialIcons.flag}>
            <div class="claims-fields-grid--2">
              <claims-field-row label="Foreign death"
                ><claims-badge variant="success">Cleared</claims-badge></claims-field-row
              >
              <claims-field-row label="Manner discrepancy (event)"
                ><claims-badge variant="danger">Refer — certificate vs declaration</claims-badge></claims-field-row
              >
              <claims-field-row label="Simultaneous death"
                ><claims-badge variant="neutral">Not triggered</claims-badge></claims-field-row
              >
              <claims-field-row label="Disappearance"
                ><claims-badge variant="neutral">N/A</claims-badge></claims-field-row
              >
            </div>
          </claims-card>
        </div>
      </div>
    `
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'claims-case-context-page': ClaimsCaseContextPage
  }
}
