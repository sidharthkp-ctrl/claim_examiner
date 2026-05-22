var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { html } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { LightDomElement } from '../lib/light-dom.js';
import { claimProductFromAttr } from '../lib/claim-product.js';
import { MaterialIcons } from '../lib/material-icons.js';
import '../components/claims-badge.js';
import '../components/claims-button.js';
import '../components/claims-card.js';
import '../components/claims-scope-banner.js';
let ClaimsMedicalPage = class ClaimsMedicalPage extends LightDomElement {
    constructor() {
        super(...arguments);
        this.claimProduct = 'ti';
    }
    render() {
        const product = claimProductFromAttr(this.claimProduct);
        if (product === 'death') {
            return html `
        <div class="claims-page">
          <claims-info-box variant="info">
            Medical review for death claims is handled under Referral → Contestable investigation (D-19).
            Open the Death Claim Examiner portal worksheet for manner and document review.
          </claims-info-box>
        </div>
      `;
        }
        return html `
      <div class="claims-page">
        <claims-scope-banner
          scope="claim"
          title="Medical review"
          description="Mandatory on all TI claims (T-07). No fast track."
        ></claims-scope-banner>
        <div class="grid grid-cols-2 gap-2.5">
          <div>
            <claims-card title="Medical expert referral (T-07)" icon=${MaterialIcons.stethoscope}>
              <claims-field-row label="Status"
                ><claims-badge variant="warning">In medical expert queue</claims-badge></claims-field-row
              >
              <claims-field-row label="Referred on">05/20/2026</claims-field-row>
              <claims-field-row label="Package included"
                >Physician Statement, Claim Form, Authorization, medical records</claims-field-row
              >
              <claims-info-box variant="info" className="mt-2">
                BOG requires medical expert review on all TI claims without exception.
              </claims-info-box>
            </claims-card>

            <claims-card title="Physician Statement extraction" .ai=${true} icon=${MaterialIcons.bot}>
              <claims-field-row label="Attending physician">Dr. Maria Chen, MD</claims-field-row>
              <claims-field-row label="Life expectancy">6 months or less</claims-field-row>
              <claims-field-row label="Diagnosis">Stage IV pancreatic cancer</claims-field-row>
              <claims-field-row label="Mental capacity (Q9)"
                ><claims-badge variant="success">Capable</claims-badge></claims-field-row
              >
              <claims-field-row label="AI confidence"
                ><claims-badge variant="success">92%</claims-badge></claims-field-row
              >
            </claims-card>

            <claims-card title="Physician qualifications (T-11)" icon=${MaterialIcons.shield}>
              <claims-field-row label="Licensed in U.S."
                ><claims-badge variant="success">Yes</claims-badge></claims-field-row
              >
              <claims-field-row label="Currently practicing"
                ><claims-badge variant="success">Yes</claims-badge></claims-field-row
              >
              <claims-field-row label="Treating for terminal illness"
                ><claims-badge variant="success">Yes</claims-badge></claims-field-row
              >
              <claims-field-row label="Family relationship"
                ><claims-badge variant="success">None</claims-badge></claims-field-row
              >
            </claims-card>
          </div>

          <div>
            <claims-card title="Medical expert findings (T-08)" icon=${MaterialIcons.fileText}>
              <claims-field-row label="Determination"
                ><claims-badge variant="warning">Pending</claims-badge></claims-field-row
              >
              <claims-field-row label="Life expectancy assessment">—</claims-field-row>
              <claims-field-row label="Additional records needed"
                ><claims-badge variant="neutral">TBD by expert</claims-badge></claims-field-row
              >
              <textarea
                class="w-full mt-2 border border-border rounded-md p-2 text-[12px] min-h-[80px]"
                placeholder="Document medical expert findings when received (T-08)..."
              ></textarea>
            </claims-card>

            <claims-card title="Physician phone verification (T-10)" icon=${MaterialIcons.messageCircle}>
              <claims-field-row label="Independent verification"
                ><claims-badge variant="warning">Scheduled</claims-badge></claims-field-row
              >
              <claims-field-row label="Office contacted">Austin Oncology Associates</claims-field-row>
              <claims-button className="mt-2 text-[11px]">Log verification outcome</claims-button>
            </claims-card>

            <claims-card title="Contestable investigation (T-19)" icon=${MaterialIcons.alertTriangle}>
              <claims-field-row label="Contestable period"
                ><claims-badge variant="warning">Active</claims-badge></claims-field-row
              >
              <claims-field-row label="Parallel reviews"
                >Contestable clinical + insured eligibility clinical</claims-field-row
              >
              <claims-field-row label="Records lookback">2 years prior to policy date</claims-field-row>
            </claims-card>

            <claims-card title="Additional records (T-09)" icon=${MaterialIcons.upload}>
              <claims-field-row label="Expert requested records"
                ><claims-badge variant="neutral">None yet</claims-badge></claims-field-row
              >
              <claims-button variant="primary" className="text-[11px]">Order records</claims-button>
            </claims-card>
          </div>
        </div>
      </div>
    `;
    }
};
__decorate([
    property({ type: String, attribute: 'claim-product' })
], ClaimsMedicalPage.prototype, "claimProduct", void 0);
ClaimsMedicalPage = __decorate([
    customElement('claims-medical-page')
], ClaimsMedicalPage);
export { ClaimsMedicalPage };
