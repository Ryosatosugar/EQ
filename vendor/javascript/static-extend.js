// static-extend@0.1.2 downloaded from https://ga.jspm.io/npm:static-extend@0.1.2/index.js

import t from"object-copy";import e from"define-property";import o from"util";var r={};var n=t;var f=e;var p=o;function extend(t,e){if("function"!==typeof t)throw new TypeError("expected Parent to be a function.");return function(o,r){if("function"!==typeof o)throw new TypeError("expected Ctor to be a function.");p.inherits(o,t);n(o,t);if("object"===typeof r){var i=Object.create(r);for(var c in i)o.prototype[c]=i[c]}f(o.prototype,"_parent_",{configurable:true,set:function(){},get:function(){return t.prototype}});"function"===typeof e&&e(o,t);o.extend=extend(o,e)}}r=extend;var i=r;export default i;

