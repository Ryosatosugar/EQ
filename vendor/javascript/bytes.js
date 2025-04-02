// bytes@3.1.2 downloaded from https://ga.jspm.io/npm:bytes@3.1.2/index.js

var r={};r=bytes;r.format=format;r.parse=parse;var a=/\B(?=(\d{3})+(?!\d))/g;var e=/(?:\.0*|(\.[^0]+)0+)$/;var t={b:1,kb:1024,mb:1<<20,gb:1<<30,tb:Math.pow(1024,4),pb:Math.pow(1024,5)};var o=/^((-|\+)?(\d+(?:\.\d+)?)) *(kb|mb|gb|tb|pb)$/i;
/**
 * Convert the given value in bytes into a string or parse to string to an integer in bytes.
 *
 * @param {string|number} value
 * @param {{
 *  case: [string],
 *  decimalPlaces: [number]
 *  fixedDecimals: [boolean]
 *  thousandsSeparator: [string]
 *  unitSeparator: [string]
 *  }} [options] bytes options.
 *
 * @returns {string|number|null}
 */function bytes(r,a){return"string"===typeof r?parse(r):"number"===typeof r?format(r,a):null}
/**
 * Format the given value in bytes into a string.
 *
 * If the value is negative, it is kept as such. If it is a float,
 * it is rounded.
 *
 * @param {number} value
 * @param {object} [options]
 * @param {number} [options.decimalPlaces=2]
 * @param {number} [options.fixedDecimals=false]
 * @param {string} [options.thousandsSeparator=]
 * @param {string} [options.unit=]
 * @param {string} [options.unitSeparator=]
 *
 * @returns {string|null}
 * @public
 */function format(r,o){if(!Number.isFinite(r))return null;var n=Math.abs(r);var s=o&&o.thousandsSeparator||"";var i=o&&o.unitSeparator||"";var b=o&&void 0!==o.decimalPlaces?o.decimalPlaces:2;var p=Boolean(o&&o.fixedDecimals);var u=o&&o.unit||"";u&&t[u.toLowerCase()]||(u=n>=t.pb?"PB":n>=t.tb?"TB":n>=t.gb?"GB":n>=t.mb?"MB":n>=t.kb?"KB":"B");var f=r/t[u.toLowerCase()];var l=f.toFixed(b);p||(l=l.replace(e,"$1"));s&&(l=l.split(".").map((function(r,e){return 0===e?r.replace(a,s):r})).join("."));return l+i+u}
/**
 * Parse the string value into an integer in bytes.
 *
 * If no unit is given, it is assumed the value is in bytes.
 *
 * @param {number|string} val
 *
 * @returns {number|null}
 * @public
 */function parse(r){if("number"===typeof r&&!isNaN(r))return r;if("string"!==typeof r)return null;var a=o.exec(r);var e;var n="b";if(a){e=parseFloat(a[1]);n=a[4].toLowerCase()}else{e=parseInt(r,10);n="b"}return isNaN(e)?null:Math.floor(t[n]*e)}var n=r;const s=r.format,i=r.parse;export{n as default,s as format,i as parse};

