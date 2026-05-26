import { LitElement } from 'lit';
import type { BadgeVariant } from './claims-badge.js';
import './claims-badge.js';
export declare class ClaimsIntegrationCard extends LitElement {
    static styles: import("lit").CSSResult;
    iconBg: string;
    iconColor: string;
    title: string;
    description: string;
    status: string;
    statusVariant: BadgeVariant;
    render(): import("lit").TemplateResult<1>;
}
declare global {
    interface HTMLElementTagNameMap {
        'claims-integration-card': ClaimsIntegrationCard;
    }
}
//# sourceMappingURL=claims-integration-card.d.ts.map