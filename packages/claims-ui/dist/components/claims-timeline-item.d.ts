import { LitElement } from 'lit';
export declare class ClaimsTimelineItem extends LitElement {
    static styles: import("lit").CSSResult;
    color: string;
    title: string;
    time: string;
    active: boolean;
    pending: boolean;
    render(): import("lit").TemplateResult<1>;
}
declare global {
    interface HTMLElementTagNameMap {
        'claims-timeline-item': ClaimsTimelineItem;
    }
}
//# sourceMappingURL=claims-timeline-item.d.ts.map