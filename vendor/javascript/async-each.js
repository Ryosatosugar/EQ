// async-each@1.0.6 downloaded from https://ga.jspm.io/npm:async-each@1.0.6/index.js

var r={};(function(n){var each=function(r,n,t){if(!Array.isArray(r))throw new TypeError("each() expects array as first argument");if("function"!==typeof n)throw new TypeError("each() expects function as second argument");"function"!==typeof t&&(t=Function.prototype);var e=r.length;if(0===e)return t(void 0,r);var a=new Array(e);var o=0;var f=false;r.forEach((function(r,i){n(r,(function(r,n){if(!f){if(r){f=true;return t(r)}a[i]=n;o+=1;return o===e?t(void 0,a):void 0}}))}))};r?r=each:n.asyncEach=each})(r);var n=r;export{n as default};

