import { LightDomElement } from './lib/light-dom.js';
import { type ClaimProduct } from './lib/claim-product.js';
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
import './pages/medical-page.js';
import './pages/referral-page.js';
import './pages/worksheet-page.js';
import './pages/communications-page.js';
import './components/claims-context-selector.js';
/**
 * Examiner workbench for one open case. Host app selects product (death | ti) and case before navigation.
 */
export declare class ClaimsWorkbench extends LightDomElement {
    claimProduct: ClaimProduct;
    claimGroup: string;
    private activePage;
    private caseContext;
    private selectedClaimId;
    private selectedPolicyId;
    private hudExpanded;
    private get _product();
    private get _activeClaim();
    private get _activePolicy();
    connectedCallback(): void;
    disconnectedCallback(): void;
    updated(changed: Map<string, unknown>): void;
    private _initCase;
    private _onPageChange;
    private _onOpenClaim;
    private _onPortalHome;
    private _handleClaimChanged;
    private _handlePolicyChanged;
    private _renderPage;
    private _renderGroupHud;
    render(): import("lit").TemplateResult<1>;
}
declare global {
    interface HTMLElementTagNameMap {
        'claims-workbench': ClaimsWorkbench;
    }
}
//# sourceMappingURL=claims-workbench.d.ts.map