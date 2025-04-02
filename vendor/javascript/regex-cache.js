// regex-cache@0.4.4 downloaded from https://ga.jspm.io/npm:regex-cache@0.4.4/index.js

import e from"is-equal-shallow";var r={};var a=e;var t={};var c={};r=regexCache;function regexCache(e,r,o){var i="_default_",f,n;if(!r&&!o)return"function"!==typeof e?e:t[i]||(t[i]=e(r));var s="string"===typeof r;if(s){if(!o)return t[r]||(t[r]=e(r));i=r}else o=r;n=c[i];if(n&&a(n.opts,o))return n.regex;memo(i,o,f=e(r,o));return f}function memo(e,r,a){c[e]={regex:a,opts:r}}r.cache=c;r.basic=t;var o=r;const i=r.cache,f=r.basic;export default o;export{f as basic,i as cache};

