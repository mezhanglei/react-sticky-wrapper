# react-sticky-wrapper

[English](./README.md) | 中文说明

[![Version](https://img.shields.io/badge/version-1.0.0-green)](https://www.npmjs.com/package/react-sticky-wrapper)

# 适用场景

ReactFixedSticky组件：利用`position:fixed`实现的吸顶组件，只支持被包裹元素的吸顶，注意fixed对要吸顶的元素的定位影响。
ReactTransformSticky组件：利用`transform`滚动实现的任意吸顶组件，可自定义一个或多个吸顶的元素选择器，自由度高，但缺点是快速滚动时会有抖动，所以常规场景选择`ReactFixedSticky`组件，但是需要自定义一个或多个吸顶元素时可以用此组件满足需求。
两种均支持移动设备和pc设备。

# ReactFixedSticky组件

- [x] 吸顶元素为包裹的子元素（props.children）
- [x] `scrollRoot`: 自定义滚动根节点，默认滚动根节点为body
- [x] `topDistance`:自定义吸顶元素到滚动根节点之间的距离，单位px

# ReactTransformSticky组件

- [x] 默认吸顶元素为包裹的子元素（props.children），也可以自定义多个
- [x] `scrollRoot`: 自定义滚动根节点，默认滚动根节点为body
- [x] `topDistance`:自定义吸顶元素到滚动根节点之间的距离，单位px
- [x] `targetNodeList`: 自定义目标吸顶元素，可以自定义一个或多个

### 快速安装
```
npm install --save react-sticky-wrapper
# or
yarn add react-sticky-wrapper
```

### 示例
```javascript
import { ReactFixedSticky, ReactTransformSticky } from 'react-sticky-wrapper';

<ReactFixedSticky>
 fixed Sticky
</ReactFixedSticky>

...

<ReactTransformSticky>
 transform Sticky
</ReactTransformSticky>

```

## ReactFixedSticky组件属性说明

| 名称                          | 类型                  | 默认值                                                         | 描述                                                                                                      |
| ----------------------------- | --------------------- | -------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------- |
| scrollRoot                      | `string / HTMLElement`            | `document.body / document.documentElement`                                                  | 吸顶时的滚动根元素，默认`document.body / document.documentElement`                                                                                  |
| topDistance                  | `number`            | `0`                                                  | 设置离滚动根元素多少时吸顶，默认0，单位`px  `                                                                              |

## ReactTransformSticky组件属性说明

| 名称                          | 类型                  | 默认值                                                         | 描述                                                                                                      |
| ----------------------------- | --------------------- | -------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------- |
| scrollRoot                      | `string / HTMLElement`            | `document.body / document.documentElement`                                                  | 吸顶时的滚动根元素，默认`document.body / document.documentElement`                                                                                  |
| topDistance                  | `number`            | `0`                                                  | 设置离滚动根元素多少时吸顶，默认0，单位`px`                                                                              |
| targetNodeList          | `HTMLElement[] / string[]`                         | `props.children`                                                  | 设置需要吸顶的dom元素集合，默认`props.children`                                                  |
# TODO-LIST
- [ ] 如果有需要，可以提issue，支持不同方向的粘性行为



