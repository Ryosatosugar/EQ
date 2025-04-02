// utilise/attr@2.3.8 downloaded from https://ga.jspm.io/npm:utilise@2.3.8/attr.js

import t from"./is.js";var e="undefined"!==typeof globalThis?globalThis:"undefined"!==typeof self?self:global;var r={};var a=t;r=function attr(t,r){var l=arguments.length;return a.str(t)||2!=l?a.str(t)||3!=l?function(n){var o=this||e||{};n=o.nodeName||a.fn(o.node)?o:n;n=n.node?n.node():n;n=n.host||n;return l>1&&false===r?n.removeAttribute(t):l>1?(n.setAttribute(t,r),r):n.attributes.getNamedItem(t)&&n.attributes.getNamedItem(t).value}:attr(arguments[1],arguments[2]).call(this||e,arguments[0]):attr(arguments[1]).call(this||e,arguments[0])};var l=r;export default l;

