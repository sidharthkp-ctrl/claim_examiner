var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { html } from 'lit';
import { customElement, state } from 'lit/decorators.js';
import { LightDomElement } from './lib/light-dom.js';
import { PAGE_LABELS } from './lib/nav.js';
import './layout/claims-sidebar.js';
import './layout/claims-topbar.js';
import './layout/claims-sla-banner.js';
import './layout/claims-claim-header.js';
import './pages/case-context-page.js';
import './pages/event-details-page.js';
import './pages/policy-info-page.js';
import './pages/documents-page.js';
import './pages/integrations-page.js';
import './pages/medical-page.js';
import './pages/referral-page.js';
import './pages/worksheet-page.js';
import './pages/tools-page.js';
import './pages/communications-page.js';
import './pages/decision-page.js';
let ClaimsWorkbench = class ClaimsWorkbench extends LightDomElement {
    constructor() {
        super(...arguments);
        this.activePage = 'case-context';
        this._onPageChange = (e) => {
            const detail = e.detail;
            if (detail?.page) {
                this.activePage = detail.page;
            }
        };
    }
    connectedCallback() {
        super.connectedCallback();
        this.addEventListener('page-change', this._onPageChange);
    }
    disconnectedCallback() {
        super.disconnectedCallback();
        this.removeEventListener('page-change', this._onPageChange);
    }
    _renderPage() {
        switch (this.activePage) {
            case 'case-context':
                return html `<claims-case-context-page></claims-case-context-page>`;
            case 'event-details':
                return html `<claims-event-details-page></claims-event-details-page>`;
            case 'policy-info':
                return html `<claims-policy-info-page></claims-policy-info-page>`;
            case 'documents':
                return html `<claims-documents-page></claims-documents-page>`;
            case 'integrations':
                return html `<claims-integrations-page></claims-integrations-page>`;
            case 'medical':
                return html `<claims-medical-page></claims-medical-page>`;
            case 'referral':
                return html `<claims-referral-page></claims-referral-page>`;
            case 'worksheet':
                return html `<claims-worksheet-page></claims-worksheet-page>`;
            case 'tools':
                return html `<claims-tools-page></claims-tools-page>`;
            case 'comms':
                return html `<claims-communications-page></claims-communications-page>`;
            case 'decision':
                return html `<claims-decision-page></claims-decision-page>`;
            default:
                return html `<claims-case-context-page></claims-case-context-page>`;
        }
    }
    render() {
        const label = PAGE_LABELS[this.activePage] ?? this.activePage;
        return html `
      <div class="flex h-full max-h-full min-h-0 bg-[#eef3f8] text-[13px] font-sans antialiased overflow-hidden">
        <claims-sidebar .activePage=${this.activePage}></claims-sidebar>
        <main class="flex-1 flex flex-col min-h-0 min-w-0 overflow-hidden">
          <div class="shrink-0 min-w-0">
            <claims-topbar .breadcrumbLabel=${label}></claims-topbar>
            <claims-sla-banner></claims-sla-banner>
            <claims-claim-header></claims-claim-header>
          </div>
          <div class="flex-1 flex flex-col min-h-0 min-w-0 overflow-hidden">${this._renderPage()}</div>
        </main>
      </div>
    `;
    }
};
__decorate([
    state()
], ClaimsWorkbench.prototype, "activePage", void 0);
ClaimsWorkbench = __decorate([
    customElement('claims-workbench')
], ClaimsWorkbench);
export { ClaimsWorkbench };
