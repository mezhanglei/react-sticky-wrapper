import { JSXElementConstructor, ReactElement } from 'react';
declare type ComponentType = ReactElement<any, string | JSXElementConstructor<any>> | null;
export interface LoadableProps {
    loader: () => ComponentType;
    loading?: ComponentType;
    delay?: number;
    timeout?: number;
    render?: (loaded: {
        default: any;
    }, props: any) => ComponentType;
    modules?: string[];
}
export default function loadable(configs: LoadableProps): any;
export {};
