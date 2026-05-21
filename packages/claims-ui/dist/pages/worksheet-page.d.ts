import { LightDomElement } from '../lib/light-dom.js';
import '../components/claims-badge.js';
import '../components/claims-button.js';
import '../components/claims-card.js';
import '../components/claims-review-item.js';
import '../components/claims-decision-option.js';
import '../components/claims-icon.js';
export declare class ClaimsWorksheetPage extends LightDomElement {
    private activeTab;
    private selectedDecision;
    private _onDecisionSelect;
    render(): import("lit").TemplateResult<1>;
}
declare global {
    interface HTMLElementTagNameMap {
        'claims-worksheet-page': ClaimsWorksheetPage;
    }
}
//# sourceMappingURL=worksheet-page.d.ts.map