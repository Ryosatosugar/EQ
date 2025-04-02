// math-random@1.0.4 downloaded from https://ga.jspm.io/npm:math-random@1.0.4/browser.js

var r={};r=function(r){var a="Uint32Array"in r;var n=r.crypto||r.msCrypto;var t=n&&"function"===typeof n.getRandomValues;var e=a&&t;if(!e)return Math.random;var o=new Uint32Array(1);var u=Math.pow(2,32);function random(){n.getRandomValues(o);return o[0]/u}random.cryptographic=true;return random}("undefined"!==typeof self?self:window);var a=r;export default a;

