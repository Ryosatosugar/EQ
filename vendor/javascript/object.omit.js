// object.omit@2.0.1 downloaded from https://ga.jspm.io/npm:object.omit@2.0.1/index.js

import r from"is-extendable";import t from"for-own";var n={};var o=r;var e=t;n=function omit(r,t){if(!o(r))return{};t=[].concat.apply([],[].slice.call(arguments,1));var n=t[t.length-1];var f={},a;"function"===typeof n&&(a=t.pop());var i="function"===typeof a;if(!t.length&&!i)return r;e(r,(function(n,o){-1===t.indexOf(o)&&(i?a(n,o,r)&&(f[o]=n):f[o]=n)}));return f};var f=n;export default f;

