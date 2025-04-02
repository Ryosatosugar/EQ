// object.pick@1.3.0 downloaded from https://ga.jspm.io/npm:object.pick@1.3.0/index.js

import r from"isobject";var t={};var i=r;t=function pick(r,t){if(!i(r)&&"function"!==typeof r)return{};var n={};if("string"===typeof t){t in r&&(n[t]=r[t]);return n}var e=t.length;var a=-1;while(++a<e){var f=t[a];f in r&&(n[f]=r[f])}return n};var n=t;export default n;

