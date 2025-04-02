// mime-types@2.1.35 downloaded from https://ga.jspm.io/npm:mime-types@2.1.35/index.js

import*as e from"mime-db";import*as t from"path";var n="default"in e?e.default:e;var a="default"in t?t.default:t;var r={};var s=n;var o=a.extname;var i=/^\s*([^;\s]*)(?:;|\s|$)/;var c=/^text\//i;r.charset=charset;r.charsets={lookup:charset};r.contentType=contentType;r.extension=extension;r.extensions=Object.create(null);r.lookup=lookup;r.types=Object.create(null);populateMaps(r.extensions,r.types);
/**
 * Get the default charset for a MIME type.
 *
 * @param {string} type
 * @return {boolean|string}
 */function charset(e){if(!e||"string"!==typeof e)return false;var t=i.exec(e);var n=t&&s[t[1].toLowerCase()];return n&&n.charset?n.charset:!(!t||!c.test(t[1]))&&"UTF-8"}
/**
 * Create a full Content-Type header given a MIME type or extension.
 *
 * @param {string} str
 * @return {boolean|string}
 */function contentType(e){if(!e||"string"!==typeof e)return false;var t=-1===e.indexOf("/")?r.lookup(e):e;if(!t)return false;if(-1===t.indexOf("charset")){var n=r.charset(t);n&&(t+="; charset="+n.toLowerCase())}return t}
/**
 * Get the default extension for a MIME type.
 *
 * @param {string} type
 * @return {boolean|string}
 */function extension(e){if(!e||"string"!==typeof e)return false;var t=i.exec(e);var n=t&&r.extensions[t[1].toLowerCase()];return!(!n||!n.length)&&n[0]}
/**
 * Lookup the MIME type for a file path/extension.
 *
 * @param {string} path
 * @return {boolean|string}
 */function lookup(e){if(!e||"string"!==typeof e)return false;var t=o("x."+e).toLowerCase().substr(1);return t&&r.types[t]||false}function populateMaps(e,t){var n=["nginx","apache",void 0,"iana"];Object.keys(s).forEach((function forEachMimeType(a){var r=s[a];var o=r.extensions;if(o&&o.length){e[a]=o;for(var i=0;i<o.length;i++){var c=o[i];if(t[c]){var f=n.indexOf(s[t[c]].source);var p=n.indexOf(r.source);if("application/octet-stream"!==t[c]&&(f>p||f===p&&"application/"===t[c].substr(0,12)))continue}t[c]=a}}}))}const f=r.charsets,p=r.extensions,u=r.types;const l=r.charset,v=r.contentType,x=r.extension,h=r.lookup;export{l as charset,f as charsets,v as contentType,r as default,x as extension,p as extensions,h as lookup,u as types};

