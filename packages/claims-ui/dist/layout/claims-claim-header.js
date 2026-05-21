var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { html } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { LightDomElement } from '../lib/light-dom.js';
let ClaimsClaimHeader = class ClaimsClaimHeader extends LightDomElement {
    constructor() {
        super(...arguments);
        this.claimId = '';
        this.claimType = '';
        this.claimStatus = '';
        this.policyId = '';
        this.policyLabel = '';
    }
    render() {
        const fields = [
            { label: 'Claim ID', value: this.claimId || '—' },
            { label: 'Claim type', value: this.claimType || '—' },
            { label: 'Policy', value: this.policyId ? `${this.policyId}` : '—' },
            { label: 'Coverage', value: this.policyLabel || '—' },
            { label: 'Status', value: this.claimStatus || '—', color: '#BA7517' },
            { label: 'Source', value: 'BAU — Portal' },
            { label: 'Verification', value: 'Verified', color: '#3B6D11' },
        ];
        return html `
      <div
        class="bg-card border-b border-border px-4 md:px-5 py-3 grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-x-5 gap-y-2 shadow-sm"
      >
        ${fields.map((field) => html `
            <div class="flex flex-col gap-0.5 min-w-0">
              <span class="text-[10px] font-medium text-muted-foreground uppercase tracking-wide"
                >${field.label}</span
              >
              <span
                class="text-[13px] font-semibold"
                style=${field.color ? `color: ${field.color}` : 'color: var(--primary-dark)'}
              >
                ${field.value}
              </span>
            </div>
          `)}
      </div>
    `;
    }
};
__decorate([
    property({ type: String })
], ClaimsClaimHeader.prototype, "claimId", void 0);
__decorate([
    property({ type: String })
], ClaimsClaimHeader.prototype, "claimType", void 0);
__decorate([
    property({ type: String })
], ClaimsClaimHeader.prototype, "claimStatus", void 0);
__decorate([
    property({ type: String })
], ClaimsClaimHeader.prototype, "policyId", void 0);
__decorate([
    property({ type: String })
], ClaimsClaimHeader.prototype, "policyLabel", void 0);
ClaimsClaimHeader = __decorate([
    customElement('claims-claim-header')
], ClaimsClaimHeader);
export { ClaimsClaimHeader };
