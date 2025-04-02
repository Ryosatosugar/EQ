// utilise/by@2.3.8 downloaded from https://ga.jspm.io/npm:utilise@2.3.8/by.js

import r from"./is.js";import"./wrap.js";import"./keys.js";import"./str.js";import o from"./key.js";var t={};var e=o,a=r;t=function by(r,o){var t=1==arguments.length;return function(s){var n=a.fn(r)?r(s):e(r)(s);return n&&o&&n.toLowerCase&&o.toLowerCase?n.toLowerCase()===o.toLowerCase():t?Boolean(n):a.fn(o)?o(n):n==o}};var s=t;export default s;

