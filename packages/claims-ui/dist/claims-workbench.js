// import { html } from 'lit'
// import { customElement, state, property } from 'lit/decorators.js'
// import { LightDomElement } from './lib/light-dom.js'
// import { PAGE_LABELS } from './lib/nav.js'
// import './layout/claims-sidebar.js'
// import './layout/claims-topbar.js'
// import './layout/claims-sla-banner.js'
// import './layout/claims-claim-header.js'
// import './pages/case-context-page.js'
// import './pages/event-details-page.js'
// import './pages/policy-info-page.js'
// import './pages/documents-page.js'
// import './pages/integrations-page.js'
// import './pages/medical-page.js'
// import './pages/referral-page.js'
// import './pages/worksheet-page.js'
// import './pages/tools-page.js'
// import './pages/communications-page.js'
// import './pages/decision-page.js'
// import type {
//   ClaimsSelectorItem,
//   ClaimChangedDetail,
//   PolicyChangedDetail,
// } from '../../claims-ui/src/components/claims-context-selector.js'
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
// @customElement('claims-workbench')
// export class ClaimsWorkbench extends LightDomElement {
//   @state() private activePage = 'case-context'
//     // ─────────────────────────────────────────────────────────────────────────
//     // ✅ ADD: claims data + selection state
//     // ─────────────────────────────────────────────────────────────────────────
//     /**
//      * Pass the full list of available claims from the parent router/shell.
//      * Example:
//      *   <claims-case-context-page .claims=${allClaims}></claims-case-context-page>
//      */
//     @property({ type: Array }) claims: ClaimsSelectorItem[] = []
//     /** Currently selected claim ID — controlled from outside or self-managed */
//     @property({ type: String }) selectedClaimId = ''
//     /** Currently selected policy ID — controlled from outside or self-managed */
//     @property({ type: String }) selectedPolicyId = ''
//     // ─────────────────────────────────────────────────────────────────────────
//     // Existing handler (unchanged)
//     // ─────────────────────────────────────────────────────────────────────────
//      // ─────────────────────────────────────────────────────────────────────────
//       // ✅ ADD: selector event handlers
//       // ─────────────────────────────────────────────────────────────────────────
//       private _handleClaimChanged(e: CustomEvent<ClaimChangedDetail>) {
//         this.selectedClaimId = e.detail.claimId
//         // The event already bubbles up to the parent router — no need to re-dispatch.
//         // If you manage claim data locally, update whatever reactive state drives
//         // the card content below (e.g. swap in a different claim object).
//       }
//       private _handlePolicyChanged(e: CustomEvent<PolicyChangedDetail>) {
//         this.selectedPolicyId = e.detail.policyId
//         // Same as above — bubbles up automatically.
//       }
//   connectedCallback() {
//     super.connectedCallback()
//     this.addEventListener('page-change', this._onPageChange as EventListener)
//   }
//   disconnectedCallback() {
//     super.disconnectedCallback()
//     this.removeEventListener('page-change', this._onPageChange as EventListener)
//   }
//   private _onPageChange = (e: Event) => {
//     const detail = (e as CustomEvent<{ page: string }>).detail
//     if (detail?.page) {
//       this.activePage = detail.page
//     }
//   }
//   private _renderPage() {
//     switch (this.activePage) {
//       case 'case-context':
//         return html`<claims-case-context-page></claims-case-context-page>`
//       case 'event-details':
//         return html`<claims-event-details-page></claims-event-details-page>`
//       case 'policy-info':
//         return html`<claims-policy-info-page></claims-policy-info-page>`
//       case 'documents':
//         return html`<claims-documents-page></claims-documents-page>`
//       case 'integrations':
//         return html`<claims-integrations-page></claims-integrations-page>`
//       case 'medical':
//         return html`<claims-medical-page></claims-medical-page>`
//       case 'referral':
//         return html`<claims-referral-page></claims-referral-page>`
//       case 'worksheet':
//         return html`<claims-worksheet-page></claims-worksheet-page>`
//       case 'tools':
//         return html`<claims-tools-page></claims-tools-page>`
//       case 'comms':
//         return html`<claims-communications-page></claims-communications-page>`
//       case 'decision':
//         return html`<claims-decision-page></claims-decision-page>`
//       default:
//         return html`<claims-case-context-page></claims-case-context-page>`
//     }
//   }
//   render() {
//     const label = PAGE_LABELS[this.activePage] ?? this.activePage
//     return html`
//       <div class="flex h-full max-h-full min-h-0 bg-[#eef3f8] text-[13px] font-sans antialiased overflow-hidden">
//         <claims-sidebar .activePage=${this.activePage}></claims-sidebar>
//         <main class="flex-1 flex flex-col min-h-0 min-w-0 overflow-hidden">
//           <div class="shrink-0 min-w-0">
//             <claims-topbar .breadcrumbLabel=${label}></claims-topbar>
//              <claims-context-selector
//           .claims=${this.claims}
//           .selectedClaimId=${this.selectedClaimId}
//           .selectedPolicyId=${this.selectedPolicyId}
//           @claims-claim-changed=${this._handleClaimChanged}
//           @claims-policy-changed=${this._handlePolicyChanged}
//         ></claims-context-selector>
//             <claims-sla-banner></claims-sla-banner>
//             <claims-claim-header></claims-claim-header>
//           </div>
//           <div class="flex-1 flex flex-col min-h-0 min-w-0 overflow-hidden">${this._renderPage()}</div>
//         </main>
//       </div>
//     `
//   }
// }
// declare global {
//   interface HTMLElementTagNameMap {
//     'claims-workbench': ClaimsWorkbench
//   }
// }
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
import './components/claims-context-selector.js';
// ✅ Clean CLM- and POL- prefixed IDs
const DEFAULT_CLAIMS = [
    {
        id: 'CLM-001',
        personName: 'John A. Smith',
        policies: [
            { id: 'POL-001', label: 'Life — $500,000' },
            { id: 'POL-002', label: 'Term — $250,000' },
        ],
    },
    {
        id: 'CLM-002',
        personName: 'Maria J. Torres',
        policies: [
            { id: 'POL-003', label: 'Life — $750,000' },
        ],
    },
    {
        id: 'CLM-003',
        personName: 'Robert K. Chen',
        policies: [
            { id: 'POL-004', label: 'Term — $1,000,000' },
            { id: 'POL-005', label: 'Life — $300,000' },
            { id: 'POL-006', label: 'Accidental Death — $200,000' },
        ],
    },
];
let ClaimsWorkbench = class ClaimsWorkbench extends LightDomElement {
    constructor() {
        super(...arguments);
        this.activePage = 'case-context';
        this.claims = DEFAULT_CLAIMS;
        this.selectedClaimId = DEFAULT_CLAIMS[0].id; // 'CLM-001'
        this.selectedPolicyId = DEFAULT_CLAIMS[0].policies[0].id; // 'POL-001'
        this._onPageChange = (e) => {
            const detail = e.detail;
            if (detail?.page) {
                this.activePage = detail.page;
            }
        };
    }
    _handleClaimChanged(e) {
        this.selectedClaimId = e.detail.claimId;
        const claim = this.claims.find(c => c.id === e.detail.claimId);
        this.selectedPolicyId = claim?.policies[0]?.id ?? '';
    }
    _handlePolicyChanged(e) {
        this.selectedPolicyId = e.detail.policyId;
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
            <claims-context-selector
              .claims=${this.claims}
              .selectedClaimId=${this.selectedClaimId}
              .selectedPolicyId=${this.selectedPolicyId}
              @claims-claim-changed=${this._handleClaimChanged}
              @claims-policy-changed=${this._handlePolicyChanged}
            ></claims-context-selector>
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
__decorate([
    state()
], ClaimsWorkbench.prototype, "claims", void 0);
__decorate([
    state()
], ClaimsWorkbench.prototype, "selectedClaimId", void 0);
__decorate([
    state()
], ClaimsWorkbench.prototype, "selectedPolicyId", void 0);
ClaimsWorkbench = __decorate([
    customElement('claims-workbench')
], ClaimsWorkbench);
export { ClaimsWorkbench };
