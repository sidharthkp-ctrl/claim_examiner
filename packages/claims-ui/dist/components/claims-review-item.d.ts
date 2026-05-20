import { LitElement } from 'lit';
import './claims-badge.js';
export type ReviewStatus = 'success' | 'warning' | 'danger' | 'purple';
export declare class ClaimsReviewItem extends LitElement {
    static styles: import("lit").CSSResult;
    status: ReviewStatus;
    statusLabel: string;
    title: string;
    titleMuted: boolean;
    subtitle: string;
    subtitleColor: string;
    collapsed: boolean;
    render(): import("lit-html").TemplateResult<1>;
}
declare global {
    interface HTMLElementTagNameMap {
        'claims-review-item': ClaimsReviewItem;
    }
}
//# sourceMappingURL=claims-review-item.d.ts.map