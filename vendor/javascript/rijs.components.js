// rijs.components@3.1.16 downloaded from https://ga.jspm.io/npm:rijs.components@3.1.16/index.js

import e from"utilise/log";import t from"utilise/client";import o from"utilise/ready";import r from"@compone/define";var i="undefined"!==typeof globalThis?globalThis:"undefined"!==typeof self?self:global;var n={};n=function components(e){if(!f)return e;s("creating");Node.prototype.render=function(){const t=(this||i).nodeName.toLowerCase();if(t.includes("-")){(this||i).state=(this||i).state||{};return(this||i).fn$=(this||i).fn$||e.subscribe(t).map(e=>a(t,e))}};Node.prototype.draw=function(){this.render()};l(()=>Array.from(document.querySelectorAll("*")).filter(e=>e.nodeName.includes("-")).map(e=>e.render()));return e};const s=e("[ri/components]"),f=t,l=o,a=r;var d=n;export default d;

