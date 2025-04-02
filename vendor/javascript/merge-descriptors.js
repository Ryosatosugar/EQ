// merge-descriptors@1.0.3 downloaded from https://ga.jspm.io/npm:merge-descriptors@1.0.3/index.js

var r={};r=merge;var e=Object.prototype.hasOwnProperty;
/**
 * Merge the property descriptors of `src` into `dest`
 *
 * @param {object} dest Object to add descriptors to
 * @param {object} src Object to clone descriptors from
 * @param {boolean} [redefine=true] Redefine `dest` properties with `src` properties
 * @returns {object} Reference to dest
 * @public
 */function merge(r,t,o){if(!r)throw new TypeError("argument dest is required");if(!t)throw new TypeError("argument src is required");o===void 0&&(o=true);Object.getOwnPropertyNames(t).forEach((function forEachOwnPropertyName(a){if(o||!e.call(r,a)){var n=Object.getOwnPropertyDescriptor(t,a);Object.defineProperty(r,a,n)}}));return r}var t=r;export{t as default};

