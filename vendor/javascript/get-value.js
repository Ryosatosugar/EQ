// get-value@2.0.6 downloaded from https://ga.jspm.io/npm:get-value@2.0.6/index.js

var t={};t=function(t,r,n,i,e){if(!isObject(t)||!r)return t;r=toString(r);n&&(r+="."+toString(n));i&&(r+="."+toString(i));e&&(r+="."+toString(e));if(r in t)return t[r];var o=r.split(".");var u=o.length;var a=-1;while(t&&++a<u){var f=o[a];while("\\"===f[f.length-1])f=f.slice(0,-1)+"."+o[++a];t=t[f]}return t};function isObject(t){return null!==t&&("object"===typeof t||"function"===typeof t)}function toString(t){return t?Array.isArray(t)?t.join("."):t:""}var r=t;export default r;

