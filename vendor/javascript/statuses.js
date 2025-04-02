// statuses@2.0.1 downloaded from https://ga.jspm.io/npm:statuses@2.0.1/index.js

import t from"./codes.json.js";var e={};var r=t;e=status;status.message=r;status.code=createMessageToStatusCodeMap(r);status.codes=createStatusCodeList(r);status.redirect={300:true,301:true,302:true,303:true,305:true,307:true,308:true};status.empty={204:true,205:true,304:true};status.retry={502:true,503:true,504:true};function createMessageToStatusCodeMap(t){var e={};Object.keys(t).forEach((function forEachCode(r){var s=t[r];var a=Number(r);e[s.toLowerCase()]=a}));return e}function createStatusCodeList(t){return Object.keys(t).map((function mapCode(t){return Number(t)}))}function getStatusCode(t){var e=t.toLowerCase();if(!Object.prototype.hasOwnProperty.call(status.code,e))throw new Error('invalid status message: "'+t+'"');return status.code[e]}function getStatusMessage(t){if(!Object.prototype.hasOwnProperty.call(status.message,t))throw new Error("invalid status code: "+t);return status.message[t]}
/**
 * Get the status code.
 *
 * Given a number, this will throw if it is not a known status
 * code, otherwise the code will be returned. Given a string,
 * the string will be parsed for a number and return the code
 * if valid, otherwise will lookup the code assuming this is
 * the status message.
 *
 * @param {string|number} code
 * @returns {number}
 * @public
 */function status(t){if("number"===typeof t)return getStatusMessage(t);if("string"!==typeof t)throw new TypeError("code must be a number or string");var e=parseInt(t,10);return isNaN(e)?getStatusCode(t):getStatusMessage(e)}var s=e;export default s;

