import { LightDomElement } from '../lib/light-dom.js';
import { type ClaimProduct } from '../lib/claim-product.js';
import '../components/claims-badge.js';
import '../components/claims-card.js';
export declare class ClaimsPolicyInfoPage extends LightDomElement {
    claimProduct: ClaimProduct;
    claimGroup: string;
    render(): import("lit").TemplateResult<1>;
}
declare global {
    interface HTMLElementTagNameMap {
        'claims-policy-info-page': ClaimsPolicyInfoPage;
    }
}
//# sourceMappingURL=policy-info-page.d.ts.map