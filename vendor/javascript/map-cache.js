// map-cache@0.2.2 downloaded from https://ga.jspm.io/npm:map-cache@0.2.2/index.js

var t={};var a=Object.prototype.hasOwnProperty;t=MapCache;function MapCache(t){this.__data__=t||{}}MapCache.prototype.set=function mapSet(t,a){"__proto__"!==t&&(this.__data__[t]=a);return this};MapCache.prototype.get=function mapGet(t){return"__proto__"===t?void 0:this.__data__[t]};MapCache.prototype.has=function mapHas(t){return"__proto__"!==t&&a.call(this.__data__,t)};MapCache.prototype.del=function mapDelete(t){return this.has(t)&&delete this.__data__[t]};var _=t;export default _;

