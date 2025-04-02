// preserve@0.2.0 downloaded from https://ga.jspm.io/npm:preserve@0.2.0/index.js

var r={};r.before=function before(r,n){return r.replace(n,(function(r){var n=randomize();e[n]=r;return"__ID"+n+"__"}))};r.after=function after(r){return r.replace(/__ID(.{5})__/g,(function(r,n){return e[n]}))};function randomize(){return Math.random().toString().slice(2,7)}var e={};const n=r.before,t=r.after;export default r;export{t as after,n as before};

