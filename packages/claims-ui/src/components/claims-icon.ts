import { html, css } from 'lit'
import { customElement, property } from 'lit/decorators.js'
import { LightDomElement } from '../lib/light-dom.js'
import { cn } from '../lib/cn.js'

const materialFont = css`
  .material-symbols-outlined,
  .material-symbols,
  .material-symbols-rounded {
    font-family: 'Material Symbols Outlined';
    font-weight: normal;
    font-style: normal;
    line-height: 1;
    letter-spacing: normal;
    text-transform: none;
    display: inline-block;
    white-space: nowrap;
    word-wrap: normal;
    direction: ltr;
    -webkit-font-smoothing: antialiased;
    font-variation-settings:
      'FILL' 0,
      'wght' 400,
      'GRAD' 0,
      'opsz' 24;
    user-select: none;
  }
`

const sizeMap = {
  sm: '1rem',
  md: '1.125rem',
  lg: '1.25rem',
} as const

/**
 * Material Symbols icon (light DOM so host app styles apply).
 * `<claims-icon name="folder_open"></claims-icon>`
 */
@customElement('claims-icon')
export class ClaimsIcon extends LightDomElement {
  static styles = materialFont

  @property({ type: String }) name = ''
  @property({ type: String }) size: keyof typeof sizeMap = 'md'
  @property({ type: String }) className = ''

  render() {
    const fontSize = sizeMap[this.size] ?? sizeMap.md
    if (!this.name) {
      return html`<slot style="font-size: ${fontSize}"></slot>`
    }
    return html`
      <span
        class=${cn('material-symbols-outlined', this.className)}
        style="font-size: ${fontSize}"
        aria-hidden="true"
        >${this.name}</span
      >
    `
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'claims-icon': ClaimsIcon
  }
}
