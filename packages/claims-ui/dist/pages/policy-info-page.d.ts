import { LightDomElement } from '../lib/light-dom.js';
import { type ClaimProduct } from '../lib/claim-product.js';
import type { ClaimsBeneficiary } from '../lib/case-data.js';
import '../components/claims-badge.js';
import '../components/claims-card.js';
import '../components/claims-beneficiaries-section.js';
export declare class ClaimsPolicyInfoPage extends LightDomElement {
    claimProduct: ClaimProduct;
    claimGroup: string;
    beneficiaries: ClaimsBeneficiary[];
    render(): import("lit-html").TemplateResult<1>;
}
declare global {
    interface HTMLElementTagNameMap {
        'claims-policy-info-page': ClaimsPolicyInfoPage;
    }
}
//# sourceMappingURL=policy-info-page.d.ts.map