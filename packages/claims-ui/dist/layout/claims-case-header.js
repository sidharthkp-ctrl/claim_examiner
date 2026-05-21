var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { html } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { LightDomElement } from '../lib/light-dom.js';
let ClaimsCaseHeader = class ClaimsCaseHeader extends LightDomElement {
    constructor() {
        super(...arguments);
        this.caseId = '';
        this.insuredName = '';
        this.dateOfDeath = '';
        this.claimCount = 0;
    }
    render() {
        const fields = [
            { label: 'Case ID', value: this.caseId || '—' },
            { label: 'Insured', value: this.insuredName || '—' },
            { label: 'Date of death', value: this.dateOfDeath || '—' },
            { label: 'Claims in case', value: String(this.claimCount), color: '#185FA5' },
            { label: 'Case status', value: 'Open — multi-claim', color: '#BA7517' },
            { label: 'Assigned examiner', value: 'Sarah M.' },
            { label: 'SLA (case)', value: '8 days', color: '#3B6D11' },
        ];
        return html `
      <div
        class="bg-[#f4f7fb] border-b border-border px-4 md:px-5 py-3 grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-x-5 gap-y-2"
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
], ClaimsCaseHeader.prototype, "caseId", void 0);
__decorate([
    property({ type: String })
], ClaimsCaseHeader.prototype, "insuredName", void 0);
__decorate([
    property({ type: String })
], ClaimsCaseHeader.prototype, "dateOfDeath", void 0);
__decorate([
    property({ type: Number })
], ClaimsCaseHeader.prototype, "claimCount", void 0);
ClaimsCaseHeader = __decorate([
    customElement('claims-case-header')
], ClaimsCaseHeader);
export { ClaimsCaseHeader };
