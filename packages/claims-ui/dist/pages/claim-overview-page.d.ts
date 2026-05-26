import { LightDomElement } from '../lib/light-dom.js';
import { type ClaimProduct } from '../lib/claim-product.js';
import '../components/claims-badge.js';
import '../components/claims-button.js';
import '../components/claims-card.js';
import '../components/claims-timeline-item.js';
import '../components/claims-scope-banner.js';
export declare class ClaimsClaimOverviewPage extends LightDomElement {
    caseId: string;
    claimId: string;
    claimType: string;
    policyId: string;
    claimProduct: ClaimProduct;
    render(): import("lit-html").TemplateResult<1>;
}
declare global {
    interface HTMLElementTagNameMap {
        'claims-claim-overview-page': ClaimsClaimOverviewPage;
    }
}
//# sourceMappingURL=claim-overview-page.d.ts.map