/// <reference types="react" />
import { RouteProps } from "react-router-dom";
export interface MyRouteProps extends RouteProps {
    auth?: boolean;
    component: any;
}
export default function RouteComponent(): JSX.Element;
