/**
 * @barba/core/utils/dom
 * <br><br>
 * ## Dom utils
 *
 * - Access DOM contents
 * - DOM vs string conversions
 *
 * @module core/utils/dom
 * @preferred
 */
/***/
import { Scope, Wrapper } from '../defs';
export declare class Dom {
    private _attr;
    private _parser;
    /**
     * Convert HTMLDocument to string.
     */
    toString(el: HTMLElement): string;
    /**
     * Parse HTML string to HTMLDocument.
     */
    toDocument(htmlString: string): HTMLDocument;
    /**
     * Parse HTML string to DIVElement.
     *
     * DOMParser.parseFromString fails with img[srcset] on iOS.
     * see https://github.com/barbajs/barba/issues/362
     */
    toElement(htmlString: string): HTMLDivElement;
    /**
     * Get HTML content.
     */
    getHtml(doc?: HTMLDocument): string;
    /**
     * Get full document content.
     */
    /**
     * Get `[data-barba="wrapper"]`.
     */
    getWrapper(scope?: Scope): Wrapper;
    /**
     * Get `[data-barba="container"]`.
     */
    getContainer(scope?: Scope): HTMLElement | null;
    /**
     * Get `[data-barba-namespace]`.
     */
    getNamespace(scope?: Scope): string | null;
    /**
     * Get URL from `href` value.
     */
    getHref(el: HTMLLinkElement): string | null;
}
declare const dom: Dom;
export { dom };
