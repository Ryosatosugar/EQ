// cookie@0.7.1 downloaded from https://ga.jspm.io/npm:cookie@0.7.1/index.js

var e={};e.parse=parse;e.serialize=serialize;var r=Object.prototype.toString;var i=/^[!#$%&'*+\-.^_`|~0-9A-Za-z]+$/;var t=/^("?)[\u0021\u0023-\u002B\u002D-\u003A\u003C-\u005B\u005D-\u007E]*\1$/;var a=/^([.]?[a-z0-9]([a-z0-9-]{0,61}[a-z0-9])?)([.][a-z0-9]([a-z0-9-]{0,61}[a-z0-9])?)*$/i;var n=/^[\u0020-\u003A\u003D-\u007E]*$/;
/**
 * Parse a cookie header.
 *
 * Parse the given cookie header string into an object
 * The object has the various cookies as keys(names) => values
 *
 * @param {string} str
 * @param {object} [opt]
 * @return {object}
 * @public
 */function parse(e,r){if(typeof e!=="string")throw new TypeError("argument str must be a string");var i={};var t=e.length;if(t<2)return i;var a=r&&r.decode||decode;var n=0;var o=0;var s=0;do{o=e.indexOf("=",n);if(o===-1)break;s=e.indexOf(";",n);if(s===-1)s=t;else if(o>s){n=e.lastIndexOf(";",o-1)+1;continue}var d=startIndex(e,n,o);var p=endIndex(e,o,d);var u=e.slice(d,p);if(!i.hasOwnProperty(u)){var c=startIndex(e,o+1,s);var f=endIndex(e,s,c);if(e.charCodeAt(c)===34&&e.charCodeAt(f-1)===34){c++;f--}var v=e.slice(c,f);i[u]=tryDecode(v,a)}n=s+1}while(n<t);return i}function startIndex(e,r,i){do{var t=e.charCodeAt(r);if(t!==32&&t!==9)return r}while(++r<i);return i}function endIndex(e,r,i){while(r>i){var t=e.charCodeAt(--r);if(t!==32&&t!==9)return r+1}return i}
/**
 * Serialize data into a cookie header.
 *
 * Serialize a name value pair into a cookie string suitable for
 * http headers. An optional options object specifies cookie parameters.
 *
 * serialize('foo', 'bar', { httpOnly: true })
 *   => "foo=bar; httpOnly"
 *
 * @param {string} name
 * @param {string} val
 * @param {object} [opt]
 * @return {string}
 * @public
 */function serialize(e,r,o){var s=o&&o.encode||encodeURIComponent;if(typeof s!=="function")throw new TypeError("option encode is invalid");if(!i.test(e))throw new TypeError("argument name is invalid");var d=s(r);if(!t.test(d))throw new TypeError("argument val is invalid");var p=e+"="+d;if(!o)return p;if(null!=o.maxAge){var u=Math.floor(o.maxAge);if(!isFinite(u))throw new TypeError("option maxAge is invalid");p+="; Max-Age="+u}if(o.domain){if(!a.test(o.domain))throw new TypeError("option domain is invalid");p+="; Domain="+o.domain}if(o.path){if(!n.test(o.path))throw new TypeError("option path is invalid");p+="; Path="+o.path}if(o.expires){var c=o.expires;if(!isDate(c)||isNaN(c.valueOf()))throw new TypeError("option expires is invalid");p+="; Expires="+c.toUTCString()}o.httpOnly&&(p+="; HttpOnly");o.secure&&(p+="; Secure");o.partitioned&&(p+="; Partitioned");if(o.priority){var f=typeof o.priority==="string"?o.priority.toLowerCase():o.priority;switch(f){case"low":p+="; Priority=Low";break;case"medium":p+="; Priority=Medium";break;case"high":p+="; Priority=High";break;default:throw new TypeError("option priority is invalid")}}if(o.sameSite){var v=typeof o.sameSite==="string"?o.sameSite.toLowerCase():o.sameSite;switch(v){case true:p+="; SameSite=Strict";break;case"lax":p+="; SameSite=Lax";break;case"strict":p+="; SameSite=Strict";break;case"none":p+="; SameSite=None";break;default:throw new TypeError("option sameSite is invalid")}}return p}
/**
 * URL-decode string value. Optimized to skip native call when no %.
 *
 * @param {string} str
 * @returns {string}
 */function decode(e){return e.indexOf("%")!==-1?decodeURIComponent(e):e}
/**
 * Determine if value is a Date.
 *
 * @param {*} val
 * @private
 */function isDate(e){return r.call(e)==="[object Date]"}
/**
 * Try decoding a string using a decoding function.
 *
 * @param {string} str
 * @param {function} decode
 * @private
 */function tryDecode(e,r){try{return r(e)}catch(r){return e}}const o=e.parse,s=e.serialize;export{e as default,o as parse,s as serialize};

