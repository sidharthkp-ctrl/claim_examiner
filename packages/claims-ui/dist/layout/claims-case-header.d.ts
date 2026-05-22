import { LightDomElement } from '../lib/light-dom.js';
import { type ClaimProduct } from '../lib/claim-product.js';
export declare class ClaimsCaseHeader extends LightDomElement {
    caseId: string;
    insuredName: string;
    eventDate: string;
    eventDateLabel: string;
    claimCount: number;
    claimProduct: ClaimProduct;
    render(): import("lit-html").TemplateResult<1>;
}
declare global {
    interface HTMLElementTagNameMap {
        'claims-case-header': ClaimsCaseHeader;
    }
}
//# sourceMappingURL=claims-case-header.d.ts.map