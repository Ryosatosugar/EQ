// set-value@2.0.1 downloaded from https://ga.jspm.io/npm:set-value@2.0.1/index.js

import r from"split-string";import t from"extend-shallow";import e from"is-plain-object";import i from"is-extendable";var a={};var o=r;var n=t;var p=e;var l=i;a=function(r,t,e){if(!l(r))return r;Array.isArray(t)&&(t=[].concat.apply([],t).join("."));if("string"!==typeof t)return r;var i=o(t,{sep:".",brackets:true}).filter(isValidKey);var a=i.length;var s=-1;var f=r;while(++s<a){var v=i[s];if(s===a-1)p(f[v])&&p(e)?f[v]=n({},f[v],e):f[v]=e;else{l(f[v])||(f[v]={});f=f[v]}}return r};function isValidKey(r){return"__proto__"!==r&&"constructor"!==r&&"prototype"!==r}var s=a;export default s;

