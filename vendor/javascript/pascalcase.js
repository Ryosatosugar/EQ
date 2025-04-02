// pascalcase@0.1.1 downloaded from https://ga.jspm.io/npm:pascalcase@0.1.1/index.js

var e={};function pascalcase(e){if("string"!==typeof e)throw new TypeError("expected a string.");e=e.replace(/([A-Z])/g," $1");if(1===e.length)return e.toUpperCase();e=e.replace(/^[\W_]+|[\W_]+$/g,"").toLowerCase();e=e.charAt(0).toUpperCase()+e.slice(1);return e.replace(/[\W_]+(\w|$)/g,(function(e,r){return r.toUpperCase()}))}e=pascalcase;var r=e;export default r;

