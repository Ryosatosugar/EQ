// is-windows@1.0.2 downloaded from https://ga.jspm.io/npm:is-windows@1.0.2/index.js

import e from"process";var n="undefined"!==typeof globalThis?globalThis:"undefined"!==typeof self?self:global;var i={};var o=e;(function(e){i&&true&&true?i=e():"undefined"!==typeof window?window.isWindows=e():"undefined"!==typeof n?n.isWindows=e():"undefined"!==typeof self?self.isWindows=e():(this||n).isWindows=e()})((function(){return function isWindows(){return o&&("win32"===o.platform||/^(msys|cygwin)$/.test(o.env.OSTYPE))}}));var s=i;export default s;

