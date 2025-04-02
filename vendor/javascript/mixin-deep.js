// mixin-deep@1.3.2 downloaded from https://ga.jspm.io/npm:mixin-deep@1.3.2/index.js

import i from"is-extendable";import r from"for-in";var t={};var e=i;var n=r;function mixinDeep(i,r){var t=arguments.length,e=0;while(++e<t){var o=arguments[e];isObject(o)&&n(o,copy,i)}return i}function copy(i,r){if(isValidKey(r)){var t=this[r];isObject(i)&&isObject(t)?mixinDeep(t,i):this[r]=i}}function isObject(i){return e(i)&&!Array.isArray(i)}function isValidKey(i){return"__proto__"!==i&&"constructor"!==i&&"prototype"!==i}t=mixinDeep;var o=t;export default o;

