// uuid/v4@3.4.0 downloaded from https://ga.jspm.io/npm:uuid@3.4.0/v4.js

import r from"uuid/lib/rng.js";import a from"./lib/bytesToUuid.js";var i={};var n=r;var o=a;function v4(r,a,i){var t=a&&i||0;if("string"==typeof r){a="binary"===r?new Array(16):null;r=null}r=r||{};var v=r.random||(r.rng||n)();v[6]=15&v[6]|64;v[8]=63&v[8]|128;if(a)for(var f=0;f<16;++f)a[t+f]=v[f];return a||o(v)}i=v4;var t=i;export default t;

