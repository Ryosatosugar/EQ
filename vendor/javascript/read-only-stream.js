// read-only-stream@2.0.0 downloaded from https://ga.jspm.io/npm:read-only-stream@2.0.0/index.js

import e from"readable-stream";var r={};var a=e.Readable;r=function(e){var r=e._readableState;"function"!==typeof e.read&&(e=new a(r).wrap(e));var n=new a({objectMode:r&&r.objectMode});var o=false;e.on("readable",(function(){if(o){o=false;n._read()}}));n._read=function(){var r,a=0;while(null!==(r=e.read())){n.push(r);a++}0===a&&(o=true)};e.once("end",(function(){n.push(null)}));e.on("error",(function(e){n.emit("error",e)}));return n};var n=r;export default n;

