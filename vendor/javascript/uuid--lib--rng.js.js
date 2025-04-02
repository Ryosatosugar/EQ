// uuid/lib/rng.js@3.4.0 downloaded from https://ga.jspm.io/npm:uuid@3.4.0/lib/rng-browser.js

var t={};var r="undefined"!=typeof crypto&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto)||"undefined"!=typeof msCrypto&&"function"==typeof window.msCrypto.getRandomValues&&msCrypto.getRandomValues.bind(msCrypto);if(r){var e=new Uint8Array(16);t=function whatwgRNG(){r(e);return e}}else{var n=new Array(16);t=function mathRNG(){for(var t=0,r;t<16;t++){0===(3&t)&&(r=4294967296*Math.random());n[t]=r>>>((3&t)<<3)&255}return n}}var o=t;export default o;

