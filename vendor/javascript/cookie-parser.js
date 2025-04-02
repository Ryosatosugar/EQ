// cookie-parser@1.4.7 downloaded from https://ga.jspm.io/npm:cookie-parser@1.4.7/index.js

import*as e from"cookie";import*as o from"cookie-signature";var i=e;try{"default"in e&&(i=e.default)}catch(e){}var r=o;try{"default"in o&&(r=o.default)}catch(e){}var s={};var n=i;var a=r;s=cookieParser;s.JSONCookie=JSONCookie;s.JSONCookies=JSONCookies;s.signedCookie=signedCookie;s.signedCookies=signedCookies;
/**
 * Parse Cookie header and populate `req.cookies`
 * with an object keyed by the cookie names.
 *
 * @param {string|array} [secret] A string (or array of strings) representing cookie signing secret(s).
 * @param {Object} [options]
 * @return {Function}
 * @public
 */function cookieParser(e,o){var i=!e||Array.isArray(e)?e||[]:[e];return function cookieParser(e,r,s){if(e.cookies)return s();var a=e.headers.cookie;e.secret=i[0];e.cookies=Object.create(null);e.signedCookies=Object.create(null);if(!a)return s();e.cookies=n.parse(a,o);if(i.length!==0){e.signedCookies=signedCookies(e.cookies,i);e.signedCookies=JSONCookies(e.signedCookies)}e.cookies=JSONCookies(e.cookies);s()}}
/**
 * Parse JSON cookie string.
 *
 * @param {String} str
 * @return {Object} Parsed object or undefined if not json cookie
 * @public
 */function JSONCookie(e){if(typeof e==="string"&&e.substr(0,2)==="j:")try{return JSON.parse(e.slice(2))}catch(e){return}}
/**
 * Parse JSON cookies.
 *
 * @param {Object} obj
 * @return {Object}
 * @public
 */function JSONCookies(e){var o=Object.keys(e);var i;var r;for(var s=0;s<o.length;s++){i=o[s];r=JSONCookie(e[i]);r&&(e[i]=r)}return e}
/**
 * Parse a signed cookie string, return the decoded value.
 *
 * @param {String} str signed cookie string
 * @param {string|array} secret
 * @return {String} decoded value
 * @public
 */function signedCookie(e,o){if(typeof e==="string"){if(e.substr(0,2)!=="s:")return e;var i=!o||Array.isArray(o)?o||[]:[o];for(var r=0;r<i.length;r++){var s=a.unsign(e.slice(2),i[r]);if(s!==false)return s}return false}}
/**
 * Parse signed cookies, returning an object containing the decoded key/value
 * pairs, while removing the signed key from obj.
 *
 * @param {Object} obj
 * @param {string|array} secret
 * @return {Object}
 * @public
 */function signedCookies(e,o){var i=Object.keys(e);var r;var s;var n=Object.create(null);var a;for(var t=0;t<i.length;t++){s=i[t];a=e[s];r=signedCookie(a,o);if(a!==r){n[s]=r;delete e[s]}}return n}var t=s;const k=s.JSONCookie,c=s.JSONCookies,C=s.signedCookie,f=s.signedCookies;export{k as JSONCookie,c as JSONCookies,t as default,C as signedCookie,f as signedCookies};

