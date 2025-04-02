// is-descriptor@1.0.3 downloaded from https://ga.jspm.io/npm:is-descriptor@1.0.3/index.js

import*as t from"is-accessor-descriptor";import*as r from"is-data-descriptor";var a=t;try{"default"in t&&(a=t.default)}catch(t){}var e=r;try{"default"in r&&(e=r.default)}catch(t){}var i={};var o=a;var c=e;i=function isDescriptor(t,r){return!(!t||typeof t!=="object"&&typeof t!=="function")&&("get"in t||"set"in t?o(t,r):c(t,r))};var s=i;export{s as default};

