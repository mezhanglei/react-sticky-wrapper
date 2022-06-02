import React, { CSSProperties } from 'react';
export interface ReactTransformStickyProps {
    children: any;
    scrollRoot?: HTMLElement | string;
    targetNodeList?: HTMLElement[] | string[];
    bounds?: {
        left?: number;
        top?: number;
    };
    style?: CSSProperties;
    className?: string;
}
export declare type ScrollNodeList = {
    node: HTMLElement;
    left: number;
    top: number;
}[];
declare const ReactTransformSticky: React.FC<ReactTransformStickyProps>;
export default ReactTransformSticky;
