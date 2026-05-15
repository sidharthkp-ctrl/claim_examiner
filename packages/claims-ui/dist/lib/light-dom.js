import { LitElement } from 'lit';
/** Use light DOM so Tailwind utility classes from the host app apply unchanged. */
export class LightDomElement extends LitElement {
    createRenderRoot() {
        return this;
    }
}
