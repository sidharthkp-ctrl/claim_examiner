import { LightDomElement } from './lib/light-dom.js';
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
export declare class ClaimsWorkbench extends LightDomElement {
    private activePage;
    private claims;
    private selectedClaimId;
    private selectedPolicyId;
    private _handleClaimChanged;
    private _handlePolicyChanged;
    connectedCallback(): void;
    disconnectedCallback(): void;
    private _onPageChange;
    private _renderPage;
    render(): import("lit-html").TemplateResult<1>;
}
declare global {
    interface HTMLElementTagNameMap {
        'claims-workbench': ClaimsWorkbench;
    }
}
//# sourceMappingURL=claims-workbench.d.ts.map