var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { html } from 'lit';
import { customElement, state } from 'lit/decorators.js';
import { LightDomElement } from '../lib/light-dom.js';
import { MaterialIcons } from '../lib/material-icons.js';
import '../components/claims-badge.js';
import '../components/claims-button.js';
import '../components/claims-card.js';
import '../components/claims-decision-option.js';
const decisionOptions = [
    {
        id: 'approve-pay',
        title: 'Approve — Pay (D-24)',
        description: 'All checks pass. DCI from HORD to settlement. Route to Payment Process. Within TPA authority for amounts up to $100K aggregate — this claim requires Pru referral first.',
    },
    {
        id: 'approve-suicide',
        title: 'Approve — Pay suicide provision (D-25)',
        description: 'Suicide confirmed within contestable period. Payment = return of premiums paid to DOD (not face value). State-specific language applies.',
    },
    {
        id: 'deny-tpa',
        title: 'Deny — within TPA authority (D-26)',
        description: 'Very limited scenarios. Prepare denial letter with appeal language for CA IL NE NH NJ RI TN WA WV. Most death denials require Pru referral first.',
    },
    {
        id: 'deny-ti-life',
        title: 'Deny — TI life expectancy (T-26)',
        description: 'TI only. Life expectancy does not meet threshold (>6 months, or >12 months CA). TPA denial authority — does not require Pru approval.',
    },
    {
        id: 'deny-ti-other',
        title: 'Deny — other reasons, Pru required (T-27)',
        description: 'TI non-life-expectancy denials — $0 TPA authority. Refer to Pru for approval before sending denial letter.',
    },
    {
        id: 'refer-pru',
        title: 'Refer to Prudential for decision (D-27)',
        description: 'Over TPA authority, complex cases, most denials, rescission recommendations. Assemble referral package with recommendation and supporting documents.',
    },
    {
        id: 'rescission',
        title: 'Recommend rescission (D-28)',
        description: 'Material misrepresentation found. Complete Contestable Claim Summary Form. Send to Pru for approval. Upon approval draft rescission letter, send to Pru for review, then send final to policy owner.',
    },
];
let ClaimsDecisionPage = class ClaimsDecisionPage extends LightDomElement {
    constructor() {
        super(...arguments);
        this.selectedDecision = 'approve-pay';
    }
    _onDecisionSelect(e) {
        this.selectedDecision = e.detail.id;
    }
    render() {
        return html `
      <div class="claims-page">
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

            <claims-card title="TPA authority limits" icon=${MaterialIcons.shield}>
              <claims-field-row label="Death approve-pay">$100K aggregate</claims-field-row>
              <claims-field-row label="TI approve-pay">$50K / $101K aggregate</claims-field-row>
              <claims-field-row label="This claim"
                ><span class="text-[#A32D2D] font-medium">$492.7K — Pru required</span></claims-field-row
              >
              <claims-field-row label="TI other deny">$0 — always Pru</claims-field-row>
            </claims-card>
        </div>
      </div>
    `;
    }
};
__decorate([
    state()
], ClaimsDecisionPage.prototype, "selectedDecision", void 0);
ClaimsDecisionPage = __decorate([
    customElement('claims-decision-page')
], ClaimsDecisionPage);
export { ClaimsDecisionPage };
