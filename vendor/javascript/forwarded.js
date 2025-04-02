// forwarded@0.2.0 downloaded from https://ga.jspm.io/npm:forwarded@0.2.0/index.js

var r={};r=forwarded;
/**
 * Get all addresses in the request, using the `X-Forwarded-For` header.
 *
 * @param {object} req
 * @return {array}
 * @public
 */function forwarded(r){if(!r)throw new TypeError("argument req is required");var e=parse(r.headers["x-forwarded-for"]||"");var t=getSocketAddr(r);var a=[t].concat(e);return a}
/**
 * Get the socket address for a request.
 *
 * @param {object} req
 * @return {string}
 * @private
 */function getSocketAddr(r){return r.socket?r.socket.remoteAddress:r.connection.remoteAddress}
/**
 * Parse the X-Forwarded-For header.
 *
 * @param {string} header
 * @private
 */function parse(r){var e=r.length;var t=[];var a=r.length;for(var o=r.length-1;o>=0;o--)switch(r.charCodeAt(o)){case 32:a===e&&(a=e=o);break;case 44:a!==e&&t.push(r.substring(a,e));a=e=o;break;default:a=o;break}a!==e&&t.push(r.substring(a,e));return t}var e=r;export default e;

