var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { html, css, LitElement } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { cn } from '../lib/cn.js';
import './claims-badge.js';
const statusBorderColors = {
    success: '#97C459',
    warning: '#EF9F27',
    danger: '#E24B4A',
    purple: '#AFA9EC',
};
const styles = css `
  :host {
    display: block;
    margin-bottom: 0.5rem;
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
`;
let ClaimsReviewItem = class ClaimsReviewItem extends LitElement {
    constructor() {
        super(...arguments);
        this.status = 'success';
        this.statusLabel = '';
        this.title = '';
        this.titleMuted = false;
        this.subtitle = '';
        this.subtitleColor = '';
        this.collapsed = false;
    }
    static { this.styles = styles; }
    render() {
        return html `
      <div class="shell">
        <div class="header" style="border-left: 3px solid ${statusBorderColors[this.status]}">
          <claims-badge variant=${this.status}><slot name="status">${this.statusLabel}</slot></claims-badge>
          <div class="main">
            <div class=${cn('title', this.titleMuted && 'title--muted')}>${this.title}</div>
            ${this.subtitle
            ? html `<div
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
            ? html `<div class="body"><slot></slot></div>`
            : ''}
      </div>
    `;
    }
};
__decorate([
    property({ type: String })
], ClaimsReviewItem.prototype, "status", void 0);
__decorate([
    property({ type: String })
], ClaimsReviewItem.prototype, "statusLabel", void 0);
__decorate([
    property({ type: String })
], ClaimsReviewItem.prototype, "title", void 0);
__decorate([
    property({ type: Boolean })
], ClaimsReviewItem.prototype, "titleMuted", void 0);
__decorate([
    property({ type: String })
], ClaimsReviewItem.prototype, "subtitle", void 0);
__decorate([
    property({ type: String })
], ClaimsReviewItem.prototype, "subtitleColor", void 0);
__decorate([
    property({ type: Boolean })
], ClaimsReviewItem.prototype, "collapsed", void 0);
ClaimsReviewItem = __decorate([
    customElement('claims-review-item')
], ClaimsReviewItem);
export { ClaimsReviewItem };
