// content-disposition@0.5.4 downloaded from https://ga.jspm.io/npm:content-disposition@0.5.4/index.js

import*as r from"path";import*as e from"safe-buffer";var t="default"in r?r.default:r;var a="default"in e?e.default:e;var n={};n=contentDisposition;n.parse=parse;var i=t.basename;var o=a.Buffer;var f=/[\x00-\x20"'()*,/:;<=>?@[\\\]{}\x7f]/g;var s=/%[0-9A-Fa-f]{2}/;var p=/%([0-9A-Fa-f]{2})/g;var v=/[^\x20-\x7e\xa0-\xff]/g;var u=/\\([\u0000-\u007f])/g;var l=/([\\"])/g;var c=/;[\x09\x20]*([!#$%&'*+.0-9A-Z^_`a-z|~-]+)[\x09\x20]*=[\x09\x20]*("(?:[\x20!\x23-\x5b\x5d-\x7e\x80-\xff]|\\[\x20-\x7e])*"|[!#$%&'*+.0-9A-Z^_`a-z|~-]+)[\x09\x20]*/g;var d=/^[\x20-\x7e\x80-\xff]+$/;var g=/^[!#$%&'*+.0-9A-Z^_`a-z|~-]+$/;var x=/^([A-Za-z0-9!#$%&+\-^_`{}~]+)'(?:[A-Za-z]{2,3}(?:-[A-Za-z]{3}){0,3}|[A-Za-z]{4,8}|)'((?:%[0-9A-Fa-f]{2}|[A-Za-z0-9!#$&+.^_`|~-])+)$/;var w=/^([!#$%&'*+.0-9A-Z^_`a-z|~-]+)[\x09\x20]*(?:$|;)/;
/**
 * Create an attachment Content-Disposition header.
 *
 * @param {string} [filename]
 * @param {object} [options]
 * @param {string} [options.type=attachment]
 * @param {string|boolean} [options.fallback=true]
 * @return {string}
 * @public
 */function contentDisposition(r,e){var t=e||{};var a=t.type||"attachment";var n=createparams(r,t.fallback);return format(new ContentDisposition(a,n))}
/**
 * Create parameters object from filename and fallback.
 *
 * @param {string} [filename]
 * @param {string|boolean} [fallback=true]
 * @return {object}
 * @private
 */function createparams(r,e){if(void 0!==r){var t={};if("string"!==typeof r)throw new TypeError("filename must be a string");void 0===e&&(e=true);if("string"!==typeof e&&"boolean"!==typeof e)throw new TypeError("fallback must be a string or boolean");if("string"===typeof e&&v.test(e))throw new TypeError("fallback must be ISO-8859-1 string");var a=i(r);var n=d.test(a);var o="string"!==typeof e?e&&getlatin1(a):i(e);var f="string"===typeof o&&o!==a;(f||!n||s.test(a))&&(t["filename*"]=a);(n||f)&&(t.filename=f?o:a);return t}}
/**
 * Format object to Content-Disposition header.
 *
 * @param {object} obj
 * @param {string} obj.type
 * @param {object} [obj.parameters]
 * @return {string}
 * @private
 */function format(r){var e=r.parameters;var t=r.type;if(!t||"string"!==typeof t||!g.test(t))throw new TypeError("invalid type");var a=String(t).toLowerCase();if(e&&"object"===typeof e){var n;var i=Object.keys(e).sort();for(var o=0;o<i.length;o++){n=i[o];var f="*"===n.substr(-1)?ustring(e[n]):qstring(e[n]);a+="; "+n+"="+f}}return a}
/**
 * Decode a RFC 5987 field value (gracefully).
 *
 * @param {string} str
 * @return {string}
 * @private
 */function decodefield(r){var e=x.exec(r);if(!e)throw new TypeError("invalid extended field value");var t=e[1].toLowerCase();var a=e[2];var n;var i=a.replace(p,pdecode);switch(t){case"iso-8859-1":n=getlatin1(i);break;case"utf-8":n=o.from(i,"binary").toString("utf8");break;default:throw new TypeError("unsupported charset in extended field")}return n}
/**
 * Get ISO-8859-1 version of string.
 *
 * @param {string} val
 * @return {string}
 * @private
 */function getlatin1(r){return String(r).replace(v,"?")}
/**
 * Parse Content-Disposition header string.
 *
 * @param {string} string
 * @return {object}
 * @public
 */function parse(r){if(!r||"string"!==typeof r)throw new TypeError("argument string is required");var e=w.exec(r);if(!e)throw new TypeError("invalid type format");var t=e[0].length;var a=e[1].toLowerCase();var n;var i=[];var o={};var f;t=c.lastIndex=";"===e[0].substr(-1)?t-1:t;while(e=c.exec(r)){if(e.index!==t)throw new TypeError("invalid parameter format");t+=e[0].length;n=e[1].toLowerCase();f=e[2];if(-1!==i.indexOf(n))throw new TypeError("invalid duplicate parameter");i.push(n);if(n.indexOf("*")+1!==n.length){if("string"!==typeof o[n]){'"'===f[0]&&(f=f.substr(1,f.length-2).replace(u,"$1"));o[n]=f}}else{n=n.slice(0,-1);f=decodefield(f);o[n]=f}}if(-1!==t&&t!==r.length)throw new TypeError("invalid parameter format");return new ContentDisposition(a,o)}
/**
 * Percent decode a single character.
 *
 * @param {string} str
 * @param {string} hex
 * @return {string}
 * @private
 */function pdecode(r,e){return String.fromCharCode(parseInt(e,16))}
/**
 * Percent encode a single character.
 *
 * @param {string} char
 * @return {string}
 * @private
 */function pencode(r){return"%"+String(r).charCodeAt(0).toString(16).toUpperCase()}
/**
 * Quote a string for HTTP.
 *
 * @param {string} val
 * @return {string}
 * @private
 */function qstring(r){var e=String(r);return'"'+e.replace(l,"\\$1")+'"'}
/**
 * Encode a Unicode string for HTTP (RFC 5987).
 *
 * @param {string} val
 * @return {string}
 * @private
 */function ustring(r){var e=String(r);var t=encodeURIComponent(e).replace(f,pencode);return"UTF-8''"+t}
/**
 * Class for parsed Content-Disposition header for v8 optimization
 *
 * @public
 * @param {string} type
 * @param {object} parameters
 * @constructor
 */function ContentDisposition(r,e){this.type=r;this.parameters=e}var m=n;const y=n.parse;export{m as default,y as parse};

