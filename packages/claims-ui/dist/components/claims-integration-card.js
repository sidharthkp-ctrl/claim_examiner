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
`;
let ClaimsIntegrationCard = class ClaimsIntegrationCard extends LitElement {
    constructor() {
        super(...arguments);
        this.iconBg = '#E6F1FB';
        this.iconColor = '#185FA5';
        this.title = '';
        this.description = '';
        this.status = '';
        this.statusVariant = 'success';
    }
    static { this.styles = styles; }
    render() {
        return html `
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
    `;
    }
};
__decorate([
    property({ type: String })
], ClaimsIntegrationCard.prototype, "iconBg", void 0);
__decorate([
    property({ type: String })
], ClaimsIntegrationCard.prototype, "iconColor", void 0);
__decorate([
    property({ type: String })
], ClaimsIntegrationCard.prototype, "title", void 0);
__decorate([
    property({ type: String })
], ClaimsIntegrationCard.prototype, "description", void 0);
__decorate([
    property({ type: String })
], ClaimsIntegrationCard.prototype, "status", void 0);
__decorate([
    property({ type: String })
], ClaimsIntegrationCard.prototype, "statusVariant", void 0);
ClaimsIntegrationCard = __decorate([
    customElement('claims-integration-card')
], ClaimsIntegrationCard);
export { ClaimsIntegrationCard };
