// map-visit@1.0.0 downloaded from https://ga.jspm.io/npm:map-visit@1.0.0/index.js

import r from"util";import t from"object-visit";var a={};var e=r;var i=t;a=function mapVisit(r,t,a){if(isObject(a))return i.apply(null,arguments);if(!Array.isArray(a))throw new TypeError("expected an array: "+e.inspect(a));var o=[].slice.call(arguments,3);for(var c=0;c<a.length;c++){var n=a[c];isObject(n)?i.apply(null,[r,t,n].concat(o)):r[t].apply(r,[n].concat(o))}};function isObject(r){return r&&("function"===typeof r||!Array.isArray(r)&&"object"===typeof r)}var o=a;export default o;

