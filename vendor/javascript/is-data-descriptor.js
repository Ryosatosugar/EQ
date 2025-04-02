// is-data-descriptor@1.0.1 downloaded from https://ga.jspm.io/npm:is-data-descriptor@1.0.1/index.js

import*as e from"hasown";var r=e;try{"default"in e&&(r=e.default)}catch(e){}var t={};var a=r;var n={__proto__:null,configurable:"boolean",enumerable:"boolean",writable:"boolean"};t=function isDataDescriptor(e,r){if(!e||typeof e!=="object")return false;if(typeof r==="string"){var t=Object.getOwnPropertyDescriptor(e,r);return typeof t!=="undefined"}if(!("value"in e)&&!("writable"in e)||"get"in e||"set"in e)return false;for(var o in e)if(o!=="value"&&a(e,o)&&a(n,o)&&typeof e[o]!==n[o]&&typeof e[o]!=="undefined")return false;return true};var o=t;export{o as default};

