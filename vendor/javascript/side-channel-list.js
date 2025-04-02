// side-channel-list@1.0.0 downloaded from https://ga.jspm.io/npm:side-channel-list@1.0.0/index.js

import*as t from"object-inspect";import*as n from"es-errors/type";var e=t;try{"default"in t&&(e=t.default)}catch(t){}var r=n;try{"default"in n&&(r=n.default)}catch(t){}var a={};var u=e;var i=r;
/** @type {import('./list.d.ts').listGetNode} */var listGetNode=function(t,n,e){
/** @type {typeof list | NonNullable<(typeof list)['next']>} */
var r=t;
/** @type {(typeof list)['next']} */var a;for(;(a=r.next)!=null;r=a)if(a.key===n){r.next=a.next;if(!e){a.next=/** @type {NonNullable<typeof list.next>} */t.next;t.next=a}return a}};
/** @type {import('./list.d.ts').listGet} */var listGet=function(t,n){if(t){var e=listGetNode(t,n);return e&&e.value}};
/** @type {import('./list.d.ts').listSet} */var listSet=function(t,n,e){var r=listGetNode(t,n);r?r.value=e:t.next=/** @type {import('./list.d.ts').ListNode<typeof value, typeof key>} */{key:n,next:t.next,value:e}};
/** @type {import('./list.d.ts').listHas} */var listHas=function(t,n){return!!t&&!!listGetNode(t,n)};
/** @type {import('./list.d.ts').listDelete} */var listDelete=function(t,n){if(t)return listGetNode(t,n,true)};
/** @type {import('.')} */a=function getSideChannelList(){
/** @typedef {ReturnType<typeof getSideChannelList>} Channel */
/** @typedef {Parameters<Channel['get']>[0]} K */
/** @typedef {Parameters<Channel['set']>[1]} V */
/** @type {import('./list.d.ts').RootNode<V, K> | undefined} */var t;
/** @type {Channel} */var n={assert:function(t){if(!n.has(t))throw new i("Side channel does not contain "+u(t))},delete:function(n){var e=t&&t.next;var r=listDelete(t,n);r&&e&&e===r&&(t=void 0);return!!r},get:function(n){return listGet(t,n)},has:function(n){return listHas(t,n)},set:function(n,e){t||(t={next:void 0});listSet(/** @type {NonNullable<typeof $o>} */t,n,e)}};return n};var o=a;export{o as default};

