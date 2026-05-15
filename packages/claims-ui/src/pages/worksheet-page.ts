import { html, type TemplateResult } from 'lit'
import { customElement, state } from 'lit/decorators.js'
import { LightDomElement } from '../lib/light-dom.js'
import { cn } from '../lib/cn.js'
import { Icons } from '../lib/icons.js'
import '../components/claims-badge.js'
import '../components/claims-button.js'
import '../components/claims-card.js'

type ReviewStatus = 'success' | 'warning' | 'danger' | 'purple'

const statusBorderColors: Record<ReviewStatus, string> = {
  success: '#97C459',
  warning: '#EF9F27',
  danger: '#E24B4A',
  purple: '#AFA9EC',
}

@customElement('claims-worksheet-page')
export class ClaimsWorksheetPage extends LightDomElement {
  @state() private activeTab: 'system' | 'examiner' = 'system'

  private _reviewItem(opts: {
    status: ReviewStatus
    statusLabel: TemplateResult | string
    title: string
    titleMuted?: boolean
    subtitle?: string
    subtitleColor?: string
    children?: TemplateResult
    rightAction?: TemplateResult
    collapsed?: boolean
  }): TemplateResult {
    const {
      status,
      statusLabel,
      title,
      titleMuted,
      subtitle,
      subtitleColor,
      children,
      rightAction,
      collapsed,
    } = opts
    return html`
      <div class="border border-border rounded-md mb-2 overflow-hidden">
        <div
          class="px-3 py-2 bg-card flex items-start gap-2"
          style="border-left: 3px solid ${statusBorderColors[status]}"
        >
          <claims-badge variant=${status} className="text-[10px]">${statusLabel}</claims-badge>
          <div class="flex-1 min-w-0">
            <div class=${cn('text-[12px] font-medium', titleMuted && 'text-muted-foreground')}>
              ${title}
            </div>
            ${subtitle
              ? html`<div class="text-[11px] text-muted-foreground" style=${subtitleColor ? `color: ${subtitleColor}` : ''}>
                  ${subtitle}
                </div>`
              : ''}
          </div>
          ${rightAction ?? ''}
        </div>
        ${!collapsed && children
          ? html`<div class="px-3 py-2.5 bg-secondary border-t border-border">${children}</div>`
          : ''}
      </div>
    `
  }

