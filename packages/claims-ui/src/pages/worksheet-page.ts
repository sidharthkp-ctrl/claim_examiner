import { html } from 'lit'
import { customElement, property, state } from 'lit/decorators.js'
import { LightDomElement } from '../lib/light-dom.js'
import { claimProductFromAttr, type ClaimProduct } from '../lib/claim-product.js'
import { cn } from '../lib/cn.js'
import { MaterialIcons } from '../lib/material-icons.js'
import '../components/claims-badge.js'
import '../components/claims-button.js'
import '../components/claims-card.js'
import '../components/claims-decision-option.js'
import '../components/claims-icon.js'
import {
  decisionOptionsForProduct,
  renderDeathClaimTools,
  renderDeathExaminerReview,
  renderSystemAssessment,
  renderTiClaimTools,
  renderTiExaminerReview,
} from './variants/worksheet-content.js'

type WorksheetTab = 'system' | 'examiner' | 'tools' | 'decision'

@customElement('claims-worksheet-page')
export class ClaimsWorksheetPage extends LightDomElement {
  @property({ type: String, attribute: 'claim-product' }) claimProduct: ClaimProduct = 'death'
  @property({ type: String, attribute: 'claim-group' }) claimGroup = 'workbench'

  @state() private activeTab: WorksheetTab = 'system'
  @state() private selectedDecision = 'approve-pay'

  private _onDecisionSelect(e: CustomEvent<{ id: string }>) {
    this.selectedDecision = e.detail.id
  }

