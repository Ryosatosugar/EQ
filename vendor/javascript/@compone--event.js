// @compone/event@1.1.2 downloaded from https://ga.jspm.io/npm:@compone/event@1.1.2/index.js

import e from"utilise/emitterify";var t={};const n=e;t=function event(e,t){e=e.host&&e.host.nodeName?e.host:e;if(e.on)return;e.listeners={};const on=t=>{const n=t.type.split(".").shift();e.listeners[n]||e.addEventListener(n,e.listeners[n]=t=>t.detail&&t.detail.emitted?0:s(n,[t,e.state,e]))};const off=t=>{if(!e.on[t.type]||!e.on[t.type].length){e.removeEventListener(t.type,e.listeners[t.type]);delete e.listeners[t.type]}};n(e,{on:on,off:off});const{emit:s}=e;e.emit=function(t,n){const i={params:n,emitted:true},o=new CustomEvent(t,{detail:i,bubbles:false,cancelable:true});e.dispatchEvent(o);return s(t,o)}};var s=t;export default s;

