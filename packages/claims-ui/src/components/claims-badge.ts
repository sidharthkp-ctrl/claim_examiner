import { html, css, LitElement } from 'lit'
import { customElement, property } from 'lit/decorators.js'
import { cn } from '../lib/cn.js'

export type BadgeVariant = 'success' | 'warning' | 'danger' | 'info' | 'neutral' | 'purple'

const badgeStyles = css`
  :host {
    display: inline-flex;
    vertical-align: middle;
  }

  .badge {
    display: inline-flex;
    align-items: center;
    gap: 0.25rem;
    padding: 0.125rem 0.625rem;
    border-radius: 9999px;
    font-size: 11px;
    font-weight: 600;
    line-height: 1.4;
    white-space: nowrap;
  }

  .success {
    background: #eaf3de;
    color: #3b6d11;
  }

  .warning {
    background: #faeeda;
    color: #854f0b;
  }

  .danger {
    background: #fcebeb;
    color: #a32d2d;
  }

  .info {
    background: #e6f1fb;
    color: #185fa5;
  }

  .neutral {
    background: var(--secondary, #f4f7fb);
    color: var(--muted-foreground, #5c6b7a);
  }

  .purple {
    background: #eeedfe;
    color: #534ab7;
  }

  ::slotted(svg) {
    width: 0.875rem;
    height: 0.875rem;
    flex-shrink: 0;
  }
`

@customElement('claims-badge')
export class ClaimsBadge extends LitElement {
  static styles = badgeStyles

  @property({ type: String }) variant: BadgeVariant = 'neutral'
  @property({ type: String }) className = ''

  render() {
    return html`
      <span class=${cn('badge', this.variant, this.className)}>
        <slot></slot>
      </span>
    `
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'claims-badge': ClaimsBadge
  }
}
