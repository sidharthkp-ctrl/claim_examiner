import { LightDomElement } from './lib/light-dom.js';
import { type ClaimsCaseContext } from './lib/case-data.js';
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
export declare class ClaimsWorkbench extends LightDomElement {
    /** Case loaded when the user opened this screen (not switchable in-app). */
    caseContext: ClaimsCaseContext;
    private activePage;
    private selectedClaimId;
    private selectedPolicyId;
    private get _activeClaim();
    private get _activePolicy();
    connectedCallback(): void;
    disconnectedCallback(): void;
    private _onPageChange;
    private _onOpenClaim;
    private _handleClaimChanged;
    private _handlePolicyChanged;
    private _renderPage;
    render(): import("lit").TemplateResult<1>;
}
declare global {
    interface HTMLElementTagNameMap {
        'claims-workbench': ClaimsWorkbench;
    }
}
//# sourceMappingURL=claims-workbench.d.ts.map