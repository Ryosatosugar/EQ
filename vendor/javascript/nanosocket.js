// nanosocket@1.1.0 downloaded from https://ga.jspm.io/npm:nanosocket@1.1.0/index.js

import e from"utilise/emitterify";var t={};t=function(e=location.href.replace("http","ws")){const t=n({attempt:0});t.ready=t.once("connected");t.connect=connect(t,e);t.connect();t.send=e=>t.ready.then(t=>t.send(e));return t};const n=e,{min:o,pow:c}=Math;const connect=(e,t)=>()=>{const{WebSocket:n,location:o,setTimeout:c}=window,a=new n(t);a.onopen=t=>e.emit("connected",a);a.onmessage=t=>e.emit("recv",t.data);a.onclose=t=>{e.ready=e.once("connected");e.emit("disconnected");c(e.connect,backoff(++e.attempt))}};const backoff=(e,t=100,n=1e4)=>o(n,t*c(2,e));var a=t;export default a;

