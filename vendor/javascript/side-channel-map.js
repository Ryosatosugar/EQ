// side-channel-map@1.0.1 downloaded from https://ga.jspm.io/npm:side-channel-map@1.0.1/index.js

import*as t from"get-intrinsic";import*as r from"call-bound";import*as a from"object-inspect";import*as e from"es-errors/type";var n=t;try{"default"in t&&(n=t.default)}catch(t){}var o=r;try{"default"in r&&(o=r.default)}catch(t){}var u=a;try{"default"in a&&(u=a.default)}catch(t){}var i=e;try{"default"in e&&(i=e.default)}catch(t){}var p={};var f=n;var c=o;var v=u;var s=i;var d=f("%Map%",true);
/** @type {<K, V>(thisArg: Map<K, V>, key: K) => V} */var l=c("Map.prototype.get",true);
/** @type {<K, V>(thisArg: Map<K, V>, key: K, value: V) => void} */var h=c("Map.prototype.set",true);
/** @type {<K, V>(thisArg: Map<K, V>, key: K) => boolean} */var y=c("Map.prototype.has",true);
/** @type {<K, V>(thisArg: Map<K, V>, key: K) => boolean} */var m=c("Map.prototype.delete",true);
/** @type {<K, V>(thisArg: Map<K, V>) => number} */var M=c("Map.prototype.size",true);
/** @type {import('.')} */p=!!d&&/** @type {Exclude<import('.'), false>} */function getSideChannelMap(){
/** @typedef {ReturnType<typeof getSideChannelMap>} Channel */
/** @typedef {Parameters<Channel['get']>[0]} K */
/** @typedef {Parameters<Channel['set']>[1]} V */
/** @type {Map<K, V> | undefined} */var t;
/** @type {Channel} */var r={assert:function(t){if(!r.has(t))throw new s("Side channel does not contain "+v(t))},delete:function(r){if(t){var a=m(t,r);M(t)===0&&(t=void 0);return a}return false},get:function(r){if(t)return l(t,r)},has:function(r){return!!t&&y(t,r)},set:function(r,a){t||(t=new d);h(t,r,a)}};return r};var g=p;export{g as default};

