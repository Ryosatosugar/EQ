// arr-diff@2.0.0 downloaded from https://ga.jspm.io/npm:arr-diff@2.0.0/index.js

import r from"arr-flatten";var a={};var e=r;var f=[].slice;function diff(r,a){var t=arguments.length;var i=r.length,l=-1;var n=[],a;if(1===t)return r;t>2&&(a=e(f.call(arguments,1)));while(++l<i)~a.indexOf(r[l])||n.push(r[l]);return n}a=diff;var t=a;export default t;

