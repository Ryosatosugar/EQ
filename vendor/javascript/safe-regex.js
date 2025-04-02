// safe-regex@1.1.0 downloaded from https://ga.jspm.io/npm:safe-regex@1.1.0/index.js

import r from"ret";var t={};var e=r;var a=e.types;t=function(r,t){t||(t={});var i=void 0===t.limit?25:t.limit;isRegExp(r)?r=r.source:"string"!==typeof r&&(r=String(r));try{r=e(r)}catch(r){return false}var n=0;return function walk(r,t){if(r.type===a.REPETITION){t++;n++;if(t>1)return false;if(n>i)return false}if(r.options)for(var e=0,f=r.options.length;e<f;e++){var o=walk({stack:r.options[e]},t);if(!o)return false}var u=r.stack||r.value&&r.value.stack;if(!u)return true;for(var e=0;e<u.length;e++){var o=walk(u[e],t);if(!o)return false}return true}(r,0)};function isRegExp(r){return"[object RegExp]"==={}.toString.call(r)}var i=t;export default i;

