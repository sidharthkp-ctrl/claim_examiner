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
import '../components/claims-scope-banner.js';
import { renderDeathEventDetails, renderTiEventDetails, } from './variants/event-details-content.js';
let ClaimsEventDetailsPage = class ClaimsEventDetailsPage extends LightDomElement {
    constructor() {
        super(...arguments);
        this.caseId = '';
        this.claimProduct = 'death';
    }
    render() {
        const product = claimProductFromAttr(this.claimProduct);
        const description = product === 'ti'
            ? 'Terminal illness event — diagnosis, quote, and life expectancy (submission Event Details).'
            : 'Death event information shared by all claims in this case (submission S7 — Details of Passing).';
        return html `
      <div class="claims-page">
        <claims-scope-banner
          scope="case"
          title="Event details"
          .description=${description}
          .entityId=${this.caseId}
        ></claims-scope-banner>
        ${product === 'ti' ? renderTiEventDetails() : renderDeathEventDetails()}
      </div>
    `;
    }
};
__decorate([
    property({ type: String })
], ClaimsEventDetailsPage.prototype, "caseId", void 0);
__decorate([
    property({ type: String, attribute: 'claim-product' })
], ClaimsEventDetailsPage.prototype, "claimProduct", void 0);
ClaimsEventDetailsPage = __decorate([
    customElement('claims-event-details-page')
], ClaimsEventDetailsPage);
export { ClaimsEventDetailsPage };
