// collection-visit@1.0.0 downloaded from https://ga.jspm.io/npm:collection-visit@1.0.0/index.js

import r from"object-visit";import a from"map-visit";var i={};var l=r;var p=a;i=function(r,a,i){var t;if("string"===typeof i&&a in r){var e=[].slice.call(arguments,2);t=r[a].apply(r,e)}else t=Array.isArray(i)?p.apply(null,arguments):l.apply(null,arguments);return"undefined"!==typeof t?t:r};var t=i;export default t;

