import { html } from 'lit'
import type { Icons } from './icons.js'

type IconFn = (typeof Icons)[keyof typeof Icons]

export function iconSlot(icon: IconFn, color: string) {
  return html`<span slot="icon" style="color: ${color}">${icon()}</span>`
}
