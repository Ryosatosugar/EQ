// cached-path-relative@1.1.0 downloaded from https://ga.jspm.io/npm:cached-path-relative@1.1.0/lib/index.js

import*as a from"path";import e from"process";var r="default"in a?a.default:a;var t={};var c=e;var l=r;var v=l.relative;var i=c.cwd();var u=Object.create(null);t=cachedPathRelative;function cachedPathRelative(a,e){var r=c.cwd();if(r!==i){u=Object.create(null);i=r}if(u[a]&&u[a][e])return u[a][e];var t=v.call(l,a,e);u[a]=u[a]||Object.create(null);u[a][e]=t;return t}var f=t;export{f as default};

