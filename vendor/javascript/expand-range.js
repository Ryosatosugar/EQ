// expand-range@1.8.2 downloaded from https://ga.jspm.io/npm:expand-range@1.8.2/index.js

import e from"fill-range";var r={};var t=e;r=function expandRange(e,r,n){if("string"!==typeof e)throw new TypeError("expand-range expects a string.");if("function"===typeof r){n=r;r={}}if("boolean"===typeof r){r={};r.makeRe=true}var a=r||{};var o=e.split("..");var f=o.length;if(f>3)return e;if(1===f)return o;"boolean"===typeof n&&true===n&&(a.makeRe=true);o.push(a);return t.apply(null,o.concat(n))};var n=r;export default n;

