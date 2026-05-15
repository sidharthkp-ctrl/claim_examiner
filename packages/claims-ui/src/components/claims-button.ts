import { html, css, LitElement } from 'lit'
import { customElement, property } from 'lit/decorators.js'
import { cn } from '../lib/cn.js'

export type ButtonVariant = 'default' | 'primary' | 'success' | 'danger'

const buttonStyles = css`
  :host {
    display: inline-block;
    vertical-align: middle;
  }

  :host([fullwidth]) {
    display: block;
    width: 100%;
  }

  :host([fullwidth]) button {
    width: 100%;
  }

  button {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: 0.375rem;
    padding: 0.5rem 1rem;
    min-height: 2.25rem;
    border-radius: 0.375rem;
    font-size: 13px;
    font-weight: 600;
    line-height: 1.25;
    white-space: nowrap;
    border: 1px solid transparent;
    cursor: pointer;
    transition:
      background-color 0.15s,
      border-color 0.15s,
      color 0.15s;
    font-family: inherit;
  }

  button.default {
    background: #ffffff;
    color: var(--muted-foreground, #5c6b7a);
    border-color: var(--border, #d8e2ec);
  }

  button.default:hover {
    background: var(--secondary, #f4f7fb);
    border-color: color-mix(in srgb, #185fa5 30%, var(--border, #d8e2ec));
  }

  button.primary {
    background: #185fa5;
    color: #ffffff;
    border-color: #185fa5;
    box-shadow: 0 1px 2px rgba(24, 95, 165, 0.25);
  }

  button.primary:hover {
    background: #0c447c;
    border-color: #0c447c;
  }

  button.success {
    background: #3b6d11;
    color: #ffffff;
    border-color: #3b6d11;
    box-shadow: 0 1px 2px rgba(59, 109, 17, 0.2);
  }

  button.success:hover {
    background: #27500a;
    border-color: #27500a;
  }

  button.danger {
    background: #ffffff;
    color: #a32d2d;
    border-color: #f09595;
  }

  button.danger:hover {
    background: #fcebeb;
  }

  button.push {
    margin-left: auto;
  }

  button.sm {
    padding: 0.25rem 0.5rem;
    min-height: 1.75rem;
    font-size: 11px;
  }

  ::slotted(svg) {
    width: 1rem;
    height: 1rem;
    flex-shrink: 0;
  }
`

@customElement('claims-button')
export class ClaimsButton extends LitElement {
  static styles = buttonStyles

  @property({ type: String }) variant: ButtonVariant = 'default'
  @property({ type: String }) className = ''
  @property({ type: Boolean }) push = false
  @property({ type: Boolean, reflect: true }) fullwidth = false
  @property({ type: String }) size: 'sm' | 'md' = 'md'

  render() {
    return html`
      <button type="button" class=${cn(this.variant, this.size === 'sm' && 'sm', this.push && 'push', this.className)}>
        <slot></slot>
      </button>
    `
  }
}

const actionBarStyles = css`
  :host {
    display: block;
    flex-shrink: 0;
  }

  .bar {
    background: var(--card, #ffffff);
    border-top: 1px solid var(--border, #d8e2ec);
    padding: 0.75rem 1.25rem;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    gap: 0.5rem;
    box-shadow: 0 -2px 8px rgba(24, 95, 165, 0.06);
  }

`

@customElement('claims-action-bar')
export class ClaimsActionBar extends LitElement {
  static styles = actionBarStyles

  render() {
    return html`
      <div class="bar">
        <slot></slot>
      </div>
    `
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'claims-button': ClaimsButton
    'claims-action-bar': ClaimsActionBar
  }
}
