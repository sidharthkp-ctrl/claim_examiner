var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { LightDomElement } from '../lib/light-dom.js';
import { cn } from '../lib/cn.js';
const materialFont = css `
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
`;
const sizeMap = {
    sm: '1rem',
    md: '1.125rem',
    lg: '1.25rem',
};
/**
 * Material Symbols icon (light DOM so host app styles apply).
 * `<claims-icon name="folder_open"></claims-icon>`
 */
let ClaimsIcon = class ClaimsIcon extends LightDomElement {
    constructor() {
        super(...arguments);
        this.name = '';
        this.size = 'md';
        this.className = '';
    }
    static { this.styles = materialFont; }
    render() {
        const fontSize = sizeMap[this.size] ?? sizeMap.md;
        if (!this.name) {
            return html `<slot style="font-size: ${fontSize}"></slot>`;
        }
        return html `
      <span
        class=${cn('material-symbols-outlined', this.className)}
        style="font-size: ${fontSize}"
        aria-hidden="true"
        >${this.name}</span
      >
    `;
    }
};
__decorate([
    property({ type: String })
], ClaimsIcon.prototype, "name", void 0);
__decorate([
    property({ type: String })
], ClaimsIcon.prototype, "size", void 0);
__decorate([
    property({ type: String })
], ClaimsIcon.prototype, "className", void 0);
ClaimsIcon = __decorate([
    customElement('claims-icon')
], ClaimsIcon);
export { ClaimsIcon };
