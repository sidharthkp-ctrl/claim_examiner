import type { Icons } from './icons.js';
type IconFn = (typeof Icons)[keyof typeof Icons];
export declare function iconSlot(icon: IconFn, color: string): import("lit-html").TemplateResult<1>;
export {};
//# sourceMappingURL=icon-slot.d.ts.map