# react-sticky-wrapper

English | [中文说明](./README_CN.md)

[![Version](https://img.shields.io/badge/version-1.0.3-green)](https://www.npmjs.com/package/react-sticky-wrapper)

# Introduction?

`ReactFixedSticky` Component: Using `position:fixed` to realize sticky to top, only support the top of the wrapped element, but pay attention to the fixed position on the `position: absolute | relative` element.

`ReactTransformSticky` Component: Using `transform` rolling to realize any element that needs to fixed, one or more top lifting element selectors can be customized, with high degree of freedom, but the disadvantage is that there will be shake when fast rolling, so the general scene chooses `ReactFixedSticky` component, but when one or more top lifting elements need to be customized, you should use `ReactTransformSticky` component.
the two components all support mobile and pc。

# ReactFixedSticky Component

- [x] Default top fixed element are `props.children`;
- [x] `scrollRoot` : Custom scrollRoot, default automatically find the scrolling root element
- [x] `topDistance`: Customize the distance between the top element and the root of the scroll, unit `px`


# ReactTransformSticky Component

- [x] Default top fixed element are `props.children`, but you can customize more than one by `targetNodeList`
- [x] `scrollRoot` : Custom scrollRoot, default automatically find the scrolling root element
- [x] `topDistance`: Customize the distance between the top element and the root of the scroll, unit `px`

### install
```
npm install --save react-sticky-wrapper
# or
yarn add react-sticky-wrapper
```

### example
```javascript
import { ReactFixedSticky, ReactTransformSticky } from 'react-sticky-wrapper';

<ReactFixedSticky scrollRoot={document.body}>
 fixed Sticky
</ReactFixedSticky>

...

<ReactTransformSticky scrollRoot={document.body}>
 transform Sticky
</ReactTransformSticky>

```

## ReactFixedSticky Attributes

| name                          | type                  | defaultValue                                                   | description                                                                                                      |
| ----------------------------- | --------------------- | -------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------- |
| scrollRoot                      | `string / HTMLElement`            | -                                                  | the root element when scrolling，default automatically find the scrolling root element                                                                                  |
| topDistance                  | `number`            | `0`                                                  | the distance to scrolling root element when fixed，default `0`，unit `px` `                                                                              |

## ReactTransformSticky Attributes

| name                          | type                  | defaultValue                                                   | description                                                                                                      |
| ----------------------------- | --------------------- | -------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------- |
| scrollRoot                      | `string / HTMLElement`            | -                                                  | the root element when scrolling，default automatically find the scrolling root element                                                                                  |
| topDistance                  | `number`            | `0`                                                  | the distance to scrolling root element when fixed，default `0`，unit `px`                                                                              |
| targetNodeList          | `HTMLElement[] / string[]`                         | `props.children`                                                  | element that need to fixed，default `props.children`                                                  |
