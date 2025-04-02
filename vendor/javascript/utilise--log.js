// utilise/log@2.3.8 downloaded from https://ga.jspm.io/npm:utilise@2.3.8/log.js

import"./client.js";import r from"./owner.js";import o from"./is.js";import t from"./to.js";var n={};var e=o,l=t,i=r;n=function log(r){return function(o){if(!i.console||!console.log.apply)return o;e.arr(arguments[2])&&(arguments[2]=arguments[2].length);var t=l.arr(arguments),n="[log]["+(new Date).toISOString()+"]"+r;t.unshift(n.grey?n.grey:n);return console.log.apply(console,t),o}};var a=n;export default a;

