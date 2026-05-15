var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { html, css, LitElement } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { cn } from '../lib/cn.js';
const cardStyles = css `
  :host {
    display: block;
    max-width: 100%;
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

  ::slotted([slot='icon']) {
    flex-shrink: 0;
    display: inline-flex;
    align-items: center;
  }
`;
let ClaimsCard = class ClaimsCard extends LitElement {
    constructor() {
        super(...arguments);
        this.title = '';
        this.className = '';
        this.ai = false;
    }
    static { this.styles = cardStyles; }
    render() {
        return html `
      <div class=${cn('claims-card-shell', this.className)}>
        ${this.title
            ? html `
              <div
                class=${cn('claims-card-header', this.ai && 'claims-card-header--ai')}
              >
                <slot name="icon"></slot>
                <span class="claims-card-title">${this.title}</span>
                ${this.ai ? html `<span class="claims-ai-pill">AI Powered</span>` : ''}
              </div>
            `
            : ''}
        <div class="claims-card-body">
          <slot></slot>
        </div>
      </div>
    `;
    }
};
__decorate([
    property({ type: String })
], ClaimsCard.prototype, "title", void 0);
__decorate([
    property({ type: String })
], ClaimsCard.prototype, "className", void 0);
__decorate([
    property({ type: Boolean })
], ClaimsCard.prototype, "ai", void 0);
ClaimsCard = __decorate([
    customElement('claims-card')
], ClaimsCard);
export { ClaimsCard };
const fieldRowStyles = css `
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
`;
let ClaimsFieldRow = class ClaimsFieldRow extends LitElement {
    constructor() {
        super(...arguments);
        this.label = '';
        this.className = '';
    }
    static { this.styles = fieldRowStyles; }
    render() {
        return html `
      <div class=${cn('row', this.className)}>
        <span class="label">${this.label}</span>
        <span class="value">
          <slot></slot>
        </span>
      </div>
    `;
    }
};
__decorate([
    property({ type: String })
], ClaimsFieldRow.prototype, "label", void 0);
__decorate([
    property({ type: String })
], ClaimsFieldRow.prototype, "className", void 0);
ClaimsFieldRow = __decorate([
    customElement('claims-field-row')
], ClaimsFieldRow);
export { ClaimsFieldRow };
const statCardStyles = css `
  :host {
    display: block;
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
`;
let ClaimsStatCard = class ClaimsStatCard extends LitElement {
    constructor() {
        super(...arguments);
        this.label = '';
        this.value = '';
        this.color = '';
    }
    static { this.styles = statCardStyles; }
    render() {
        return html `
      <div class="tile">
        <div class="label">${this.label}</div>
        <div class="value" style=${this.color ? `color: ${this.color}` : ''}>${this.value}</div>
      </div>
    `;
    }
};
__decorate([
    property({ type: String })
], ClaimsStatCard.prototype, "label", void 0);
__decorate([
    property({ type: String })
], ClaimsStatCard.prototype, "value", void 0);
__decorate([
    property({ type: String })
], ClaimsStatCard.prototype, "color", void 0);
ClaimsStatCard = __decorate([
    customElement('claims-stat-card')
], ClaimsStatCard);
export { ClaimsStatCard };
const infoBoxStyles = css `
  :host {
    display: block;
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
`;
let ClaimsInfoBox = class ClaimsInfoBox extends LitElement {
    constructor() {
        super(...arguments);
        this.variant = 'info';
        this.className = '';
    }
    static { this.styles = infoBoxStyles; }
    render() {
        return html `
      <div class=${cn('box', `box--${this.variant}`, this.className)}>
        <slot></slot>
      </div>
    `;
    }
};
__decorate([
    property({ type: String })
], ClaimsInfoBox.prototype, "variant", void 0);
__decorate([
    property({ type: String })
], ClaimsInfoBox.prototype, "className", void 0);
ClaimsInfoBox = __decorate([
    customElement('claims-info-box')
], ClaimsInfoBox);
export { ClaimsInfoBox };
const aiBoxStyles = css `
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

  .content {
    font-size: 12px;
    color: #1a2332;
    line-height: 1.625;
  }
`;
let ClaimsAiBox = class ClaimsAiBox extends LitElement {
    static { this.styles = aiBoxStyles; }
    render() {
        return html `
      <div class="banner">
        <div class="title">
          <slot name="title"></slot>
        </div>
        <div class="content">
          <slot></slot>
        </div>
      </div>
    `;
    }
};
ClaimsAiBox = __decorate([
    customElement('claims-ai-box')
], ClaimsAiBox);
export { ClaimsAiBox };
const miniFieldStyles = css `
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
`;
let ClaimsMiniField = class ClaimsMiniField extends LitElement {
    constructor() {
        super(...arguments);
        this.label = '';
    }
    static { this.styles = miniFieldStyles; }
    render() {
        return html `
      <div class="field">
        <div class="label">${this.label}</div>
        <div class="value">
          <slot></slot>
        </div>
      </div>
    `;
    }
};
__decorate([
    property({ type: String })
], ClaimsMiniField.prototype, "label", void 0);
ClaimsMiniField = __decorate([
    customElement('claims-mini-field')
], ClaimsMiniField);
export { ClaimsMiniField };
