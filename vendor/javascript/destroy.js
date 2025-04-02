// destroy@1.2.0 downloaded from https://ga.jspm.io/npm:destroy@1.2.0/index.js

import*as e from"events";import*as n from"fs";import*as t from"stream";import*as r from"zlib";var o="default"in e?e.default:e;var i="default"in n?n.default:n;var s="default"in t?t.default:t;var a="default"in r?r.default:r;var f={};var d=o.EventEmitter;var l=i.ReadStream;var c=s;var u=a;f=destroy;
/**
 * Destroy the given stream, and optionally suppress any future `error` events.
 *
 * @param {object} stream
 * @param {boolean} suppress
 * @public
 */function destroy(e,n){isFsReadStream(e)?destroyReadStream(e):isZlibStream(e)?destroyZlibStream(e):hasDestroy(e)&&e.destroy();if(isEventEmitter(e)&&n){e.removeAllListeners("error");e.addListener("error",noop)}return e}
/**
 * Destroy a ReadStream.
 *
 * @param {object} stream
 * @private
 */function destroyReadStream(e){e.destroy();"function"===typeof e.close&&e.on("open",onOpenClose)}
/**
 * Close a Zlib stream.
 *
 * Zlib streams below Node.js 4.5.5 have a buggy implementation
 * of .close() when zlib encountered an error.
 *
 * @param {object} stream
 * @private
 */function closeZlibStream(e){if(true===e._hadError){var n=null===e._binding?"_binding":"_handle";e[n]={close:function(){this[n]=null}}}e.close()}
/**
 * Destroy a Zlib stream.
 *
 * Zlib streams don't have a destroy function in Node.js 6. On top of that
 * simply calling destroy on a zlib stream in Node.js 8+ will result in a
 * memory leak. So until that is fixed, we need to call both close AND destroy.
 *
 * PR to fix memory leak: https://github.com/nodejs/node/pull/23734
 *
 * In Node.js 6+8, it's important that destroy is called before close as the
 * stream would otherwise emit the error 'zlib binding closed'.
 *
 * @param {object} stream
 * @private
 */function destroyZlibStream(e){if("function"===typeof e.destroy)if(e._binding){e.destroy();if(e._processing){e._needDrain=true;e.once("drain",onDrainClearBinding)}else e._binding.clear()}else if(e._destroy&&e._destroy!==c.Transform.prototype._destroy)e.destroy();else if(e._destroy&&"function"===typeof e.close){e.destroyed=true;e.close()}else e.destroy();else"function"===typeof e.close&&closeZlibStream(e)}function hasDestroy(e){return e instanceof c&&"function"===typeof e.destroy}function isEventEmitter(e){return e instanceof d}function isFsReadStream(e){return e instanceof l}function isZlibStream(e){return e instanceof u.Gzip||e instanceof u.Gunzip||e instanceof u.Deflate||e instanceof u.DeflateRaw||e instanceof u.Inflate||e instanceof u.InflateRaw||e instanceof u.Unzip}function noop(){}function onDrainClearBinding(){this._binding.clear()}function onOpenClose(){"number"===typeof this.fd&&this.close()}var y=f;export{y as default};

