// htmlescape@1.1.1 downloaded from https://ga.jspm.io/npm:htmlescape@1.1.1/htmlescape.js

var u={};var r={"&":"\\u0026",">":"\\u003e","<":"\\u003c","\u2028":"\\u2028","\u2029":"\\u2029"};var e=/[&><\u2028\u2029]/g;function escaper(u){return r[u]}u=function(u){return JSON.stringify(u).replace(e,escaper)};var n={"\u2028":"\\u2028","\u2029":"\\u2029"};var t=/[\u2028\u2029]/g;function sanitizer(u){return n[u]}u.sanitize=function(u){return u.replace(t,sanitizer)};var a=u;const i=u.sanitize;export default a;export{i as sanitize};

