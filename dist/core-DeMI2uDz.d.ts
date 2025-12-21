/**
 * ROWS-COLUMNS-LAYOUT: PRODUCTION CORE (v1.7.6)
 * - Tightened TypeScript definitions for better IDE Autocomplete
 * - Eliminated most 'any' usage
 * - Kept 'none' keyword & unified .span() logic
 */
type StyleValue = string | number;
interface StyleMap {
    [key: string]: StyleValue;
}
interface SpanData {
    t: number;
    r: number;
    b: number;
    l: number;
}
interface SpanConfig {
    top?: number;
    right?: number;
    bottom?: number;
    left?: number;
}
interface Rule<T> {
    data: T;
    indices: number[] | null;
}
type BreakpointMap = Record<string, number>;
type ResponsiveValue<T> = T | {
    [breakpoint: string]: T;
};
type LayoutItem = ResponsiveValue<LayoutNode | number | string>;
type ChildPropRule = Rule<StyleMap>;
type SpanRule = Rule<SpanData>;
interface ActiveRule<T> {
    rule: Rule<T>;
    counter: {
        val: number;
    };
}
declare class LayoutNode {
    size: LayoutItem;
    type: 'leaf' | 'col' | 'row';
    children: LayoutItem[];
    isSkippedSelf: boolean;
    offsetIndices: number[];
    styles: StyleMap;
    spanData: SpanData;
    childPropRules: ChildPropRule[];
    childSpanRules: SpanRule[];
    constructor(size: LayoutItem, type?: 'leaf' | 'col' | 'row', children?: LayoutItem[]);
    col(...children: LayoutItem[]): LayoutNode;
    row(...children: LayoutItem[]): LayoutNode;
    offset(indices?: number[]): LayoutNode;
    props(s: StyleMap): LayoutNode;
    childProps(style: StyleMap, indices?: number[]): LayoutNode;
    span(config: SpanConfig, indices?: number[]): LayoutNode;
}
declare class Rect {
    x: number;
    y: number;
    w: number;
    h: number;
    styles: StyleMap;
    isSkipped: boolean;
    customSize?: string | undefined;
    spanData: SpanData;
    constructor(x: number, y: number, w: number, h: number, styles: StyleMap, isSkipped: boolean, customSize?: string | undefined, spanData?: SpanData);
}
declare global {
    interface Number {
        col(...a: LayoutItem[]): LayoutNode;
        row(...a: LayoutItem[]): LayoutNode;
        offset(a?: number[]): LayoutNode;
        props(s: StyleMap): LayoutNode;
        childProps(s: StyleMap, a?: number[]): LayoutNode;
        span(c: SpanConfig, i?: number[]): LayoutNode;
    }
    interface String {
        col(...a: LayoutItem[]): LayoutNode;
        row(...a: LayoutItem[]): LayoutNode;
        offset(a?: number[]): LayoutNode;
        props(s: StyleMap): LayoutNode;
        childProps(s: StyleMap, a?: number[]): LayoutNode;
        span(c: SpanConfig, i?: number[]): LayoutNode;
    }
}
declare function installExtensions(): void;
declare const Engine: {
    bps: BreakpointMap;
    _strMap: Map<string, string>;
    _strCounter: number;
    init(): void;
    upd(): void;
    evalLayout(str: string): LayoutNode | undefined;
    isNode(n: any): n is LayoutNode;
    render(el: HTMLElement, direct?: LayoutNode): void;
    calc(n: LayoutItem, x: number, y: number, w: number, h: number, leaves: Rect[], pSkip: boolean, offRules: any[], activePropRules: ActiveRule<StyleMap>[], activeSpanRules: ActiveRule<SpanData>[], counter: {
        val: number;
    }, currentWidth: number, incomingSpan: SpanData): void;
    mesh(leaves: Rect[]): {
        xc: number[];
        yc: number[];
        cw: string[];
        rh: string[];
    };
    idx(arr: number[], val: number): number;
    compileCSS(layoutStr: string): string | null;
};

export { type BreakpointMap as B, type ChildPropRule as C, Engine as E, LayoutNode as L, type Rule as R, type StyleValue as S, type StyleMap as a, type SpanData as b, type SpanConfig as c, type ResponsiveValue as d, type LayoutItem as e, type SpanRule as f, Rect as g, installExtensions as i };
