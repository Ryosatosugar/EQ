// body-parser@1.20.3 downloaded from https://ga.jspm.io/npm:body-parser@1.20.3/index.js

import*as e from"depd";import*as r from"bytes";import*as t from"content-type";import*as a from"http-errors";import*as n from"debug";import i from"./lib/read.js";import*as o from"type-is";import*as s from"qs";import*as u from"querystring";import"destroy";import"raw-body";import"iconv-lite";import"on-finished";import"unpipe";import"zlib";var c=r;try{"default"in r&&(c=r.default)}catch(e){}var f=t;try{"default"in t&&(f=t.default)}catch(e){}var p=a;try{"default"in a&&(p=a.default)}catch(e){}var d=n;try{"default"in n&&(d=n.default)}catch(e){}var l=o;try{"default"in o&&(l=o.default)}catch(e){}var y={};var v=c;var m=f;var h=p;var b=d("body-parser:json");var g=i;var w=l;y=json;var k=/^[\x20\x09\x0a\x0d]*([^\x20\x09\x0a\x0d])/;var x="#";var j=/#+/g;
/**
 * Create a middleware to parse JSON bodies.
 *
 * @param {object} [options]
 * @return {function}
 * @public
 */function json(e){var r=e||{};var t=typeof r.limit!=="number"?v.parse(r.limit||"100kb"):r.limit;var a=r.inflate!==false;var n=r.reviver;var i=r.strict!==false;var o=r.type||"application/json";var s=r.verify||false;if(s!==false&&typeof s!=="function")throw new TypeError("option verify must be function");var u=typeof o!=="function"?typeChecker$3(o):o;function parse(e){if(e.length===0)return{};if(i){var r=firstchar(e);if(r!=="{"&&r!=="["){b("strict violation");throw createStrictSyntaxError(e,r)}}try{b("parse json");return JSON.parse(e,n)}catch(e){throw normalizeJsonSyntaxError(e,{message:e.message,stack:e.stack})}}return function jsonParser(e,r,n){if(e._body){b("body already parsed");n()}else{e.body=e.body||{};if(w.hasBody(e)){b("content-type %j",e.headers["content-type"]);if(u(e)){var i=getCharset$2(e)||"utf-8";if(i.slice(0,4)==="utf-")g(e,r,n,parse,b,{encoding:i,inflate:a,limit:t,verify:s});else{b("invalid charset");n(h(415,'unsupported charset "'+i.toUpperCase()+'"',{charset:i,type:"charset.unsupported"}))}}else{b("skip parsing");n()}}else{b("skip empty body");n()}}}}
/**
 * Create strict violation syntax error matching native error.
 *
 * @param {string} str
 * @param {string} char
 * @return {Error}
 * @private
 */function createStrictSyntaxError(e,r){var t=e.indexOf(r);var a="";if(t!==-1){a=e.substring(0,t)+x;for(var n=t+1;n<e.length;n++)a+=x}try{JSON.parse(a);throw new SyntaxError("strict violation")}catch(r){return normalizeJsonSyntaxError(r,{message:r.message.replace(j,(function(r){return e.substring(t,t+r.length)})),stack:r.stack})}}
/**
 * Get the first non-whitespace character in a string.
 *
 * @param {string} str
 * @return {function}
 * @private
 */function firstchar(e){var r=k.exec(e);return r?r[1]:void 0}
/**
 * Get the charset of a request.
 *
 * @param {object} req
 * @api private
 */function getCharset$2(e){try{return(m.parse(e).parameters.charset||"").toLowerCase()}catch(e){return}}
/**
 * Normalize a SyntaxError for JSON.parse.
 *
 * @param {SyntaxError} error
 * @param {object} obj
 * @return {SyntaxError}
 */function normalizeJsonSyntaxError(e,r){var t=Object.getOwnPropertyNames(e);for(var a=0;a<t.length;a++){var n=t[a];n!=="stack"&&n!=="message"&&delete e[n]}e.stack=r.stack.replace(e.message,r.message);e.message=r.message;return e}
/**
 * Get the simple type checker.
 *
 * @param {string} type
 * @return {function}
 */function typeChecker$3(e){return function checkType(r){return Boolean(w(r,e))}}var C=y;var P=r;try{"default"in r&&(P=r.default)}catch(e){}var E=n;try{"default"in n&&(E=n.default)}catch(e){}var O=o;try{"default"in o&&(O=o.default)}catch(e){}var T={};var L=P;var N=E("body-parser:raw");var S=i;var $=O;T=raw;
