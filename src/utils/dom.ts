import { isDom } from "./type";
import { CSSProperties } from "react";

/**
 * 接收类名或节点，返回节点
 * @param target 目标参数
 */
 export const findElement = (target: any): any => {
    let result = null;
    if (typeof target === "string") {
        result = document.querySelector(target);
    } else if (isDom(target)) {
        result = target;
    }
    return result;
};

// 返回元素或事件对象的可视位置
export interface SizeInterface {
    x: number;
    y: number;
}
export function getClientXY(el: MouseEvent | TouchEvent | HTMLElement): null | SizeInterface {
    let pos = null;
    if ("clientX" in el) {
        pos = {
            x: el.clientX,
            y: el.clientY
        };
    } else if ("touches" in el) {
        if (el?.touches[0]) {
            pos = {
                x: el.touches[0]?.clientX,
                y: el.touches[0]?.clientY
            };
        }
    } else if (isDom(el)) {
        pos = {
            x: getRect(el).left,
            y: getRect(el).top
        };
    }
    return pos;
}

/**
 * 判断目标元素内部是否可以滚动
 * @param {*} ele 内容可以scroll的元素
 */
 export function eleCanScroll(ele: HTMLElement): boolean {
    if (!isDom(ele)) {
        return false;
    }
    if (ele.scrollTop > 0) {
        return true;
    } else {
        ele.scrollTop++;
        const top = ele.scrollTop;
        return top > 0;
    }
}

/**
 * 获取目标元素的可滚动父元素
 * @param {*} target 目标元素
 * @param {*} step 遍历层数，设置可以限制向上冒泡查找的层数
 */
export function getScrollParent(target: any, step?: number): HTMLElement {
    const root = [document.body, document.documentElement];
    if (root.indexOf(target) > -1) {
        return document.body || document.documentElement;
    };

    let scrollParent = target?.parentNode;

    if (step) {
        while (root.indexOf(scrollParent) == -1 && step > 0) {
            if (eleCanScroll(scrollParent)) {
                return scrollParent;
            }
            scrollParent = scrollParent.parentNode;
            step--;
        }
    } else {
        while (root.indexOf(scrollParent) == -1) {
            if (eleCanScroll(scrollParent)) {
                return scrollParent;
            }
            scrollParent = scrollParent.parentNode;
        }
    }
    return document.body || document.documentElement;
};

/**
 * 获取页面或元素的卷曲滚动(兼容写法)
 * @param el 目标元素
 */
 export interface ScrollInterface {
    x: number;
    y: number;
}
export function getScroll(el: HTMLElement): undefined | ScrollInterface {
    if (!isDom(el)) {
        return;
    }
    if ([document.documentElement, document.body].includes(el)) {
        const doc = el.ownerDocument; // 节点所在document对象
        const win: any = doc.defaultView; // 包含document的window对象
        const x = doc.documentElement.scrollLeft || win.pageXOffset || doc.body.scrollLeft;
        const y = doc.documentElement.scrollTop || win.pageYOffset || doc.body.scrollTop;
        return { x, y };
    } else {
        const x = el.scrollLeft;
        const y = el.scrollTop;
        return { x, y };
    }
};

// 获取页面或元素的宽高 = 可视宽高 + 滚动条 + 边框
export interface OffsetInterface {
    width: number;
    height: number;
}
export function getOffsetWH(el: HTMLElement): undefined | OffsetInterface {
    if (!isDom(el)) {
        return;
    }
    if ([document.documentElement, document.body].includes(el)) {
        const width = window.innerWidth;
        const height = window.innerHeight;
        return { width, height };
    } else {
        const width = el.offsetWidth;
        const height = el.offsetHeight;
        return { width, height };
    }
};


/**
 * 给目标节点设置样式,并返回旧样式
 * @param {*} style 样式对象
 * @param {*} node 目标元素
 */
 export function setStyle(style: any, node: HTMLElement = document.body || document.documentElement): CSSProperties {
    const oldStyle: any = {};

    const styleKeys: string[] = Object.keys(style);

    styleKeys.forEach(key => {
        oldStyle[key] = (node.style as any)[key];
    });

    styleKeys.forEach(key => {
        (node.style as any)[key] = (style as any)[key];
    });

    return oldStyle;
}

// 获取页面或元素的可视宽高(兼容写法, 不包括工具栏和滚动条及边框)
export interface ClientInterface {
    width: number;
    height: number;
}
export function getClientWH(el: HTMLElement): undefined | ClientInterface {
    if (!isDom(el)) {
        return;
    }
    if ([document.documentElement, document.body].includes(el)) {
        const width = el.clientWidth || window.screen.availWidth;
        const height = el.clientHeight || window.screen.availHeight;
        return { width, height };
    } else {
        const width = el.clientWidth;
        const height = el.clientHeight;
        return { width, height };
    }
};

/**
 * 返回元素的视窗内的位置(document.body,document?.documentElement可视位置随着滚动改变)
 * @param el 
 * @returns 
 */
 export function getRect(el: HTMLElement) {
    return el.getBoundingClientRect()
}

// 距离父元素内边框的范围信息
export function getInsideRange(el: HTMLElement, parent: HTMLElement): null | {
    left: number;
    top: number;
    right: number;
    bottom: number;
} {
    let pos = null;
    if (isDom(el)) {
        const nodeClientX = getClientXY(el)?.x || 0;
        const nodeClientY = getClientXY(el)?.y || 0;
        const rootClientX = getClientXY(parent)?.x || 0;
        const rootClientY = getClientXY(parent)?.y || 0;
        const parentW = getClientWH(parent)?.width || 0;
        const parentH = getClientWH(parent)?.height || 0;
        const nodeW = getOffsetWH(el)?.width || 0;
        const nodeH = getOffsetWH(el)?.height || 0;

        return {
            left: nodeClientX - rootClientX,
            top: nodeClientY - rootClientY,
            right: parentW - (nodeClientX - rootClientX + nodeW),
            bottom: parentH - (nodeClientY - rootClientY + nodeH)
        }
    }
    return pos;
}

/**
 * 添加事件监听
 * @param el 目标元素
 * @param event 事件名称
 * @param handler 事件函数
 * @param inputOptions 配置
 */
 interface InputOptionsType {
    captrue?: boolean,
    once?: boolean,
    passive?: boolean
}
export function addEvent(el: any, event: string, handler: (...rest: any[]) => any, inputOptions?: InputOptionsType): void {
    if (!el) return;
    // captrue: true事件捕获 once: true只调用一次,然后销毁 passive: true不调用preventDefault
    const options = { capture: false, once: false, passive: false, ...inputOptions };
    if (el.addEventListener) {
        el.addEventListener(event, handler, options);
    } else if (el.attachEvent) {
        el.attachEvent('on' + event, handler);
    } else {
        // $FlowIgnore: Doesn't think elements are indexable
        el['on' + event] = handler;
    }
}

/**
 * 移除事件监听
 * @param el 目标元素
 * @param event 事件名称
 * @param handler 事件函数
 * @param inputOptions 配置
 */
export function removeEvent(el: any, event: string, handler: (...rest: any[]) => any, inputOptions?: InputOptionsType): void {
    if (!el) return;
    const options = { capture: false, once: false, passive: false, ...inputOptions };
    if (el.removeEventListener) {
        el.removeEventListener(event, handler, options);
    } else if (el.detachEvent) {
        el.detachEvent('on' + event, handler);
    } else {
        // $FlowIgnore: Doesn't think elements are indexable
        el['on' + event] = null;
    }
}