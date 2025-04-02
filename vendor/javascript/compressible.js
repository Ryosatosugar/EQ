// compressible@2.0.18 downloaded from https://ga.jspm.io/npm:compressible@2.0.18/index.js

import e from"mime-db";var r={};var s=e;var t=/^text\/|\+(?:json|text|xml)$/i;var o=/^\s*([^;\s]*)(?:;|\s|$)/;r=compressible;function compressible(e){if(!e||"string"!==typeof e)return false;var r=o.exec(e);var i=r&&r[1].toLowerCase();var a=s[i];return a&&void 0!==a.compressible?a.compressible:t.test(i)||void 0}var i=r;export default i;

