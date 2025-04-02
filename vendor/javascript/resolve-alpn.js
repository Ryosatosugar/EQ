// resolve-alpn@1.2.1 downloaded from https://ga.jspm.io/npm:resolve-alpn@1.2.1/index.js

import*as o from"tls";var t="default"in o?o.default:o;var e={};const a=t;e=(o={},t=a.connect)=>new Promise(((e,a)=>{let r=false;let c;const callback=async()=>{await l;c.off("timeout",onTimeout);c.off("error",a);if(o.resolveSocket){e({alpnProtocol:c.alpnProtocol,socket:c,timeout:r});if(r){await Promise.resolve();c.emit("timeout")}}else{c.destroy();e({alpnProtocol:c.alpnProtocol,timeout:r})}};const onTimeout=async()=>{r=true;callback()};const l=(async()=>{try{c=await t(o,callback);c.on("error",a);c.once("timeout",onTimeout)}catch(o){a(o)}})()}));var r=e;export{r as default};

