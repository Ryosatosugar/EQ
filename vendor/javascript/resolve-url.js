// resolve-url@0.2.1 downloaded from https://ga.jspm.io/npm:resolve-url@0.2.1/resolve-url.js

var e={};void function(r,t){e=t()}(e,(function(){function resolveUrl(){var e=arguments.length;if(0===e)throw new Error("resolveUrl requires at least one argument; got none.");var r=document.createElement("base");r.href=arguments[0];if(1===e)return r.href;var t=document.getElementsByTagName("head")[0];t.insertBefore(r,t.firstChild);var n=document.createElement("a");var a;for(var o=1;o<e;o++){n.href=arguments[o];a=n.href;r.href=a}t.removeChild(r);return a}return resolveUrl}));var r=e;export default r;

