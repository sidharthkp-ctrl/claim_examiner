import { html, css, LitElement } from 'lit'
import { customElement, property } from 'lit/decorators.js'
import { cn } from '../lib/cn.js'

const styles = css`
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
`

@customElement('claims-decision-option')
export class ClaimsDecisionOption extends LitElement {
  static styles = styles

  @property({ type: String }) optionId = ''
  @property({ type: String }) name = 'decision'
  @property({ type: String }) title = ''
  @property({ type: String }) description = ''
  @property({ type: Boolean }) selected = false

  private _select() {
    this.dispatchEvent(
      new CustomEvent('claims-select', {
        detail: { id: this.optionId },
        bubbles: true,
        composed: true,
      })
    )
  }

  render() {
    return html`
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
    `
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'claims-decision-option': ClaimsDecisionOption
  }
}
