// unset-value@1.0.0 downloaded from https://ga.jspm.io/npm:unset-value@1.0.0/index.js

import e from"isobject";import r from"has-value";var t={};var i=e;var o=r;t=function unset(e,r){if(!i(e))throw new TypeError("expected an object.");if(e.hasOwnProperty(r)){delete e[r];return true}if(o(e,r)){var t=r.split(".");var l=t.pop();while(t.length&&"\\"===t[t.length-1].slice(-1))l=t.pop().slice(0,-1)+"."+l;while(t.length)e=e[r=t.shift()];return delete e[l]}return true};var l=t;export default l;

