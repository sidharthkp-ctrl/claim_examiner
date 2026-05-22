import { LightDomElement } from '../lib/light-dom.js';
import { type ClaimProduct } from '../lib/claim-product.js';
import '../components/claims-badge.js';
import '../components/claims-button.js';
import '../components/claims-card.js';
import '../components/claims-scope-banner.js';
export declare class ClaimsMedicalPage extends LightDomElement {
    claimProduct: ClaimProduct;
    render(): import("lit-html").TemplateResult<1>;
}
declare global {
    interface HTMLElementTagNameMap {
        'claims-medical-page': ClaimsMedicalPage;
    }
}
//# sourceMappingURL=medical-page.d.ts.map