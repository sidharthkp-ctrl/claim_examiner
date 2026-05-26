import { LightDomElement } from '../lib/light-dom.js';
import { type ClaimProduct } from '../lib/claim-product.js';
import type { ClaimsBeneficiary } from '../lib/case-data.js';
import '../components/claims-badge.js';
import '../components/claims-button.js';
import '../components/claims-card.js';
import '../components/claims-scope-banner.js';
import '../components/claims-beneficiaries-section.js';
export declare class ClaimsClaimantDetailsPage extends LightDomElement {
    caseId: string;
    beneficiaries: ClaimsBeneficiary[];
    claimProduct: ClaimProduct;
    claimGroup: string;
    private _filingParty;
    render(): import("lit-html").TemplateResult<1>;
}
declare global {
    interface HTMLElementTagNameMap {
        'claims-claimant-details-page': ClaimsClaimantDetailsPage;
    }
}
//# sourceMappingURL=claimant-details-page.d.ts.map