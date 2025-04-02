// on-finished@2.4.1 downloaded from https://ga.jspm.io/npm:on-finished@2.4.1/index.js

import*as e from"ee-first";import*as n from"async_hooks";import i from"process";var t="default"in e?e.default:e;var o="default"in n?n.default:n;var s={};var r=i;s=onFinished;s.isFinished=isFinished;var c=tryRequireAsyncHooks();var a=t;var u="function"===typeof r.nextTick?r.nextTick:function(e){r.nextTick(e.bind.apply(e,arguments))};
/**
 * Invoke callback when the response has finished, useful for
 * cleaning up resources afterwards.
 *
 * @param {object} msg
 * @param {function} listener
 * @return {object}
 * @public
 */function onFinished(e,n){if(false!==isFinished(e)){u(n,null,e);return e}attachListener(e,wrap(n));return e}
/**
 * Determine if message is already finished.
 *
 * @param {object} msg
 * @return {boolean}
 * @public
 */function isFinished(e){var n=e.socket;return"boolean"===typeof e.finished?Boolean(e.finished||n&&!n.writable):"boolean"===typeof e.complete?Boolean(e.upgrade||!n||!n.readable||e.complete&&!e.readable):void 0}
/**
 * Attach a finished listener to the message.
 *
 * @param {object} msg
 * @param {function} callback
 * @private
 */function attachFinishedListener(e,n){var i;var t;var o=false;function onFinish(e){i.cancel();t.cancel();o=true;n(e)}i=t=a([[e,"end","finish"]],onFinish);function onSocket(n){e.removeListener("socket",onSocket);o||i===t&&(t=a([[n,"error","close"]],onFinish))}if(e.socket)onSocket(e.socket);else{e.on("socket",onSocket);void 0===e.socket&&patchAssignSocket(e,onSocket)}}
/**
 * Attach the listener to the message.
 *
 * @param {object} msg
 * @return {function}
 * @private
 */function attachListener(e,n){var i=e.__onFinished;if(!i||!i.queue){i=e.__onFinished=createListener(e);attachFinishedListener(e,i)}i.queue.push(n)}
/**
 * Create listener on message.
 *
 * @param {object} msg
 * @return {function}
 * @private
 */function createListener(e){function listener(n){e.__onFinished===listener&&(e.__onFinished=null);if(listener.queue){var i=listener.queue;listener.queue=null;for(var t=0;t<i.length;t++)i[t](n,e)}}listener.queue=[];return listener}
/**
 * Patch ServerResponse.prototype.assignSocket for node.js 0.8.
 *
 * @param {ServerResponse} res
 * @param {function} callback
 * @private
 */function patchAssignSocket(e,n){var i=e.assignSocket;"function"===typeof i&&(e.assignSocket=function _assignSocket(e){i.call(this,e);n(e)})}function tryRequireAsyncHooks(){try{return o}catch(e){return{}}}function wrap(e){var n;c.AsyncResource&&(n=new c.AsyncResource(e.name||"bound-anonymous-fn"));return n&&n.runInAsyncScope?n.runInAsyncScope.bind(n,e,null):e}var f=s;const l=s.isFinished;export{f as default,l as isFinished};

