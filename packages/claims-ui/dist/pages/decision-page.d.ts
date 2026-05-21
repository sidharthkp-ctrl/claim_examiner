import { LightDomElement } from '../lib/light-dom.js';
import '../components/claims-badge.js';
import '../components/claims-button.js';
import '../components/claims-card.js';
import '../components/claims-decision-option.js';
export declare class ClaimsDecisionPage extends LightDomElement {
    private selectedDecision;
    private _onDecisionSelect;
    render(): import("lit").TemplateResult<1>;
}
declare global {
    interface HTMLElementTagNameMap {
        'claims-decision-page': ClaimsDecisionPage;
    }
}
//# sourceMappingURL=decision-page.d.ts.map