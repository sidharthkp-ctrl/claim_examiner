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
import { Icons } from '../lib/icons.js';
import '../components/claims-badge.js';
let ClaimsSlaBanner = class ClaimsSlaBanner extends LightDomElement {
    constructor() {
        super(...arguments);
        this.claimProduct = 'death';
    }
    render() {
        const product = claimProductFromAttr(this.claimProduct);
        if (product === 'ti') {
            return html `
        <div
          class="bg-gradient-to-r from-[#EEEDFE] to-[#f8f7ff] border-b border-[#c4b5fd]/60 px-5 py-2 flex items-center gap-4 text-[11px] flex-wrap"
        >
          <span class="text-[#534AB7] font-medium flex items-center gap-1">
            ${Icons.clock()}
            Acknowledgment SLA (T-24): due within Fair Claim guidelines
          </span>
          <span class="text-[#534AB7]">Claim type: <strong>Terminal Illness</strong></span>
          <span class="text-[#534AB7]">Claim form received: 05/20/2026</span>
          <span class="text-[#534AB7]">Medical review (T-07): <strong>Mandatory — in queue</strong></span>
          <div class="ml-auto">
            <claims-badge variant="warning" className="text-[10px]">4 items pending</claims-badge>
          </div>
        </div>
      `;
        }
        return html `
      <div
        class="bg-gradient-to-r from-[#EAF3DE] to-[#f4faf0] border-b border-[#97C459]/60 px-5 py-2 flex items-center gap-4 text-[11px] flex-wrap"
      >
        <span class="text-[#27500A] font-medium flex items-center gap-1">
          ${Icons.clock()}
          SLA: 8 days remaining
        </span>
        <span class="text-[#3B6D11]">Claim type: <strong>Death</strong></span>
        <span class="text-[#3B6D11]">Submitted: 04/20/2026</span>
        <span class="text-[#3B6D11]">State requirements (D-23): TX — standard</span>
        <div class="ml-auto">
          <claims-badge variant="warning" className="text-[10px]">3 items pending</claims-badge>
        </div>
      </div>
    `;
    }
};
__decorate([
    property({ type: String, attribute: 'claim-product' })
], ClaimsSlaBanner.prototype, "claimProduct", void 0);
ClaimsSlaBanner = __decorate([
    customElement('claims-sla-banner')
], ClaimsSlaBanner);
export { ClaimsSlaBanner };
