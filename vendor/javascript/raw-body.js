// raw-body@2.5.2 downloaded from https://ga.jspm.io/npm:raw-body@2.5.2/index.js

import*as e from"bytes";import*as n from"http-errors";import*as r from"iconv-lite";import*as t from"unpipe";import*as o from"async_hooks";import a from"process";import i from"buffer";var u="default"in e?e.default:e;var d="default"in n?n.default:n;var l="default"in r?r.default:r;var c="default"in t?t.default:t;var f="default"in o?o.default:o;var s="undefined"!==typeof globalThis?globalThis:"undefined"!==typeof self?self:global;var p={};var v=i.Buffer;var m=a;var y=tryRequireAsyncHooks();var g=u;var b=d;var h=l;var w=c;p=getRawBody;var k=/^Encoding not recognized: /;
/**
 * Get the decoder for a given encoding.
 *
 * @param {string} encoding
 * @private
 */function getDecoder(e){if(!e)return null;try{return h.getDecoder(e)}catch(n){if(!k.test(n.message))throw n;throw b(415,"specified encoding unsupported",{encoding:e,type:"encoding.unsupported"})}}
/**
 * Get the raw body of a stream (typically HTTP).
 *
 * @param {object} stream
 * @param {object|string|function} [options]
 * @param {function} [callback]
 * @public
 */function getRawBody(e,n,r){var t=r;var o=n||{};if(void 0===e)throw new TypeError("argument stream is required");if("object"!==typeof e||null===e||"function"!==typeof e.on)throw new TypeError("argument stream must be a stream");true!==n&&"string"!==typeof n||(o={encoding:n});if("function"===typeof n){t=n;o={}}if(void 0!==t&&"function"!==typeof t)throw new TypeError("argument callback must be a function");if(!t&&!s.Promise)throw new TypeError("argument callback is required");var a=true!==o.encoding?o.encoding:"utf-8";var i=g.parse(o.limit);var u=null==o.length||isNaN(o.length)?null:parseInt(o.length,10);return t?readStream(e,a,u,i,wrap(t)):new Promise((function executor(n,r){readStream(e,a,u,i,(function onRead(e,t){if(e)return r(e);n(t)}))}))}
/**
 * Halt a stream.
 *
 * @param {Object} stream
 * @private
 */function halt(e){w(e);"function"===typeof e.pause&&e.pause()}
/**
 * Read the data from the stream.
 *
 * @param {object} stream
 * @param {string} encoding
 * @param {number} length
 * @param {number} limit
 * @param {function} callback
 * @public
 */function readStream(e,n,r,t,o){var a=false;var i=true;if(null!==t&&null!==r&&r>t)return done(b(413,"request entity too large",{expected:r,length:r,limit:t,type:"entity.too.large"}));var u=e._readableState;if(e._decoder||u&&(u.encoding||u.decoder))return done(b(500,"stream encoding should not be set",{type:"stream.encoding.set"}));if("undefined"!==typeof e.readable&&!e.readable)return done(b(500,"stream is not readable",{type:"stream.not.readable"}));var d=0;var l;try{l=getDecoder(n)}catch(e){return done(e)}var c=l?"":[];e.on("aborted",onAborted);e.on("close",cleanup);e.on("data",onData);e.on("end",onEnd);e.on("error",onEnd);i=false;function done(){var n=new Array(arguments.length);for(var r=0;r<n.length;r++)n[r]=arguments[r];a=true;i?m.nextTick(invokeCallback):invokeCallback();function invokeCallback(){cleanup();n[0]&&halt(e);o.apply(null,n)}}function onAborted(){a||done(b(400,"request aborted",{code:"ECONNABORTED",expected:r,length:r,received:d,type:"request.aborted"}))}function onData(e){if(!a){d+=e.length;null!==t&&d>t?done(b(413,"request entity too large",{limit:t,received:d,type:"entity.too.large"})):l?c+=l.write(e):c.push(e)}}function onEnd(e){if(!a){if(e)return done(e);if(null!==r&&d!==r)done(b(400,"request size did not match content length",{expected:r,length:r,received:d,type:"request.size.invalid"}));else{var n=l?c+(l.end()||""):v.concat(c);done(null,n)}}}function cleanup(){c=null;e.removeListener("aborted",onAborted);e.removeListener("data",onData);e.removeListener("end",onEnd);e.removeListener("error",onEnd);e.removeListener("close",cleanup)}}function tryRequireAsyncHooks(){try{return f}catch(e){return{}}}function wrap(e){var n;y.AsyncResource&&(n=new y.AsyncResource(e.name||"bound-anonymous-fn"));return n&&n.runInAsyncScope?n.runInAsyncScope.bind(n,e,null):e}var E=p;export{E as default};

