// unpipe@1.0.0 downloaded from https://ga.jspm.io/npm:unpipe@1.0.0/index.js

var e={};e=unpipe;function hasPipeDataListeners(e){var r=e.listeners("data");for(var a=0;a<r.length;a++)if("ondata"===r[a].name)return true;return false}function unpipe(e){if(!e)throw new TypeError("argument stream is required");if("function"!==typeof e.unpipe){if(hasPipeDataListeners(e)){var r;var a=e.listeners("close");for(var n=0;n<a.length;n++){r=a[n];"cleanup"!==r.name&&"onclose"!==r.name||r.call(e)}}}else e.unpipe()}var r=e;export default r;

