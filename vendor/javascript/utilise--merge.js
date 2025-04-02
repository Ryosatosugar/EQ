// utilise/merge@2.3.8 downloaded from https://ga.jspm.io/npm:utilise@2.3.8/merge.js

import r from"./is.js";var e={};var o=r;e=merge;function merge(r){return function(e){for(x in e)o.obj(e[x])&&o.obj(r[x])?merge(r[x])(e[x]):r[x]=e[x];return r}}var n=e;export default n;

