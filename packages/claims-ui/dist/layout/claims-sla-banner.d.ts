import { LightDomElement } from '../lib/light-dom.js';
import { type ClaimProduct } from '../lib/claim-product.js';
import '../components/claims-badge.js';
export declare class ClaimsSlaBanner extends LightDomElement {
    claimProduct: ClaimProduct;
    render(): import("lit-html").TemplateResult<1>;
}
declare global {
    interface HTMLElementTagNameMap {
        'claims-sla-banner': ClaimsSlaBanner;
    }
}
//# sourceMappingURL=claims-sla-banner.d.ts.map