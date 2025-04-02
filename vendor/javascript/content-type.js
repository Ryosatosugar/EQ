// content-type@1.0.5 downloaded from https://ga.jspm.io/npm:content-type@1.0.5/index.js

var e={};var r=/; *([!#$%&'*+.^_`|~0-9A-Za-z-]+) *= *("(?:[\u000b\u0020\u0021\u0023-\u005b\u005d-\u007e\u0080-\u00ff]|\\[\u000b\u0020-\u00ff])*"|[!#$%&'*+.^_`|~0-9A-Za-z-]+) */g;var t=/^[\u000b\u0020-\u007e\u0080-\u00ff]+$/;var a=/^[!#$%&'*+.^_`|~0-9A-Za-z-]+$/;var n=/\\([\u000b\u0020-\u00ff])/g;var o=/([\\"])/g;var i=/^[!#$%&'*+.^_`|~0-9A-Za-z-]+\/[!#$%&'*+.^_`|~0-9A-Za-z-]+$/;e.format=format;e.parse=parse;
/**
 * Format object to media type.
 *
 * @param {object} obj
 * @return {string}
 * @public
 */function format(e){if(!e||"object"!==typeof e)throw new TypeError("argument obj is required");var r=e.parameters;var t=e.type;if(!t||!i.test(t))throw new TypeError("invalid type");var n=t;if(r&&"object"===typeof r){var o;var f=Object.keys(r).sort();for(var p=0;p<f.length;p++){o=f[p];if(!a.test(o))throw new TypeError("invalid parameter name");n+="; "+o+"="+qstring(r[o])}}return n}
/**
 * Parse media type to object.
 *
 * @param {string|object} string
 * @return {Object}
 * @public
 */function parse(e){if(!e)throw new TypeError("argument string is required");var t="object"===typeof e?getcontenttype(e):e;if("string"!==typeof t)throw new TypeError("argument string is required to be a string");var a=t.indexOf(";");var o=-1!==a?t.slice(0,a).trim():t.trim();if(!i.test(o))throw new TypeError("invalid media type");var f=new ContentType(o.toLowerCase());if(-1!==a){var p;var s;var u;r.lastIndex=a;while(s=r.exec(t)){if(s.index!==a)throw new TypeError("invalid parameter format");a+=s[0].length;p=s[1].toLowerCase();u=s[2];if(34===u.charCodeAt(0)){u=u.slice(1,-1);-1!==u.indexOf("\\")&&(u=u.replace(n,"$1"))}f.parameters[p]=u}if(a!==t.length)throw new TypeError("invalid parameter format")}return f}
/**
 * Get content-type from req/res objects.
 *
 * @param {object}
 * @return {Object}
 * @private
 */function getcontenttype(e){var r;"function"===typeof e.getHeader?r=e.getHeader("content-type"):"object"===typeof e.headers&&(r=e.headers&&e.headers["content-type"]);if("string"!==typeof r)throw new TypeError("content-type header is missing from object");return r}
/**
 * Quote a string if necessary.
 *
 * @param {string} val
 * @return {string}
 * @private
 */function qstring(e){var r=String(e);if(a.test(r))return r;if(r.length>0&&!t.test(r))throw new TypeError("invalid parameter value");return'"'+r.replace(o,"\\$1")+'"'}function ContentType(e){this.parameters=Object.create(null);this.type=e}const f=e.format,p=e.parse;export{e as default,f as format,p as parse};

