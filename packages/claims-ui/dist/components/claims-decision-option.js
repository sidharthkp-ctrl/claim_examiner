var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { html, css, LitElement } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { cn } from '../lib/cn.js';
const styles = css `
  :host {
    display: block;
    margin-bottom: 0.75rem;
  }

  :host(:last-child) {
    margin-bottom: 0;
  }

  .option {
    border: 1px solid var(--border, #d8e2ec);
    border-radius: 0.375rem;
    padding: 0.75rem;
    cursor: pointer;
    transition:
      border-color 0.15s,
      background-color 0.15s;
  }

  .option--selected {
    border: 2px solid #185fa5;
    background: #e6f1fb;
  }

  .row {
    display: flex;
    align-items: flex-start;
    gap: 0.5rem;
  }

  input {
    margin-top: 0.125rem;
    flex-shrink: 0;
  }

  .title {
    font-size: 12px;
    font-weight: 500;
    color: var(--foreground, #1a2332);
  }

  .description {
    font-size: 11px;
    color: var(--muted-foreground, #5c6b7a);
    margin-top: 0.125rem;
  }
`;
let ClaimsDecisionOption = class ClaimsDecisionOption extends LitElement {
    constructor() {
        super(...arguments);
        this.optionId = '';
        this.name = 'decision';
        this.title = '';
        this.description = '';
        this.selected = false;
    }
    static { this.styles = styles; }
    _select() {
        this.dispatchEvent(new CustomEvent('claims-select', {
            detail: { id: this.optionId },
            bubbles: true,
            composed: true,
        }));
    }
    render() {
        return html `
      <div
        class=${cn('option', this.selected && 'option--selected')}
        @click=${this._select}
      >
        <div class="row">
          <input
            type="radio"
            name=${this.name}
            .checked=${this.selected}
            @change=${this._select}
          />
          <div>
            <div class="title">${this.title}</div>
            <div class="description">${this.description}</div>
          </div>
        </div>
      </div>
    `;
    }
};
__decorate([
    property({ type: String })
], ClaimsDecisionOption.prototype, "optionId", void 0);
__decorate([
    property({ type: String })
], ClaimsDecisionOption.prototype, "name", void 0);
__decorate([
    property({ type: String })
], ClaimsDecisionOption.prototype, "title", void 0);
__decorate([
    property({ type: String })
], ClaimsDecisionOption.prototype, "description", void 0);
__decorate([
    property({ type: Boolean })
], ClaimsDecisionOption.prototype, "selected", void 0);
ClaimsDecisionOption = __decorate([
    customElement('claims-decision-option')
], ClaimsDecisionOption);
export { ClaimsDecisionOption };
