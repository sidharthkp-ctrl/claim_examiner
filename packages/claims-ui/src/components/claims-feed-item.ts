import { html, css, LitElement } from 'lit'
import { customElement, property } from 'lit/decorators.js'
import type { BadgeVariant } from './claims-badge.js'
import './claims-badge.js'

const styles = css`
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
`

/** Reusable list row: activity logs, communication entries, etc. */
@customElement('claims-feed-item')
export class ClaimsFeedItem extends LitElement {
  static styles = styles

  @property({ type: String }) initials = ''
  @property({ type: String }) avatarBg = '#E6F1FB'
  @property({ type: String }) avatarColor = '#185FA5'
  @property({ type: String }) title = ''
  @property({ type: String }) timestamp = ''
  @property({ type: String }) subtitle = ''
  @property({ type: String }) content = ''
  @property({ type: String }) description = ''
  @property({ type: String }) badgeLabel = ''
  @property({ type: String }) badgeVariant: BadgeVariant = 'info'
  @property({ type: Boolean }) bordered = true

  render() {
    const hasBadge = Boolean(this.badgeLabel)
    return html`
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
              ? html`<claims-badge variant=${this.badgeVariant}>${this.badgeLabel}</claims-badge>`
              : ''}
            ${this.timestamp ? html`<span class="timestamp">${this.timestamp}</span>` : ''}
          </div>
          ${this.subtitle ? html`<div class="subtitle">${this.subtitle}</div>` : ''}
          ${this.description ? html`<div class="description">${this.description}</div>` : ''}
          ${this.content ? html`<div class="content">${this.content}</div>` : ''}
        </div>
      </div>
    `
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'claims-feed-item': ClaimsFeedItem
  }
}
