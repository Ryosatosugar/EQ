// proxy-addr@2.0.7 downloaded from https://ga.jspm.io/npm:proxy-addr@2.0.7/index.js

import*as r from"forwarded";import*as e from"ipaddr.js";var t="default"in r?r.default:r;var n="default"in e?e.default:e;var a={};a=proxyaddr;a.all=alladdrs;a.compile=compile;var i=t;var s=n;var o=/^[0-9]+$/;var u=s.isValid;var l=s.parse;var d={linklocal:["169.254.0.0/16","fe80::/10"],loopback:["127.0.0.1/8","::1/128"],uniquelocal:["10.0.0.0/8","172.16.0.0/12","192.168.0.0/16","fc00::/7"]};
/**
 * Get all addresses in the request, optionally stopping
 * at the first untrusted.
 *
 * @param {Object} request
 * @param {Function|Array|String} [trust]
 * @public
 */function alladdrs(r,e){var t=i(r);if(!e)return t;"function"!==typeof e&&(e=compile(e));for(var n=0;n<t.length-1;n++)e(t[n],n)||(t.length=n+1);return t}
/**
 * Compile argument into trust function.
 *
 * @param {Array|String} val
 * @private
 */function compile(r){if(!r)throw new TypeError("argument is required");var e;if("string"===typeof r)e=[r];else{if(!Array.isArray(r))throw new TypeError("unsupported trust argument");e=r.slice()}for(var t=0;t<e.length;t++){r=e[t];if(Object.prototype.hasOwnProperty.call(d,r)){r=d[r];e.splice.apply(e,[t,1].concat(r));t+=r.length-1}}return compileTrust(compileRangeSubnets(e))}
/**
 * Compile `arr` elements into range subnets.
 *
 * @param {Array} arr
 * @private
 */function compileRangeSubnets(r){var e=new Array(r.length);for(var t=0;t<r.length;t++)e[t]=parseipNotation(r[t]);return e}
/**
 * Compile range subnet array into trust function.
 *
 * @param {Array} rangeSubnets
 * @private
 */function compileTrust(r){var e=r.length;return 0===e?trustNone:1===e?trustSingle(r[0]):trustMulti(r)}
/**
 * Parse IP notation string into range subnet.
 *
 * @param {String} note
 * @private
 */function parseipNotation(r){var e=r.lastIndexOf("/");var t=-1!==e?r.substring(0,e):r;if(!u(t))throw new TypeError("invalid IP address: "+t);var n=l(t);-1===e&&"ipv6"===n.kind()&&n.isIPv4MappedAddress()&&(n=n.toIPv4Address());var a="ipv6"===n.kind()?128:32;var i=-1!==e?r.substring(e+1,r.length):null;i=null===i?a:o.test(i)?parseInt(i,10):"ipv4"===n.kind()&&u(i)?parseNetmask(i):null;if(i<=0||i>a)throw new TypeError("invalid range on address: "+r);return[n,i]}
/**
 * Parse netmask string into CIDR range.
 *
 * @param {String} netmask
 * @private
 */function parseNetmask(r){var e=l(r);var t=e.kind();return"ipv4"===t?e.prefixLengthFromSubnetMask():null}
/**
 * Determine address of proxied request.
 *
 * @param {Object} request
 * @param {Function|Array|String} trust
 * @public
 */function proxyaddr(r,e){if(!r)throw new TypeError("req argument is required");if(!e)throw new TypeError("trust argument is required");var t=alladdrs(r,e);var n=t[t.length-1];return n}function trustNone(){return false}
/**
 * Compile trust function for multiple subnets.
 *
 * @param {Array} subnets
 * @private
 */function trustMulti(r){return function trust(e){if(!u(e))return false;var t=l(e);var n;var a=t.kind();for(var i=0;i<r.length;i++){var s=r[i];var o=s[0];var d=o.kind();var p=s[1];var v=t;if(a!==d){if("ipv4"===d&&!t.isIPv4MappedAddress())continue;n||(n="ipv4"===d?t.toIPv4Address():t.toIPv4MappedAddress());v=n}if(v.match(o,p))return true}return false}}
/**
 * Compile trust function for single subnet.
 *
 * @param {Object} subnet
 * @private
 */function trustSingle(r){var e=r[0];var t=e.kind();var n="ipv4"===t;var a=r[1];return function trust(r){if(!u(r))return false;var i=l(r);var s=i.kind();if(s!==t){if(n&&!i.isIPv4MappedAddress())return false;i=n?i.toIPv4Address():i.toIPv4MappedAddress()}return i.match(e,a)}}var p=a;const v=a.all;const f=a.compile;export default p;export{v as all,f as compile};

