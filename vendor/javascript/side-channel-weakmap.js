// side-channel-weakmap@1.0.2 downloaded from https://ga.jspm.io/npm:side-channel-weakmap@1.0.2/index.js

import*as t from"get-intrinsic";import*as e from"call-bound";import*as a from"object-inspect";import*as r from"side-channel-map";import*as o from"es-errors/type";var n=t;try{"default"in t&&(n=t.default)}catch(t){}var f=e;try{"default"in e&&(f=e.default)}catch(t){}var i=a;try{"default"in a&&(i=a.default)}catch(t){}var u=r;try{"default"in r&&(u=r.default)}catch(t){}var c=o;try{"default"in o&&(c=o.default)}catch(t){}var p={};var s=n;var l=f;var v=i;var d=u;var y=c;var h=s("%WeakMap%",true);
/** @type {<K extends object, V>(thisArg: WeakMap<K, V>, key: K) => V} */var m=l("WeakMap.prototype.get",true);
/** @type {<K extends object, V>(thisArg: WeakMap<K, V>, key: K, value: V) => void} */var b=l("WeakMap.prototype.set",true);
/** @type {<K extends object, V>(thisArg: WeakMap<K, V>, key: K) => boolean} */var k=l("WeakMap.prototype.has",true);
/** @type {<K extends object, V>(thisArg: WeakMap<K, V>, key: K) => boolean} */var M=l("WeakMap.prototype.delete",true);
/** @type {import('.')} */p=h?/** @type {Exclude<import('.'), false>} */function getSideChannelWeakMap(){
/** @typedef {ReturnType<typeof getSideChannelWeakMap>} Channel */
/** @typedef {Parameters<Channel['get']>[0]} K */
/** @typedef {Parameters<Channel['set']>[1]} V */
/** @type {WeakMap<K & object, V> | undefined} */var t;
/** @type {Channel | undefined} */var e;
/** @type {Channel} */var a={assert:function(t){if(!a.has(t))throw new y("Side channel does not contain "+v(t))},delete:function(a){if(h&&a&&(typeof a==="object"||typeof a==="function")){if(t)return M(t,a)}else if(d&&e)return e.delete(a);return false},get:function(a){return h&&a&&(typeof a==="object"||typeof a==="function")&&t?m(t,a):e&&e.get(a)},has:function(a){return h&&a&&(typeof a==="object"||typeof a==="function")&&t?k(t,a):!!e&&e.has(a)},set:function(a,r){if(h&&a&&(typeof a==="object"||typeof a==="function")){t||(t=new h);b(t,a,r)}else if(d){e||(e=d());
/** @type {NonNullable<typeof $m>} */e.set(a,r)}}};return a}:d;var W=p;export{W as default};

