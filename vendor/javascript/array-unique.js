// array-unique@0.2.1 downloaded from https://ga.jspm.io/npm:array-unique@0.2.1/index.js

var r={};r=function unique(r){if(!Array.isArray(r))throw new TypeError("array-unique expects an array.");var a=r.length;var e=-1;while(e++<a){var n=e+1;for(;n<r.length;++n)r[e]===r[n]&&r.splice(n--,1)}return r};var a=r;export default a;

