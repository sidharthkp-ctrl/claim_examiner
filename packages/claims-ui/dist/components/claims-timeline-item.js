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
  }

  .item {
    display: flex;
    gap: 0.5rem;
    padding: 0.375rem 0;
  }

  .dot {
    width: 0.5rem;
    height: 0.5rem;
    min-width: 0.5rem;
    border-radius: 9999px;
    margin-top: 0.25rem;
  }

  .title {
    font-size: 12px;
    font-weight: 500;
    color: var(--foreground, #1a2332);
  }

  .title--active {
    color: #185fa5;
  }

  .title--pending {
    color: var(--muted-foreground, #5c6b7a);
  }

  .time {
    font-size: 11px;
    color: var(--muted-foreground, #5c6b7a);
    margin-top: 0.125rem;
  }
`;
let ClaimsTimelineItem = class ClaimsTimelineItem extends LitElement {
    constructor() {
        super(...arguments);
        this.color = '#639922';
        this.title = '';
        this.time = '';
        this.active = false;
        this.pending = false;
    }
    static { this.styles = styles; }
    render() {
        return html `
      <div class="item">
        <div class="dot" style="background-color: ${this.color}"></div>
        <div>
          <div
            class=${cn('title', this.active && 'title--active', this.pending && 'title--pending')}
          >
            ${this.title}
          </div>
          ${this.time ? html `<div class="time">${this.time}</div>` : ''}
        </div>
      </div>
    `;
    }
};
__decorate([
    property({ type: String })
], ClaimsTimelineItem.prototype, "color", void 0);
__decorate([
    property({ type: String })
], ClaimsTimelineItem.prototype, "title", void 0);
__decorate([
    property({ type: String })
], ClaimsTimelineItem.prototype, "time", void 0);
__decorate([
    property({ type: Boolean })
], ClaimsTimelineItem.prototype, "active", void 0);
__decorate([
    property({ type: Boolean })
], ClaimsTimelineItem.prototype, "pending", void 0);
ClaimsTimelineItem = __decorate([
    customElement('claims-timeline-item')
], ClaimsTimelineItem);
export { ClaimsTimelineItem };
