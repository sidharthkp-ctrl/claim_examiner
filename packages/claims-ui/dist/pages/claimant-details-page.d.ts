import { LightDomElement } from '../lib/light-dom.js';
import { type ClaimProduct } from '../lib/claim-product.js';
import '../components/claims-badge.js';
import '../components/claims-button.js';
import '../components/claims-card.js';
import '../components/claims-scope-banner.js';
export declare class ClaimsClaimantDetailsPage extends LightDomElement {
    caseId: string;
    claimProduct: ClaimProduct;
    claimGroup: string;
    render(): import("lit").TemplateResult<1>;
}
declare global {
    interface HTMLElementTagNameMap {
        'claims-claimant-details-page': ClaimsClaimantDetailsPage;
    }
}
//# sourceMappingURL=claimant-details-page.d.ts.map