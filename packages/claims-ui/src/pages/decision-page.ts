import { html, type TemplateResult } from 'lit'
import { customElement, state } from 'lit/decorators.js'
import { LightDomElement } from '../lib/light-dom.js'
import { cn } from '../lib/cn.js'
import { Icons } from '../lib/icons.js'
import { iconSlot } from '../lib/icon-slot.js'
import type { BadgeVariant } from '../components/claims-badge.js'
import '../components/claims-badge.js'
import '../components/claims-button.js'
import '../components/claims-card.js'

const decisionOptions = [
  {
    id: 'approve-pay',
    title: 'Approve — Pay (D-24)',
    description:
      'All checks pass. DCI from HORD to settlement. Route to Payment Process. Within TPA authority for amounts up to $100K aggregate — this claim requires Pru referral first.',
  },
  {
    id: 'approve-suicide',
    title: 'Approve — Pay suicide provision (D-25)',
    description:
      'Suicide confirmed within contestable period. Payment = return of premiums paid to DOD (not face value). State-specific language applies.',
  },
  {
    id: 'deny-tpa',
    title: 'Deny — within TPA authority (D-26)',
    description:
      'Very limited scenarios. Prepare denial letter with appeal language for CA IL NE NH NJ RI TN WA WV. Most death denials require Pru referral first.',
  },
  {
    id: 'deny-ti-life',
    title: 'Deny — TI life expectancy (T-26)',
    description:
      'TI only. Life expectancy does not meet threshold (>6 months, or >12 months CA). TPA denial authority — does not require Pru approval.',
  },
  {
    id: 'deny-ti-other',
    title: 'Deny — other reasons, Pru required (T-27)',
    description:
      'TI non-life-expectancy denials — $0 TPA authority. Refer to Pru for approval before sending denial letter.',
  },
  {
    id: 'refer-pru',
    title: 'Refer to Prudential for decision (D-27)',
    description:
      'Over TPA authority, complex cases, most denials, rescission recommendations. Assemble referral package with recommendation and supporting documents.',
  },
  {
    id: 'rescission',
    title: 'Recommend rescission (D-28)',
    description:
      'Material misrepresentation found. Complete Contestable Claim Summary Form. Send to Pru for approval. Upon approval draft rescission letter, send to Pru for review, then send final to policy owner.',
  },
] as const

@customElement('claims-decision-page')
export class ClaimsDecisionPage extends LightDomElement {
  @state() private selectedDecision = 'approve-pay'

  private _checklistItem(opts: {
    label: string
    status: string
    statusVariant: BadgeVariant
  }): TemplateResult {
    const { label, status, statusVariant } = opts
    return html`
      <div class="flex justify-between items-center py-1">
        <span class="text-[11px]">${label}</span>
        <claims-badge variant=${statusVariant} className="text-[10px]">${status}</claims-badge>
      </div>
    `
  }

  render() {
    return html`
      <div class="claims-page">
        <div class="grid grid-cols-[1fr_220px] gap-2.5">
          <div>
            <claims-card title="Examiner recommendation">
              ${iconSlot(Icons.gavel, '#185FA5')}
              ${decisionOptions.map(
                (option) => html`
                  <div
                    @click=${() => {
                      this.selectedDecision = option.id
                    }}
                    class=${cn(
                      'border rounded-md p-3 mb-2 cursor-pointer transition-colors',
                      this.selectedDecision === option.id
                        ? 'border-[#185FA5] border-2 bg-[#E6F1FB]'
                        : 'border-border'
                    )}
                  >
                    <div class="flex items-start gap-2">
                      <input
                        type="radio"
                        name="decision"
                        .checked=${this.selectedDecision === option.id}
                        @change=${() => {
                          this.selectedDecision = option.id
                        }}
                        class="mt-0.5"
                      />
                      <div>
                        <div class="text-[12px] font-medium">${option.title}</div>
                        <div class="text-[11px] text-muted-foreground mt-0.5">${option.description}</div>
                      </div>
                    </div>
                  </div>
                `
              )}
            </claims-card>

            <claims-card title="Decision summary & notes">
              ${iconSlot(Icons.fileText, '#534AB7')}
              <claims-field-row label="Net payable amount">
                <span class="text-[#1D9E75]">$492,750.00</span>
              </claims-field-row>
              <claims-field-row label="Payment to">Jane Smith + Oakwood Funeral</claims-field-row>
              <claims-field-row label="ADB check (separate)">
                <claims-badge variant="warning">Pending manner confirm</claims-badge>
              </claims-field-row>
              <claims-field-row label="Contestable review status">
                <claims-badge variant="warning">Pending Pru direction</claims-badge>
              </claims-field-row>
              <div class="mt-2">
                <textarea
                  class="w-full border border-border rounded-md p-2 text-[12px] min-h-[80px] resize-y"
                >
Manner discrepancy resolved — certificate shows Accidental confirmed. ADB rider conditions met, no exclusion applies. Contestable investigation initiated per BOG 6.1 — hypertension materiality inconclusive, referring to Pru. Recommend Approve-Pay pending Pru contestable clearance. Two separate checks required.</textarea>
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
              ${this._checklistItem({
                label: 'All review items resolved',
                status: '3 pending',
                statusVariant: 'warning',
              })}
              ${this._checklistItem({
                label: 'State requirements verified',
                status: 'Done',
                statusVariant: 'success',
              })}
              ${this._checklistItem({
                label: 'Benefit calculation confirmed',
                status: 'Done',
                statusVariant: 'success',
              })}
              ${this._checklistItem({
                label: 'Contestable referral sent',
                status: 'Pending Pru',
                statusVariant: 'warning',
              })}
              ${this._checklistItem({
                label: 'Funeral assignment validated',
                status: 'Pending',
                statusVariant: 'warning',
              })}
              ${this._checklistItem({
                label: 'NRA / foreign payee cleared',
                status: 'Done',
                statusVariant: 'success',
              })}
              ${this._checklistItem({
                label: 'Simultaneous death checked',
                status: 'Done',
                statusVariant: 'success',
              })}
              ${this._checklistItem({
                label: 'Misstatement of age cleared',
                status: 'Done — no discrepancy',
                statusVariant: 'success',
              })}

              <div class="text-[11px] font-medium text-muted-foreground mt-2.5 mb-1.5">TPA authority limits</div>
              <div class="flex justify-between py-0.5">
                <span class="text-[11px] text-muted-foreground">Death approve-pay</span>
                <span class="text-[12px] font-medium">$100K aggregate</span>
              </div>
              <div class="flex justify-between py-0.5">
                <span class="text-[11px] text-muted-foreground">TI approve-pay</span>
                <span class="text-[12px] font-medium">$50K / $101K aggregate</span>
              </div>
              <div class="flex justify-between py-0.5">
                <span class="text-[11px] text-muted-foreground">This claim</span>
                <span class="text-[12px] font-medium text-[#A32D2D]">$492.7K — Pru required</span>
              </div>
              <div class="flex justify-between py-0.5">
                <span class="text-[11px] text-muted-foreground">TI other deny</span>
                <span class="text-[12px] font-medium">$0 — always Pru</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    `
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'claims-decision-page': ClaimsDecisionPage
  }
}
