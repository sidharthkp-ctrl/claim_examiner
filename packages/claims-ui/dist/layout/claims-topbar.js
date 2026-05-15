var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { html } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { LightDomElement } from '../lib/light-dom.js';
import { Icons } from '../lib/icons.js';
let ClaimsTopbar = class ClaimsTopbar extends LightDomElement {
    constructor() {
        super(...arguments);
        this.breadcrumbLabel = '';
    }
    render() {
        return html `
      <header
        class="bg-card border-b border-border px-4 md:px-5 py-2.5 flex items-center gap-3 shadow-sm min-h-[48px] min-w-0"
      >
        <nav class="text-[12px] text-muted-foreground flex items-center gap-1 min-w-0 shrink">
          <a href="#" class="text-[#185FA5] hover:underline font-medium">Home</a>
          <span>/</span>
          <span class="text-foreground font-medium">${this.breadcrumbLabel}</span>
        </nav>
        <div class="ml-auto flex items-center gap-2 md:gap-3 shrink-0 flex-wrap justify-end">
          <span
            class="text-[10px] font-semibold uppercase tracking-wide text-[#534AB7] bg-[#EEEDFE] border border-[#c4b5fd] px-2 py-0.5 rounded-full"
            >AI-Assisted Review</span
          >
          <span class="text-[11px] text-muted-foreground hidden sm:inline">Examiner: Sarah M.</span>
          <div
            class="flex items-center gap-2 pl-2 border-l border-border"
          >
            <span
              class="w-7 h-7 rounded-full bg-[#185FA5] text-white text-[10px] font-semibold flex items-center justify-center"
              >SM</span
            >
            <button
              type="button"
              class="flex items-center gap-1 px-2.5 py-1.5 text-[11px] border border-border rounded-md text-muted-foreground hover:bg-secondary hover:border-[#185FA5]/30 transition-colors"
            >
              ${Icons.logOut()}
              Release
            </button>
          </div>
        </div>
      </header>
    `;
    }
};
__decorate([
    property({ type: String })
], ClaimsTopbar.prototype, "breadcrumbLabel", void 0);
ClaimsTopbar = __decorate([
    customElement('claims-topbar')
], ClaimsTopbar);
export { ClaimsTopbar };