  render() {
    const product = claimProductFromAttr(this.claimProduct)
    const decisionOptions = decisionOptionsForProduct(product)

    const systemAssessment = html`
      ${renderSystemAssessment(product)}
      <div class="grid grid-cols-2 gap-3 mb-2">
        <claims-card
          title=${product === 'ti' ? 'Rule engine — TI claim' : 'Rule engine results — 28 rules evaluated'}
          className="col-span-2"
        >
          <table class="w-full border-collapse">
            <thead>
              <tr class="border-b border-border bg-secondary">
                <th class="text-[10px] font-medium text-muted-foreground p-2 text-left">Rule</th>
                <th class="text-[10px] font-medium text-muted-foreground p-2 text-left">Outcome</th>
                <th class="text-[10px] font-medium text-muted-foreground p-2 text-left">Remarks</th>
              </tr>
            </thead>
            <tbody>
              <tr class="border-b border-border">
                <td class="p-2 text-[12px]">Contestability</td>
                <td class="p-2"><claims-badge variant="warning">Flag</claims-badge></td>
                <td class="p-2 text-[11px] text-muted-foreground">Within 2-yr period</td>
              </tr>
              <tr class="border-b border-border">
                <td class="p-2 text-[12px]">Manner validation</td>
                <td class="p-2"><claims-badge variant="danger">Refer</claims-badge></td>
                <td class="p-2 text-[11px] text-muted-foreground">Declared ≠ certificate</td>
              </tr>
              <tr class="border-b border-border">
                <td class="p-2 text-[12px]">Foreign death</td>
                <td class="p-2"><claims-badge variant="success">Approve</claims-badge></td>
                <td class="p-2 text-[11px] text-muted-foreground">Death in US</td>
              </tr>
              <tr class="border-b border-border">
                <td class="p-2 text-[12px]">Minor beneficiary</td>
                <td class="p-2"><claims-badge variant="success">Approve</claims-badge></td>
                <td class="p-2 text-[11px] text-muted-foreground">Bene age 42</td>
              </tr>
              <tr class="border-b border-border">
                <td class="p-2 text-[12px]">Name discrepancy</td>
                <td class="p-2"><claims-badge variant="success">Resolved</claims-badge></td>
                <td class="p-2 text-[11px] text-muted-foreground">Matched via SSN+DOB</td>
              </tr>
              <tr class="border-b border-border">
                <td class="p-2 text-[12px]">Fast track</td>
                <td class="p-2"><claims-badge variant="neutral">N/A</claims-badge></td>
                <td class="p-2 text-[11px] text-muted-foreground">Disabled at MVP</td>
              </tr>
              <tr>
                <td class="p-2 text-[12px]">Overall assessment</td>
                <td class="p-2"><claims-badge variant="danger">Refer</claims-badge></td>
                <td class="p-2 text-[11px] text-muted-foreground">Manner requires review</td>
              </tr>
            </tbody>
          </table>
        </claims-card>
      </div>
    `

    const examinerReview =
      product === 'ti' ? renderTiExaminerReview() : renderDeathExaminerReview()

    const claimTools = product === 'ti' ? renderTiClaimTools() : renderDeathClaimTools()

    const finalDecision = this.claimGroup === 'intake'
      ? html`
        <div class="grid grid-cols-1 xl:grid-cols-[1fr_minmax(280px,320px)] gap-2.5">
          <div>
            <claims-card title="Group 1: Initial Benefit Intake & Calculation" icon=${MaterialIcons.dollarSign} .ai=${true}>
              <p class="text-xs text-muted-foreground mb-4">Initial benefits and withholding calculations performed during intake validation:</p>
              <claims-field-row label="Gross benefit amount">
                <span class="font-bold text-slate-800">${product === 'ti' ? '$42,000.00' : '$500,000.00'}</span>
              </claims-field-row>
              <claims-field-row label="Calculated tax withholding (10%)">
                <span class="text-amber-600 font-semibold">${product === 'ti' ? '$4,200.00' : '$50,000.00'}</span>
              </claims-field-row>
              <claims-field-row label="Accrued interest credit">
                <span class="text-emerald-600 font-semibold">${product === 'ti' ? '+$100.00' : '+$2,750.00'}</span>
              </claims-field-row>
              <claims-field-row label="Outstanding premiums due">
                <span class="text-rose-600 font-semibold">$0.00</span>
              </claims-field-row>
              <claims-field-row label="Net calculated payout">
                <span class="text-[#1D9E75] font-extrabold text-base">${product === 'ti' ? '$37,900.00' : '$452,750.00'}</span>
              </claims-field-row>
            </claims-card>

            <claims-card title="Group 1: Intake Fast Track Validation" icon=${MaterialIcons.shield}>
              <claims-field-row label="Fast track eligibility check">
                <claims-badge variant="success">Eligible — Under $500K & Clean Certificate</claims-badge>
              </claims-field-row>
              <claims-field-row label="Manner of death declared">
                <span class="font-medium">Natural causes</span>
              </claims-field-row>
              <claims-field-row label="Contestability validation">
                <claims-badge variant="warning">Flag — 2-Yr Contestability Active</claims-badge>
              </claims-field-row>
              <div class="mt-4 flex gap-2">
                <claims-button>Save draft</claims-button>
                <claims-button variant="primary">Approve Intake & Route to Examiner</claims-button>
              </div>
            </claims-card>
          </div>

          <div>
            <div class="bg-secondary border border-border rounded-md p-3">
              <div class="text-[11px] font-medium text-muted-foreground mb-1.5 font-bold">Group 1 Intake Checklist</div>
              <claims-field-row label="Completeness Check">
                <claims-badge variant="success">Done</claims-badge>
              </claims-field-row>
              <claims-field-row label="Beneficiary SSN Match">
                <claims-badge variant="success">Done</claims-badge>
              </claims-field-row>
              <claims-field-row label="Policy status In-force">
                <claims-badge variant="success">Done</claims-badge>
              </claims-field-row>
              <claims-field-row label="Tax check & exceptions">
                <claims-badge variant="success">Verified</claims-badge>
              </claims-field-row>
              <claims-field-row label="Benefit calculation">
                <claims-badge variant="success">Done</claims-badge>
              </claims-field-row>
              <claims-field-row label="Contestability review">
                <claims-badge variant="warning">Flagged</claims-badge>
              </claims-field-row>
            </div>
          </div>
        </div>
      `
      : this.claimGroup === 'referral'
        ? html`
          <div class="grid grid-cols-1 xl:grid-cols-[1fr_minmax(280px,320px)] gap-2.5">
            <div>
              <claims-card title="Group 3: Pre-Referral Audit Overview" icon=${MaterialIcons.shieldCheck} .ai=${true}>
                <p class="text-xs text-muted-foreground mb-4">Quality audit checks before compiling the final referral package:</p>
                <claims-field-row label="Case Audit status">
                  <claims-badge variant="success">Passed Audit (100% Quality Score)</claims-badge>
                </claims-field-row>
                <claims-field-row label="Contestable details on file">
                  <span class="font-medium">2-Yr Window Flag verified. Medical records gathered.</span>
                </claims-field-row>
                <claims-field-row label="Referral package routing">
                  <span class="font-bold text-[#0C447C]">Route to Prudential Claims Advisory Board</span>
                </claims-field-row>
              </claims-card>

              <claims-card title="Group 3: Update Recommendation & Submit" icon=${MaterialIcons.gavel}>
                <div class="space-y-3">
                  <claims-field-row label="Selected recommendation">
                    <span class="font-bold text-rose-700">Rescission Recommendation (Pru Referral)</span>
                  </claims-field-row>
                  <div class="mt-2">
                    <textarea
                      class="w-full border border-border rounded-md p-2 text-[12px] min-h-[80px] resize-y"
                      .value=${'Audited claim profile. Clear evidence of medical misrepresentation inside contestable window. Recommending formal Rescission of policy TL12345. Referral bundle compiled.'}
                    ></textarea>
                  </div>
                  <div class="mt-2 flex gap-2">
                    <claims-button>Save audit draft</claims-button>
                    <claims-button variant="primary">Submit Referral to Pru</claims-button>
                  </div>
                </div>
              </claims-card>
            </div>

            <div>
              <div class="bg-secondary border border-border rounded-md p-3">
                <div class="text-[11px] font-medium text-muted-foreground mb-1.5 font-bold">Group 3 Referral Checklist</div>
                <claims-field-row label="Case context review">
                  <claims-badge variant="success">Done</claims-badge>
                </claims-field-row>
                <claims-field-row label="Referral pack preparation">
                  <claims-badge variant="success">Compiled (6 docs)</claims-badge>
                </claims-field-row>
                <claims-field-row label="Recommendation updated">
                  <claims-badge variant="success">Rescission Rec</claims-badge>
                </claims-field-row>
                <claims-field-row label="Referral outcome status">
                  <claims-badge variant="warning">Ready to Submit</claims-badge>
                </claims-field-row>
              </div>
            </div>
          </div>
        `
        : html`
          <div class="grid grid-cols-1 xl:grid-cols-[1fr_minmax(280px,320px)] gap-2.5">
            <div>
              <claims-card
                title="Examiner recommendation"
                icon=${MaterialIcons.gavel}
                @claims-select=${this._onDecisionSelect}
              >
                ${decisionOptions.map(
                  (option) => html`
                    <claims-decision-option
                      optionId=${option.id}
                      title=${option.title}
                      description=${option.description}
                      .selected=${this.selectedDecision === option.id}
                    ></claims-decision-option>
                  `
                )}
              </claims-card>

              <claims-card title="Decision summary & notes" icon=${MaterialIcons.fileText}>
                <claims-field-row label="Net payable amount">
                  <span class="text-[#1D9E75]"
                    >${product === 'ti' ? '$41,900.00' : '$492,750.00'}</span
                  >
                </claims-field-row>
                ${product === 'ti'
                  ? html`
                      <claims-field-row label="Medical expert approval"
                        ><claims-badge variant="warning">Pending</claims-badge></claims-field-row
                      >
                      <claims-field-row label="Policy on payment"
                        ><claims-badge variant="warning">Terminates</claims-badge></claims-field-row
                      >
                    `
                  : html`
                      <claims-field-row label="Payment to">Jane Smith + Oakwood Funeral</claims-field-row>
                      <claims-field-row label="ADB check (separate)">
                        <claims-badge variant="warning">Pending manner confirm</claims-badge>
                      </claims-field-row>
                    `}
                <div class="mt-2">
                  <textarea
                    class="w-full border border-border rounded-md p-2 text-[12px] min-h-[80px] resize-y"
                    .value=${product === 'ti'
                      ? 'Pending medical expert determination (T-08). Quote valid. Recommend hold decision until T-07 complete.'
                      : 'Manner discrepancy resolved — Accidental confirmed. ADB conditions met. Contestable referral to Pru pending.'}
                  ></textarea>
                </div>
                <div class="mt-2 flex gap-2">
                  <claims-button>Save draft</claims-button>
                  <claims-button variant="primary">Submit decision</claims-button>
                </div>
              </claims-card>
            </div>

            <div>
              <div class="bg-secondary border border-border rounded-md p-3">
                <div class="text-[11px] font-medium text-muted-foreground mb-1.5">Decision checklist</div>
                <claims-field-row label="All review items resolved">
                  <claims-badge variant="warning">3 pending</claims-badge>
                </claims-field-row>
                <claims-field-row label="State requirements verified">
                  <claims-badge variant="success">Done</claims-badge>
                </claims-field-row>
                <claims-field-row label="Benefit calculation confirmed">
                  <claims-badge variant="success">Done</claims-badge>
                </claims-field-row>
                <claims-field-row label="Contestable referral sent">
                  <claims-badge variant="warning">Pending Pru</claims-badge>
                </claims-field-row>
                ${product === 'death'
                  ? html`
                      <claims-field-row label="Funeral assignment validated">
                        <claims-badge variant="warning">Pending</claims-badge>
                      </claims-field-row>
                    `
                  : html`
                      <claims-field-row label="Medical expert findings (T-08)">
                        <claims-badge variant="warning">Pending</claims-badge>
                      </claims-field-row>
                      <claims-field-row label="Acknowledgment SLA (T-24)">
                        <claims-badge variant="success">On track</claims-badge>
                      </claims-field-row>
                    `}

                <div class="text-[11px] font-medium text-muted-foreground mt-2.5 mb-1.5">
                  TPA authority limits
                </div>
                ${product === 'ti'
                  ? html`
                      <div class="flex justify-between py-0.5">
                        <span class="text-[11px] text-muted-foreground">TI approve-pay</span>
                        <span class="text-[12px] font-medium">$50K / $101K aggregate</span>
                      </div>
                      <div class="flex justify-between py-0.5">
                        <span class="text-[11px] text-muted-foreground">This claim</span>
                        <span class="text-[12px] font-medium text-[#1D9E75]">$41.9K — within TPA</span>
                      </div>
                      <div class="flex justify-between py-0.5">
                        <span class="text-[11px] text-muted-foreground">TI other deny</span>
                        <span class="text-[12px] font-medium">$0 — always Pru</span>
                      </div>
                    `
                  : html`
                      <div class="flex justify-between py-0.5">
                        <span class="text-[11px] text-muted-foreground">Death approve-pay</span>
                        <span class="text-[12px] font-medium">$100K aggregate</span>
                      </div>
                      <div class="flex justify-between py-0.5">
                        <span class="text-[11px] text-muted-foreground">This claim</span>
                        <span class="text-[12px] font-medium text-[#A32D2D]">$492.7K — Pru required</span>
                      </div>
                    `}
              </div>
            </div>
          </div>
        `

    const tabContent =
      this.activeTab === 'system'
        ? systemAssessment
        : this.activeTab === 'examiner'
          ? examinerReview
          : this.activeTab === 'tools'
            ? claimTools
            : finalDecision

    const tabBtn = (tab: WorksheetTab, label: string) => html`
      <button
        type="button"
        @click=${() => {
          this.activeTab = tab
        }}
        class=${cn(
          'px-3.5 py-2.5 text-[12px] cursor-pointer border-b-2 border-transparent whitespace-nowrap',
          this.activeTab === tab
            ? 'text-[#185FA5] border-b-[#185FA5] font-medium'
            : 'text-muted-foreground hover:text-foreground'
        )}
      >
        ${label}
      </button>
    `

    return html`
      <div class="flex flex-col flex-1 overflow-hidden">
        <div class="bg-card border-b border-border px-4 flex gap-0 overflow-x-auto">
          ${tabBtn('system', 'System Assessment')}
          ${tabBtn('examiner', 'Examiner Review')}
          ${tabBtn('tools', 'Claim Tools')}
          ${tabBtn('decision', 'Final Decision')}
        </div>

        <div class="claims-page">${tabContent}</div>
      </div>
    `
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'claims-worksheet-page': ClaimsWorksheetPage
  }
}
