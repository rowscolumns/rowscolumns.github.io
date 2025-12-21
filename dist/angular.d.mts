import { AfterViewInit, OnChanges, OnDestroy, ElementRef, SimpleChanges } from '@angular/core';
import { L as LayoutNode } from './core-DeMI2uDz.mjs';

declare class RowscolumnsComponent implements AfterViewInit, OnChanges, OnDestroy {
    private el;
    layout: string | LayoutNode | undefined;
    layoutSm: string | LayoutNode | undefined;
    layoutMd: string | LayoutNode | undefined;
    layoutLg: string | LayoutNode | undefined;
    layoutXl: string | LayoutNode | undefined;
    layoutXxl: string | LayoutNode | undefined;
    style: any;
    private resizeListener;
    constructor(el: ElementRef);
    ngAfterViewInit(): void;
    ngOnChanges(changes: SimpleChanges): void;
    ngOnDestroy(): void;
    private getActiveLayout;
    private render;
}

export { RowscolumnsComponent };
