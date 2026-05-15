import { html } from 'lit';
export function iconSlot(icon, color) {
    return html `<span slot="icon" style="color: ${color}">${icon()}</span>`;
}
