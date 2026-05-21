var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { html } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { LightDomElement } from '../lib/light-dom.js';
import { cn } from '../lib/cn.js';
let ClaimsScopeBanner = class ClaimsScopeBanner extends LightDomElement {
    constructor() {
        super(...arguments);
        this.scope = 'case';
        this.title = '';
        this.description = '';
        this.entityId = '';
    }
    render() {
        const isCase = this.scope === 'case';
        return html `
      <div
        class=${cn('rounded-md border px-3 py-2 mb-4 flex flex-wrap items-center justify-between gap-2', isCase ? 'bg-[#f4f7fb] border-[#d8e2ec]' : 'bg-[#ebf4ff] border-[#b8d4ef]')}
      >
        <div>
          <div class="text-[12px] font-semibold text-[#0C447C]">${this.title}</div>
          <div class="text-[11px] text-muted-foreground">${this.description}</div>
        </div>
        <span
          class=${cn('text-[10px] font-bold uppercase tracking-wide px-2 py-0.5 rounded', isCase ? 'bg-white text-[#4a5568]' : 'bg-white text-[#1a365d]')}
          >${isCase ? 'Case' : 'Claim'} · ${this.entityId}</span
        >
      </div>
    `;
    }
};
__decorate([
    property({ type: String })
], ClaimsScopeBanner.prototype, "scope", void 0);
__decorate([
    property({ type: String })
], ClaimsScopeBanner.prototype, "title", void 0);
__decorate([
    property({ type: String })
], ClaimsScopeBanner.prototype, "description", void 0);
__decorate([
    property({ type: String })
], ClaimsScopeBanner.prototype, "entityId", void 0);
ClaimsScopeBanner = __decorate([
    customElement('claims-scope-banner')
], ClaimsScopeBanner);
export { ClaimsScopeBanner };
