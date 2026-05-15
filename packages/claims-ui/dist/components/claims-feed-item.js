var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { html, css, LitElement } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import './claims-badge.js';
const styles = css `
  :host {
    display: block;
  }

  :host([bordered]) .item {
    border-bottom: 1px solid var(--border, #d8e2ec);
  }

  .item {
    display: flex;
    gap: 0.625rem;
    padding: 0.625rem 0;
  }

  .avatar {
    width: 1.75rem;
    height: 1.75rem;
    min-width: 1.75rem;
    border-radius: 9999px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 9px;
    font-weight: 500;
  }

  .body {
    flex: 1 1 auto;
    min-width: 0;
  }

  .meta {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    flex-wrap: wrap;
  }

  .title {
    font-size: 12px;
    font-weight: 500;
    color: var(--foreground, #1a2332);
  }

  .timestamp {
    font-size: 11px;
    color: var(--muted-foreground, #5c6b7a);
    margin-left: auto;
  }

  .subtitle {
    font-size: 11px;
    color: var(--muted-foreground, #5c6b7a);
  }

  .content {
    font-size: 12px;
    color: var(--foreground, #1a2332);
    margin-top: 0.25rem;
    line-height: 1.5;
  }

  .description {
    font-size: 11px;
    color: var(--foreground, #1a2332);
    margin-top: 0.125rem;
  }
`;
/** Reusable list row: activity logs, communication entries, etc. */
let ClaimsFeedItem = class ClaimsFeedItem extends LitElement {
    constructor() {
        super(...arguments);
        this.initials = '';
        this.avatarBg = '#E6F1FB';
        this.avatarColor = '#185FA5';
        this.title = '';
        this.timestamp = '';
        this.subtitle = '';
        this.content = '';
        this.description = '';
        this.badgeLabel = '';
        this.badgeVariant = 'info';
        this.bordered = true;
    }
    static { this.styles = styles; }
    render() {
        const hasBadge = Boolean(this.badgeLabel);
        return html `
      <div class="item">
        <div
          class="avatar"
          style="background-color: ${this.avatarBg}; color: ${this.avatarColor}"
        >
          ${this.initials}
        </div>
        <div class="body">
          <div class="meta">
            <span class="title">${this.title}</span>
            ${hasBadge
            ? html `<claims-badge variant=${this.badgeVariant}>${this.badgeLabel}</claims-badge>`
            : ''}
            ${this.timestamp ? html `<span class="timestamp">${this.timestamp}</span>` : ''}
          </div>
          ${this.subtitle ? html `<div class="subtitle">${this.subtitle}</div>` : ''}
          ${this.description ? html `<div class="description">${this.description}</div>` : ''}
          ${this.content ? html `<div class="content">${this.content}</div>` : ''}
        </div>
      </div>
    `;
    }
};
__decorate([
    property({ type: String })
], ClaimsFeedItem.prototype, "initials", void 0);
__decorate([
    property({ type: String })
], ClaimsFeedItem.prototype, "avatarBg", void 0);
__decorate([
    property({ type: String })
], ClaimsFeedItem.prototype, "avatarColor", void 0);
__decorate([
    property({ type: String })
], ClaimsFeedItem.prototype, "title", void 0);
__decorate([
    property({ type: String })
], ClaimsFeedItem.prototype, "timestamp", void 0);
__decorate([
    property({ type: String })
], ClaimsFeedItem.prototype, "subtitle", void 0);
__decorate([
    property({ type: String })
], ClaimsFeedItem.prototype, "content", void 0);
__decorate([
    property({ type: String })
], ClaimsFeedItem.prototype, "description", void 0);
__decorate([
    property({ type: String })
], ClaimsFeedItem.prototype, "badgeLabel", void 0);
__decorate([
    property({ type: String })
], ClaimsFeedItem.prototype, "badgeVariant", void 0);
__decorate([
    property({ type: Boolean })
], ClaimsFeedItem.prototype, "bordered", void 0);
ClaimsFeedItem = __decorate([
    customElement('claims-feed-item')
], ClaimsFeedItem);
export { ClaimsFeedItem };