  private _systemAssessmentTab(): TemplateResult {
    return html`
      <claims-ai-box className="mb-4">
        <span slot="title" class="flex items-center gap-1.5 w-full">
          ${Icons.sparkles()}
          AI assessment summary
          <claims-button className="ml-auto text-[11px] py-0.5 px-2">
            ${Icons.refreshCw()}
            Refresh
          </claims-button>
        </span>
        Claim for John A. Smith submitted 04/20/2026 by beneficiary Jane Smith (spouse). Policy TL12345
        (20-yr term, $500K face) is in-force on DOD 02/28/2026 within contestable period. Documents: Death
        Certificate ✓ Claim Form ✓ Authorization ✓ Funeral Assignment ✗. Manner of death flagged — claimant
        declared Natural, certificate shows Accidental. ADB rider present — accidental manner requires
        additional handling and two separate payment checks. Recommend examiner review for manner validation
        and funeral assignment follow-up before proceeding to decision.
      </claims-ai-box>

      <div class="grid grid-cols-2 gap-3 mb-2">
        <claims-card title="Rule engine results — 28 rules evaluated" className="col-span-2">
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
  }

  private _examinerReviewTab(): TemplateResult {
    return html`
      <div class="grid grid-cols-[1fr_220px] gap-2.5">
        <div>
          <div class="flex items-center justify-between mb-1.5">
            <span class="text-[13px] font-medium">Examiner review items</span>
            <claims-badge variant="info" className="text-[10px]">4 of 7 resolved — 57%</claims-badge>
          </div>
          <p class="text-[11px] text-muted-foreground mb-2.5">
            Each item requires an action before the case can proceed to Decision.
          </p>

          ${this._reviewItem({
            status: 'warning',
            statusLabel: 'Pending',
            title: 'Manner of death validation (D-08)',
            subtitle: 'Claimant declared Natural — certificate states Accidental',
            children: html`
              <div class="grid grid-cols-2 gap-1.5 mb-2">
                <div>
                  <div class="text-[10px] text-muted-foreground mb-0.5">DECLARED BY CLAIMANT</div>
                  <div class="inline-block text-[12px] font-medium bg-[#FCEBEB] text-[#A32D2D] px-2 py-0.5 rounded">
                    Natural
                  </div>
                </div>
                <div>
                  <div class="text-[10px] text-muted-foreground mb-0.5">ON DEATH CERTIFICATE</div>
                  <div class="inline-block text-[12px] font-medium bg-[#FCEBEB] text-[#A32D2D] px-2 py-0.5 rounded">
                    Accidental
                  </div>
                </div>
              </div>
              <div class="flex gap-1.5 items-start">
                <select class="flex-1 border border-border rounded-md p-1.5 text-[11px]">
                  <option>Select resolution...</option>
                  <option>Accept certificate — Accidental</option>
                  <option>Request additional documentation</option>
                  <option>Refer to supervisor</option>
                </select>
                <textarea
                  class="flex-[2] min-h-[36px] border border-border rounded-md p-1.5 text-[11px]"
                  placeholder="Resolution notes..."
                ></textarea>
                <claims-button variant="primary" className="text-[11px]">Resolve</claims-button>
              </div>
            `,
          })}

          ${this._reviewItem({
            status: 'warning',
            statusLabel: 'Pending',
            title: 'Funeral home assignment (D-12)',
            subtitle: 'Validate form, verify TIN, approve payment split',
            children: html`
              <div class="grid grid-cols-2 gap-1.5 mb-2">
                <div>
                  <div class="text-[11px] text-muted-foreground">Assignee</div>
                  <div class="text-[12px] font-medium">Oakwood Funeral Services</div>
                </div>
                <div>
                  <div class="text-[11px] text-muted-foreground">Assignment amount</div>
                  <div class="text-[12px] font-medium">$8,500.00</div>
                </div>
              </div>
              <div class="bg-[#EAF3DE] rounded-md px-2.5 py-1.5 text-[12px] text-[#27500A] font-medium mb-2">
                Payment split: FH $8,500.00 · Bene $491,500.00
              </div>
              <div class="flex gap-2.5 items-center">
                <label class="text-[11px] flex items-center gap-1">
                  <input type="checkbox" /> Verify TIN
                </label>
                <label class="text-[11px] flex items-center gap-1">
                  <input type="checkbox" /> Confirm signatures
                </label>
                <claims-button variant="success" className="ml-auto text-[11px]">Approve split</claims-button>
              </div>
            `,
          })}

          ${this._reviewItem({
            status: 'danger',
            statusLabel: 'Blocked',
            title: 'Document completeness',
            subtitle: 'Missing: Funeral Assignment Form',
            subtitleColor: '#A32D2D',
            rightAction: html`<claims-button variant="danger" className="text-[11px]">Escalate</claims-button>`,
            collapsed: true,
          })}

          ${this._reviewItem({
            status: 'success',
            statusLabel: html`${Icons.check()} Resolved`,
            title: 'Name discrepancy resolution (D-05)',
            titleMuted: true,
            rightAction: html`<span class="text-[11px] text-[#185FA5] cursor-pointer">View details</span>`,
            collapsed: true,
          })}

          ${this._reviewItem({
            status: 'success',
            statusLabel: html`${Icons.check()} Resolved`,
            title: 'ADB rider accidental verification (D-21)',
            titleMuted: true,
            rightAction: html`<span class="text-[11px] text-[#185FA5] cursor-pointer">View details</span>`,
            collapsed: true,
          })}

          ${this._reviewItem({
            status: 'danger',
            statusLabel: 'Pending',
            title: 'NRA / foreign payee check (D-15)',
            subtitle: 'Beneficiary citizenship — W-8BEN required if NRA',
            children: html`
              <claims-field-row label="Beneficiary citizenship"
                ><claims-badge variant="success">US Citizen confirmed</claims-badge></claims-field-row
              >
              <claims-field-row label="W-8BEN required"
                ><claims-badge variant="success">No</claims-badge></claims-field-row
              >
              <claims-field-row label="Withholding applicable"
                ><claims-badge variant="success">None</claims-badge></claims-field-row
              >
              <claims-button variant="success" className="mt-2 text-[11px]">Mark resolved</claims-button>
            `,
          })}

          ${this._reviewItem({
            status: 'purple',
            statusLabel: 'Info',
            title: 'Simultaneous death check (D-17)',
            subtitle: 'Confirm insured and beneficiary did not die in same event',
            children: html`
              <claims-field-row label="Beneficiary alive"
                ><claims-badge variant="success">Yes — confirmed</claims-badge></claims-field-row
              >
              <claims-field-row label="Simultaneous death triggered"
                ><claims-badge variant="success">No</claims-badge></claims-field-row
              >
            `,
          })}
        </div>

        <div>
          <div class="bg-secondary border border-border rounded-md p-3">
            <div class="text-[11px] font-medium text-muted-foreground mb-1.5">Related BOG sections</div>
            <a class="block text-[11px] text-[#185FA5] cursor-pointer py-0.5">Section 7.3 — Name discrepancies</a>
            <a class="block text-[11px] text-[#185FA5] cursor-pointer py-0.5">Section 7.2 — Misstatement of age</a>
            <a class="block text-[11px] text-[#185FA5] cursor-pointer py-0.5">Cause of death requirements</a>
            <a class="block text-[11px] text-[#185FA5] cursor-pointer py-0.5"
              >Section 6.1 — Contestable investigation</a
            >
            <a class="block text-[11px] text-[#185FA5] cursor-pointer py-0.5">Section 7.5 — Foreign payee NRA</a>
            <a class="block text-[11px] text-[#185FA5] cursor-pointer py-0.5"
              >Section 7.10 — Simultaneous death</a
            >

            <div class="text-[11px] font-medium text-muted-foreground mt-2.5 mb-1.5">Open clarifications</div>
            <a class="block text-[11px] text-[#185FA5] cursor-pointer py-0.5">#34 Un-suspend communication</a>
            <a class="block text-[11px] text-[#185FA5] cursor-pointer py-0.5">#27 TI follow-up deviation</a>

            <div class="text-[11px] font-medium text-muted-foreground mt-2.5 mb-1.5">Case notes (3)</div>
            <div class="text-[11px] text-muted-foreground leading-relaxed">
              04/20 — Claimant called re: funeral assignment timing. Stated death was from a fall.
            </div>
            <a class="block text-[11px] text-[#185FA5] cursor-pointer mt-1">+ Add note</a>

            <div class="text-[11px] font-medium text-muted-foreground mt-2.5 mb-1.5">Authority limits</div>
            <div class="flex justify-between py-0.5">
              <span class="text-[11px] text-muted-foreground">Death TPA limit</span>
              <span class="text-[12px] font-medium">$100K</span>
            </div>
            <div class="flex justify-between py-0.5">
              <span class="text-[11px] text-muted-foreground">This claim</span>
              <span class="text-[12px] font-medium text-[#A32D2D]">$492.7K — Pru needed</span>
            </div>
          </div>
        </div>
      </div>
    `
  }

  render() {
    return html`
      <div class="flex flex-col flex-1 overflow-hidden">
        <div class="bg-card border-b border-border px-4 flex gap-0">
          <button
            type="button"
            @click=${() => {
              this.activeTab = 'system'
            }}
            class=${cn(
              'px-3.5 py-2.5 text-[12px] cursor-pointer border-b-2 border-transparent',
              this.activeTab === 'system'
                ? 'text-[#185FA5] border-b-[#185FA5] font-medium'
                : 'text-muted-foreground hover:text-foreground'
            )}
          >
            System Assessment
          </button>
          <button
            type="button"
            @click=${() => {
              this.activeTab = 'examiner'
            }}
            class=${cn(
              'px-3.5 py-2.5 text-[12px] cursor-pointer border-b-2 border-transparent',
              this.activeTab === 'examiner'
                ? 'text-[#185FA5] border-b-[#185FA5] font-medium'
                : 'text-muted-foreground hover:text-foreground'
            )}
          >
            Examiner Review
          </button>
        </div>

        <div class="claims-page">
          ${this.activeTab === 'system' ? this._systemAssessmentTab() : this._examinerReviewTab()}
        </div>
      </div>
    `
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'claims-worksheet-page': ClaimsWorksheetPage
  }
}
