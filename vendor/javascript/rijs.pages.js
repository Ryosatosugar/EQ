// rijs.pages@1.3.0 downloaded from https://ga.jspm.io/npm:rijs.pages@1.3.0/index.js

import e from"compression";import r from"utilise/key";import t from"path";import s from"express";import o from"serve-static";import i from"utilise/log";var p={};p=function pages(e,{server:r,dir:t,static:s="./static"}={}){f("creating");const{http:o=r}=e.server||{};if(!o||!t)return e;expressify(o).use(m(),c(a(t,s),{redirect:false})).use("*",m(),c(a(t,s)));return e};const expressify=e=>e.express||n("_events.request")(e)||e.on("request",u())._events.request;const m=e,n=r,{resolve:a}=t,u=s,c=o,f=i("[ri/pages]");var v=p;export default v;

