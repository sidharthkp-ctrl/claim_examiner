import { html, css, LitElement } from 'lit'
import { customElement, property } from 'lit/decorators.js'
import { cn } from '../lib/cn.js'

const cardStyles = css`
  :host {
    display: block;
    max-width: 100%;
    margin-bottom: 1rem;
  }

  :host(:last-child) {
    margin-bottom: 0;
  }

  .claims-card-shell {
    background: var(--card, #ffffff);
    border: 1px solid var(--border, #d8e2ec);
    border-radius: var(--radius-lg, 0.625rem);
    box-shadow: var(--shadow-card, 0 1px 3px rgba(24, 95, 165, 0.08));
    overflow: hidden;
    max-width: 100%;
  }

  .claims-card-header {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    min-width: 0;
    padding: 0.625rem 1rem;
    background: linear-gradient(90deg, #e6f1fb 0%, #f0f7fd 100%);
    border-bottom: 1px solid var(--border, #d8e2ec);
    font-size: 13px;
    font-weight: 600;
    color: var(--primary-dark, #0c447c);
  }

  .claims-card-header--ai {
    background: linear-gradient(90deg, #eeedfe 0%, #e6f1fb 50%, #f3f0ff 100%);
    border-bottom-color: var(--ai-border, #c4b5fd);
  }

  .claims-card-title {
    flex: 1 1 auto;
    min-width: 0;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  .claims-ai-pill {
    display: inline-flex;
    align-items: center;
    flex-shrink: 0;
    margin-left: auto;
    padding: 0.125rem 0.5rem;
    border-radius: 9999px;
    font-size: 10px;
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 0.04em;
    color: var(--purple, #534ab7);
    background: rgba(255, 255, 255, 0.85);
    border: 1px solid var(--ai-border, #c4b5fd);
  }

  .claims-card-body {
    padding: 1rem;
  }

  ::slotted([slot='icon']),
  ::slotted(claims-icon) {
    flex-shrink: 0;
    display: inline-flex;
    align-items: center;
    justify-content: center;
  }

  ::slotted([slot='icon']) svg,
  ::slotted(claims-icon) svg {
    width: 1rem;
    height: 1rem;
    display: block;
  }

  ::slotted([slot='icon']) .material-symbols-outlined,
  ::slotted(claims-icon) .material-symbols-outlined {
    font-size: 1.125rem;
    line-height: 1;
  }

  .header-icon {
    font-family: 'Material Symbols Outlined';
    font-weight: normal;
    font-style: normal;
    font-size: 1.125rem;
    line-height: 1;
    flex-shrink: 0;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: 1.25rem;
    font-variation-settings:
      'FILL' 0,
      'wght' 400,
      'GRAD' 0,
      'opsz' 24;
    user-select: none;
  }
`

@customElement('claims-card')
export class ClaimsCard extends LitElement {
  static styles = cardStyles

  @property({ type: String }) title = ''
  @property({ type: String }) icon = ''
  @property({ type: String }) className = ''
  @property({ type: Boolean }) ai = false

  render() {
    return html`
      <div class=${cn('claims-card-shell', this.className)}>
        ${this.title
          ? html`
              <div
                class=${cn('claims-card-header', this.ai && 'claims-card-header--ai')}
              >
                ${this.icon
                  ? html`<span class="header-icon" aria-hidden="true">${this.icon}</span>`
                  : html`<slot name="icon"></slot>`}
                <span class="claims-card-title">${this.title}</span>
                ${this.ai ? html`<span class="claims-ai-pill">AI Powered</span>` : ''}
              </div>
            `
          : ''}
        <div class="claims-card-body">
          <slot></slot>
        </div>
      </div>
    `
  }
}

const fieldRowStyles = css`
  :host {
    display: block;
    min-width: 0;
  }

  .row {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    gap: 1rem;
    padding: 0.5rem 0;
    border-bottom: 1px solid color-mix(in srgb, var(--border, #d8e2ec) 80%, transparent);
  }

  :host(:last-child) .row,
  :host(.claims-field-row--last) .row {
    border-bottom: none;
  }

  .label {
    font-size: 11px;
    color: var(--muted-foreground, #5c6b7a);
    flex-shrink: 0;
    max-width: 45%;
  }

  .value {
    font-size: 12px;
    font-weight: 600;
    color: var(--foreground, #1a2332);
    text-align: right;
    min-width: 0;
    word-break: break-word;
  }

  ::slotted(*) {
    display: inline-flex;
    flex-wrap: wrap;
    justify-content: flex-end;
    gap: 0.25rem;
  }
`

@customElement('claims-field-row')
export class ClaimsFieldRow extends LitElement {
  static styles = fieldRowStyles

  @property({ type: String }) label = ''
  @property({ type: String }) className = ''

  render() {
    return html`
      <div class=${cn('row', this.className)}>
        <span class="label">${this.label}</span>
        <span class="value">
          <slot></slot>
        </span>
      </div>
    `
  }
}

