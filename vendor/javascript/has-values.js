// has-values@1.0.0 downloaded from https://ga.jspm.io/npm:has-values@1.0.0/index.js

import e from"kind-of";import r from"is-number";var a={};var t=e;var s=r;a=function hasValue(e){if(s(e))return true;switch(t(e)){case"null":case"boolean":case"function":return true;case"string":case"arguments":return 0!==e.length;case"error":return""!==e.message;case"array":var r=e.length;if(0===r)return false;for(var a=0;a<r;a++)if(hasValue(e[a]))return true;return false;case"file":case"map":case"set":return 0!==e.size;case"object":var n=Object.keys(e);if(0===n.length)return false;for(var a=0;a<n.length;a++){var u=n[a];if(hasValue(e[u]))return true}return false;default:return false}};var n=a;export default n;

