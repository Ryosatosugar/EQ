// shasum-object@1.0.0 downloaded from https://ga.jspm.io/npm:shasum-object@1.0.0/index.js

import r from"crypto";import t from"fast-safe-stringify";import f from"buffer";var e={};var a=f.Buffer;var o=r.createHash;var s=t;e=function shasum(r,t,f){t||(t="sha1");f||(f="hex");"string"===typeof r||a.isBuffer(r)||(r=s.stable(r));return o(t).update(r,"string"===typeof r?"utf8":void 0).digest(f)};var i=e;export default i;

