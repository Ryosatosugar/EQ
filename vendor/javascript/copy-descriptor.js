// copy-descriptor@0.1.1 downloaded from https://ga.jspm.io/npm:copy-descriptor@0.1.1/index.js

var e={};e=function copyDescriptor(e,t,r,o){if(!isObject(t)&&"function"!==typeof t){o=r;r=t;t=e}if(!isObject(e)&&"function"!==typeof e)throw new TypeError("expected the first argument to be an object");if(!isObject(t)&&"function"!==typeof t)throw new TypeError("expected provider to be an object");"string"!==typeof o&&(o=r);if("string"!==typeof r)throw new TypeError("expected key to be a string");if(!(r in t))throw new Error('property "'+r+'" does not exist');var n=Object.getOwnPropertyDescriptor(t,r);n&&Object.defineProperty(e,o,n)};function isObject(e){return"[object Object]"==={}.toString.call(e)}var t=e;export default t;

