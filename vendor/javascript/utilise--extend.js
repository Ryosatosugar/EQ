// utilise/extend@2.3.8 downloaded from https://ga.jspm.io/npm:utilise@2.3.8/extend.js

import r from"./is.js";import o from"./keys.js";import t from"./copy.js";import i from"./not.js";var m={};var n=r,e=i,f=o,p=t;m=function extend(r){return function(o){f(o).filter(e(n.in(r))).map(p(o,r));return r}};var s=m;export default s;

