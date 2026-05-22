import { LitElement } from 'lit';
import type { BadgeVariant } from './claims-badge.js';
import './claims-badge.js';
/** Reusable list row: activity logs, communication entries, etc. */
export declare class ClaimsFeedItem extends LitElement {
    static styles: import("lit").CSSResult;
    initials: string;
    avatarBg: string;
    avatarColor: string;
    title: string;
    timestamp: string;
    subtitle: string;
    content: string;
    description: string;
    badgeLabel: string;
    badgeVariant: BadgeVariant;
    bordered: boolean;
    render(): import("lit-html").TemplateResult<1>;
}
declare global {
    interface HTMLElementTagNameMap {
        'claims-feed-item': ClaimsFeedItem;
    }
}
//# sourceMappingURL=claims-feed-item.d.ts.map