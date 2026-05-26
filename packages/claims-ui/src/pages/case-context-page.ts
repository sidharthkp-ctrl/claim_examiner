import { html } from 'lit'
import { customElement, property } from 'lit/decorators.js'
import { LightDomElement } from '../lib/light-dom.js'
import { claimProductFromAttr, type ClaimProduct } from '../lib/claim-product.js'
import { activitiesForProduct } from '../lib/examiner-activities.js'
import { MaterialIcons } from '../lib/material-icons.js'
import type { ClaimsBeneficiary, ClaimsSelectorItem } from '../lib/case-data.js'
import '../components/claims-badge.js'
import '../components/claims-button.js'
import '../components/claims-card.js'
import '../components/claims-scope-banner.js'
import '../components/claims-beneficiaries-section.js'

@customElement('claims-case-context-page')
export class ClaimsCaseContextPage extends LightDomElement {
  @property({ type: String }) caseId = ''
  @property({ type: String }) insuredName = ''
  @property({ type: String }) eventDate = ''
  @property({ type: String }) eventDateLabel = 'Date of death'
  @property({ type: Array }) claimsInCase: ClaimsSelectorItem[] = []
  @property({ type: Array }) beneficiaries: ClaimsBeneficiary[] = []
  @property({ type: String, attribute: 'claim-product' }) claimProduct: ClaimProduct = 'death'
  @property({ type: String, attribute: 'claim-group' }) claimGroup = 'workbench'

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
    const product = claimProductFromAttr(this.claimProduct)
    const activities = activitiesForProduct(product)

    return html`
      <div class="flex flex-col flex-1 min-h-0 overflow-hidden">
        <div class="claims-page">
          <claims-scope-banner
            scope="case"
            title="Case details"
            description="Shared for all claims in this case. Select a claim above to work claim-specific pages."
            .entityId=${this.caseId}
          ></claims-scope-banner>

          ${this.claimGroup === 'intake'
            ? html`
                <div class="bg-teal-50 border border-teal-200 text-teal-900 rounded-xl p-4 mb-4 flex items-center gap-3">
                  <div class="w-10 h-10 rounded-lg bg-teal-600 text-white flex items-center justify-center font-bold text-lg shrink-0">!</div>
                  <div>
                    <h4 class="font-bold text-sm">Intake operations active</h4>
                    <p class="text-xs text-teal-700">Please verify initial intake documents (completeness check) and validate beneficiary SSN match on Claimant Details page before continuing.</p>
                  </div>
                </div>
              `
            : this.claimGroup === 'referral'
              ? html`
                  <div class="bg-purple-50 border border-purple-200 text-purple-900 rounded-xl p-4 mb-4 flex items-center gap-3">
                    <div class="w-10 h-10 rounded-lg bg-purple-600 text-white flex items-center justify-center font-bold text-lg shrink-0">R</div>
                    <div>
                      <h4 class="font-bold text-sm">Pre-referral audit active</h4>
                      <p class="text-xs text-purple-700">Audit complete case history and assemble the referral package to Pru on the Referral page.</p>
                    </div>
                  </div>
                `
              : null}

          <div class="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-4">
            <claims-stat-card label="Claims in case" value=${String(this.claimsInCase.length)}></claims-stat-card>
            <claims-stat-card label="Beneficiaries" value=${String(this.beneficiaries.length)} color="#185FA5"></claims-stat-card>
            <claims-stat-card label="Case age" value="0 days"></claims-stat-card>
            <claims-stat-card label="Open case flags" value="2" color="#A32D2D"></claims-stat-card>
          </div>

          <claims-card title="Case summary" icon=${MaterialIcons.info}>
            <div class="claims-fields-grid--2">
              <claims-field-row label="Case ID">${this.caseId}</claims-field-row>
              <claims-field-row label="Insured">${this.insuredName}</claims-field-row>
              <claims-field-row label=${this.eventDateLabel}>${this.eventDate}</claims-field-row>
              <claims-field-row label="Assigned examiner">Sarah M.</claims-field-row>
              <claims-field-row label="Case source"
                ><claims-badge variant="info">BAU</claims-badge></claims-field-row
              >
            </div>
          </claims-card>

          <claims-beneficiaries-section
            title="Beneficiaries on case"
            description="All named beneficiaries from submission — each includes tax certification (S13)."
            mode="table"
            .showTax=${false}
            .beneficiaries=${this.beneficiaries}
          ></claims-beneficiaries-section>

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

          ${product === 'ti'
            ? html`
                <claims-card title="Case document confidence (shared)" .ai=${true} icon=${MaterialIcons.bot}>
                  <div class="claims-fields-grid">
                    <claims-field-row label="Physician's Statement"
                      ><claims-badge variant="success">92%</claims-badge></claims-field-row
                    >
                    <claims-field-row label="Authorization to release medical"
                      ><claims-badge variant="success">89%</claims-badge></claims-field-row
                    >
                    <claims-field-row label="Claim form (digital)"
                      ><claims-badge variant="success">96%</claims-badge></claims-field-row
                    >
                  </div>
                </claims-card>

                <claims-card title="Case-level flags (TI)" icon=${MaterialIcons.flag}>
                  <div class="claims-fields-grid--2">
                    <claims-field-row label="Mandatory medical review (T-07)"
                      ><claims-badge variant="warning">Required</claims-badge></claims-field-row
                    >
                    <claims-field-row label="Quote validity"
                      ><claims-badge variant="success">Valid — 29 days</claims-badge></claims-field-row
                    >
                    <claims-field-row label="POA / representative"
                      ><claims-badge variant="success">Policy owner — N/A</claims-badge></claims-field-row
                    >
                    <claims-field-row label="Contestable"
                      ><claims-badge variant="warning">Active</claims-badge></claims-field-row
                    >
                  </div>
                </claims-card>
              `
            : html`
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
                </claims-card>

                <claims-card title="Case-level flags (Death)" icon=${MaterialIcons.flag}>
                  <div class="claims-fields-grid--2">
                    <claims-field-row label="Foreign death"
                      ><claims-badge variant="success">Cleared</claims-badge></claims-field-row
                    >
                    <claims-field-row label="Manner discrepancy"
                      ><claims-badge variant="danger">Refer</claims-badge></claims-field-row
                    >
                    <claims-field-row label="Funeral assignment (S8)"
                      ><claims-badge variant="warning">Pending docs</claims-badge></claims-field-row
                    >
                    <claims-field-row label="Simultaneous death"
                      ><claims-badge variant="neutral">Not triggered</claims-badge></claims-field-row
                    >
                  </div>
                </claims-card>
              `}

          <claims-card title="Examiner activity scope" icon=${MaterialIcons.fileText}>
            <p class="text-[11px] text-muted-foreground mb-2">
              ${product === 'ti'
                ? 'T-01 through T-29 — all TI claims route here with mandatory medical review.'
                : 'D-01 through D-31 — includes death verification and APO when applicable.'}
            </p>
            <div class="max-h-[140px] overflow-y-auto text-[11px] space-y-1">
              ${activities.slice(0, 8).map(
                (a) => html`
                  <div class="flex gap-2">
                    <span class="font-medium text-[#185FA5] shrink-0">${a.id}</span>
                    <span>${a.activity}</span>
                  </div>
                `
              )}
              <span class="text-muted-foreground">… and ${activities.length - 8} more</span>
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
