// remove-trailing-separator@1.1.0 downloaded from https://ga.jspm.io/npm:remove-trailing-separator@1.1.0/index.js

import r from"process";var t={};var a=r;var e="win32"===a.platform;t=function(r){var t=r.length-1;if(t<2)return r;while(isSeparator(r,t))t--;return r.substr(0,t+1)};function isSeparator(r,t){var a=r[t];return t>0&&("/"===a||e&&"\\"===a)}var n=t;export default n;

