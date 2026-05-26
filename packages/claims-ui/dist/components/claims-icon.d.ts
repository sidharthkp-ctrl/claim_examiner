import { LightDomElement } from '../lib/light-dom.js';
declare const sizeMap: {
    readonly sm: "1rem";
    readonly md: "1.125rem";
    readonly lg: "1.25rem";
};
/**
 * Material Symbols icon (light DOM so host app styles apply).
 * `<claims-icon name="folder_open"></claims-icon>`
 */
export declare class ClaimsIcon extends LightDomElement {
    static styles: import("lit").CSSResult;
    name: string;
    size: keyof typeof sizeMap;
    className: string;
    render(): import("lit-html").TemplateResult<1>;
}
declare global {
    interface HTMLElementTagNameMap {
        'claims-icon': ClaimsIcon;
    }
}
export {};
//# sourceMappingURL=claims-icon.d.ts.map