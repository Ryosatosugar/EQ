// toidentifier@1.0.1 downloaded from https://ga.jspm.io/npm:toidentifier@1.0.1/index.js

var e={};e=toIdentifier;
/**
 * Trasform the given string into a JavaScript identifier
 *
 * @param {string} str
 * @returns {string}
 * @public
 */function toIdentifier(e){return e.split(" ").map((function(e){return e.slice(0,1).toUpperCase()+e.slice(1)})).join("").replace(/[^ _0-9a-z]/gi,"")}var t=e;export{t as default};

