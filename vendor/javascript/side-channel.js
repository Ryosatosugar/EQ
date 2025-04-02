// side-channel@1.1.0 downloaded from https://ga.jspm.io/npm:side-channel@1.1.0/index.js

import*as t from"es-errors/type";import*as a from"object-inspect";import*as e from"side-channel-list";import*as r from"side-channel-map";import*as n from"side-channel-weakmap";var i=t;try{"default"in t&&(i=t.default)}catch(t){}var c=a;try{"default"in a&&(c=a.default)}catch(t){}var f=e;try{"default"in e&&(f=e.default)}catch(t){}var o=r;try{"default"in r&&(o=r.default)}catch(t){}var s=n;try{"default"in n&&(s=n.default)}catch(t){}var u={};var d=i;var l=c;var v=f;var h=o;var m=s;var p=m||h||v;
/** @type {import('.')} */u=function getSideChannel(){
/** @typedef {ReturnType<typeof getSideChannel>} Channel */
/** @type {Channel | undefined} */var t;
/** @type {Channel} */var a={assert:function(t){if(!a.has(t))throw new d("Side channel does not contain "+l(t))},delete:function(a){return!!t&&t.delete(a)},get:function(a){return t&&t.get(a)},has:function(a){return!!t&&t.has(a)},set:function(a,e){t||(t=p());t.set(a,e)}};return a};var y=u;export{y as default};

