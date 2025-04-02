// object-visit@1.0.1 downloaded from https://ga.jspm.io/npm:object-visit@1.0.1/index.js

import t from"isobject";var r={};var e=t;r=function visit(t,r,o,i){if(!e(t)&&"function"!==typeof t)throw new Error("object-visit expects `thisArg` to be an object.");if("string"!==typeof r)throw new Error("object-visit expects `method` name to be a string");if("function"!==typeof t[r])return t;var n=[].slice.call(arguments,3);o=o||{};for(var a in o){var c=[a,o[a]].concat(n);t[r].apply(t,c)}return t};var o=r;export default o;

