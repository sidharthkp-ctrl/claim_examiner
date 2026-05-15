import { html, css, LitElement } from 'lit'
import { customElement, property } from 'lit/decorators.js'
import type { BadgeVariant } from './claims-badge.js'
import './claims-badge.js'

const styles = css`
  :host {
    display: block;
    margin-bottom: 0.5rem;
  }

  .card {
    border: 1px solid var(--border, #d8e2ec);
    border-radius: 0.375rem;
    padding: 0.75rem;
    display: flex;
    align-items: center;
    gap: 0.625rem;
  }

  .icon {
    width: 2rem;
    height: 2rem;
    min-width: 2rem;
    border-radius: 0.375rem;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .body {
    flex: 1 1 auto;
    min-width: 0;
  }

  .title {
    font-size: 12px;
    font-weight: 500;
    color: var(--foreground, #1a2332);
  }

  .description {
    font-size: 11px;
    color: var(--muted-foreground, #5c6b7a);
  }
`

@customElement('claims-integration-card')
export class ClaimsIntegrationCard extends LitElement {
  static styles = styles

  @property({ type: String }) iconBg = '#E6F1FB'
  @property({ type: String }) iconColor = '#185FA5'
  @property({ type: String }) title = ''
  @property({ type: String }) description = ''
  @property({ type: String }) status = ''
  @property({ type: String }) statusVariant: BadgeVariant = 'success'

  render() {
    return html`
      <div class="card">
        <div class="icon" style="background-color: ${this.iconBg}; color: ${this.iconColor}">
          <slot name="icon"></slot>
        </div>
        <div class="body">
          <div class="title">${this.title}</div>
          <div class="description">${this.description}</div>
        </div>
        <claims-badge variant=${this.statusVariant}>${this.status}</claims-badge>
      </div>
    `
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'claims-integration-card': ClaimsIntegrationCard
  }
}