/**
 * Create a middleware to parse raw bodies.
 *
 * @param {object} [options]
 * @return {function}
 * @api public
 */function raw(e){var r=e||{};var t=r.inflate!==false;var a=typeof r.limit!=="number"?L.parse(r.limit||"100kb"):r.limit;var n=r.type||"application/octet-stream";var i=r.verify||false;if(i!==false&&typeof i!=="function")throw new TypeError("option verify must be function");var o=typeof n!=="function"?typeChecker$2(n):n;function parse(e){return e}return function rawParser(e,r,n){if(e._body){N("body already parsed");n()}else{e.body=e.body||{};if($.hasBody(e)){N("content-type %j",e.headers["content-type"]);if(o(e))S(e,r,n,parse,N,{encoding:null,inflate:t,limit:a,verify:i});else{N("skip parsing");n()}}else{N("skip empty body");n()}}}}
/**
 * Get the simple type checker.
 *
 * @param {string} type
 * @return {function}
 */function typeChecker$2(e){return function checkType(r){return Boolean($(r,e))}}var q=T;var B=r;try{"default"in r&&(B=r.default)}catch(e){}var z=t;try{"default"in t&&(z=t.default)}catch(e){}var G=n;try{"default"in n&&(G=n.default)}catch(e){}var J=o;try{"default"in o&&(J=o.default)}catch(e){}var _={};var F=B;var U=z;var D=G("body-parser:text");var K=i;var M=J;_=text;
/**
 * Create a middleware to parse text bodies.
 *
 * @param {object} [options]
 * @return {function}
 * @api public
 */function text(e){var r=e||{};var t=r.defaultCharset||"utf-8";var a=r.inflate!==false;var n=typeof r.limit!=="number"?F.parse(r.limit||"100kb"):r.limit;var i=r.type||"text/plain";var o=r.verify||false;if(o!==false&&typeof o!=="function")throw new TypeError("option verify must be function");var s=typeof i!=="function"?typeChecker$1(i):i;function parse(e){return e}return function textParser(e,r,i){if(e._body){D("body already parsed");i()}else{e.body=e.body||{};if(M.hasBody(e)){D("content-type %j",e.headers["content-type"]);if(s(e)){var u=getCharset$1(e)||t;K(e,r,i,parse,D,{encoding:u,inflate:a,limit:n,verify:o})}else{D("skip parsing");i()}}else{D("skip empty body");i()}}}}
/**
 * Get the charset of a request.
 *
 * @param {object} req
 * @api private
 */function getCharset$1(e){try{return(U.parse(e).parameters.charset||"").toLowerCase()}catch(e){return}}
/**
 * Get the simple type checker.
 *
 * @param {string} type
 * @return {function}
 */function typeChecker$1(e){return function checkType(r){return Boolean(M(r,e))}}var R=_;var A=r;try{"default"in r&&(A=r.default)}catch(e){}var H=t;try{"default"in t&&(H=t.default)}catch(e){}var I=a;try{"default"in a&&(I=a.default)}catch(e){}var Q=n;try{"default"in n&&(Q=n.default)}catch(e){}var V=e;try{"default"in e&&(V=e.default)}catch(e){}var W=o;try{"default"in o&&(W=o.default)}catch(e){}var X=s;try{"default"in s&&(X=s.default)}catch(e){}var Y=u;try{"default"in u&&(Y=u.default)}catch(e){}var Z={};var ee=A;var re=H;var te=I;var ae=Q("body-parser:urlencoded");var ne=V("body-parser");var ie=i;var oe=W;Z=urlencoded;var se=Object.create(null);
/**
 * Create a middleware to parse urlencoded bodies.
 *
 * @param {object} [options]
 * @return {function}
 * @public
 */function urlencoded(e){var r=e||{};r.extended===void 0&&ne("undefined extended: provide extended option");var t=r.extended!==false;var a=r.inflate!==false;var n=typeof r.limit!=="number"?ee.parse(r.limit||"100kb"):r.limit;var i=r.type||"application/x-www-form-urlencoded";var o=r.verify||false;var s=typeof r.depth!=="number"?Number(r.depth||32):r.depth;if(o!==false&&typeof o!=="function")throw new TypeError("option verify must be function");var u=t?extendedparser(r):simpleparser(r);var c=typeof i!=="function"?typeChecker(i):i;function parse(e){return e.length?u(e):{}}return function urlencodedParser(e,r,t){if(e._body){ae("body already parsed");t()}else{e.body=e.body||{};if(oe.hasBody(e)){ae("content-type %j",e.headers["content-type"]);if(c(e)){var i=getCharset(e)||"utf-8";if(i==="utf-8")ie(e,r,t,parse,ae,{debug:ae,encoding:i,inflate:a,limit:n,verify:o,depth:s});else{ae("invalid charset");t(te(415,'unsupported charset "'+i.toUpperCase()+'"',{charset:i,type:"charset.unsupported"}))}}else{ae("skip parsing");t()}}else{ae("skip empty body");t()}}}}
