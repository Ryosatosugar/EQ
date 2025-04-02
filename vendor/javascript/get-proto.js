// get-proto@1.0.1 downloaded from https://ga.jspm.io/npm:get-proto@1.0.1/index.js

import t from"./Reflect.getPrototypeOf.js";import o from"./Object.getPrototypeOf.js";import*as r from"dunder-proto/get";import"es-object-atoms";var e=r;try{"default"in r&&(e=r.default)}catch(t){}var n={};var f=t;var a=o;var u=e;
/** @type {import('.')} */n=f?function getProto(t){return f(t)}:a?function getProto(t){if(!t||typeof t!=="object"&&typeof t!=="function")throw new TypeError("getProto: not an object");return a(t)}:u?function getProto(t){return u(t)}:null;var c=n;export{c as default};

