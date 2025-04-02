// rijs.sessions@1.1.2 downloaded from https://ga.jspm.io/npm:rijs.sessions@1.1.2/index.js

import e from"express-session";import s from"cookie-parser";import o from"utilise/client";import r from"utilise/noop";import i from"utilise/key";import t from"utilise/log";var n={};n=function(e,{session:s}={}){f("creating");if(!s||!e.server)return e;e.server.express.use(m(s.secret)).use(c(s));e.server.ws.on("connection",auth(s));return e};const c=e,m=s,p=o,u=r,a=i,f=t("[ri/sessions]"),auth=({secret:e,name:s})=>o=>{const r={};a("headers.cookie",o.upgradeReq.headers.cookie)(r);m(e)(r,null,u);o.sessionID=r.signedCookies[s]||r.cookies[s]};var l=n;export default l;

