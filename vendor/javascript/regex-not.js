// regex-not@1.0.2 downloaded from https://ga.jspm.io/npm:regex-not@1.0.2/index.js

import e from"extend-shallow";import r from"safe-regex";var t={};var a=e;var o=r;function toRegex(e,r){return new RegExp(toRegex.create(e,r))}toRegex.create=function(e,r){if("string"!==typeof e)throw new TypeError("expected a string");var t=a({},r);true===t.contains&&(t.strictNegate=false);var n=false!==t.strictOpen?"^":"";var s=false!==t.strictClose?"$":"";var f=t.endChar?t.endChar:"+";var i=e;i=false===t.strictNegate?"(?:(?!(?:"+e+")).)"+f:"(?:(?!^(?:"+e+")$).)"+f;var l=n+i+s;if(true===t.safe&&false===o(l))throw new Error("potentially unsafe regular expression: "+l);return l};t=toRegex;var n=t;export default n;

