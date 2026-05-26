import { type ClaimProduct } from '../lib/claim-product.js';
import { LightDomElement } from '../lib/light-dom.js';
import '../components/claims-badge.js';
import '../components/claims-button.js';
import '../components/claims-card.js';
import '../components/claims-icon.js';
import '../components/claims-integration-card.js';
import '../components/claims-feed-item.js';
import '../components/claims-scope-banner.js';
export declare class ClaimsClaimDocumentsPage extends LightDomElement {
    caseId: string;
    claimId: string;
    policyId: string;
    claimProduct: ClaimProduct;
    render(): import("lit").TemplateResult<1>;
}
declare global {
    interface HTMLElementTagNameMap {
        'claims-claim-documents-page': ClaimsClaimDocumentsPage;
    }
}
//# sourceMappingURL=claim-documents-page.d.ts.map