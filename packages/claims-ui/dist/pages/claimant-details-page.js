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
let ClaimsClaimantDetailsPage = class ClaimsClaimantDetailsPage extends LightDomElement {
    constructor() {
        super(...arguments);
        this.caseId = '';
        this.claimProduct = 'death';
    }
    render() {
        const product = claimProductFromAttr(this.claimProduct);
        return html `
      <div class="flex flex-col flex-1 min-h-0 overflow-hidden">
        <div class="claims-page">
          <claims-scope-banner
            scope="case"
            title="Claimant details"
            description=${product === 'ti'
            ? 'Policy owner and contact from TI submission (About You, Contact Information).'
            : 'Claimant, beneficiary, and contact from death submission (S4–S6).'}
            .entityId=${this.caseId}
          ></claims-scope-banner>

          ${product === 'ti'
            ? html `
                <claims-card title="Policy owner (C2 — About You)" icon=${MaterialIcons.user}>
                  <div class="claims-fields-grid--2">
                    <claims-field-row label="Policy owner">John A. Smith (insured)</claims-field-row>
                    <claims-field-row label="Role">Policy Owner — not POA</claims-field-row>
                    <claims-field-row label="Date of birth">09/04/1978</claims-field-row>
                    <claims-field-row label="State of residence">Texas</claims-field-row>
                    <claims-field-row label="Relationship to insured">Self</claims-field-row>
                    <claims-field-row label="POA verification (T-06)"
                      ><claims-badge variant="success">N/A</claims-badge></claims-field-row
                    >
                  </div>
                </claims-card>

                <claims-card title="Contact information (S5)" icon=${MaterialIcons.messageCircle}>
                  <claims-field-row label="Phone">(512) 555-0142 — Mobile</claims-field-row>
                  <claims-field-row label="Email">john.smith@email.com</claims-field-row>
                  <claims-field-row label="Mailing address"
                    >123 Oak Lane, Austin, TX 78701</claims-field-row
                  >
                  <claims-field-row label="SMS consent"
                    ><claims-badge variant="success">Yes</claims-badge></claims-field-row
                  >
                  <claims-field-row label="E-delivery consent"
                    ><claims-badge variant="success">Yes</claims-badge></claims-field-row
                  >
                </claims-card>
              `
            : html `
                <claims-card title="Claimant & beneficiary (S4–S6)" icon=${MaterialIcons.user}>
                  <div class="claims-fields-grid--2">
                    <claims-field-row label="Insured">John A. Smith</claims-field-row>
                    <claims-field-row label="Date of death">02/28/2026</claims-field-row>
                    <claims-field-row label="Filing party">Jane A. Smith</claims-field-row>
                    <claims-field-row label="Role (S2)">Yes — beneficiary</claims-field-row>
                    <claims-field-row label="Relationship">Spouse</claims-field-row>
                    <claims-field-row label="Beneficiary on policy">Jane Smith — Primary 100%</claims-field-row>
                    <claims-field-row label="Minor beneficiary (D-10)"
                      ><claims-badge variant="success">No — age 42</claims-badge></claims-field-row
                    >
                    <claims-field-row label="Incorrect claimant (D-04)"
                      ><claims-badge variant="success">No — matches record</claims-badge></claims-field-row
                    >
                  </div>
                </claims-card>

                <claims-card title="Contact information (S5)" icon=${MaterialIcons.messageCircle}>
                  <claims-field-row label="Phone">(512) 555-0198 — Mobile</claims-field-row>
                  <claims-field-row label="Email">jane.smith@email.com</claims-field-row>
                  <claims-field-row label="Address">456 Maple Dr, Austin, TX 78702</claims-field-row>
                  <claims-field-row label="Outstanding outreach (D-03)"
                    ><claims-badge variant="warning">Funeral assignment form</claims-badge></claims-field-row
                  >
                </claims-card>
              `}
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
__decorate([
    property({ type: String, attribute: 'claim-product' })
], ClaimsClaimantDetailsPage.prototype, "claimProduct", void 0);
ClaimsClaimantDetailsPage = __decorate([
    customElement('claims-claimant-details-page')
], ClaimsClaimantDetailsPage);
export { ClaimsClaimantDetailsPage };
