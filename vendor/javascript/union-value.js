// union-value@1.0.1 downloaded from https://ga.jspm.io/npm:union-value@1.0.1/index.js

import r from"is-extendable";import e from"arr-union";import t from"get-value";import a from"set-value";var o={};var n=r;var i=e;var u=t;var f=a;o=function unionValue(r,e,t){if(!n(r))throw new TypeError("union-value expects the first argument to be an object.");if("string"!==typeof e)throw new TypeError("union-value expects `prop` to be a string.");var a=arrayify(u(r,e));f(r,e,i(a,arrayify(t)));return r};function arrayify(r){return null===r||"undefined"===typeof r?[]:Array.isArray(r)?r:[r]}var p=o;export default p;

