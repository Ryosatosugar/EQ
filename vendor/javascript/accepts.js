// accepts@1.3.8 downloaded from https://ga.jspm.io/npm:accepts@1.3.8/index.js

import*as t from"negotiator";import*as e from"mime-types";var r="default"in t?t.default:t;var a="default"in e?e.default:e;var n={};var o=r;var i=a;n=Accepts;
/**
 * Create a new Accepts object for the given req.
 *
 * @param {object} req
 * @public
 */function Accepts(t){if(!(this instanceof Accepts))return new Accepts(t);this.headers=t.headers;this.negotiator=new o(t)}
/**
 * Check if the given `type(s)` is acceptable, returning
 * the best match when true, otherwise `undefined`, in which
 * case you should respond with 406 "Not Acceptable".
 *
 * The `type` value may be a single mime type string
 * such as "application/json", the extension name
 * such as "json" or an array `["json", "html", "text/plain"]`. When a list
 * or array is given the _best_ match, if any is returned.
 *
 * Examples:
 *
 *     // Accept: text/html
 *     this.types('html');
 *     // => "html"
 *
 *     // Accept: text/*, application/json
 *     this.types('html');
 *     // => "html"
 *     this.types('text/html');
 *     // => "text/html"
 *     this.types('json', 'text');
 *     // => "json"
 *     this.types('application/json');
 *     // => "application/json"
 *
 *     // Accept: text/*, application/json
 *     this.types('image/png');
 *     this.types('png');
 *     // => undefined
 *
 *     // Accept: text/*;q=.5, application/json
 *     this.types(['html', 'json']);
 *     this.types('html', 'json');
 *     // => "json"
 *
 * @param {String|Array} types...
 * @return {String|Array|Boolean}
 * @public
 */Accepts.prototype.type=Accepts.prototype.types=function(t){var e=t;if(e&&!Array.isArray(e)){e=new Array(arguments.length);for(var r=0;r<e.length;r++)e[r]=arguments[r]}if(!e||0===e.length)return this.negotiator.mediaTypes();if(!this.headers.accept)return e[0];var a=e.map(extToMime);var n=this.negotiator.mediaTypes(a.filter(validMime));var o=n[0];return!!o&&e[a.indexOf(o)]};
/**
 * Return accepted encodings or best fit based on `encodings`.
 *
 * Given `Accept-Encoding: gzip, deflate`
 * an array sorted by quality is returned:
 *
 *     ['gzip', 'deflate']
 *
 * @param {String|Array} encodings...
 * @return {String|Array}
 * @public
 */Accepts.prototype.encoding=Accepts.prototype.encodings=function(t){var e=t;if(e&&!Array.isArray(e)){e=new Array(arguments.length);for(var r=0;r<e.length;r++)e[r]=arguments[r]}return e&&0!==e.length?this.negotiator.encodings(e)[0]||false:this.negotiator.encodings()};
/**
 * Return accepted charsets or best fit based on `charsets`.
 *
 * Given `Accept-Charset: utf-8, iso-8859-1;q=0.2, utf-7;q=0.5`
 * an array sorted by quality is returned:
 *
 *     ['utf-8', 'utf-7', 'iso-8859-1']
 *
 * @param {String|Array} charsets...
 * @return {String|Array}
 * @public
 */Accepts.prototype.charset=Accepts.prototype.charsets=function(t){var e=t;if(e&&!Array.isArray(e)){e=new Array(arguments.length);for(var r=0;r<e.length;r++)e[r]=arguments[r]}return e&&0!==e.length?this.negotiator.charsets(e)[0]||false:this.negotiator.charsets()};
/**
 * Return accepted languages or best fit based on `langs`.
 *
 * Given `Accept-Language: en;q=0.8, es, pt`
 * an array sorted by quality is returned:
 *
 *     ['es', 'pt', 'en']
 *
 * @param {String|Array} langs...
 * @return {Array|String}
 * @public
 */Accepts.prototype.lang=Accepts.prototype.langs=Accepts.prototype.language=Accepts.prototype.languages=function(t){var e=t;if(e&&!Array.isArray(e)){e=new Array(arguments.length);for(var r=0;r<e.length;r++)e[r]=arguments[r]}return e&&0!==e.length?this.negotiator.languages(e)[0]||false:this.negotiator.languages()};
/**
 * Convert extnames to mime.
 *
 * @param {String} type
 * @return {String}
 * @private
 */function extToMime(t){return-1===t.indexOf("/")?i.lookup(t):t}
/**
 * Check if mime is valid.
 *
 * @param {String} type
 * @return {String}
 * @private
 */function validMime(t){return"string"===typeof t}var s=n;export{s as default};

