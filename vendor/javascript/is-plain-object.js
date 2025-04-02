// is-plain-object@2.0.4 downloaded from https://ga.jspm.io/npm:is-plain-object@2.0.4/index.js

import t from"isobject";var e={};var r=t;function isObjectObject(t){return true===r(t)&&"[object Object]"===Object.prototype.toString.call(t)}e=function isPlainObject(t){var e,r;if(false===isObjectObject(t))return false;e=t.constructor;if("function"!==typeof e)return false;r=e.prototype;return false!==isObjectObject(r)&&false!==r.hasOwnProperty("isPrototypeOf")};var o=e;export default o;

