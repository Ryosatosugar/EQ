// clone-response@1.0.3 downloaded from https://ga.jspm.io/npm:clone-response@1.0.3/src/index.js

import*as e from"stream";import*as r from"mimic-response";var a="default"in e?e.default:e;var s="default"in r?r.default:r;var t={};const o=a.PassThrough;const n=s;const cloneResponse=e=>{if(!(e&&e.pipe))throw new TypeError("Parameter `response` must be a response stream.");const r=new o;n(e,r);return e.pipe(r)};t=cloneResponse;var p=t;export{p as default};

