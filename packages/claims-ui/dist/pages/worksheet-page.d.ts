import { LightDomElement } from '../lib/light-dom.js';
import { type ClaimProduct } from '../lib/claim-product.js';
import '../components/claims-badge.js';
import '../components/claims-button.js';
import '../components/claims-card.js';
import '../components/claims-decision-option.js';
import '../components/claims-icon.js';
export declare class ClaimsWorksheetPage extends LightDomElement {
    claimProduct: ClaimProduct;
    claimGroup: string;
    private activeTab;
    private selectedDecision;
    private _onDecisionSelect;
    render(): import("lit-html").TemplateResult<1>;
}
declare global {
    interface HTMLElementTagNameMap {
        'claims-worksheet-page': ClaimsWorksheetPage;
    }
}
//# sourceMappingURL=worksheet-page.d.ts.map