import { LightDomElement } from '../lib/light-dom.js';
import { type ClaimProduct } from '../lib/claim-product.js';
import type { ClaimsSelectorItem } from '../lib/case-data.js';
import '../components/claims-badge.js';
import '../components/claims-button.js';
import '../components/claims-card.js';
import '../components/claims-scope-banner.js';
export declare class ClaimsCaseContextPage extends LightDomElement {
    caseId: string;
    insuredName: string;
    eventDate: string;
    eventDateLabel: string;
    claimsInCase: ClaimsSelectorItem[];
    claimProduct: ClaimProduct;
    claimGroup: string;
    private _openClaim;
    render(): import("lit").TemplateResult<1>;
}
declare global {
    interface HTMLElementTagNameMap {
        'claims-case-context-page': ClaimsCaseContextPage;
    }
}
//# sourceMappingURL=case-context-page.d.ts.map