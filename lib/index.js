!function(e,n){if("object"===typeof exports&&"object"===typeof module)module.exports=n();else if("function"===typeof define&&define.amd)define([],n);else{var t=n();for(var o in t)("object"===typeof exports?exports:e)[o]=t[o]}}(self,(function(){return function(){"use strict";var e={n:function(n){var t=n&&n.__esModule?function(){return n.default}:function(){return n};return e.d(t,{a:t}),t},d:function(n,t){for(var o in t)e.o(t,o)&&!e.o(n,o)&&Object.defineProperty(n,o,{enumerable:!0,get:t[o]})},o:function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},r:function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}},n={};e.r(n),e.d(n,{ReactFixedSticky:function(){return se},ReactTransformSticky:function(){return re}});var t=require("@babel/runtime-corejs3/helpers/defineProperty"),o=e.n(t),r=require("@babel/runtime-corejs3/core-js/instance/map"),l=e.n(r),i=require("@babel/runtime-corejs3/core-js/instance/includes"),u=e.n(i),c=require("@babel/runtime-corejs3/core-js/object/keys"),d=e.n(c),a=require("@babel/runtime-corejs3/core-js/object/get-own-property-symbols"),s=e.n(a),f=require("@babel/runtime-corejs3/core-js/instance/filter"),v=e.n(f),m=require("@babel/runtime-corejs3/core-js/object/get-own-property-descriptor"),p=e.n(m),y=require("@babel/runtime-corejs3/core-js/instance/for-each"),b=e.n(y),j=require("@babel/runtime-corejs3/core-js/object/get-own-property-descriptors"),h=e.n(j),g=require("@babel/runtime-corejs3/core-js/object/define-properties"),E=e.n(g),w=require("@babel/runtime-corejs3/core-js/object/define-property"),x=e.n(w),q=require("react"),O=e.n(q),T=require("@babel/runtime-corejs3/helpers/typeof"),N=e.n(T),S=require("@babel/runtime-corejs3/core-js/instance/index-of"),L=e.n(S);require("@babel/runtime-corejs3/core-js/array/is-array"),require("@babel/runtime-corejs3/core-js/map"),require("@babel/runtime-corejs3/core-js/set");function M(e){return"object"===("undefined"===typeof HTMLElement?"undefined":N()(HTMLElement))?e instanceof HTMLElement:e&&"object"===N()(e)&&1===e.nodeType&&"string"===typeof e.nodeName}var P=require("@babel/runtime-corejs3/core-js/instance/concat"),C=e.n(P),R=["Moz","Webkit","O","ms"];function H(e,n){for(var t,o="",r=!0,l=0;l<e.length;l++)r?(o+=e[l].toUpperCase(),r=!1):"-"===e[l]?r=!0:o+=e[l];return n?C()(t="".concat(n)).call(t,o):e}function W(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"transform";if("undefined"===typeof window||"undefined"===typeof window.document)return"";var n=window.document.documentElement.style;if(e in n)return e;for(var t=0;t<R.length;t++)if(H(e,R[t])in n)return H(e,R[t]);return""}function k(e,n){var t=d()(e);if(s()){var o=s()(e);n&&(o=v()(o).call(o,(function(n){return p()(e,n).enumerable}))),t.push.apply(t,o)}return t}function z(e){for(var n=1;n<arguments.length;n++){var t,r,l=null!=arguments[n]?arguments[n]:{};n%2?b()(t=k(Object(l),!0)).call(t,(function(n){o()(e,n,l[n])})):h()?E()(e,h()(l)):b()(r=k(Object(l))).call(r,(function(n){x()(e,n,p()(l,n))}))}return e}var X=function(e){var n=null;return"string"===typeof e?n=document.querySelector(e):M(e)&&(n=e),n};function _(e){return e.getBoundingClientRect()}function D(e){var n=null;if("clientX"in e)n={x:e.clientX,y:e.clientY};else if("touches"in e){var t,o;if(null!==e&&void 0!==e&&e.touches[0])n={x:null===(t=e.touches[0])||void 0===t?void 0:t.clientX,y:null===(o=e.touches[0])||void 0===o?void 0:o.clientY}}else if(M(e)){var r,l;if(u()(r=[document.documentElement,document.body]).call(r,e))n={x:0,y:0};else n={x:null===(l=_(e))||void 0===l?void 0:l.left,y:_(e).top}}return n}function I(e){return!!M(e)&&(e.scrollTop>0||(e.scrollTop++,e.scrollTop>0))}function Y(e,n){var t=[document.documentElement,document.body];if(L()(t).call(t,e)>-1)return document.body||document.documentElement;var o=null===e||void 0===e?void 0:e.parentNode;if(n)for(;-1==L()(t).call(t,o)&&n>0;){if(I(o))return o;o=o.parentNode,n--}else for(;-1==L()(t).call(t,o);){if(I(o))return o;o=o.parentNode}return document.body||document.documentElement}function A(e){var n;if(M(e)){if(u()(n=[document.documentElement,document.body]).call(n,e)){var t=e.ownerDocument,o=t.defaultView;return{x:t.documentElement.scrollLeft||o.pageXOffset||t.body.scrollLeft,y:t.documentElement.scrollTop||o.pageYOffset||t.body.scrollTop}}return{x:e.scrollLeft,y:e.scrollTop}}}function V(e){var n;if(M(e))return u()(n=[document.documentElement,document.body]).call(n,e)?{width:window.innerWidth,height:window.innerHeight}:{width:e.offsetWidth,height:e.offsetHeight}}function B(e,n){if(M(e)){var t,o,r=(null===n||void 0===n?void 0:n.scrollWidth)||0,l=(null===n||void 0===n?void 0:n.scrollHeight)||0,i=(null===(t=V(e))||void 0===t?void 0:t.width)||0,u=(null===(o=V(e))||void 0===o?void 0:o.height)||0,c=_(e).top-_(n).top,d=_(e).left-_(n).left;return{left:d,top:c,right:r-(d+i),bottom:l-(c+u)}}return null}function F(e,n){var t=e&&e.style,o=function(e){var n,t=(null===e||void 0===e?void 0:e.ownerDocument)||(null===(n=document)||void 0===n?void 0:n.ownerDocument);return t&&t.defaultView||window}(e);if(t){var r=o.getComputedStyle(e,"")||e.currentStyle;if(void 0===n)return r;if("string"===typeof n)return r[n];if("object"===N()(n))for(var l in n)t[W(l)]=n[l]}}function U(e,n,t,o){if(e){var r=z({capture:!1,once:!1,passive:!1},o);e.addEventListener?e.addEventListener(n,t,r):e.attachEvent?e.attachEvent("on"+n,t):e["on"+n]=t}}function G(e,n,t,o){if(e){var r=z({capture:!1,once:!1,passive:!1},o);e.removeEventListener?e.removeEventListener(n,t,r):e.detachEvent?e.detachEvent("on"+n,t):e["on"+n]=null}}var J=require("@babel/runtime-corejs3/core-js/instance/some"),K=e.n(J),Q=function(){var e=navigator.userAgent,n=["Android","iPhone","SymbianOS","Windows Phone","iPad","iPod"];return K()(n).call(n,(function(n){return u()(e).call(e,n)}))},Z=require("classnames"),$=e.n(Z);function ee(e,n){var t=d()(e);if(s()){var o=s()(e);n&&(o=v()(o).call(o,(function(n){return p()(e,n).enumerable}))),t.push.apply(t,o)}return t}function ne(e){for(var n=1;n<arguments.length;n++){var t,r,l=null!=arguments[n]?arguments[n]:{};n%2?b()(t=ee(Object(l),!0)).call(t,(function(n){o()(e,n,l[n])})):h()?E()(e,h()(l)):b()(r=ee(Object(l))).call(r,(function(n){x()(e,n,p()(l,n))}))}return e}var te={touch:{move:"scroll"},mouse:{move:"scroll"}},oe=Q()?te.touch:te.mouse,re=function(e){var n,t=e.children,o=e.scrollRoot,r=e.targetNodeList,i=void 0===r?[]:r,c=e.bounds,d=void 0===c?{top:0}:c,a=e.style,s=e.className,f=(0,q.useRef)(),v=function(){return X(o)||Y(f.current)};(0,q.useEffect)((function(){var e,n=v(),t=u()(e=[document.documentElement,document.body]).call(e,n)?document||window:n,o=function(){var e=v(),n=null!==i&&void 0!==i&&i.length?i:[f.current];return null===n||void 0===n?void 0:l()(n).call(n,(function(n){var t=X(n);if(t){var o,r=u()(o=[document.documentElement,document.body]).call(o,e)?_(t):B(t,e);if(r)return{node:t,left:null===r||void 0===r?void 0:r.left,top:null===r||void 0===r?void 0:r.top}}}))}();return U(t,oe.move,(function(e){return m(e,o,n)})),function(){G(t,oe.move,m)}}),[]);var m=function(e,n,t){null===n||void 0===n||l()(n).call(n,(function(e){var n,o,r=null===e||void 0===e?void 0:e.node,l=null===e||void 0===e?void 0:e.left,i=null===e||void 0===e?void 0:e.top,u=null===d||void 0===d?void 0:d.top,c=null===d||void 0===d?void 0:d.left,a=(null===(n=A(t))||void 0===n?void 0:n.x)||0,s=(null===(o=A(t))||void 0===o?void 0:o.y)||0,f=!(!u&&0!==u)&&s-i>u,v=!(!c&&0!==c)&&a-l>c;f||v?f?r.style[W("transform")]="translate3d(0px,".concat(s-i+(u||0),"px, 0)"):v&&(r.style[W("transform")]="translate3d(".concat(a-l+(c||0),"px,0px, 0)")):r.style[W("transform")]=""}))},p=$()((null===t||void 0===t||null===(n=t.props)||void 0===n?void 0:n.className)||"",s);return O().cloneElement(O().Children.only(t),{ref:f,className:p,style:ne(ne({},t.props.style),a)})},le=require("react-dom"),ie=e.n(le);function ue(e,n){var t=d()(e);if(s()){var o=s()(e);n&&(o=v()(o).call(o,(function(n){return p()(e,n).enumerable}))),t.push.apply(t,o)}return t}function ce(e){for(var n=1;n<arguments.length;n++){var t,r,l=null!=arguments[n]?arguments[n]:{};n%2?b()(t=ue(Object(l),!0)).call(t,(function(n){o()(e,n,l[n])})):h()?E()(e,h()(l)):b()(r=ue(Object(l))).call(r,(function(n){x()(e,n,p()(l,n))}))}return e}var de={touch:{move:"scroll"},mouse:{move:"scroll"}},ae=Q()?de.touch:de.mouse,se=function(e){var n,t=e.children,o=e.scrollRoot,r=e.bounds,l=void 0===r?{top:0}:r,i=e.style,c=e.className,d=(0,q.useRef)(),a=(0,q.useRef)();(0,q.useEffect)((function(){var e,n=X(o)||Y(d.current),t=d.current,r=u()(e=[document.documentElement,document.body]).call(e,n)?document||window:n,l={node:t,root:n};U(r,ae.move,(function(e){return s(e,l)}));var i=document,c=function(){var e=document;return null===e||void 0===e?void 0:e.documentElement}();return a.current=i.createElement("div"),F(a.current,{opacity:0,zIndex:-1,position:"fixed"}),null===c||void 0===c||c.appendChild(a.current),ie().render(v,a.current),function(){G(r,ae.move,s),null===c||void 0===c||c.removeChild(a.current)}}),[]);var s=function(e,n){var t,o=null===n||void 0===n?void 0:n.node,r=null===n||void 0===n?void 0:n.root,i=u()(t=[document.documentElement,document.body]).call(t,r)?_(o):B(o,r);if(i&&a.current){var c=!!(null!==l&&void 0!==l&&l.left||0===l.left)&&(null===i||void 0===i?void 0:i.left)<(null===l||void 0===l?void 0:l.left),d=!!(null!==l&&void 0!==l&&l.top||0===l.top)&&(null===i||void 0===i?void 0:i.top)<(null===l||void 0===l?void 0:l.top);if(c||d){var s,f,v=Math.max((null===(s=D(r))||void 0===s?void 0:s.x)||0,0),m=Math.max((null===(f=D(r))||void 0===f?void 0:f.y)||0,0);a.current.style.top=m+(l.top||0)+"px",a.current.style.left=v+(l.left||0)+"px",o.style.opacity="0",a.current.style.opacity=1,a.current.style.zIndex=0}else o.style.opacity="1",a.current.style.opacity=0,a.current.style.zIndex=-1}},f=$()((null===t||void 0===t||null===(n=t.props)||void 0===n?void 0:n.className)||"",c),v=O().cloneElement(O().Children.only(t),{className:f,style:ce(ce({},t.props.style),i)});return O().cloneElement(O().Children.only(t),{ref:d,className:f,style:ce(ce({},t.props.style),i)})};return n}()}));