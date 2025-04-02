// utilise/to@2.3.8 downloaded from https://ga.jspm.io/npm:utilise@2.3.8/to.js

import r from"./is.js";var e="undefined"!==typeof globalThis?globalThis:"undefined"!==typeof self?self:global;var t={};var o=r;t={arr:toArray,obj:toObject};function toArray(r){return Array.prototype.slice.call(r,0)}function toObject(r){var t="id",a={};return 1==arguments.length?(t=r,reduce):reduce.apply(this||e,arguments);function reduce(r,e,a){0===a&&(r={});r[o.fn(t)?t(e,a):e[t]]=e;return r}}var a=t;const n=t.arr;export default a;export{n as arr};

