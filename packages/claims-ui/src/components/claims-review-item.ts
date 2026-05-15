import { html, css, LitElement } from 'lit'
import { customElement, property } from 'lit/decorators.js'
import { cn } from '../lib/cn.js'
import type { BadgeVariant } from './claims-badge.js'
import './claims-badge.js'

export type ReviewStatus = 'success' | 'warning' | 'danger' | 'purple'

const statusBorderColors: Record<ReviewStatus, string> = {
  success: '#97C459',
  warning: '#EF9F27',
  danger: '#E24B4A',
  purple: '#AFA9EC',
}

const styles = css`
  :host {
    display: block;
    margin-bottom: 1rem;
  }

  :host(:last-child) {
    margin-bottom: 0;
  }

  .shell {
    border: 1px solid var(--border, #d8e2ec);
    border-radius: 0.375rem;
    overflow: hidden;
  }

  .header {
    padding: 0.5rem 0.75rem;
    background: var(--card, #ffffff);
    display: flex;
    align-items: flex-start;
    gap: 0.5rem;
  }

  .body {
    padding: 0.625rem 0.75rem;
    background: var(--secondary, #f4f7fb);
    border-top: 1px solid var(--border, #d8e2ec);
  }

  .main {
    flex: 1 1 auto;
    min-width: 0;
  }

  .title {
    font-size: 12px;
    font-weight: 500;
    color: var(--foreground, #1a2332);
  }

  .title--muted {
    color: var(--muted-foreground, #5c6b7a);
  }

  .subtitle {
    font-size: 11px;
    color: var(--muted-foreground, #5c6b7a);
  }
`

@customElement('claims-review-item')
export class ClaimsReviewItem extends LitElement {
  static styles = styles

  @property({ type: String }) status: ReviewStatus = 'success'
  @property({ type: String }) statusLabel = ''
  @property({ type: String }) title = ''
  @property({ type: Boolean }) titleMuted = false
  @property({ type: String }) subtitle = ''
  @property({ type: String }) subtitleColor = ''
  @property({ type: Boolean }) collapsed = false

  render() {
    return html`
      <div class="shell">
        <div class="header" style="border-left: 3px solid ${statusBorderColors[this.status]}">
          <claims-badge variant=${this.status}><slot name="status">${this.statusLabel}</slot></claims-badge>
          <div class="main">
            <div class=${cn('title', this.titleMuted && 'title--muted')}>${this.title}</div>
            ${this.subtitle
              ? html`<div
                  class="subtitle"
                  style=${this.subtitleColor ? `color: ${this.subtitleColor}` : ''}
                >
                  ${this.subtitle}
                </div>`
              : ''}
          </div>
          <slot name="action"></slot>
        </div>
        ${!this.collapsed
          ? html`<div class="body"><slot></slot></div>`
          : ''}
      </div>
    `
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'claims-review-item': ClaimsReviewItem
  }
}
