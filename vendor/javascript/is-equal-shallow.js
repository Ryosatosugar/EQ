// is-equal-shallow@0.1.3 downloaded from https://ga.jspm.io/npm:is-equal-shallow@0.1.3/index.js

import r from"is-primitive";var i={};var e=r;i=function isEqual(r,i){if(!r&&!i)return true;if(!r&&i||r&&!i)return false;var t=0,f=0,a;for(a in i){f++;if(!e(i[a])||!r.hasOwnProperty(a)||r[a]!==i[a])return false}for(a in r)t++;return t===f};var t=i;export default t;

