// arr-union@3.1.0 downloaded from https://ga.jspm.io/npm:arr-union@3.1.0/index.js

var r={};r=function union(r){if(!Array.isArray(r))throw new TypeError("arr-union expects the first argument to be an array.");var a=arguments.length;var e=0;while(++e<a){var n=arguments[e];if(n){Array.isArray(n)||(n=[n]);for(var t=0;t<n.length;t++){var i=n[t];r.indexOf(i)>=0||r.push(i)}}}return r};var a=r;export default a;

