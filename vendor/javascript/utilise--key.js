// utilise/key@2.3.8 downloaded from https://ga.jspm.io/npm:utilise@2.3.8/key.js

import r from"./is.js";import n from"./wrap.js";import e from"./keys.js";import o from"./str.js";var t={};var i=n,f=e,a=o,p=r;t=function key(r,n){var e=arguments.length>1,o=p.fn(r)?[]:a(r).split(".").filter(Boolean),t=o.shift();return function deep(a,m){var u={};return a?p.num(r)||r?p.arr(r)?(r.map(copy),u):a[r]||!o.length?e?(a[r]=p.fn(n)?n(a[r],m):n,a):p.fn(r)?r(a):a[r]:e?(key(o.join("."),n)(a[t]?a[t]:a[t]={}),a):key(o.join("."))(a[t]):e?replace(a,n):a:void 0;function copy(r){var e=key(r)(a);e=p.fn(n)?n(e):void 0==e?n:e;void 0!=e&&key(r,p.fn(e)?i(e):e)(u)}function replace(r,n){f(r).map((function(n){delete r[n]}));f(n).map((function(e){r[e]=n[e]}));return r}}};var m=t;export default m;