const statCardStyles = css`
  :host {
    display: block;
    margin-bottom: 1rem;
  }

  :host(:last-child) {
    margin-bottom: 0;
  }

  .tile {
    background: var(--card, #ffffff);
    border: 1px solid var(--border, #d8e2ec);
    border-radius: var(--radius-md, 0.5rem);
    padding: 0.875rem 1rem;
    box-shadow: var(--shadow-card, 0 1px 3px rgba(24, 95, 165, 0.08));
  }

  .label {
    font-size: 11px;
    font-weight: 500;
    text-transform: uppercase;
    letter-spacing: 0.04em;
    color: var(--muted-foreground, #5c6b7a);
  }

  .value {
    font-size: 22px;
    font-weight: 600;
    margin-top: 0.25rem;
    line-height: 1.25;
    color: var(--primary-dark, #0c447c);
  }
`

@customElement('claims-stat-card')
export class ClaimsStatCard extends LitElement {
  static styles = statCardStyles

  @property({ type: String }) label = ''
  @property({ type: String }) value = ''
  @property({ type: String }) color = ''

  render() {
    return html`
      <div class="tile">
        <div class="label">${this.label}</div>
        <div class="value" style=${this.color ? `color: ${this.color}` : ''}>${this.value}</div>
      </div>
    `
  }
}

const infoBoxStyles = css`
  :host {
    display: block;
    margin-bottom: 0.75rem;
  }

  .box {
    border-radius: 0.5rem;
    padding: 0.75rem;
    font-size: 11px;
    line-height: 1.625;
  }

  .box--info {
    background: #e6f1fb;
    color: #0c447c;
    border: 1px solid #b8d4ef;
  }

  .box--warning {
    background: #faeeda;
    color: #633806;
    border: 1px solid #fac775;
  }

  .box--danger {
    background: #fcebeb;
    color: #791f1f;
    border: 1px solid #f09595;
  }
`

@customElement('claims-info-box')
export class ClaimsInfoBox extends LitElement {
  static styles = infoBoxStyles

  @property({ type: String }) variant: 'info' | 'warning' | 'danger' = 'info'
  @property({ type: String }) className = ''

  render() {
    return html`
      <div class=${cn('box', `box--${this.variant}`, this.className)}>
        <slot></slot>
      </div>
    `
  }
}

const aiBoxStyles = css`
  :host {
    display: block;
    margin-bottom: 1rem;
  }

  .banner {
    background: linear-gradient(135deg, #f3f0ff 0%, #e6f1fb 55%, #ffffff 100%);
    border: 1px solid var(--ai-border, #c4b5fd);
    border-radius: var(--radius-lg, 0.625rem);
    box-shadow: var(--shadow-card, 0 1px 3px rgba(24, 95, 165, 0.08));
    padding: 1rem 1.25rem;
  }

  .title {
    font-size: 13px;
    font-weight: 600;
    color: #534ab7;
    margin-bottom: 0.5rem;
    display: flex;
    align-items: center;
    gap: 0.5rem;
    flex-wrap: wrap;
  }

  ::slotted([slot='title']) svg,
  ::slotted(claims-icon) svg {
    width: 1rem;
    height: 1rem;
    flex-shrink: 0;
    display: block;
  }

  ::slotted([slot='title']) .material-symbols-outlined,
  ::slotted([slot='title']) claims-icon .material-symbols-outlined {
    font-size: 1.125rem;
    line-height: 1;
  }

  .content {
    font-size: 12px;
    color: #1a2332;
    line-height: 1.625;
  }
`

@customElement('claims-ai-box')
export class ClaimsAiBox extends LitElement {
  static styles = aiBoxStyles

  render() {
    return html`
      <div class="banner">
        <div class="title">
          <slot name="title"></slot>
        </div>
        <div class="content">
          <slot></slot>
        </div>
      </div>
    `
  }
}

const miniFieldStyles = css`
  :host {
    display: block;
    min-width: 0;
  }

  .field {
    background: color-mix(in srgb, var(--secondary, #f4f7fb) 80%, transparent);
    border: 1px solid var(--border, #d8e2ec);
    border-radius: 0.5rem;
    padding: 0.625rem;
  }

  .label {
    font-size: 10px;
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 0.04em;
    color: var(--muted-foreground, #5c6b7a);
  }

  .value {
    font-size: 12px;
    font-weight: 600;
    color: var(--foreground, #1a2332);
    margin-top: 0.25rem;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    gap: 0.25rem;
  }
`

@customElement('claims-mini-field')
export class ClaimsMiniField extends LitElement {
  static styles = miniFieldStyles

  @property({ type: String }) label = ''

  render() {
    return html`
      <div class="field">
        <div class="label">${this.label}</div>
        <div class="value">
          <slot></slot>
        </div>
      </div>
    `
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'claims-card': ClaimsCard
    'claims-field-row': ClaimsFieldRow
    'claims-stat-card': ClaimsStatCard
    'claims-info-box': ClaimsInfoBox
    'claims-ai-box': ClaimsAiBox
    'claims-mini-field': ClaimsMiniField
  }
}
