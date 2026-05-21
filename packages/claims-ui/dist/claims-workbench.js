var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { html } from 'lit';
import { customElement, property, state } from 'lit/decorators.js';
import { LightDomElement } from './lib/light-dom.js';
import { DEFAULT_CASE, findClaimInCase, } from './lib/case-data.js';
import { PAGE_LABELS, isClaimScopedPage } from './lib/nav.js';
import './layout/claims-sidebar.js';
import './layout/claims-topbar.js';
import './layout/claims-sla-banner.js';
import './layout/claims-case-header.js';
import './layout/claims-claim-header.js';
import './pages/case-context-page.js';
import './pages/claimant-details-page.js';
import './pages/event-details-page.js';
import './pages/case-documents-page.js';
import './pages/claim-overview-page.js';
import './pages/policy-info-page.js';
import './pages/claim-documents-page.js';
import './pages/referral-page.js';
import './pages/worksheet-page.js';
import './pages/communications-page.js';
import './components/claims-context-selector.js';
/**
 * Workbench for one open case. The host app selects the case before navigation;
 * users only switch claim / policy inside this view.
 */
let ClaimsWorkbench = class ClaimsWorkbench extends LightDomElement {
    constructor() {
        super(...arguments);
        /** Case loaded when the user opened this screen (not switchable in-app). */
        this.caseContext = DEFAULT_CASE;
        this.activePage = 'case-context';
        this.selectedClaimId = DEFAULT_CASE.claims[0].id;
        this.selectedPolicyId = DEFAULT_CASE.claims[0].policies[0].id;
        this._onPageChange = (e) => {
            const detail = e.detail;
            if (detail?.page)
                this.activePage = detail.page;
        };
        this._onOpenClaim = (e) => {
            const detail = e.detail;
            if (!detail?.claimId)
                return;
            this.selectedClaimId = detail.claimId;
            const claim = findClaimInCase(this.caseContext, detail.claimId);
            this.selectedPolicyId = claim?.policies[0]?.id ?? this.selectedPolicyId;
            this.activePage = detail.page ?? 'claim-overview';
        };
    }
    get _activeClaim() {
        return findClaimInCase(this.caseContext, this.selectedClaimId);
    }
    get _activePolicy() {
        return this._activeClaim?.policies.find((p) => p.id === this.selectedPolicyId);
    }
    connectedCallback() {
        super.connectedCallback();
        this.addEventListener('page-change', this._onPageChange);
        this.addEventListener('open-claim', this._onOpenClaim);
    }
    disconnectedCallback() {
        super.disconnectedCallback();
        this.removeEventListener('page-change', this._onPageChange);
        this.removeEventListener('open-claim', this._onOpenClaim);
    }
    _handleClaimChanged(e) {
        this.selectedClaimId = e.detail.claimId;
        this.selectedPolicyId = e.detail.claim.policies[0]?.id ?? '';
    }
    _handlePolicyChanged(e) {
        this.selectedPolicyId = e.detail.policyId;
    }
    _renderPage() {
        const caseItem = this.caseContext;
        const claim = this._activeClaim;
        const policy = this._activePolicy;
        switch (this.activePage) {
            case 'case-context':
                return html `<claims-case-context-page
          .caseId=${caseItem.id}
          .insuredName=${caseItem.insuredName}
          .dateOfDeath=${caseItem.dateOfDeath}
          .claimsInCase=${caseItem.claims}
        ></claims-case-context-page>`;
            case 'event-details':
                return html `<claims-event-details-page .caseId=${caseItem.id}></claims-event-details-page>`;
            case 'claimant-details':
                return html `<claims-claimant-details-page .caseId=${caseItem.id}></claims-claimant-details-page>`;
            case 'case-documents':
                return html `<claims-case-documents-page .caseId=${caseItem.id}></claims-case-documents-page>`;
            case 'claim-overview':
                return html `<claims-claim-overview-page
          .caseId=${caseItem.id}
          .claimId=${claim?.id ?? ''}
          .claimType=${claim?.type ?? ''}
          .policyId=${policy?.id ?? ''}
        ></claims-claim-overview-page>`;
            case 'policy-info':
                return html `<claims-policy-info-page></claims-policy-info-page>`;
            case 'claim-documents':
                return html `<claims-claim-documents-page
          .caseId=${caseItem.id}
          .claimId=${claim?.id ?? ''}
          .policyId=${policy?.id ?? ''}
        ></claims-claim-documents-page>`;
            case 'referral':
                return html `<claims-referral-page></claims-referral-page>`;
            case 'worksheet':
                return html `<claims-worksheet-page></claims-worksheet-page>`;
            case 'comms':
                return html `<claims-communications-page .claimId=${claim?.id ?? ''}></claims-communications-page>`;
            default:
                return html `<claims-case-context-page
          .caseId=${caseItem.id}
          .insuredName=${caseItem.insuredName}
          .dateOfDeath=${caseItem.dateOfDeath}
          .claimsInCase=${caseItem.claims}
        ></claims-case-context-page>`;
        }
    }
    render() {
        const label = PAGE_LABELS[this.activePage] ?? this.activePage;
        const caseItem = this.caseContext;
        const claim = this._activeClaim;
        const policy = this._activePolicy;
        const showClaimHeader = isClaimScopedPage(this.activePage);
        return html `
      <div class="flex h-full max-h-full min-h-0 bg-[#eef3f8] text-[13px] font-sans antialiased overflow-hidden">
        <claims-sidebar .activePage=${this.activePage}></claims-sidebar>
        <main class="flex-1 flex flex-col min-h-0 min-w-0 overflow-hidden">
          <div class="shrink-0 min-w-0">
            <claims-topbar .breadcrumbLabel=${label}></claims-topbar>
            <claims-context-selector
              .caseId=${caseItem.id}
              .caseInsuredName=${caseItem.insuredName}
              .claims=${caseItem.claims}
              .selectedClaimId=${this.selectedClaimId}
              .selectedPolicyId=${this.selectedPolicyId}
              @claims-claim-changed=${this._handleClaimChanged}
              @claims-policy-changed=${this._handlePolicyChanged}
            ></claims-context-selector>
            <claims-sla-banner></claims-sla-banner>
            <claims-case-header
              .caseId=${caseItem.id}
              .insuredName=${caseItem.insuredName}
              .dateOfDeath=${caseItem.dateOfDeath}
              .claimCount=${caseItem.claims.length}
            ></claims-case-header>
            ${showClaimHeader
            ? html `<claims-claim-header
                  .claimId=${claim?.id ?? ''}
                  .claimType=${claim?.type ?? ''}
                  .claimStatus=${claim?.status ?? ''}
                  .policyId=${policy?.id ?? ''}
                  .policyLabel=${policy?.label ?? ''}
                ></claims-claim-header>`
            : null}
          </div>
          <div class="flex-1 flex flex-col min-h-0 min-w-0 overflow-hidden">${this._renderPage()}</div>
        </main>
      </div>
    `;
    }
};
__decorate([
    property({ type: Object })
], ClaimsWorkbench.prototype, "caseContext", void 0);
__decorate([
    state()
], ClaimsWorkbench.prototype, "activePage", void 0);
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
