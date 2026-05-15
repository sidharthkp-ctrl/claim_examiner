import { type TemplateResult } from 'lit';
import { LightDomElement } from '../lib/light-dom.js';
import '../components/claims-badge.js';
import '../components/claims-button.js';
import '../components/claims-card.js';
export declare class ClaimsWorksheetPage extends LightDomElement {
    private activeTab;
    private _reviewItem;
    private _systemAssessmentTab;
    private _examinerReviewTab;
    render(): TemplateResult<1>;
}
declare global {
    interface HTMLElementTagNameMap {
        'claims-worksheet-page': ClaimsWorksheetPage;
    }
}
//# sourceMappingURL=worksheet-page.d.ts.map