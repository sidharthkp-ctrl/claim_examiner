import { html, css, LitElement } from 'lit'
import { customElement, property } from 'lit/decorators.js'
import { cn } from '../lib/cn.js'

const styles = css`
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
`

@customElement('claims-timeline-item')
export class ClaimsTimelineItem extends LitElement {
  static styles = styles

  @property({ type: String }) color = '#639922'
  @property({ type: String }) title = ''
  @property({ type: String }) time = ''
  @property({ type: Boolean }) active = false
  @property({ type: Boolean }) pending = false

  render() {
    return html`
      <div class="item">
        <div class="dot" style="background-color: ${this.color}"></div>
        <div>
          <div
            class=${cn('title', this.active && 'title--active', this.pending && 'title--pending')}
          >
            ${this.title}
          </div>
          ${this.time ? html`<div class="time">${this.time}</div>` : ''}
        </div>
      </div>
    `
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'claims-timeline-item': ClaimsTimelineItem
  }
}
