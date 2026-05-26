var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { html } from 'lit';
import { customElement, property, state } from 'lit/decorators.js';
import { LightDomElement } from '../lib/light-dom.js';
import { claimProductFromAttr } from '../lib/claim-product.js';
import { cn } from '../lib/cn.js';
import { MaterialIcons } from '../lib/material-icons.js';
import '../components/claims-badge.js';
import '../components/claims-button.js';
import '../components/claims-card.js';
import '../components/claims-decision-option.js';
import '../components/claims-icon.js';
import { decisionOptionsForProduct, renderDeathClaimTools, renderDeathExaminerReview, renderSystemAssessment, renderTiClaimTools, renderTiExaminerReview, } from './variants/worksheet-content.js';
let ClaimsWorksheetPage = class ClaimsWorksheetPage extends LightDomElement {
    constructor() {
        super(...arguments);
        this.claimProduct = 'death';
        this.claimGroup = 'workbench';
        this.activeTab = 'system';
        this.selectedDecision = 'approve-pay';
    }
    _onDecisionSelect(e) {
        this.selectedDecision = e.detail.id;
    }
    render() {
        const product = claimProductFromAttr(this.claimProduct);
        const decisionOptions = decisionOptionsForProduct(product);
        const systemAssessment = html `
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
    `;
        const examinerReview = product === 'ti' ? renderTiExaminerReview() : renderDeathExaminerReview();
        const claimTools = product === 'ti' ? renderTiClaimTools() : renderDeathClaimTools();
        const finalDecision = this.claimGroup === 'intake'
            ? html `
        <div class="grid grid-cols-1 gap-2.5 max-w-3xl">
            <claims-card title="Initial benefit intake & calculation" icon=${MaterialIcons.dollarSign} .ai=${true}>
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

            <claims-card title="Intake fast track validation" icon=${MaterialIcons.shield}>
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
      `
            : this.claimGroup === 'referral'
                ? html `
          <div class="grid grid-cols-1 gap-2.5 max-w-3xl">
              <claims-card title="Pre-referral audit overview" icon=${MaterialIcons.shieldCheck} .ai=${true}>
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

              <claims-card title="Update recommendation & submit" icon=${MaterialIcons.gavel}>
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
        `
                : html `
          <div class="grid grid-cols-1 gap-2.5 max-w-3xl">
              <claims-card
                title="Examiner recommendation"
                icon=${MaterialIcons.gavel}
                @claims-select=${this._onDecisionSelect}
              >
                ${decisionOptions.map((option) => html `
                    <claims-decision-option
                      optionId=${option.id}
                      title=${option.title}
                      description=${option.description}
                      .selected=${this.selectedDecision === option.id}
                    ></claims-decision-option>
                  `)}
              </claims-card>

              <claims-card title="Decision summary & notes" icon=${MaterialIcons.fileText}>
                <claims-field-row label="Net payable amount">
                  <span class="text-[#1D9E75]"
                    >${product === 'ti' ? '$41,900.00' : '$492,750.00'}</span
                  >
                </claims-field-row>
                ${product === 'ti'
                    ? html `
                      <claims-field-row label="Medical expert approval"
                        ><claims-badge variant="warning">Pending</claims-badge></claims-field-row
                      >
                      <claims-field-row label="Policy on payment"
                        ><claims-badge variant="warning">Terminates</claims-badge></claims-field-row
                      >
                    `
                    : html `
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

              <claims-card title="TPA authority limits" icon=${MaterialIcons.shield}>
                ${product === 'ti'
                    ? html `
                      <claims-field-row label="TI approve-pay">$50K / $101K aggregate</claims-field-row>
                      <claims-field-row label="This claim"
                        ><span class="text-[#1D9E75] font-medium">$41.9K — within TPA</span></claims-field-row
                      >
                      <claims-field-row label="TI other deny">$0 — always Pru</claims-field-row>
                    `
                    : html `
                      <claims-field-row label="Death approve-pay">$100K aggregate</claims-field-row>
                      <claims-field-row label="This claim"
                        ><span class="text-[#A32D2D] font-medium">$492.7K — Pru required</span></claims-field-row
                      >
                    `}
              </claims-card>
          </div>
        `;
        const tabContent = this.activeTab === 'system'
            ? systemAssessment
            : this.activeTab === 'examiner'
                ? examinerReview
                : this.activeTab === 'tools'
                    ? claimTools
                    : finalDecision;
        const tabBtn = (tab, label) => html `
      <button
        type="button"
        @click=${() => {
            this.activeTab = tab;
        }}
        class=${cn('px-3.5 py-2.5 text-[12px] cursor-pointer border-b-2 border-transparent whitespace-nowrap', this.activeTab === tab
            ? 'text-[#185FA5] border-b-[#185FA5] font-medium'
            : 'text-muted-foreground hover:text-foreground')}
      >
        ${label}
      </button>
    `;
        return html `
      <div class="flex flex-col flex-1 overflow-hidden">
        <div class="bg-card border-b border-border px-4 flex gap-0 overflow-x-auto">
          ${tabBtn('system', 'System Assessment')}
          ${tabBtn('examiner', 'Examiner Review')}
          ${tabBtn('tools', 'Claim Tools')}
          ${tabBtn('decision', 'Final Decision')}
        </div>

        <div class="claims-page">${tabContent}</div>
      </div>
    `;
    }
};
__decorate([
    property({ type: String, attribute: 'claim-product' })
], ClaimsWorksheetPage.prototype, "claimProduct", void 0);
__decorate([
    property({ type: String, attribute: 'claim-group' })
], ClaimsWorksheetPage.prototype, "claimGroup", void 0);
__decorate([
    state()
], ClaimsWorksheetPage.prototype, "activeTab", void 0);
__decorate([
    state()
], ClaimsWorksheetPage.prototype, "selectedDecision", void 0);
ClaimsWorksheetPage = __decorate([
    customElement('claims-worksheet-page')
], ClaimsWorksheetPage);
export { ClaimsWorksheetPage };