/**
 * Get the extended query parser.
 *
 * @param {object} options
 */function extendedparser(e){var r=e.parameterLimit!==void 0?e.parameterLimit:1e3;var t=typeof e.depth!=="number"?Number(e.depth||32):e.depth;var a=parser("qs");if(isNaN(r)||r<1)throw new TypeError("option parameterLimit must be a positive number");if(isNaN(t)||t<0)throw new TypeError("option depth must be a zero or a positive number");isFinite(r)&&(r|=0);return function queryparse(e){var n=parameterCount(e,r);if(n===void 0){ae("too many parameters");throw te(413,"too many parameters",{type:"parameters.too.many"})}var i=Math.max(100,n);ae("parse extended urlencoding");try{return a(e,{allowPrototypes:true,arrayLimit:i,depth:t,strictDepth:true,parameterLimit:r})}catch(e){throw e instanceof RangeError?te(400,"The input exceeded the depth",{type:"querystring.parse.rangeError"}):e}}}
/**
 * Get the charset of a request.
 *
 * @param {object} req
 * @api private
 */function getCharset(e){try{return(re.parse(e).parameters.charset||"").toLowerCase()}catch(e){return}}
/**
 * Count the number of parameters, stopping once limit reached
 *
 * @param {string} body
 * @param {number} limit
 * @api private
 */function parameterCount(e,r){var t=0;var a=0;while((a=e.indexOf("&",a))!==-1){t++;a++;if(t===r)return}return t}
/**
 * Get parser for module name dynamically.
 *
 * @param {string} name
 * @return {function}
 * @api private
 */function parser(e){var r=se[e];if(r!==void 0)return r.parse;switch(e){case"qs":r=X;break;case"querystring":r=Y;break}se[e]=r;return r.parse}
/**
 * Get the simple query parser.
 *
 * @param {object} options
 */function simpleparser(e){var r=e.parameterLimit!==void 0?e.parameterLimit:1e3;var t=parser("querystring");if(isNaN(r)||r<1)throw new TypeError("option parameterLimit must be a positive number");isFinite(r)&&(r|=0);return function queryparse(e){var a=parameterCount(e,r);if(a===void 0){ae("too many parameters");throw te(413,"too many parameters",{type:"parameters.too.many"})}ae("parse urlencoding");return t(e,void 0,void 0,{maxKeys:r})}}
/**
 * Get the simple type checker.
 *
 * @param {string} type
 * @return {function}
 */function typeChecker(e){return function checkType(r){return Boolean(oe(r,e))}}var ue=Z;var ce=e;try{"default"in e&&(ce=e.default)}catch(e){}var fe={};var pe=ce("body-parser");var de=Object.create(null);
/**
 * @typedef Parsers
 * @type {function}
 * @property {function} json
 * @property {function} raw
 * @property {function} text
 * @property {function} urlencoded
 */
/**
 * Module exports.
 * @type {Parsers}
 */fe=fe=pe.function(bodyParser,"bodyParser: use individual json/urlencoded middlewares");Object.defineProperty(fe,"json",{configurable:true,enumerable:true,get:createParserGetter("json")});Object.defineProperty(fe,"raw",{configurable:true,enumerable:true,get:createParserGetter("raw")});Object.defineProperty(fe,"text",{configurable:true,enumerable:true,get:createParserGetter("text")});Object.defineProperty(fe,"urlencoded",{configurable:true,enumerable:true,get:createParserGetter("urlencoded")});
/**
 * Create a middleware to parse json and urlencoded bodies.
 *
 * @param {object} [options]
 * @return {function}
 * @deprecated
 * @public
 */function bodyParser(e){var r=Object.create(e||null,{type:{configurable:true,enumerable:true,value:void 0,writable:true}});var t=fe.urlencoded(r);var a=fe.json(r);return function bodyParser(e,r,n){a(e,r,(function(a){if(a)return n(a);t(e,r,n)}))}}function createParserGetter(e){return function get(){return loadParser(e)}}function loadParser(e){var r=de[e];if(r!==void 0)return r;switch(e){case"json":r=C;break;case"raw":r=q;break;case"text":r=R;break;case"urlencoded":r=ue;break}return de[e]=r}var le=fe;export{le as default};

