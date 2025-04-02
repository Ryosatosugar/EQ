// assign-symbols@1.0.0 downloaded from https://ga.jspm.io/npm:assign-symbols@1.0.0/index.js

var e={};e=function(e,r){if(null===e||"undefined"===typeof e)throw new TypeError("expected first argument to be an object.");if("undefined"===typeof r||"undefined"===typeof Symbol)return e;if("function"!==typeof Object.getOwnPropertySymbols)return e;var t=Object.prototype.propertyIsEnumerable;var n=Object(e);var o=arguments.length,f=0;while(++f<o){var a=Object(arguments[f]);var p=Object.getOwnPropertySymbols(a);for(var l=0;l<p.length;l++){var u=p[l];t.call(a,u)&&(n[u]=a[u])}}return n};var r=e;export default r;

