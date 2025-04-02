// to-object-path@0.3.0 downloaded from https://ga.jspm.io/npm:to-object-path@0.3.0/index.js

import r from"kind-of";var t={};var a=r;t=function toPath(r){"arguments"!==a(r)&&(r=arguments);return filter(r).join(".")};function filter(r){var t=r.length;var e=-1;var n=[];while(++e<t){var i=r[e];"arguments"===a(i)||Array.isArray(i)?n.push.apply(n,filter(i)):"string"===typeof i&&n.push(i)}return n}var e=t;export default e;

