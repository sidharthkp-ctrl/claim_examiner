var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { html, css, LitElement } from 'lit';
import { customElement, property, state } from 'lit/decorators.js';
// ---------------------------------------------------------------------------
// Styles
// ---------------------------------------------------------------------------
const styles = css `
  :host {
    display: block;
    background: var(--card, #ffffff);
    border-bottom: 1px solid var(--border, #d8e2ec);
    box-shadow: 0 1px 4px rgba(24, 95, 165, 0.06);
  }

  .cs-bar {
    display: flex;
    align-items: center;
    gap: 0.75rem;
    padding: 0 1.25rem;
    min-height: 2.75rem;
    flex-wrap: wrap;
  }

  .cs-folder-icon {
    font-family: 'Material Symbols Outlined';
    font-size: 1.125rem;
    line-height: 1;
    color: var(--primary, #185fa5);
    font-variation-settings:
      'FILL' 0,
      'wght' 400,
      'GRAD' 0,
      'opsz' 24;
    user-select: none;
    flex-shrink: 0;
  }

  .cs-label {
    font-size: 11px;
    font-weight: 600;
    color: var(--muted-foreground, #5c6b7a);
    text-transform: uppercase;
    letter-spacing: 0.04em;
    white-space: nowrap;
    flex-shrink: 0;
  }

  .cs-sep {
    color: var(--border, #d8e2ec);
    font-size: 1rem;
    line-height: 1;
    flex-shrink: 0;
    user-select: none;
  }

  .cs-sel-wrap {
    position: relative;
    display: inline-flex;
    align-items: center;
    min-width: 0;
  }

  .cs-sel-wrap select {
    appearance: none;
    -webkit-appearance: none;
    background: var(--secondary, #f4f7fb);
    border: 1px solid var(--border, #d8e2ec);
    border-radius: 0.375rem;
    padding: 0.375rem 2rem 0.375rem 0.75rem;
    font-size: 12px;
    font-weight: 600;
    color: var(--primary-dark, #0c447c);
    cursor: pointer;
    outline: none;
    min-width: 220px;
    max-width: 320px;
    font-family: inherit;
    transition:
      border-color 0.15s,
      box-shadow 0.15s;
  }

  .cs-sel-wrap select:focus {
    border-color: var(--primary, #185fa5);
    box-shadow: 0 0 0 2px rgba(24, 95, 165, 0.15);
  }

  .cs-sel-wrap select:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }

  .cs-caret {
    position: absolute;
    right: 0.75rem;
    pointer-events: none;
    color: var(--primary, #185fa5);
    font-size: 11px;
    line-height: 1;
  }

  .cs-policy-tag {
    display: inline-flex;
    align-items: center;
    background: var(--info-bg, #e6f1fb);
    color: var(--primary, #185fa5);
    border: 1px solid #b8d4ef;
    border-radius: 0.25rem;
    font-size: 11px;
    font-weight: 600;
    padding: 0.2rem 0.55rem;
    white-space: nowrap;
    flex-shrink: 0;
  }
`;
// ---------------------------------------------------------------------------
// Component
// ---------------------------------------------------------------------------
let ClaimsContextSelector = class ClaimsContextSelector extends LitElement {
    constructor() {
        super(...arguments);
        this.claims = [];
        this.selectedClaimId = '';
        this.selectedPolicyId = '';
        this._activePolicies = [];
    }
    // ✅ FIX 3: LightDomElement uses createRenderRoot() = this, so styles are
    // injected into the light DOM. We declare them here so Lit picks them up.
    static { this.styles = styles; }
    willUpdate(changed) {
        if (changed.has('claims') || changed.has('selectedClaimId')) {
            const activeClaim = this.claims.find((c) => c.id === this.selectedClaimId);
            this._activePolicies = activeClaim?.policies ?? [];
            if (this._activePolicies.length > 0 &&
                !this._activePolicies.find((p) => p.id === this.selectedPolicyId)) {
                this.selectedPolicyId = this._activePolicies[0].id;
            }
        }
    }
    _emitClaimChanged(claimId) {
        const claim = this.claims.find((c) => c.id === claimId);
        if (!claim)
            return;
        this.dispatchEvent(new CustomEvent('claims-claim-changed', {
            detail: { claimId, claim },
            bubbles: true,
            composed: true,
        }));
    }
    _emitPolicyChanged(policyId) {
        const policy = this._activePolicies.find((p) => p.id === policyId);
        if (!policy)
            return;
        this.dispatchEvent(new CustomEvent('claims-policy-changed', {
            detail: { claimId: this.selectedClaimId, policyId, policy },
            bubbles: true,
            composed: true,
        }));
    }
    _onClaimChange(e) {
        const select = e.target;
        this.selectedClaimId = select.value;
        const newClaim = this.claims.find((c) => c.id === select.value);
        this.selectedPolicyId = newClaim?.policies[0]?.id ?? '';
        this._emitClaimChanged(this.selectedClaimId);
        if (this.selectedPolicyId) {
            this._emitPolicyChanged(this.selectedPolicyId);
        }
    }
    _onPolicyChange(e) {
        const select = e.target;
        this.selectedPolicyId = select.value;
        this._emitPolicyChanged(this.selectedPolicyId);
    }
    render() {
        const activePolicy = this._activePolicies.find((p) => p.id === this.selectedPolicyId);
        return html `
      <div class="cs-bar" role="toolbar" aria-label="Claim and policy selector">

        <span class="cs-folder-icon" aria-hidden="true">folder_open</span>

        <span class="cs-label">Claim</span>
        <div class="cs-sel-wrap">
          <!-- ✅ FIX 4: removed .value binding — ?selected on each option is
               sufficient and correct. .value binding on <select> in Lit
               overrides the browser's own selection before options render. -->
          <select
            id="claim-select"
            aria-label="Select claim"
            @change=${this._onClaimChange}
          >
            ${this.claims.map((c) => html `
                <option value=${c.id} ?selected=${c.id === this.selectedClaimId}>
                  ${c.id} — ${c.personName}
                </option>
              `)}
          </select>
          <span class="cs-caret" aria-hidden="true">▾</span>
        </div>

        <span class="cs-sep" aria-hidden="true">|</span>

        <span class="cs-label">Policy</span>
        <div class="cs-sel-wrap">
          <select
            id="policy-select"
            aria-label="Select policy"
            @change=${this._onPolicyChange}
            ?disabled=${this._activePolicies.length === 0}
          >
            ${this._activePolicies.map((p) => html `
                <option value=${p.id} ?selected=${p.id === this.selectedPolicyId}>
                  ${p.id} — ${p.label}
                </option>
              `)}
          </select>
          <span class="cs-caret" aria-hidden="true">▾</span>
        </div>

        ${activePolicy
            ? html `<span class="cs-policy-tag">${activePolicy.id}</span>`
            : ''}

      </div>
    `;
    }
};
__decorate([
    property({ type: Array })
], ClaimsContextSelector.prototype, "claims", void 0);
__decorate([
    property({ type: String })
], ClaimsContextSelector.prototype, "selectedClaimId", void 0);
__decorate([
    property({ type: String })
], ClaimsContextSelector.prototype, "selectedPolicyId", void 0);
__decorate([
    state()
], ClaimsContextSelector.prototype, "_activePolicies", void 0);
ClaimsContextSelector = __decorate([
    customElement('claims-context-selector')
], ClaimsContextSelector);
export { ClaimsContextSelector };
