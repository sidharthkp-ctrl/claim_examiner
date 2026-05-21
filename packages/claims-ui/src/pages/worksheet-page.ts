import { html } from 'lit'
import { customElement, state } from 'lit/decorators.js'
import { LightDomElement } from '../lib/light-dom.js'
import { cn } from '../lib/cn.js'
import { Icons } from '../lib/icons.js'
import { MaterialIcons } from '../lib/material-icons.js'
import '../components/claims-badge.js'
import '../components/claims-button.js'
import '../components/claims-card.js'
import '../components/claims-review-item.js'
import '../components/claims-decision-option.js'
import '../components/claims-icon.js'

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

type WorksheetTab = 'system' | 'examiner' | 'tools' | 'decision'

@customElement('claims-worksheet-page')
export class ClaimsWorksheetPage extends LightDomElement {
  @state() private activeTab: WorksheetTab = 'system'
  @state() private selectedDecision = 'approve-pay'

  private _onDecisionSelect(e: CustomEvent<{ id: string }>) {
    this.selectedDecision = e.detail.id
  }

  render() {
    const systemAssessment = html`
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

    const examinerReview = html`
      <div class="grid grid-cols-[1fr_220px] gap-2.5">
        <div>
          <div class="flex items-center justify-between mb-1.5">
            <span class="text-[13px] font-medium">Examiner review items</span>
            <claims-badge variant="info" className="text-[10px]">4 of 7 resolved — 57%</claims-badge>
          </div>
          <p class="text-[11px] text-muted-foreground mb-2.5">
            Each item requires an action before the case can proceed to Decision.
          </p>

          <claims-review-item status="warning" title="Manner of death validation (D-08)" statusLabel="Pending" subtitle="Claimant declared Natural — certificate states Accidental">
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
            </claims-review-item>

          <claims-review-item status="warning" title="Funeral home assignment (D-12)" statusLabel="Pending" subtitle="Validate form, verify TIN, approve payment split">
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
            </claims-review-item>

          <claims-review-item status="danger" title="Document completeness" statusLabel="Blocked" subtitle="Missing: Funeral Assignment Form" subtitleColor="#A32D2D" collapsed><span slot="action"><claims-button variant="danger" className="text-[11px]">Escalate</claims-button></span></claims-review-item>

          <claims-review-item status="success" title="Name discrepancy resolution (D-05)" titleMuted collapsed><span slot="status">${Icons.check()} Resolved</span><span slot="action"><span class="text-[11px] text-[#185FA5] cursor-pointer">View details</span></span></claims-review-item>

          <claims-review-item status="success" title="ADB rider accidental verification (D-21)" titleMuted collapsed><span slot="status">${Icons.check()} Resolved</span><span slot="action"><span class="text-[11px] text-[#185FA5] cursor-pointer">View details</span></span></claims-review-item>

          <claims-review-item status="danger" title="NRA / foreign payee check (D-15)" statusLabel="Pending" subtitle="Beneficiary citizenship — W-8BEN required if NRA">
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
            </claims-review-item>

          <claims-review-item status="purple" title="Simultaneous death check (D-17)" statusLabel="Info" subtitle="Confirm insured and beneficiary did not die in same event">
              <claims-field-row label="Beneficiary alive"
                ><claims-badge variant="success">Yes — confirmed</claims-badge></claims-field-row
              >
              <claims-field-row label="Simultaneous death triggered"
                ><claims-badge variant="success">No</claims-badge></claims-field-row
              >
            </claims-review-item>
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

    const claimTools = html`
      <div class="grid grid-cols-1 md:grid-cols-2 gap-2.5">
        <claims-card title="Child support lien — CSLN (D-13)" icon=${MaterialIcons.building}>
          <claims-field-row label="State trigger">TX (issue state)</claims-field-row>
          <claims-field-row label="CSLN result"
            ><claims-badge variant="success">No lien found</claims-badge></claims-field-row
          >
          <claims-field-row label="Checked on">04/20/2026</claims-field-row>
          <claims-info-box variant="info" className="mt-1.5">
            CA: 24-hour rule applies. MA: separate process outside CSLN.
          </claims-info-box>
          <claims-button className="w-full mt-2 text-[11px]">
            <claims-icon slot="icon" name=${MaterialIcons.refreshCw} size="sm"></claims-icon>
            Recheck CSLN
          </claims-button>
        </claims-card>

        <claims-card title="IRS lien / federal levy (D-14)" icon=${MaterialIcons.receipt}>
          <claims-field-row label="IRS lien flag"
            ><claims-badge variant="success">No lien</claims-badge></claims-field-row
          >
          <claims-field-row label="Federal tax levy"
            ><claims-badge variant="success">None</claims-badge></claims-field-row
          >
          <claims-field-row label="Checked on">04/20/2026</claims-field-row>
          <claims-button className="w-full mt-2 text-[11px]">Run IRS check</claims-button>
        </claims-card>

        <claims-card title="Identity verification — Accurint (D-05)" icon=${MaterialIcons.userSearch}>
          <claims-field-row label="Search criteria">SSN + DOB + DOD</claims-field-row>
          <claims-field-row label="Result"
            ><claims-badge variant="success">Identity confirmed</claims-badge></claims-field-row
          >
          <claims-field-row label="Name variants found">John A. Smith, John Alan Smith</claims-field-row>
          <claims-field-row label="Resolution applied">Policy name accepted</claims-field-row>
          <claims-button className="w-full mt-2 text-[11px]">View Accurint report</claims-button>
        </claims-card>

        <claims-card title="Benefit calculation (D-24)" icon=${MaterialIcons.calculator}>
          <claims-field-row label="Face value">$500,000.00</claims-field-row>
          <claims-field-row label="Funeral assignment deduction">− $8,500.00</claims-field-row>
          <claims-field-row label="DCI (HORD → settlement)">+ $1,250.00</claims-field-row>
          <claims-field-row label="IRS / CSLN deductions">$0.00</claims-field-row>
          <claims-field-row label="Net payable to beneficiary">
            <span class="text-[#1D9E75] text-[14px]">$492,750.00</span>
          </claims-field-row>
          <claims-field-row label="ADB benefit (separate check)"
            ><claims-badge variant="warning">Pending manner confirm</claims-badge></claims-field-row
          >
          <claims-field-row label="DCI rate applied">Higher of company rate or state rate</claims-field-row>
        </claims-card>

        <claims-card title="SSDI death verification (D-29)" icon=${MaterialIcons.globe}>
          <claims-field-row label="SSDI result"
            ><claims-badge variant="success">Death confirmed</claims-badge></claims-field-row
          >
          <claims-field-row label="SSN match"
            ><claims-badge variant="success">Confirmed</claims-badge></claims-field-row
          >
          <claims-field-row label="DOD in SSDI">02/28/2026</claims-field-row>
          <claims-field-row label="Obituary / funeral home check"
            ><claims-badge variant="success">Confirmed</claims-badge></claims-field-row
          >
        </claims-card>

        <claims-card title="ADB investigation (D-21)" icon=${MaterialIcons.settings}>
          <claims-field-row label="ADB rider present"
            ><claims-badge variant="success">Yes</claims-badge></claims-field-row
          >
          <claims-field-row label="Certificate manner">Accidental — confirmed</claims-field-row>
          <claims-field-row label="ADB rider conditions met"
            ><claims-badge variant="success">Yes — covered accident</claims-badge></claims-field-row
          >
          <claims-field-row label="ADB exclusions"
            ><claims-badge variant="success">None apply</claims-badge></claims-field-row
          >
          <claims-field-row label="Contractual death benefit">Check 1 — pay first</claims-field-row>
          <claims-field-row label="ADB benefit">Check 2 — separate payment</claims-field-row>
          <claims-info-box variant="info" className="mt-1.5">
            Two separate payment checks required. Contractual death benefit issued first; ADB issued
            separately.
          </claims-info-box>
        </claims-card>

        <claims-card title="Quote recalculation — TI only (T-22)" icon=${MaterialIcons.refreshCw}>
          <claims-field-row label="Claim type"
            ><claims-badge variant="neutral">Death claim — N/A</claims-badge></claims-field-row
          >
          <claims-info-box variant="info" className="mt-1.5">
            For TI claims only: if original quote is over 30 days old at claim form receipt, trigger
            recalculation. If reduced, obtain new signed Claimant Statement before payment.
          </claims-info-box>
        </claims-card>
      </div>
    `

    const finalDecision = html`
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
Manner discrepancy resolved — certificate shows Accidental confirmed. ADB rider conditions met, no exclusion applies. Contestable investigation initiated per BOG 6.1 — hypertension materiality inconclusive, referring to Pru. Recommend Approve-Pay pending Pru contestable clearance. Two separate checks required.</textarea
              >
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
            <claims-field-row label="Funeral assignment validated">
              <claims-badge variant="warning">Pending</claims-badge>
            </claims-field-row>
            <claims-field-row label="NRA / foreign payee cleared">
              <claims-badge variant="success">Done</claims-badge>
            </claims-field-row>
            <claims-field-row label="Simultaneous death checked">
              <claims-badge variant="success">Done</claims-badge>
            </claims-field-row>
            <claims-field-row label="Misstatement of age cleared">
              <claims-badge variant="success">Done — no discrepancy</claims-badge>
            </claims-field-row>

            <div class="text-[11px] font-medium text-muted-foreground mt-2.5 mb-1.5">
              TPA authority limits
            </div>
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
