import React, { CSSProperties } from 'react';
export interface ReactFixedStickyProps {
    children: any;
    scrollRoot?: HTMLElement | string;
    bounds?: {
        left?: number;
        top?: number;
    };
    style?: CSSProperties;
    className?: string;
}
declare const ReactFixedSticky: React.FC<ReactFixedStickyProps>;
export default ReactFixedSticky;
