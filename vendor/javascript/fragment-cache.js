// fragment-cache@0.2.1 downloaded from https://ga.jspm.io/npm:fragment-cache@0.2.1/index.js

import t from"map-cache";var e={};var c=t;function FragmentCache(t){this.caches=t||{}}FragmentCache.prototype={cache:function(t){return this.caches[t]||(this.caches[t]=new c)},set:function(t,e,c){var a=this.cache(t);a.set(e,c);return a},has:function(t,e){return"undefined"!==typeof this.get(t,e)},get:function(t,e){var c=this.cache(t);return"string"===typeof e?c.get(e):c}};e=e=FragmentCache;var a=e;export default a;

