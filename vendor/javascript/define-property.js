// define-property@2.0.2 downloaded from https://ga.jspm.io/npm:define-property@2.0.2/index.js

import e from"isobject";import r from"is-descriptor";var t={};var o=e;var f=r;var i="undefined"!==typeof Reflect&&Reflect.defineProperty?Reflect.defineProperty:Object.defineProperty;t=function defineProperty(e,r,t){if(!o(e)&&"function"!==typeof e&&!Array.isArray(e))throw new TypeError("expected an object, function, or array");if("string"!==typeof r)throw new TypeError('expected "key" to be a string');if(f(t)){i(e,r,t);return e}i(e,r,{configurable:true,enumerable:false,writable:true,value:t});return e};var n=t;export default n;

