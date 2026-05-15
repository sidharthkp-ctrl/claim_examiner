import { type TemplateResult } from 'lit';
import { LightDomElement } from '../lib/light-dom.js';
import '../components/claims-badge.js';
import '../components/claims-card.js';
export declare class ClaimsIntegrationsPage extends LightDomElement {
    private _integrationCard;
    private _activityLogItem;
    render(): TemplateResult<1>;
}
declare global {
    interface HTMLElementTagNameMap {
        'claims-integrations-page': ClaimsIntegrationsPage;
    }
}
//# sourceMappingURL=integrations-page.d.ts.map