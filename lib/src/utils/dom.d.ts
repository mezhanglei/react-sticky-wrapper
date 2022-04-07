import { CSSProperties } from "react";
/**
 * 接收类名或节点，返回节点
 * @param target 目标参数
 */
export declare const findElement: (target: any) => any;
/**
 * 返回元素的视窗内的位置
 * @param el
 * @returns
 */
export declare function getRect(el: HTMLElement): DOMRect;
export declare function getClientXY(el: MouseEvent | TouchEvent | HTMLElement): null | {
    x: number;
    y: number;
};
/**
 * 判断目标元素内部是否可以滚动
 * @param {*} ele 内容可以scroll的元素
 */
export declare function eleCanScroll(ele: HTMLElement): boolean;
/**
 * 获取目标元素的可滚动父元素
 * @param {*} target 目标元素
 * @param {*} step 遍历层数，设置可以限制向上冒泡查找的层数
 */
export declare function getScrollParent(target: any, step?: number): HTMLElement;
/**
 * 获取页面或元素的卷曲滚动(兼容写法)
 * @param el 目标元素
 */
export declare function getScroll(el: HTMLElement): undefined | {
    x: number;
    y: number;
};
export declare function getOffsetWH(el: HTMLElement): undefined | {
    width: number;
    height: number;
};
/**
 * 给目标节点设置样式,并返回旧样式
 * @param {*} style 样式对象
 * @param {*} node 目标元素
 */
export declare function setStyle(style: any, node?: HTMLElement): CSSProperties;
export declare function getClientWH(el: HTMLElement): undefined | {
    width: number;
    height: number;
};
export declare function getInsideRange(el: HTMLElement, parent: HTMLElement): null | {
    left: number;
    top: number;
    right: number;
    bottom: number;
};
export declare const getWindow: (el?: any) => any;
export declare function css(el: any, prop?: string | CSSProperties): any;
/**
 * 添加事件监听
 * @param el 目标元素
 * @param event 事件名称
 * @param handler 事件函数
 * @param inputOptions 配置
 */
export declare function addEvent(el: any, event: string, handler: (...rest: any[]) => any, inputOptions?: {
    captrue?: boolean;
    once?: boolean;
    passive?: boolean;
}): void;
/**
 * 移除事件监听
 * @param el 目标元素
 * @param event 事件名称
 * @param handler 事件函数
 * @param inputOptions 配置
 */
export declare function removeEvent(el: any, event: string, handler: (...rest: any[]) => any, inputOptions?: {
    captrue?: boolean;
    once?: boolean;
    passive?: boolean;
}): void;
