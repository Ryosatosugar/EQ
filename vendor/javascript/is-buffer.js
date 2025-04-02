// is-buffer@1.1.6 downloaded from https://ga.jspm.io/npm:is-buffer@1.1.6/index.js

var f={};
/*!
 * Determine if an object is a Buffer
 *
 * @author   Feross Aboukhadijeh <https://feross.org>
 * @license  MIT
 */f=function(f){return null!=f&&(isBuffer(f)||isSlowBuffer(f)||!!f._isBuffer)};function isBuffer(f){return!!f.constructor&&"function"===typeof f.constructor.isBuffer&&f.constructor.isBuffer(f)}function isSlowBuffer(f){return"function"===typeof f.readFloatLE&&"function"===typeof f.slice&&isBuffer(f.slice(0,0))}var r=f;export default r;

