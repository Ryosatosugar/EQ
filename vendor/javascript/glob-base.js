// glob-base@0.3.0 downloaded from https://ga.jspm.io/npm:glob-base@0.3.0/index.js

import r from"path";import b from"glob-parent";import o from"is-glob";var s={};var e=r;var t=b;var a=o;s=function globBase(r){if("string"!==typeof r)throw new TypeError("glob-base expects a string.");var b={};b.base=t(r);b.isGlob=a(r);if("."!==b.base){b.glob=r.substr(b.base.length);"/"===b.glob.charAt(0)&&(b.glob=b.glob.substr(1))}else b.glob=r;if(!b.isGlob){b.base=dirname(r);b.glob="."!==b.base?r.substr(b.base.length):r}"./"===b.glob.substr(0,2)&&(b.glob=b.glob.substr(2));"/"===b.glob.charAt(0)&&(b.glob=b.glob.substr(1));return b};function dirname(r){return"/"===r.slice(-1)?r:e.dirname(r)}var l=s;export default l;

