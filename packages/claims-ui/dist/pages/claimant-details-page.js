var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { html } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { LightDomElement } from '../lib/light-dom.js';
import { MaterialIcons } from '../lib/material-icons.js';
import '../components/claims-badge.js';
import '../components/claims-button.js';
import '../components/claims-card.js';
import '../components/claims-scope-banner.js';
import '../components/claims-button.js';
let ClaimsClaimantDetailsPage = class ClaimsClaimantDetailsPage extends LightDomElement {
    constructor() {
        super(...arguments);
        this.caseId = '';
    }
    render() {
        return html `
      <div class="flex flex-col flex-1 min-h-0 overflow-hidden">
        <div class="claims-page">
          <claims-scope-banner
            scope="case"
            title="Claimant details"
            description="Insured and claimant information for the case (not per-claim filing)."
            .entityId=${this.caseId}
          ></claims-scope-banner>
          <claims-card title="Insured / claimant" icon=${MaterialIcons.user}>
            <div class="claims-fields-grid--2">
              <claims-field-row label="Insured">John A. Smith</claims-field-row>
              <claims-field-row label="Date of death">02/28/2026</claims-field-row>
              <claims-field-row label="Claimant">Jane Smith (Spouse)</claims-field-row>
              <claims-field-row label="Beneficiary type">Primary — 100%</claims-field-row>
              <claims-field-row label="Minor beneficiary"
                ><claims-badge variant="success">No — age 42</claims-badge></claims-field-row
              >
              <claims-field-row label="Incorrect claimant"
                ><claims-badge variant="success">No — matches record</claims-badge></claims-field-row
              >
            </div>
          </claims-card>

          <claims-card title="Communication log summary" icon=${MaterialIcons.messageCircle}>
            <claims-field-row label="Last contact">04/20/2026 — Phone (claimant)</claims-field-row>
            <claims-field-row label="Total interactions">3</claims-field-row>
            <claims-field-row label="Outstanding outreach"
              ><claims-badge variant="warning">1 — funeral form</claims-badge></claims-field-row
            >
          </claims-card>
        </div>

        <claims-action-bar>
          <claims-button>Save draft</claims-button>
        </claims-action-bar>
      </div>
    `;
    }
};
__decorate([
    property({ type: String })
], ClaimsClaimantDetailsPage.prototype, "caseId", void 0);
ClaimsClaimantDetailsPage = __decorate([
    customElement('claims-claimant-details-page')
], ClaimsClaimantDetailsPage);
export { ClaimsClaimantDetailsPage };
