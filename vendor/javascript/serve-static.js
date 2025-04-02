// serve-static@1.16.2 downloaded from https://ga.jspm.io/npm:serve-static@1.16.2/index.js

import*as e from"encodeurl";import*as t from"escape-html";import*as r from"parseurl";import*as a from"path";import*as n from"send";import*as o from"url";import i from"buffer";var s=e;try{"default"in e&&(s=e.default)}catch(e){}var c=t;try{"default"in t&&(c=t.default)}catch(e){}var u=r;try{"default"in r&&(u=r.default)}catch(e){}var f=a;try{"default"in a&&(f=a.default)}catch(e){}var l=n;try{"default"in n&&(l=n.default)}catch(e){}var d=o;try{"default"in o&&(d=o.default)}catch(e){}var h={};var m=i.Buffer;var p=s;var v=c;var y=u;var g=f.resolve;var H=l;var b=d;h=serveStatic;h.mime=H.mime;
/**
 * @param {string} root
 * @param {object} [options]
 * @return {function}
 * @public
 */function serveStatic(e,t){if(!e)throw new TypeError("root path required");if(typeof e!=="string")throw new TypeError("root path must be a string");var r=Object.create(t||null);var a=r.fallthrough!==false;var n=r.redirect!==false;var o=r.setHeaders;if(o&&typeof o!=="function")throw new TypeError("option setHeaders must be function");r.maxage=r.maxage||r.maxAge||0;r.root=g(e);var i=n?createRedirectDirectoryListener():createNotFoundDirectoryListener();return function serveStatic(e,t,n){if(e.method==="GET"||e.method==="HEAD"){var s=!a;var c=y.original(e);var u=y(e).pathname;u==="/"&&c.pathname.substr(-1)!=="/"&&(u="");var f=H(e,u,r);f.on("directory",i);o&&f.on("headers",o);a&&f.on("file",(function onFile(){s=true}));f.on("error",(function error(e){!s&&e.statusCode<500?n():n(e)}));f.pipe(t)}else{if(a)return n();t.statusCode=405;t.setHeader("Allow","GET, HEAD");t.setHeader("Content-Length","0");t.end()}}}function collapseLeadingSlashes(e){for(var t=0;t<e.length;t++)if(e.charCodeAt(t)!==47)break;return t>1?"/"+e.substr(t):e}
/**
 * Create a minimal HTML document.
 *
 * @param {string} title
 * @param {string} body
 * @private
 */function createHtmlDocument(e,t){return'<!DOCTYPE html>\n<html lang="en">\n<head>\n<meta charset="utf-8">\n<title>'+e+"</title>\n</head>\n<body>\n<pre>"+t+"</pre>\n</body>\n</html>\n"}function createNotFoundDirectoryListener(){return function notFound(){this.error(404)}}function createRedirectDirectoryListener(){return function redirect(e){if(this.hasTrailingSlash())this.error(404);else{var t=y.original(this.req);t.path=null;t.pathname=collapseLeadingSlashes(t.pathname+"/");var r=p(b.format(t));var a=createHtmlDocument("Redirecting","Redirecting to "+v(r));e.statusCode=301;e.setHeader("Content-Type","text/html; charset=UTF-8");e.setHeader("Content-Length",m.byteLength(a));e.setHeader("Content-Security-Policy","default-src 'none'");e.setHeader("X-Content-Type-Options","nosniff");e.setHeader("Location",r);e.end(a)}}}var C=h;const L=h.mime;export{C as default,L as mime};

