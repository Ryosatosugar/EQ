// source-map-url@0.4.1 downloaded from https://ga.jspm.io/npm:source-map-url@0.4.1/source-map-url.js

var e={};void function(r,n){e=n()}(0,(function(){var e=/[#@] sourceMappingURL=([^\s'"]*)/;var r=RegExp("(?:/\\*(?:\\s*\r?\n(?://)?)?(?:"+e.source+")\\s*\\*/|//(?:"+e.source+"))\\s*");return{regex:r,_innerRegex:e,getFrom:function(e){var n=e.match(r);return n?n[1]||n[2]||"":null},existsIn:function(e){return r.test(e)},removeFrom:function(e){return e.replace(r,"")},insertBefore:function(e,n){var t=e.match(r);return t?e.slice(0,t.index)+n+e.slice(t.index):e+n}}}));var r=e;export default r;

