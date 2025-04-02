// isstream@0.1.2 downloaded from https://ga.jspm.io/npm:isstream@0.1.2/isstream.js

import e from"stream";var t={};var a=e;function isStream(e){return e instanceof a.Stream}function isReadable(e){return isStream(e)&&"function"==typeof e._read&&"object"==typeof e._readableState}function isWritable(e){return isStream(e)&&"function"==typeof e._write&&"object"==typeof e._writableState}function isDuplex(e){return isReadable(e)&&isWritable(e)}t=isStream;t.isReadable=isReadable;t.isWritable=isWritable;t.isDuplex=isDuplex;var i=t;const r=t.isReadable,s=t.isWritable,l=t.isDuplex;export default i;export{l as isDuplex,r as isReadable,s as isWritable};

