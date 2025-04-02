// arr-flatten@1.1.0 downloaded from https://ga.jspm.io/npm:arr-flatten@1.1.0/index.js

var r={};r=function(r){return flat(r,[])};function flat(r,a){var t=0,f;var n=r.length;for(;t<n;t++){f=r[t];Array.isArray(f)?flat(f,a):a.push(f)}return a}var a=r;export default a;

