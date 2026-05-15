var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { html, css, LitElement } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { cn } from '../lib/cn.js';
const badgeStyles = css `
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
`;
let ClaimsBadge = class ClaimsBadge extends LitElement {
    constructor() {
        super(...arguments);
        this.variant = 'neutral';
        this.className = '';
    }
    static { this.styles = badgeStyles; }
    render() {
        return html `
      <span class=${cn('badge', this.variant, this.className)}>
        <slot></slot>
      </span>
    `;
    }
};
__decorate([
    property({ type: String })
], ClaimsBadge.prototype, "variant", void 0);
__decorate([
    property({ type: String })
], ClaimsBadge.prototype, "className", void 0);
ClaimsBadge = __decorate([
    customElement('claims-badge')
], ClaimsBadge);
export { ClaimsBadge };
