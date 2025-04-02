// utilise/za@2.3.8 downloaded from https://ga.jspm.io/npm:utilise@2.3.8/za.js

import"./is.js";import r from"./to.js";import"./wrap.js";import"./keys.js";import"./str.js";import t from"./key.js";var o={};var e=t,i=r;o=function az(){return compare(i.arr(arguments))};function compare(r){return function(t,o){if(!r.length)return 0;var i=r[0],a=e(i)(t)||"",m=e(i)(o)||"";return a<m?1:a>m?-1:compare(r.slice(1))(t,o)}}var a=o;export default a;

