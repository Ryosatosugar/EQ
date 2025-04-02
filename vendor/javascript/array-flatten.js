// array-flatten@1.1.1 downloaded from https://ga.jspm.io/npm:array-flatten@1.1.1/array-flatten.js

var r={};r=arrayFlatten;function flattenWithDepth(r,t,e){for(var a=0;a<r.length;a++){var n=r[a];e>0&&Array.isArray(n)?flattenWithDepth(n,t,e-1):t.push(n)}return t}function flattenForever(r,t){for(var e=0;e<r.length;e++){var a=r[e];Array.isArray(a)?flattenForever(a,t):t.push(a)}return t}function arrayFlatten(r,t){return null==t?flattenForever(r,[]):flattenWithDepth(r,[],t)}var t=r;export default t;

