// file-uri-to-path@1.0.0 downloaded from https://ga.jspm.io/npm:file-uri-to-path@1.0.0/index.js

import r from"path";var t={};var e=r.sep||"/";t=fileUriToPath;function fileUriToPath(r){if("string"!=typeof r||r.length<=7||"file://"!=r.substring(0,7))throw new TypeError("must pass in a file:// URI to convert to a file path");var t=decodeURI(r.substring(7));var a=t.indexOf("/");var i=t.substring(0,a);var o=t.substring(a+1);"localhost"==i&&(i="");i&&(i=e+e+i);o=o.replace(/^(.+)\|/,"$1:");"\\"==e&&(o=o.replace(/\//g,"\\"));/^.+\:/.test(o)||(o=e+o);return i+o}var a=t;export default a;

