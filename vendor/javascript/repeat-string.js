// repeat-string@1.6.1 downloaded from https://ga.jspm.io/npm:repeat-string@1.6.1/index.js

var e={};var r="";var t;e=repeat;function repeat(e,n){if("string"!==typeof e)throw new TypeError("expected a string");if(1===n)return e;if(2===n)return e+e;var f=e.length*n;if(t!==e||"undefined"===typeof t){t=e;r=""}else if(r.length>=f)return r.substr(0,f);while(f>r.length&&n>1){1&n&&(r+=e);n>>=1;e+=e}r+=e;r=r.substr(0,f);return r}var n=e;export default n;

