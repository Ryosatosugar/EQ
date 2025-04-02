// async@2.6.4 downloaded from https://ga.jspm.io/npm:async@2.6.4/dist/async.js

import e from"process";var r="undefined"!==typeof globalThis?globalThis:"undefined"!==typeof self?self:global;var t={};var n={exports:t};var a=e;(function(e,r){r(t)})(0,(function(e){function slice(e,r){r|=0;var t=Math.max(e.length-r,0);var n=Array(t);for(var a=0;a<t;a++)n[a]=e[r+a];return n}
/**
   * Creates a continuation function with some arguments already applied.
   *
   * Useful as a shorthand when combined with other control flow functions. Any
   * arguments passed to the returned function are added to the arguments
   * originally passed to apply.
   *
   * @name apply
   * @static
   * @memberOf module:Utils
   * @method
   * @category Util
   * @param {Function} fn - The function you want to eventually apply all
   * arguments to. Invokes with (arguments...).
   * @param {...*} arguments... - Any number of arguments to automatically apply
   * when the continuation is called.
   * @returns {Function} the partially-applied function
   * @example
   *
   * // using apply
   * async.parallel([
   *     async.apply(fs.writeFile, 'testfile1', 'test1'),
   *     async.apply(fs.writeFile, 'testfile2', 'test2')
   * ]);
   *
   *
   * // the same process without using apply
   * async.parallel([
   *     function(callback) {
   *         fs.writeFile('testfile1', 'test1', callback);
   *     },
   *     function(callback) {
   *         fs.writeFile('testfile2', 'test2', callback);
   *     }
   * ]);
   *
   * // It's possible to pass any number of additional arguments when calling the
   * // continuation:
   *
   * node> var fn = async.apply(sys.puts, 'one');
   * node> fn('two', 'three');
   * one
   * two
   * three
   */var apply=function(e){var r=slice(arguments,1);return function(){var t=slice(arguments);return e.apply(null,r.concat(t))}};var initialParams=function(e){return function(){var t=slice(arguments);var n=t.pop();e.call(this||r,t,n)}};
/**
   * Checks if `value` is the
   * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
   * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
   *
   * @static
   * @memberOf _
   * @since 0.1.0
   * @category Lang
   * @param {*} value The value to check.
   * @returns {boolean} Returns `true` if `value` is an object, else `false`.
   * @example
   *
   * _.isObject({});
   * // => true
   *
   * _.isObject([1, 2, 3]);
   * // => true
   *
   * _.isObject(_.noop);
   * // => true
   *
   * _.isObject(null);
   * // => false
   */function isObject(e){var r=typeof e;return null!=e&&("object"==r||"function"==r)}var t="function"===typeof a.nextTick&&a.nextTick;var i="object"===typeof a&&"function"===typeof a.nextTick;function fallback(e){setTimeout(e,0)}function wrap(e){return function(r){var t=slice(arguments,1);e((function(){r.apply(null,t)}))}}var o;o=t||i?a.nextTick:fallback;var c=wrap(o);
/**
   * Take a sync function and make it async, passing its return value to a
   * callback. This is useful for plugging sync functions into a waterfall,
   * series, or other async functions. Any arguments passed to the generated
   * function will be passed to the wrapped function (except for the final
   * callback argument). Errors thrown will be passed to the callback.
   *
   * If the function passed to `asyncify` returns a Promise, that promises's
   * resolved/rejected state will be used to call the callback, rather than simply
   * the synchronous return value.
   *
   * This also means you can asyncify ES2017 `async` functions.
   *
   * @name asyncify
   * @static
   * @memberOf module:Utils
   * @method
   * @alias wrapSync
   * @category Util
   * @param {Function} func - The synchronous function, or Promise-returning
   * function to convert to an {@link AsyncFunction}.
   * @returns {AsyncFunction} An asynchronous wrapper of the `func`. To be
   * invoked with `(args..., callback)`.
   * @example
   *
   * // passing a regular synchronous function
   * async.waterfall([
   *     async.apply(fs.readFile, filename, "utf8"),
   *     async.asyncify(JSON.parse),
   *     function (data, next) {
   *         // data is the result of parsing the text.
   *         // If there was a parsing error, it would have been caught.
   *     }
   * ], callback);
   *
   * // passing a function returning a promise
   * async.waterfall([
   *     async.apply(fs.readFile, filename, "utf8"),
   *     async.asyncify(function (contents) {
   *         return db.model.create(contents);
   *     }),
   *     function (model, next) {
   *         // `model` is the instantiated model object.
   *         // If there was an error, this function would be skipped.
   *     }
   * ], callback);
   *
   * // es2017 example, though `asyncify` is not needed if your JS environment
   * // supports async functions out of the box
   * var q = async.queue(async.asyncify(async function(file) {
   *     var intermediateStep = await processFile(file);
   *     return await somePromise(intermediateStep)
   * }));
   *
   * q.push(files);
   */function asyncify(e){return initialParams((function(t,n){var a;try{a=e.apply(this||r,t)}catch(e){return n(e)}isObject(a)&&"function"===typeof a.then?a.then((function(e){invokeCallback(n,null,e)}),(function(e){invokeCallback(n,e.message?e:new Error(e))})):n(null,a)}))}function invokeCallback(e,r,t){try{e(r,t)}catch(e){c(rethrow,e)}}function rethrow(e){throw e}var u="function"===typeof Symbol;function isAsync(e){return u&&"AsyncFunction"===e[Symbol.toStringTag]}function wrapAsync(e){return isAsync(e)?asyncify(e):e}function applyEach$1(e){return function(t){var n=slice(arguments,1);var a=initialParams((function(n,a){var i=this||r;return e(t,(function(e,r){wrapAsync(e).apply(i,n.concat(r))}),a)}));return n.length?a.apply(this||r,n):a}}var s="object"==typeof r&&r&&r.Object===Object&&r;var l="object"==typeof self&&self&&self.Object===Object&&self;var f=s||l||Function("return this")();var p=f.Symbol;var v=Object.prototype;var y=v.hasOwnProperty;var h=v.toString;var m=p?p.toStringTag:void 0;
/**
   * A specialized version of `baseGetTag` which ignores `Symbol.toStringTag` values.
   *
   * @private
   * @param {*} value The value to query.
   * @returns {string} Returns the raw `toStringTag`.
   */function getRawTag(e){var r=y.call(e,m),t=e[m];try{e[m]=void 0;var n=true}catch(e){}var a=h.call(e);n&&(r?e[m]=t:delete e[m]);return a}var d=Object.prototype;var x=d.toString;
/**
   * Converts `value` to a string using `Object.prototype.toString`.
   *
   * @private
   * @param {*} value The value to convert.
   * @returns {string} Returns the converted string.
   */function objectToString(e){return x.call(e)}var b="[object Null]";var g="[object Undefined]";var L=p?p.toStringTag:void 0;
/**
   * The base implementation of `getTag` without fallbacks for buggy environments.
   *
   * @private
   * @param {*} value The value to query.
   * @returns {string} Returns the `toStringTag`.
   */function baseGetTag(e){return null==e?void 0===e?g:b:L&&L in Object(e)?getRawTag(e):objectToString(e)}var w="[object AsyncFunction]";var A="[object Function]";var k="[object GeneratorFunction]";var j="[object Proxy]";
/**
   * Checks if `value` is classified as a `Function` object.
   *
   * @static
   * @memberOf _
   * @since 0.1.0
   * @category Lang
   * @param {*} value The value to check.
   * @returns {boolean} Returns `true` if `value` is a function, else `false`.
   * @example
   *
   * _.isFunction(_);
   * // => true
   *
   * _.isFunction(/abc/);
   * // => false
   */function isFunction(e){if(!isObject(e))return false;var r=baseGetTag(e);return r==A||r==k||r==w||r==j}var O=9007199254740991;
/**
   * Checks if `value` is a valid array-like length.
   *
   * **Note:** This method is loosely based on
   * [`ToLength`](http://ecma-international.org/ecma-262/7.0/#sec-tolength).
   *
   * @static
   * @memberOf _
   * @since 4.0.0
   * @category Lang
   * @param {*} value The value to check.
   * @returns {boolean} Returns `true` if `value` is a valid length, else `false`.
   * @example
   *
   * _.isLength(3);
   * // => true
   *
   * _.isLength(Number.MIN_VALUE);
   * // => false
   *
   * _.isLength(Infinity);
   * // => false
   *
   * _.isLength('3');
   * // => false
   */function isLength(e){return"number"==typeof e&&e>-1&&e%1==0&&e<=O}
/**
   * Checks if `value` is array-like. A value is considered array-like if it's
   * not a function and has a `value.length` that's an integer greater than or
   * equal to `0` and less than or equal to `Number.MAX_SAFE_INTEGER`.
   *
   * @static
   * @memberOf _
   * @since 4.0.0
   * @category Lang
   * @param {*} value The value to check.
   * @returns {boolean} Returns `true` if `value` is array-like, else `false`.
   * @example
   *
   * _.isArrayLike([1, 2, 3]);
   * // => true
   *
   * _.isArrayLike(document.body.children);
   * // => true
   *
   * _.isArrayLike('abc');
   * // => true
   *
   * _.isArrayLike(_.noop);
   * // => false
   */function isArrayLike(e){return null!=e&&isLength(e.length)&&!isFunction(e)}var S={};function noop(){}function once(e){return function(){if(null!==e){var t=e;e=null;t.apply(this||r,arguments)}}}var T="function"===typeof Symbol&&Symbol.iterator;var getIterator=function(e){return T&&e[T]&&e[T]()};
/**
   * The base implementation of `_.times` without support for iteratee shorthands
   * or max array length checks.
   *
   * @private
   * @param {number} n The number of times to invoke `iteratee`.
   * @param {Function} iteratee The function invoked per iteration.
   * @returns {Array} Returns the array of results.
   */function baseTimes(e,r){var t=-1,n=Array(e);while(++t<e)n[t]=r(t);return n}
/**
   * Checks if `value` is object-like. A value is object-like if it's not `null`
   * and has a `typeof` result of "object".
   *
   * @static
   * @memberOf _
   * @since 4.0.0
   * @category Lang
   * @param {*} value The value to check.
   * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
   * @example
   *
   * _.isObjectLike({});
   * // => true
   *
   * _.isObjectLike([1, 2, 3]);
   * // => true
   *
   * _.isObjectLike(_.noop);
   * // => false
   *
   * _.isObjectLike(null);
   * // => false
   */function isObjectLike(e){return null!=e&&"object"==typeof e}var E="[object Arguments]";
/**
   * The base implementation of `_.isArguments`.
   *
   * @private
   * @param {*} value The value to check.
   * @returns {boolean} Returns `true` if `value` is an `arguments` object,
   */function baseIsArguments(e){return isObjectLike(e)&&baseGetTag(e)==E}var I=Object.prototype;var _=I.hasOwnProperty;var F=I.propertyIsEnumerable;
/**
   * Checks if `value` is likely an `arguments` object.
   *
   * @static
   * @memberOf _
   * @since 0.1.0
   * @category Lang
   * @param {*} value The value to check.
   * @returns {boolean} Returns `true` if `value` is an `arguments` object,
   *  else `false`.
   * @example
   *
   * _.isArguments(function() { return arguments; }());
   * // => true
   *
   * _.isArguments([1, 2, 3]);
   * // => false
   */var P=baseIsArguments(function(){return arguments}())?baseIsArguments:function(e){return isObjectLike(e)&&_.call(e,"callee")&&!F.call(e,"callee")};
/**
   * Checks if `value` is classified as an `Array` object.
   *
   * @static
   * @memberOf _
   * @since 0.1.0
   * @category Lang
   * @param {*} value The value to check.
   * @returns {boolean} Returns `true` if `value` is an array, else `false`.
   * @example
   *
   * _.isArray([1, 2, 3]);
   * // => true
   *
   * _.isArray(document.body.children);
   * // => false
   *
   * _.isArray('abc');
   * // => false
   *
   * _.isArray(_.noop);
   * // => false
   */var B=Array.isArray;
/**
   * This method returns `false`.
   *
   * @static
   * @memberOf _
   * @since 4.13.0
   * @category Util
   * @returns {boolean} Returns `false`.
   * @example
   *
   * _.times(2, _.stubFalse);
   * // => [false, false]
   */function stubFalse(){return false}var D="object"==typeof e&&e&&!e.nodeType&&e;var $=D&&n&&!n.nodeType&&n;var q=$&&$.exports===D;var M=q?f.Buffer:void 0;var R=M?M.isBuffer:void 0;
/**
   * Checks if `value` is a buffer.
   *
   * @static
   * @memberOf _
   * @since 4.3.0
   * @category Lang
   * @param {*} value The value to check.
   * @returns {boolean} Returns `true` if `value` is a buffer, else `false`.
   * @example
   *
   * _.isBuffer(new Buffer(2));
   * // => true
   *
   * _.isBuffer(new Uint8Array(2));
   * // => false
   */var z=R||stubFalse;var U=9007199254740991;var C=/^(?:0|[1-9]\d*)$/;
/**
   * Checks if `value` is a valid array-like index.
   *
   * @private
   * @param {*} value The value to check.
   * @param {number} [length=MAX_SAFE_INTEGER] The upper bounds of a valid index.
   * @returns {boolean} Returns `true` if `value` is a valid index, else `false`.
   */function isIndex(e,r){var t=typeof e;r=null==r?U:r;return!!r&&("number"==t||"symbol"!=t&&C.test(e))&&e>-1&&e%1==0&&e<r}var V="[object Arguments]";var G="[object Array]";var W="[object Boolean]";var N="[object Date]";var Q="[object Error]";var K="[object Function]";var H="[object Map]";var J="[object Number]";var X="[object Object]";var Y="[object RegExp]";var Z="[object Set]";var ee="[object String]";var re="[object WeakMap]";var te="[object ArrayBuffer]";var ne="[object DataView]";var ae="[object Float32Array]";var ie="[object Float64Array]";var oe="[object Int8Array]";var ce="[object Int16Array]";var ue="[object Int32Array]";var se="[object Uint8Array]";var le="[object Uint8ClampedArray]";var fe="[object Uint16Array]";var pe="[object Uint32Array]";var ve={};ve[ae]=ve[ie]=ve[oe]=ve[ce]=ve[ue]=ve[se]=ve[le]=ve[fe]=ve[pe]=true;ve[V]=ve[G]=ve[te]=ve[W]=ve[ne]=ve[N]=ve[Q]=ve[K]=ve[H]=ve[J]=ve[X]=ve[Y]=ve[Z]=ve[ee]=ve[re]=false;
/**
   * The base implementation of `_.isTypedArray` without Node.js optimizations.
   *
   * @private
   * @param {*} value The value to check.
   * @returns {boolean} Returns `true` if `value` is a typed array, else `false`.
   */function baseIsTypedArray(e){return isObjectLike(e)&&isLength(e.length)&&!!ve[baseGetTag(e)]}
/**
   * The base implementation of `_.unary` without support for storing metadata.
   *
   * @private
   * @param {Function} func The function to cap arguments for.
   * @returns {Function} Returns the new capped function.
   */function baseUnary(e){return function(r){return e(r)}}var ye="object"==typeof e&&e&&!e.nodeType&&e;var he=ye&&n&&!n.nodeType&&n;var me=he&&he.exports===ye;var de=me&&s.process;var xe=function(){try{var e=he&&he.require&&he.require("util").types;return e||de&&de.binding&&de.binding("util")}catch(e){}}();var be=xe&&xe.isTypedArray;
/**
   * Checks if `value` is classified as a typed array.
   *
   * @static
   * @memberOf _
   * @since 3.0.0
   * @category Lang
   * @param {*} value The value to check.
   * @returns {boolean} Returns `true` if `value` is a typed array, else `false`.
   * @example
   *
   * _.isTypedArray(new Uint8Array);
   * // => true
   *
   * _.isTypedArray([]);
   * // => false
   */var ge=be?baseUnary(be):baseIsTypedArray;var Le=Object.prototype;var we=Le.hasOwnProperty;
/**
   * Creates an array of the enumerable property names of the array-like `value`.
   *
   * @private
   * @param {*} value The value to query.
   * @param {boolean} inherited Specify returning inherited property names.
   * @returns {Array} Returns the array of property names.
   */function arrayLikeKeys(e,r){var t=B(e),n=!t&&P(e),a=!t&&!n&&z(e),i=!t&&!n&&!a&&ge(e),o=t||n||a||i,c=o?baseTimes(e.length,String):[],u=c.length;for(var s in e)!r&&!we.call(e,s)||o&&("length"==s||a&&("offset"==s||"parent"==s)||i&&("buffer"==s||"byteLength"==s||"byteOffset"==s)||isIndex(s,u))||c.push(s);return c}var Ae=Object.prototype;
/**
   * Checks if `value` is likely a prototype object.
   *
   * @private
   * @param {*} value The value to check.
   * @returns {boolean} Returns `true` if `value` is a prototype, else `false`.
   */function isPrototype(e){var r=e&&e.constructor,t="function"==typeof r&&r.prototype||Ae;return e===t}
/**
   * Creates a unary function that invokes `func` with its argument transformed.
   *
   * @private
   * @param {Function} func The function to wrap.
   * @param {Function} transform The argument transform.
   * @returns {Function} Returns the new function.
   */function overArg(e,r){return function(t){return e(r(t))}}var ke=overArg(Object.keys,Object);var je=Object.prototype;var Oe=je.hasOwnProperty;
/**
   * The base implementation of `_.keys` which doesn't treat sparse arrays as dense.
   *
   * @private
   * @param {Object} object The object to query.
   * @returns {Array} Returns the array of property names.
   */function baseKeys(e){if(!isPrototype(e))return ke(e);var r=[];for(var t in Object(e))Oe.call(e,t)&&"constructor"!=t&&r.push(t);return r}
/**
   * Creates an array of the own enumerable property names of `object`.
   *
   * **Note:** Non-object values are coerced to objects. See the
   * [ES spec](http://ecma-international.org/ecma-262/7.0/#sec-object.keys)
   * for more details.
   *
   * @static
   * @since 0.1.0
   * @memberOf _
   * @category Object
   * @param {Object} object The object to query.
   * @returns {Array} Returns the array of property names.
   * @example
   *
   * function Foo() {
   *   this.a = 1;
   *   this.b = 2;
   * }
   *
   * Foo.prototype.c = 3;
   *
   * _.keys(new Foo);
   * // => ['a', 'b'] (iteration order is not guaranteed)
   *
   * _.keys('hi');
   * // => ['0', '1']
   */function keys(e){return isArrayLike(e)?arrayLikeKeys(e):baseKeys(e)}function createArrayIterator(e){var r=-1;var t=e.length;return function next(){return++r<t?{value:e[r],key:r}:null}}function createES2015Iterator(e){var r=-1;return function next(){var t=e.next();if(t.done)return null;r++;return{value:t.value,key:r}}}function createObjectIterator(e){var r=keys(e);var t=-1;var n=r.length;return function next(){var a=r[++t];return"__proto__"===a?next():t<n?{value:e[a],key:a}:null}}function iterator(e){if(isArrayLike(e))return createArrayIterator(e);var r=getIterator(e);return r?createES2015Iterator(r):createObjectIterator(e)}function onlyOnce(e){return function(){if(null===e)throw new Error("Callback was already called.");var t=e;e=null;t.apply(this||r,arguments)}}function _eachOfLimit(e){return function(r,t,n){n=once(n||noop);if(e<=0||!r)return n(null);var a=iterator(r);var i=false;var o=0;var c=false;function iterateeCallback(e,r){o-=1;if(e){i=true;n(e)}else{if(r===S||i&&o<=0){i=true;return n(null)}c||replenish()}}function replenish(){c=true;while(o<e&&!i){var r=a();if(null===r){i=true;o<=0&&n(null);return}o+=1;t(r.value,r.key,onlyOnce(iterateeCallback))}c=false}replenish()}}
/**
   * The same as [`eachOf`]{@link module:Collections.eachOf} but runs a maximum of `limit` async operations at a
   * time.
   *
   * @name eachOfLimit
   * @static
   * @memberOf module:Collections
   * @method
   * @see [async.eachOf]{@link module:Collections.eachOf}
   * @alias forEachOfLimit
   * @category Collection
   * @param {Array|Iterable|Object} coll - A collection to iterate over.
   * @param {number} limit - The maximum number of async operations at a time.
   * @param {AsyncFunction} iteratee - An async function to apply to each
   * item in `coll`. The `key` is the item's key, or index in the case of an
   * array.
   * Invoked with (item, key, callback).
   * @param {Function} [callback] - A callback which is called when all
   * `iteratee` functions have finished, or an error occurs. Invoked with (err).
   */function eachOfLimit(e,r,t,n){_eachOfLimit(r)(e,wrapAsync(t),n)}function doLimit(e,r){return function(t,n,a){return e(t,r,n,a)}}function eachOfArrayLike(e,r,t){t=once(t||noop);var n=0,a=0,i=e.length;0===i&&t(null);function iteratorCallback(e,r){e?t(e):++a!==i&&r!==S||t(null)}for(;n<i;n++)r(e[n],n,onlyOnce(iteratorCallback))}var Se=doLimit(eachOfLimit,Infinity);
/**
   * Like [`each`]{@link module:Collections.each}, except that it passes the key (or index) as the second argument
   * to the iteratee.
   *
   * @name eachOf
   * @static
   * @memberOf module:Collections
   * @method
   * @alias forEachOf
   * @category Collection
   * @see [async.each]{@link module:Collections.each}
   * @param {Array|Iterable|Object} coll - A collection to iterate over.
   * @param {AsyncFunction} iteratee - A function to apply to each
   * item in `coll`.
   * The `key` is the item's key, or index in the case of an array.
   * Invoked with (item, key, callback).
   * @param {Function} [callback] - A callback which is called when all
   * `iteratee` functions have finished, or an error occurs. Invoked with (err).
   * @example
   *
   * var obj = {dev: "/dev.json", test: "/test.json", prod: "/prod.json"};
   * var configs = {};
   *
   * async.forEachOf(obj, function (value, key, callback) {
   *     fs.readFile(__dirname + value, "utf8", function (err, data) {
   *         if (err) return callback(err);
   *         try {
   *             configs[key] = JSON.parse(data);
   *         } catch (e) {
   *             return callback(e);
   *         }
   *         callback();
   *     });
   * }, function (err) {
   *     if (err) console.error(err.message);
   *     // configs is now a map of JSON data
   *     doSomethingWith(configs);
   * });
   */var eachOf=function(e,r,t){var n=isArrayLike(e)?eachOfArrayLike:Se;n(e,wrapAsync(r),t)};function doParallel(e){return function(r,t,n){return e(eachOf,r,wrapAsync(t),n)}}function _asyncMap(e,r,t,n){n=n||noop;r=r||[];var a=[];var i=0;var o=wrapAsync(t);e(r,(function(e,r,t){var n=i++;o(e,(function(e,r){a[n]=r;t(e)}))}),(function(e){n(e,a)}))}
/**
   * Produces a new collection of values by mapping each value in `coll` through
   * the `iteratee` function. The `iteratee` is called with an item from `coll`
   * and a callback for when it has finished processing. Each of these callback
   * takes 2 arguments: an `error`, and the transformed item from `coll`. If
   * `iteratee` passes an error to its callback, the main `callback` (for the
   * `map` function) is immediately called with the error.
   *
   * Note, that since this function applies the `iteratee` to each item in
   * parallel, there is no guarantee that the `iteratee` functions will complete
   * in order. However, the results array will be in the same order as the
   * original `coll`.
   *
   * If `map` is passed an Object, the results will be an Array.  The results
   * will roughly be in the order of the original Objects' keys (but this can
   * vary across JavaScript engines).
   *
   * @name map
   * @static
   * @memberOf module:Collections
   * @method
   * @category Collection
   * @param {Array|Iterable|Object} coll - A collection to iterate over.
   * @param {AsyncFunction} iteratee - An async function to apply to each item in
   * `coll`.
   * The iteratee should complete with the transformed item.
   * Invoked with (item, callback).
   * @param {Function} [callback] - A callback which is called when all `iteratee`
   * functions have finished, or an error occurs. Results is an Array of the
   * transformed items from the `coll`. Invoked with (err, results).
   * @example
   *
   * async.map(['file1','file2','file3'], fs.stat, function(err, results) {
   *     // results is now an array of stats for each file
   * });
   */var Te=doParallel(_asyncMap);
/**
   * Applies the provided arguments to each function in the array, calling
   * `callback` after all functions have completed. If you only provide the first
   * argument, `fns`, then it will return a function which lets you pass in the
   * arguments as if it were a single function call. If more arguments are
   * provided, `callback` is required while `args` is still optional.
   *
   * @name applyEach
   * @static
   * @memberOf module:ControlFlow
   * @method
   * @category Control Flow
   * @param {Array|Iterable|Object} fns - A collection of {@link AsyncFunction}s
   * to all call with the same arguments
   * @param {...*} [args] - any number of separate arguments to pass to the
   * function.
   * @param {Function} [callback] - the final argument should be the callback,
   * called when all functions have completed processing.
   * @returns {Function} - If only the first argument, `fns`, is provided, it will
   * return a function which lets you pass in the arguments as if it were a single
   * function call. The signature is `(..args, callback)`. If invoked with any
   * arguments, `callback` is required.
   * @example
   *
   * async.applyEach([enableSearch, updateSchema], 'bucket', callback);
   *
   * // partial application example:
   * async.each(
   *     buckets,
   *     async.applyEach([enableSearch, updateSchema]),
   *     callback
   * );
   */var Ee=applyEach$1(Te);function doParallelLimit(e){return function(r,t,n,a){return e(_eachOfLimit(t),r,wrapAsync(n),a)}}
/**
   * The same as [`map`]{@link module:Collections.map} but runs a maximum of `limit` async operations at a time.
   *
   * @name mapLimit
   * @static
   * @memberOf module:Collections
   * @method
   * @see [async.map]{@link module:Collections.map}
   * @category Collection
   * @param {Array|Iterable|Object} coll - A collection to iterate over.
   * @param {number} limit - The maximum number of async operations at a time.
   * @param {AsyncFunction} iteratee - An async function to apply to each item in
   * `coll`.
   * The iteratee should complete with the transformed item.
   * Invoked with (item, callback).
   * @param {Function} [callback] - A callback which is called when all `iteratee`
   * functions have finished, or an error occurs. Results is an array of the
   * transformed items from the `coll`. Invoked with (err, results).
   */var Ie=doParallelLimit(_asyncMap);
/**
   * The same as [`map`]{@link module:Collections.map} but runs only a single async operation at a time.
   *
   * @name mapSeries
   * @static
   * @memberOf module:Collections
   * @method
   * @see [async.map]{@link module:Collections.map}
   * @category Collection
   * @param {Array|Iterable|Object} coll - A collection to iterate over.
   * @param {AsyncFunction} iteratee - An async function to apply to each item in
   * `coll`.
   * The iteratee should complete with the transformed item.
   * Invoked with (item, callback).
   * @param {Function} [callback] - A callback which is called when all `iteratee`
   * functions have finished, or an error occurs. Results is an array of the
   * transformed items from the `coll`. Invoked with (err, results).
   */var _e=doLimit(Ie,1);
/**
   * The same as [`applyEach`]{@link module:ControlFlow.applyEach} but runs only a single async operation at a time.
   *
   * @name applyEachSeries
   * @static
   * @memberOf module:ControlFlow
   * @method
   * @see [async.applyEach]{@link module:ControlFlow.applyEach}
   * @category Control Flow
   * @param {Array|Iterable|Object} fns - A collection of {@link AsyncFunction}s to all
   * call with the same arguments
   * @param {...*} [args] - any number of separate arguments to pass to the
   * function.
   * @param {Function} [callback] - the final argument should be the callback,
   * called when all functions have completed processing.
   * @returns {Function} - If only the first argument is provided, it will return
   * a function which lets you pass in the arguments as if it were a single
   * function call.
   */var Fe=applyEach$1(_e);
/**
   * A specialized version of `_.forEach` for arrays without support for
   * iteratee shorthands.
   *
   * @private
   * @param {Array} [array] The array to iterate over.
   * @param {Function} iteratee The function invoked per iteration.
   * @returns {Array} Returns `array`.
   */function arrayEach(e,r){var t=-1,n=null==e?0:e.length;while(++t<n)if(false===r(e[t],t,e))break;return e}
/**
   * Creates a base function for methods like `_.forIn` and `_.forOwn`.
   *
   * @private
   * @param {boolean} [fromRight] Specify iterating from right to left.
   * @returns {Function} Returns the new base function.
   */function createBaseFor(e){return function(r,t,n){var a=-1,i=Object(r),o=n(r),c=o.length;while(c--){var u=o[e?c:++a];if(false===t(i[u],u,i))break}return r}}
/**
   * The base implementation of `baseForOwn` which iterates over `object`
   * properties returned by `keysFunc` and invokes `iteratee` for each property.
   * Iteratee functions may exit iteration early by explicitly returning `false`.
   *
   * @private
   * @param {Object} object The object to iterate over.
   * @param {Function} iteratee The function invoked per iteration.
   * @param {Function} keysFunc The function to get the keys of `object`.
   * @returns {Object} Returns `object`.
   */var Pe=createBaseFor();
/**
   * The base implementation of `_.forOwn` without support for iteratee shorthands.
   *
   * @private
   * @param {Object} object The object to iterate over.
   * @param {Function} iteratee The function invoked per iteration.
   * @returns {Object} Returns `object`.
   */function baseForOwn(e,r){return e&&Pe(e,r,keys)}
/**
   * The base implementation of `_.findIndex` and `_.findLastIndex` without
   * support for iteratee shorthands.
   *
   * @private
   * @param {Array} array The array to inspect.
   * @param {Function} predicate The function invoked per iteration.
   * @param {number} fromIndex The index to search from.
   * @param {boolean} [fromRight] Specify iterating from right to left.
   * @returns {number} Returns the index of the matched value, else `-1`.
   */function baseFindIndex(e,r,t,n){var a=e.length,i=t+(n?1:-1);while(n?i--:++i<a)if(r(e[i],i,e))return i;return-1}
/**
   * The base implementation of `_.isNaN` without support for number objects.
   *
   * @private
   * @param {*} value The value to check.
   * @returns {boolean} Returns `true` if `value` is `NaN`, else `false`.
   */function baseIsNaN(e){return e!==e}
/**
   * A specialized version of `_.indexOf` which performs strict equality
   * comparisons of values, i.e. `===`.
   *
   * @private
   * @param {Array} array The array to inspect.
   * @param {*} value The value to search for.
   * @param {number} fromIndex The index to search from.
   * @returns {number} Returns the index of the matched value, else `-1`.
   */function strictIndexOf(e,r,t){var n=t-1,a=e.length;while(++n<a)if(e[n]===r)return n;return-1}
/**
   * The base implementation of `_.indexOf` without `fromIndex` bounds checks.
   *
   * @private
   * @param {Array} array The array to inspect.
   * @param {*} value The value to search for.
   * @param {number} fromIndex The index to search from.
   * @returns {number} Returns the index of the matched value, else `-1`.
   */function baseIndexOf(e,r,t){return r===r?strictIndexOf(e,r,t):baseFindIndex(e,baseIsNaN,t)}
/**
   * Determines the best order for running the {@link AsyncFunction}s in `tasks`, based on
   * their requirements. Each function can optionally depend on other functions
   * being completed first, and each function is run as soon as its requirements
   * are satisfied.
   *
   * If any of the {@link AsyncFunction}s pass an error to their callback, the `auto` sequence
   * will stop. Further tasks will not execute (so any other functions depending
   * on it will not run), and the main `callback` is immediately called with the
   * error.
   *
   * {@link AsyncFunction}s also receive an object containing the results of functions which
   * have completed so far as the first argument, if they have dependencies. If a
   * task function has no dependencies, it will only be passed a callback.
   *
   * @name auto
   * @static
   * @memberOf module:ControlFlow
   * @method
   * @category Control Flow
   * @param {Object} tasks - An object. Each of its properties is either a
   * function or an array of requirements, with the {@link AsyncFunction} itself the last item
   * in the array. The object's key of a property serves as the name of the task
   * defined by that property, i.e. can be used when specifying requirements for
   * other tasks. The function receives one or two arguments:
   * * a `results` object, containing the results of the previously executed
   *   functions, only passed if the task has any dependencies,
   * * a `callback(err, result)` function, which must be called when finished,
   *   passing an `error` (which can be `null`) and the result of the function's
   *   execution.
   * @param {number} [concurrency=Infinity] - An optional `integer` for
   * determining the maximum number of tasks that can be run in parallel. By
   * default, as many as possible.
   * @param {Function} [callback] - An optional callback which is called when all
   * the tasks have been completed. It receives the `err` argument if any `tasks`
   * pass an error to their callback. Results are always returned; however, if an
   * error occurs, no further `tasks` will be performed, and the results object
   * will only contain partial results. Invoked with (err, results).
   * @returns undefined
   * @example
   *
   * async.auto({
   *     // this function will just be passed a callback
   *     readData: async.apply(fs.readFile, 'data.txt', 'utf-8'),
   *     showData: ['readData', function(results, cb) {
   *         // results.readData is the file's contents
   *         // ...
   *     }]
   * }, callback);
   *
   * async.auto({
   *     get_data: function(callback) {
   *         console.log('in get_data');
   *         // async code to get some data
   *         callback(null, 'data', 'converted to array');
   *     },
   *     make_folder: function(callback) {
   *         console.log('in make_folder');
   *         // async code to create a directory to store a file in
   *         // this is run at the same time as getting the data
   *         callback(null, 'folder');
   *     },
   *     write_file: ['get_data', 'make_folder', function(results, callback) {
   *         console.log('in write_file', JSON.stringify(results));
   *         // once there is some data and the directory exists,
   *         // write the data to a file in the directory
   *         callback(null, 'filename');
   *     }],
   *     email_link: ['write_file', function(results, callback) {
   *         console.log('in email_link', JSON.stringify(results));
   *         // once the file is written let's email a link to it...
   *         // results.write_file contains the filename returned by write_file.
   *         callback(null, {'file':results.write_file, 'email':'user@example.com'});
   *     }]
   * }, function(err, results) {
   *     console.log('err = ', err);
   *     console.log('results = ', results);
   * });
   */var auto=function(e,r,t){if("function"===typeof r){t=r;r=null}t=once(t||noop);var n=keys(e);var a=n.length;if(!a)return t(null);r||(r=a);var i={};var o=0;var c=false;var u=Object.create(null);var s=[];var l=[];var f={};baseForOwn(e,(function(r,t){if(B(r)){var n=r.slice(0,r.length-1);var a=n.length;if(0!==a){f[t]=a;arrayEach(n,(function(i){if(!e[i])throw new Error("async.auto task `"+t+"` has a non-existent dependency `"+i+"` in "+n.join(", "));addListener(i,(function(){a--;0===a&&enqueueTask(t,r)}))}))}else{enqueueTask(t,r);l.push(t)}}else{enqueueTask(t,[r]);l.push(t)}}));checkForDeadlocks();processQueue();function enqueueTask(e,r){s.push((function(){runTask(e,r)}))}function processQueue(){if(0===s.length&&0===o)return t(null,i);while(s.length&&o<r){var e=s.shift();e()}}function addListener(e,r){var t=u[e];t||(t=u[e]=[]);t.push(r)}function taskComplete(e){var r=u[e]||[];arrayEach(r,(function(e){e()}));processQueue()}function runTask(e,r){if(!c){var n=onlyOnce((function(r,n){o--;arguments.length>2&&(n=slice(arguments,1));if(r){var a={};baseForOwn(i,(function(e,r){a[r]=e}));a[e]=n;c=true;u=Object.create(null);t(r,a)}else{i[e]=n;taskComplete(e)}}));o++;var a=wrapAsync(r[r.length-1]);r.length>1?a(i,n):a(n)}}function checkForDeadlocks(){var e;var r=0;while(l.length){e=l.pop();r++;arrayEach(getDependents(e),(function(e){0===--f[e]&&l.push(e)}))}if(r!==a)throw new Error("async.auto cannot execute tasks due to a recursive dependency")}function getDependents(r){var t=[];baseForOwn(e,(function(e,n){B(e)&&baseIndexOf(e,r,0)>=0&&t.push(n)}));return t}};
/**
   * A specialized version of `_.map` for arrays without support for iteratee
   * shorthands.
   *
   * @private
   * @param {Array} [array] The array to iterate over.
   * @param {Function} iteratee The function invoked per iteration.
   * @returns {Array} Returns the new mapped array.
   */function arrayMap(e,r){var t=-1,n=null==e?0:e.length,a=Array(n);while(++t<n)a[t]=r(e[t],t,e);return a}var Be="[object Symbol]";
/**
   * Checks if `value` is classified as a `Symbol` primitive or object.
   *
   * @static
   * @memberOf _
   * @since 4.0.0
   * @category Lang
   * @param {*} value The value to check.
   * @returns {boolean} Returns `true` if `value` is a symbol, else `false`.
   * @example
   *
   * _.isSymbol(Symbol.iterator);
   * // => true
   *
   * _.isSymbol('abc');
   * // => false
   */function isSymbol(e){return"symbol"==typeof e||isObjectLike(e)&&baseGetTag(e)==Be}var De=1/0;var $e=p?p.prototype:void 0;var qe=$e?$e.toString:void 0;
/**
   * The base implementation of `_.toString` which doesn't convert nullish
   * values to empty strings.
   *
   * @private
   * @param {*} value The value to process.
   * @returns {string} Returns the string.
   */function baseToString(e){if("string"==typeof e)return e;if(B(e))return arrayMap(e,baseToString)+"";if(isSymbol(e))return qe?qe.call(e):"";var r=e+"";return"0"==r&&1/e==-De?"-0":r}
/**
   * The base implementation of `_.slice` without an iteratee call guard.
   *
   * @private
   * @param {Array} array The array to slice.
   * @param {number} [start=0] The start position.
   * @param {number} [end=array.length] The end position.
   * @returns {Array} Returns the slice of `array`.
   */function baseSlice(e,r,t){var n=-1,a=e.length;r<0&&(r=-r>a?0:a+r);t=t>a?a:t;t<0&&(t+=a);a=r>t?0:t-r>>>0;r>>>=0;var i=Array(a);while(++n<a)i[n]=e[n+r];return i}
/**
   * Casts `array` to a slice if it's needed.
   *
   * @private
   * @param {Array} array The array to inspect.
   * @param {number} start The start position.
   * @param {number} [end=array.length] The end position.
   * @returns {Array} Returns the cast slice.
   */function castSlice(e,r,t){var n=e.length;t=void 0===t?n:t;return!r&&t>=n?e:baseSlice(e,r,t)}
/**
   * Used by `_.trim` and `_.trimEnd` to get the index of the last string symbol
   * that is not found in the character symbols.
   *
   * @private
   * @param {Array} strSymbols The string symbols to inspect.
   * @param {Array} chrSymbols The character symbols to find.
   * @returns {number} Returns the index of the last unmatched string symbol.
   */function charsEndIndex(e,r){var t=e.length;while(t--&&baseIndexOf(r,e[t],0)>-1);return t}
/**
   * Used by `_.trim` and `_.trimStart` to get the index of the first string symbol
   * that is not found in the character symbols.
   *
   * @private
   * @param {Array} strSymbols The string symbols to inspect.
   * @param {Array} chrSymbols The character symbols to find.
   * @returns {number} Returns the index of the first unmatched string symbol.
   */function charsStartIndex(e,r){var t=-1,n=e.length;while(++t<n&&baseIndexOf(r,e[t],0)>-1);return t}
/**
   * Converts an ASCII `string` to an array.
   *
   * @private
   * @param {string} string The string to convert.
   * @returns {Array} Returns the converted array.
   */function asciiToArray(e){return e.split("")}var Me="\\ud800-\\udfff";var Re="\\u0300-\\u036f";var ze="\\ufe20-\\ufe2f";var Ue="\\u20d0-\\u20ff";var Ce=Re+ze+Ue;var Ve="\\ufe0e\\ufe0f";var Ge="\\u200d";var We=RegExp("["+Ge+Me+Ce+Ve+"]");
/**
   * Checks if `string` contains Unicode symbols.
   *
   * @private
   * @param {string} string The string to inspect.
   * @returns {boolean} Returns `true` if a symbol is found, else `false`.
   */function hasUnicode(e){return We.test(e)}var Ne="\\ud800-\\udfff";var Qe="\\u0300-\\u036f";var Ke="\\ufe20-\\ufe2f";var He="\\u20d0-\\u20ff";var Je=Qe+Ke+He;var Xe="\\ufe0e\\ufe0f";var Ye="["+Ne+"]";var Ze="["+Je+"]";var er="\\ud83c[\\udffb-\\udfff]";var rr="(?:"+Ze+"|"+er+")";var tr="[^"+Ne+"]";var nr="(?:\\ud83c[\\udde6-\\uddff]){2}";var ar="[\\ud800-\\udbff][\\udc00-\\udfff]";var ir="\\u200d";var or=rr+"?";var cr="["+Xe+"]?";var ur="(?:"+ir+"(?:"+[tr,nr,ar].join("|")+")"+cr+or+")*";var sr=cr+or+ur;var lr="(?:"+[tr+Ze+"?",Ze,nr,ar,Ye].join("|")+")";var fr=RegExp(er+"(?="+er+")|"+lr+sr,"g");
/**
   * Converts a Unicode `string` to an array.
   *
   * @private
   * @param {string} string The string to convert.
   * @returns {Array} Returns the converted array.
   */function unicodeToArray(e){return e.match(fr)||[]}
/**
   * Converts `string` to an array.
   *
   * @private
   * @param {string} string The string to convert.
   * @returns {Array} Returns the converted array.
   */function stringToArray(e){return hasUnicode(e)?unicodeToArray(e):asciiToArray(e)}
/**
   * Converts `value` to a string. An empty string is returned for `null`
   * and `undefined` values. The sign of `-0` is preserved.
   *
   * @static
   * @memberOf _
   * @since 4.0.0
   * @category Lang
   * @param {*} value The value to convert.
   * @returns {string} Returns the converted string.
   * @example
   *
   * _.toString(null);
   * // => ''
   *
   * _.toString(-0);
   * // => '-0'
   *
   * _.toString([1, 2, 3]);
   * // => '1,2,3'
   */function toString(e){return null==e?"":baseToString(e)}var pr=/^\s+|\s+$/g;
/**
   * Removes leading and trailing whitespace or specified characters from `string`.
   *
   * @static
   * @memberOf _
   * @since 3.0.0
   * @category String
   * @param {string} [string=''] The string to trim.
   * @param {string} [chars=whitespace] The characters to trim.
   * @param- {Object} [guard] Enables use as an iteratee for methods like `_.map`.
   * @returns {string} Returns the trimmed string.
   * @example
   *
   * _.trim('  abc  ');
   * // => 'abc'
   *
   * _.trim('-_-abc-_-', '_-');
   * // => 'abc'
   *
   * _.map(['  foo  ', '  bar  '], _.trim);
   * // => ['foo', 'bar']
   */function trim(e,r,t){e=toString(e);if(e&&(t||void 0===r))return e.replace(pr,"");if(!e||!(r=baseToString(r)))return e;var n=stringToArray(e),a=stringToArray(r),i=charsStartIndex(n,a),o=charsEndIndex(n,a)+1;return castSlice(n,i,o).join("")}var vr=/^(?:async\s+)?(function)?\s*[^\(]*\(\s*([^\)]*)\)/m;var yr=/,/;var hr=/(=.+)?(\s*)$/;var mr=/((\/\/.*$)|(\/\*[\s\S]*?\*\/))/gm;function parseParams(e){e=e.toString().replace(mr,"");e=e.match(vr)[2].replace(" ","");e=e?e.split(yr):[];e=e.map((function(e){return trim(e.replace(hr,""))}));return e}
/**
   * A dependency-injected version of the [async.auto]{@link module:ControlFlow.auto} function. Dependent
   * tasks are specified as parameters to the function, after the usual callback
   * parameter, with the parameter names matching the names of the tasks it
   * depends on. This can provide even more readable task graphs which can be
   * easier to maintain.
   *
   * If a final callback is specified, the task results are similarly injected,
   * specified as named parameters after the initial error parameter.
   *
   * The autoInject function is purely syntactic sugar and its semantics are
   * otherwise equivalent to [async.auto]{@link module:ControlFlow.auto}.
   *
   * @name autoInject
   * @static
   * @memberOf module:ControlFlow
   * @method
   * @see [async.auto]{@link module:ControlFlow.auto}
   * @category Control Flow
   * @param {Object} tasks - An object, each of whose properties is an {@link AsyncFunction} of
   * the form 'func([dependencies...], callback). The object's key of a property
   * serves as the name of the task defined by that property, i.e. can be used
   * when specifying requirements for other tasks.
   * * The `callback` parameter is a `callback(err, result)` which must be called
   *   when finished, passing an `error` (which can be `null`) and the result of
   *   the function's execution. The remaining parameters name other tasks on
   *   which the task is dependent, and the results from those tasks are the
   *   arguments of those parameters.
   * @param {Function} [callback] - An optional callback which is called when all
   * the tasks have been completed. It receives the `err` argument if any `tasks`
   * pass an error to their callback, and a `results` object with any completed
   * task results, similar to `auto`.
   * @example
   *
   * //  The example from `auto` can be rewritten as follows:
   * async.autoInject({
   *     get_data: function(callback) {
   *         // async code to get some data
   *         callback(null, 'data', 'converted to array');
   *     },
   *     make_folder: function(callback) {
   *         // async code to create a directory to store a file in
   *         // this is run at the same time as getting the data
   *         callback(null, 'folder');
   *     },
   *     write_file: function(get_data, make_folder, callback) {
   *         // once there is some data and the directory exists,
   *         // write the data to a file in the directory
   *         callback(null, 'filename');
   *     },
   *     email_link: function(write_file, callback) {
   *         // once the file is written let's email a link to it...
   *         // write_file contains the filename returned by write_file.
   *         callback(null, {'file':write_file, 'email':'user@example.com'});
   *     }
   * }, function(err, results) {
   *     console.log('err = ', err);
   *     console.log('email_link = ', results.email_link);
   * });
   *
   * // If you are using a JS minifier that mangles parameter names, `autoInject`
   * // will not work with plain functions, since the parameter names will be
   * // collapsed to a single letter identifier.  To work around this, you can
   * // explicitly specify the names of the parameters your task function needs
   * // in an array, similar to Angular.js dependency injection.
   *
   * // This still has an advantage over plain `auto`, since the results a task
   * // depends on are still spread into arguments.
   * async.autoInject({
   *     //...
   *     write_file: ['get_data', 'make_folder', function(get_data, make_folder, callback) {
   *         callback(null, 'filename');
   *     }],
   *     email_link: ['write_file', function(write_file, callback) {
   *         callback(null, {'file':write_file, 'email':'user@example.com'});
   *     }]
   *     //...
   * }, function(err, results) {
   *     console.log('err = ', err);
   *     console.log('email_link = ', results.email_link);
   * });
   */function autoInject(e,r){var t={};baseForOwn(e,(function(e,r){var n;var a=isAsync(e);var i=!a&&1===e.length||a&&0===e.length;if(B(e)){n=e.slice(0,-1);e=e[e.length-1];t[r]=n.concat(n.length>0?newTask:e)}else if(i)t[r]=e;else{n=parseParams(e);if(0===e.length&&!a&&0===n.length)throw new Error("autoInject task functions require explicit parameters.");a||n.pop();t[r]=n.concat(newTask)}function newTask(r,t){var a=arrayMap(n,(function(e){return r[e]}));a.push(t);wrapAsync(e).apply(null,a)}}));auto(t,r)}function DLL(){(this||r).head=(this||r).tail=null;(this||r).length=0}function setInitial(e,r){e.length=1;e.head=e.tail=r}DLL.prototype.removeLink=function(e){e.prev?e.prev.next=e.next:(this||r).head=e.next;e.next?e.next.prev=e.prev:(this||r).tail=e.prev;e.prev=e.next=null;(this||r).length-=1;return e};DLL.prototype.empty=function(){while((this||r).head)this.shift();return this||r};DLL.prototype.insertAfter=function(e,t){t.prev=e;t.next=e.next;e.next?e.next.prev=t:(this||r).tail=t;e.next=t;(this||r).length+=1};DLL.prototype.insertBefore=function(e,t){t.prev=e.prev;t.next=e;e.prev?e.prev.next=t:(this||r).head=t;e.prev=t;(this||r).length+=1};DLL.prototype.unshift=function(e){(this||r).head?this.insertBefore((this||r).head,e):setInitial(this||r,e)};DLL.prototype.push=function(e){(this||r).tail?this.insertAfter((this||r).tail,e):setInitial(this||r,e)};DLL.prototype.shift=function(){return(this||r).head&&this.removeLink((this||r).head)};DLL.prototype.pop=function(){return(this||r).tail&&this.removeLink((this||r).tail)};DLL.prototype.toArray=function(){var e=Array((this||r).length);var t=(this||r).head;for(var n=0;n<(this||r).length;n++){e[n]=t.data;t=t.next}return e};DLL.prototype.remove=function(e){var t=(this||r).head;while(!!t){var n=t.next;e(t)&&this.removeLink(t);t=n}return this||r};function queue(e,r,t){if(null==r)r=1;else if(0===r)throw new Error("Concurrency must not be zero");var n=wrapAsync(e);var a=0;var i=[];var o=false;function _insert(e,r,t){if(null!=t&&"function"!==typeof t)throw new Error("task callback must be a function");s.started=true;B(e)||(e=[e]);if(0===e.length&&s.idle())return c((function(){s.drain()}));for(var n=0,a=e.length;n<a;n++){var i={data:e[n],callback:t||noop};r?s._tasks.unshift(i):s._tasks.push(i)}if(!o){o=true;c((function(){o=false;s.process()}))}}function _next(e){return function(r){a-=1;for(var t=0,n=e.length;t<n;t++){var o=e[t];var c=baseIndexOf(i,o,0);0===c?i.shift():c>0&&i.splice(c,1);o.callback.apply(o,arguments);null!=r&&s.error(r,o.data)}a<=s.concurrency-s.buffer&&s.unsaturated();s.idle()&&s.drain();s.process()}}var u=false;var s={_tasks:new DLL,concurrency:r,payload:t,saturated:noop,unsaturated:noop,buffer:r/4,empty:noop,drain:noop,error:noop,started:false,paused:false,push:function(e,r){_insert(e,false,r)},kill:function(){s.drain=noop;s._tasks.empty()},unshift:function(e,r){_insert(e,true,r)},remove:function(e){s._tasks.remove(e)},process:function(){if(!u){u=true;while(!s.paused&&a<s.concurrency&&s._tasks.length){var e=[],r=[];var t=s._tasks.length;s.payload&&(t=Math.min(t,s.payload));for(var o=0;o<t;o++){var c=s._tasks.shift();e.push(c);i.push(c);r.push(c.data)}a+=1;0===s._tasks.length&&s.empty();a===s.concurrency&&s.saturated();var l=onlyOnce(_next(e));n(r,l)}u=false}},length:function(){return s._tasks.length},running:function(){return a},workersList:function(){return i},idle:function(){return s._tasks.length+a===0},pause:function(){s.paused=true},resume:function(){if(false!==s.paused){s.paused=false;c(s.process)}}};return s}
/**
   * A cargo of tasks for the worker function to complete. Cargo inherits all of
   * the same methods and event callbacks as [`queue`]{@link module:ControlFlow.queue}.
   * @typedef {Object} CargoObject
   * @memberOf module:ControlFlow
   * @property {Function} length - A function returning the number of items
   * waiting to be processed. Invoke like `cargo.length()`.
   * @property {number} payload - An `integer` for determining how many tasks
   * should be process per round. This property can be changed after a `cargo` is
   * created to alter the payload on-the-fly.
   * @property {Function} push - Adds `task` to the `queue`. The callback is
   * called once the `worker` has finished processing the task. Instead of a
   * single task, an array of `tasks` can be submitted. The respective callback is
   * used for every task in the list. Invoke like `cargo.push(task, [callback])`.
   * @property {Function} saturated - A callback that is called when the
   * `queue.length()` hits the concurrency and further tasks will be queued.
   * @property {Function} empty - A callback that is called when the last item
   * from the `queue` is given to a `worker`.
   * @property {Function} drain - A callback that is called when the last item
   * from the `queue` has returned from the `worker`.
   * @property {Function} idle - a function returning false if there are items
   * waiting or being processed, or true if not. Invoke like `cargo.idle()`.
   * @property {Function} pause - a function that pauses the processing of tasks
   * until `resume()` is called. Invoke like `cargo.pause()`.
   * @property {Function} resume - a function that resumes the processing of
   * queued tasks when the queue is paused. Invoke like `cargo.resume()`.
   * @property {Function} kill - a function that removes the `drain` callback and
   * empties remaining tasks from the queue forcing it to go idle. Invoke like `cargo.kill()`.
   */
/**
   * Creates a `cargo` object with the specified payload. Tasks added to the
   * cargo will be processed altogether (up to the `payload` limit). If the
   * `worker` is in progress, the task is queued until it becomes available. Once
   * the `worker` has completed some tasks, each callback of those tasks is
   * called. Check out [these](https://camo.githubusercontent.com/6bbd36f4cf5b35a0f11a96dcd2e97711ffc2fb37/68747470733a2f2f662e636c6f75642e6769746875622e636f6d2f6173736574732f313637363837312f36383130382f62626330636662302d356632392d313165322d393734662d3333393763363464633835382e676966) [animations](https://camo.githubusercontent.com/f4810e00e1c5f5f8addbe3e9f49064fd5d102699/68747470733a2f2f662e636c6f75642e6769746875622e636f6d2f6173736574732f313637363837312f36383130312f38346339323036362d356632392d313165322d383134662d3964336430323431336266642e676966)
   * for how `cargo` and `queue` work.
   *
   * While [`queue`]{@link module:ControlFlow.queue} passes only one task to one of a group of workers
   * at a time, cargo passes an array of tasks to a single worker, repeating
   * when the worker is finished.
   *
   * @name cargo
   * @static
   * @memberOf module:ControlFlow
   * @method
   * @see [async.queue]{@link module:ControlFlow.queue}
   * @category Control Flow
   * @param {AsyncFunction} worker - An asynchronous function for processing an array
   * of queued tasks. Invoked with `(tasks, callback)`.
   * @param {number} [payload=Infinity] - An optional `integer` for determining
   * how many tasks should be processed per round; if omitted, the default is
   * unlimited.
   * @returns {module:ControlFlow.CargoObject} A cargo object to manage the tasks. Callbacks can
   * attached as certain properties to listen for specific events during the
   * lifecycle of the cargo and inner queue.
   * @example
   *
   * // create a cargo object with payload 2
   * var cargo = async.cargo(function(tasks, callback) {
   *     for (var i=0; i<tasks.length; i++) {
   *         console.log('hello ' + tasks[i].name);
   *     }
   *     callback();
   * }, 2);
   *
   * // add some items
   * cargo.push({name: 'foo'}, function(err) {
   *     console.log('finished processing foo');
   * });
   * cargo.push({name: 'bar'}, function(err) {
   *     console.log('finished processing bar');
   * });
   * cargo.push({name: 'baz'}, function(err) {
   *     console.log('finished processing baz');
   * });
   */function cargo(e,r){return queue(e,1,r)}
/**
   * The same as [`eachOf`]{@link module:Collections.eachOf} but runs only a single async operation at a time.
   *
   * @name eachOfSeries
   * @static
   * @memberOf module:Collections
   * @method
   * @see [async.eachOf]{@link module:Collections.eachOf}
   * @alias forEachOfSeries
   * @category Collection
   * @param {Array|Iterable|Object} coll - A collection to iterate over.
   * @param {AsyncFunction} iteratee - An async function to apply to each item in
   * `coll`.
   * Invoked with (item, key, callback).
   * @param {Function} [callback] - A callback which is called when all `iteratee`
   * functions have finished, or an error occurs. Invoked with (err).
   */var dr=doLimit(eachOfLimit,1);
/**
   * Reduces `coll` into a single value using an async `iteratee` to return each
   * successive step. `memo` is the initial state of the reduction. This function
   * only operates in series.
   *
   * For performance reasons, it may make sense to split a call to this function
   * into a parallel map, and then use the normal `Array.prototype.reduce` on the
   * results. This function is for situations where each step in the reduction
   * needs to be async; if you can get the data before reducing it, then it's
   * probably a good idea to do so.
   *
   * @name reduce
   * @static
   * @memberOf module:Collections
   * @method
   * @alias inject
   * @alias foldl
   * @category Collection
   * @param {Array|Iterable|Object} coll - A collection to iterate over.
   * @param {*} memo - The initial state of the reduction.
   * @param {AsyncFunction} iteratee - A function applied to each item in the
   * array to produce the next step in the reduction.
   * The `iteratee` should complete with the next state of the reduction.
   * If the iteratee complete with an error, the reduction is stopped and the
   * main `callback` is immediately called with the error.
   * Invoked with (memo, item, callback).
   * @param {Function} [callback] - A callback which is called after all the
   * `iteratee` functions have finished. Result is the reduced value. Invoked with
   * (err, result).
   * @example
   *
   * async.reduce([1,2,3], 0, function(memo, item, callback) {
   *     // pointless async:
   *     process.nextTick(function() {
   *         callback(null, memo + item)
   *     });
   * }, function(err, result) {
   *     // result is now equal to the last value of memo, which is 6
   * });
   */function reduce(e,r,t,n){n=once(n||noop);var a=wrapAsync(t);dr(e,(function(e,t,n){a(r,e,(function(e,t){r=t;n(e)}))}),(function(e){n(e,r)}))}
/**
   * Version of the compose function that is more natural to read. Each function
   * consumes the return value of the previous function. It is the equivalent of
   * [compose]{@link module:ControlFlow.compose} with the arguments reversed.
   *
   * Each function is executed with the `this` binding of the composed function.
   *
   * @name seq
   * @static
   * @memberOf module:ControlFlow
   * @method
   * @see [async.compose]{@link module:ControlFlow.compose}
   * @category Control Flow
   * @param {...AsyncFunction} functions - the asynchronous functions to compose
   * @returns {Function} a function that composes the `functions` in order
   * @example
   *
   * // Requires lodash (or underscore), express3 and dresende's orm2.
   * // Part of an app, that fetches cats of the logged user.
   * // This example uses `seq` function to avoid overnesting and error
   * // handling clutter.
   * app.get('/cats', function(request, response) {
   *     var User = request.models.User;
   *     async.seq(
   *         _.bind(User.get, User),  // 'User.get' has signature (id, callback(err, data))
   *         function(user, fn) {
   *             user.getCats(fn);      // 'getCats' has signature (callback(err, data))
   *         }
   *     )(req.session.user_id, function (err, cats) {
   *         if (err) {
   *             console.error(err);
   *             response.json({ status: 'error', message: err.message });
   *         } else {
   *             response.json({ status: 'ok', message: 'Cats found', data: cats });
   *         }
   *     });
   * });
   */function seq(){var e=arrayMap(arguments,wrapAsync);return function(){var t=slice(arguments);var n=this||r;var a=t[t.length-1];"function"==typeof a?t.pop():a=noop;reduce(e,t,(function(e,r,t){r.apply(n,e.concat((function(e){var r=slice(arguments,1);t(e,r)})))}),(function(e,r){a.apply(n,[e].concat(r))}))}}
/**
   * Creates a function which is a composition of the passed asynchronous
   * functions. Each function consumes the return value of the function that
   * follows. Composing functions `f()`, `g()`, and `h()` would produce the result
   * of `f(g(h()))`, only this version uses callbacks to obtain the return values.
   *
   * Each function is executed with the `this` binding of the composed function.
   *
   * @name compose
   * @static
   * @memberOf module:ControlFlow
   * @method
   * @category Control Flow
   * @param {...AsyncFunction} functions - the asynchronous functions to compose
   * @returns {Function} an asynchronous function that is the composed
   * asynchronous `functions`
   * @example
   *
   * function add1(n, callback) {
   *     setTimeout(function () {
   *         callback(null, n + 1);
   *     }, 10);
   * }
   *
   * function mul3(n, callback) {
   *     setTimeout(function () {
   *         callback(null, n * 3);
   *     }, 10);
   * }
   *
   * var add1mul3 = async.compose(mul3, add1);
   * add1mul3(4, function (err, result) {
   *     // result now equals 15
   * });
   */var compose=function(){return seq.apply(null,slice(arguments).reverse())};var xr=Array.prototype.concat;
/**
   * The same as [`concat`]{@link module:Collections.concat} but runs a maximum of `limit` async operations at a time.
   *
   * @name concatLimit
   * @static
   * @memberOf module:Collections
   * @method
   * @see [async.concat]{@link module:Collections.concat}
   * @category Collection
   * @param {Array|Iterable|Object} coll - A collection to iterate over.
   * @param {number} limit - The maximum number of async operations at a time.
   * @param {AsyncFunction} iteratee - A function to apply to each item in `coll`,
   * which should use an array as its result. Invoked with (item, callback).
   * @param {Function} [callback] - A callback which is called after all the
   * `iteratee` functions have finished, or an error occurs. Results is an array
   * containing the concatenated results of the `iteratee` function. Invoked with
   * (err, results).
   */var concatLimit=function(e,r,t,n){n=n||noop;var a=wrapAsync(t);Ie(e,r,(function(e,r){a(e,(function(e){return e?r(e):r(null,slice(arguments,1))}))}),(function(e,r){var t=[];for(var a=0;a<r.length;a++)r[a]&&(t=xr.apply(t,r[a]));return n(e,t)}))};
/**
   * Applies `iteratee` to each item in `coll`, concatenating the results. Returns
   * the concatenated list. The `iteratee`s are called in parallel, and the
   * results are concatenated as they return. There is no guarantee that the
   * results array will be returned in the original order of `coll` passed to the
   * `iteratee` function.
   *
   * @name concat
   * @static
   * @memberOf module:Collections
   * @method
   * @category Collection
   * @param {Array|Iterable|Object} coll - A collection to iterate over.
   * @param {AsyncFunction} iteratee - A function to apply to each item in `coll`,
   * which should use an array as its result. Invoked with (item, callback).
   * @param {Function} [callback(err)] - A callback which is called after all the
   * `iteratee` functions have finished, or an error occurs. Results is an array
   * containing the concatenated results of the `iteratee` function. Invoked with
   * (err, results).
   * @example
   *
   * async.concat(['dir1','dir2','dir3'], fs.readdir, function(err, files) {
   *     // files is now a list of filenames that exist in the 3 directories
   * });
   */var br=doLimit(concatLimit,Infinity);
/**
   * The same as [`concat`]{@link module:Collections.concat} but runs only a single async operation at a time.
   *
   * @name concatSeries
   * @static
   * @memberOf module:Collections
   * @method
   * @see [async.concat]{@link module:Collections.concat}
   * @category Collection
   * @param {Array|Iterable|Object} coll - A collection to iterate over.
   * @param {AsyncFunction} iteratee - A function to apply to each item in `coll`.
   * The iteratee should complete with an array an array of results.
   * Invoked with (item, callback).
   * @param {Function} [callback(err)] - A callback which is called after all the
   * `iteratee` functions have finished, or an error occurs. Results is an array
   * containing the concatenated results of the `iteratee` function. Invoked with
   * (err, results).
   */var gr=doLimit(concatLimit,1);
/**
   * Returns a function that when called, calls-back with the values provided.
   * Useful as the first function in a [`waterfall`]{@link module:ControlFlow.waterfall}, or for plugging values in to
   * [`auto`]{@link module:ControlFlow.auto}.
   *
   * @name constant
   * @static
   * @memberOf module:Utils
   * @method
   * @category Util
   * @param {...*} arguments... - Any number of arguments to automatically invoke
   * callback with.
   * @returns {AsyncFunction} Returns a function that when invoked, automatically
   * invokes the callback with the previous given arguments.
   * @example
   *
   * async.waterfall([
   *     async.constant(42),
   *     function (value, next) {
   *         // value === 42
   *     },
   *     //...
   * ], callback);
   *
   * async.waterfall([
   *     async.constant(filename, "utf8"),
   *     fs.readFile,
   *     function (fileData, next) {
   *         //...
   *     }
   *     //...
   * ], callback);
   *
   * async.auto({
   *     hostname: async.constant("https://server.net/"),
   *     port: findFreePort,
   *     launchServer: ["hostname", "port", function (options, cb) {
   *         startServer(options, cb);
   *     }],
   *     //...
   * }, callback);
   */var constant=function(){var e=slice(arguments);var t=[null].concat(e);return function(){var e=arguments[arguments.length-1];return e.apply(this||r,t)}};
/**
   * This method returns the first argument it receives.
   *
   * @static
   * @since 0.1.0
   * @memberOf _
   * @category Util
   * @param {*} value Any value.
   * @returns {*} Returns `value`.
   * @example
   *
   * var object = { 'a': 1 };
   *
   * console.log(_.identity(object) === object);
   * // => true
   */function identity(e){return e}function _createTester(e,r){return function(t,n,a,i){i=i||noop;var o=false;var c;t(n,(function(t,n,i){a(t,(function(n,a){if(n)i(n);else if(e(a)&&!c){o=true;c=r(true,t);i(null,S)}else i()}))}),(function(e){e?i(e):i(null,o?c:r(false))}))}}function _findGetResult(e,r){return r}
/**
   * Returns the first value in `coll` that passes an async truth test. The
   * `iteratee` is applied in parallel, meaning the first iteratee to return
   * `true` will fire the detect `callback` with that result. That means the
   * result might not be the first item in the original `coll` (in terms of order)
   * that passes the test.
  
   * If order within the original `coll` is important, then look at
   * [`detectSeries`]{@link module:Collections.detectSeries}.
   *
   * @name detect
   * @static
   * @memberOf module:Collections
   * @method
   * @alias find
   * @category Collections
   * @param {Array|Iterable|Object} coll - A collection to iterate over.
   * @param {AsyncFunction} iteratee - A truth test to apply to each item in `coll`.
   * The iteratee must complete with a boolean value as its result.
   * Invoked with (item, callback).
   * @param {Function} [callback] - A callback which is called as soon as any
   * iteratee returns `true`, or after all the `iteratee` functions have finished.
   * Result will be the first item in the array that passes the truth test
   * (iteratee) or the value `undefined` if none passed. Invoked with
   * (err, result).
   * @example
   *
   * async.detect(['file1','file2','file3'], function(filePath, callback) {
   *     fs.access(filePath, function(err) {
   *         callback(null, !err)
   *     });
   * }, function(err, result) {
   *     // result now equals the first file in the list that exists
   * });
   */var Lr=doParallel(_createTester(identity,_findGetResult));
/**
   * The same as [`detect`]{@link module:Collections.detect} but runs a maximum of `limit` async operations at a
   * time.
   *
   * @name detectLimit
   * @static
   * @memberOf module:Collections
   * @method
   * @see [async.detect]{@link module:Collections.detect}
   * @alias findLimit
   * @category Collections
   * @param {Array|Iterable|Object} coll - A collection to iterate over.
   * @param {number} limit - The maximum number of async operations at a time.
   * @param {AsyncFunction} iteratee - A truth test to apply to each item in `coll`.
   * The iteratee must complete with a boolean value as its result.
   * Invoked with (item, callback).
   * @param {Function} [callback] - A callback which is called as soon as any
   * iteratee returns `true`, or after all the `iteratee` functions have finished.
   * Result will be the first item in the array that passes the truth test
   * (iteratee) or the value `undefined` if none passed. Invoked with
   * (err, result).
   */var wr=doParallelLimit(_createTester(identity,_findGetResult));
/**
   * The same as [`detect`]{@link module:Collections.detect} but runs only a single async operation at a time.
   *
   * @name detectSeries
   * @static
   * @memberOf module:Collections
   * @method
   * @see [async.detect]{@link module:Collections.detect}
   * @alias findSeries
   * @category Collections
   * @param {Array|Iterable|Object} coll - A collection to iterate over.
   * @param {AsyncFunction} iteratee - A truth test to apply to each item in `coll`.
   * The iteratee must complete with a boolean value as its result.
   * Invoked with (item, callback).
   * @param {Function} [callback] - A callback which is called as soon as any
   * iteratee returns `true`, or after all the `iteratee` functions have finished.
   * Result will be the first item in the array that passes the truth test
   * (iteratee) or the value `undefined` if none passed. Invoked with
   * (err, result).
   */var Ar=doLimit(wr,1);function consoleFunc(e){return function(r){var t=slice(arguments,1);t.push((function(r){var t=slice(arguments,1);"object"===typeof console&&(r?console.error&&console.error(r):console[e]&&arrayEach(t,(function(r){console[e](r)})))}));wrapAsync(r).apply(null,t)}}
/**
   * Logs the result of an [`async` function]{@link AsyncFunction} to the
   * `console` using `console.dir` to display the properties of the resulting object.
   * Only works in Node.js or in browsers that support `console.dir` and
   * `console.error` (such as FF and Chrome).
   * If multiple arguments are returned from the async function,
   * `console.dir` is called on each argument in order.
   *
   * @name dir
   * @static
   * @memberOf module:Utils
   * @method
   * @category Util
   * @param {AsyncFunction} function - The function you want to eventually apply
   * all arguments to.
   * @param {...*} arguments... - Any number of arguments to apply to the function.
   * @example
   *
   * // in a module
   * var hello = function(name, callback) {
   *     setTimeout(function() {
   *         callback(null, {hello: name});
   *     }, 1000);
   * };
   *
   * // in the node repl
   * node> async.dir(hello, 'world');
   * {hello: 'world'}
   */var kr=consoleFunc("dir");
/**
   * The post-check version of [`during`]{@link module:ControlFlow.during}. To reflect the difference in
   * the order of operations, the arguments `test` and `fn` are switched.
   *
   * Also a version of [`doWhilst`]{@link module:ControlFlow.doWhilst} with asynchronous `test` function.
   * @name doDuring
   * @static
   * @memberOf module:ControlFlow
   * @method
   * @see [async.during]{@link module:ControlFlow.during}
   * @category Control Flow
   * @param {AsyncFunction} fn - An async function which is called each time
   * `test` passes. Invoked with (callback).
   * @param {AsyncFunction} test - asynchronous truth test to perform before each
   * execution of `fn`. Invoked with (...args, callback), where `...args` are the
   * non-error args from the previous callback of `fn`.
   * @param {Function} [callback] - A callback which is called after the test
   * function has failed and repeated execution of `fn` has stopped. `callback`
   * will be passed an error if one occurred, otherwise `null`.
   */function doDuring(e,t,n){n=onlyOnce(n||noop);var a=wrapAsync(e);var i=wrapAsync(t);function next(e){if(e)return n(e);var t=slice(arguments,1);t.push(check);i.apply(this||r,t)}function check(e,r){if(e)return n(e);if(!r)return n(null);a(next)}check(null,true)}
/**
   * The post-check version of [`whilst`]{@link module:ControlFlow.whilst}. To reflect the difference in
   * the order of operations, the arguments `test` and `iteratee` are switched.
   *
   * `doWhilst` is to `whilst` as `do while` is to `while` in plain JavaScript.
   *
   * @name doWhilst
   * @static
   * @memberOf module:ControlFlow
   * @method
   * @see [async.whilst]{@link module:ControlFlow.whilst}
   * @category Control Flow
   * @param {AsyncFunction} iteratee - A function which is called each time `test`
   * passes. Invoked with (callback).
   * @param {Function} test - synchronous truth test to perform after each
   * execution of `iteratee`. Invoked with any non-error callback results of
   * `iteratee`.
   * @param {Function} [callback] - A callback which is called after the test
   * function has failed and repeated execution of `iteratee` has stopped.
   * `callback` will be passed an error and any arguments passed to the final
   * `iteratee`'s callback. Invoked with (err, [results]);
   */function doWhilst(e,t,n){n=onlyOnce(n||noop);var a=wrapAsync(e);var next=function(e){if(e)return n(e);var i=slice(arguments,1);if(t.apply(this||r,i))return a(next);n.apply(null,[null].concat(i))};a(next)}
/**
   * Like ['doWhilst']{@link module:ControlFlow.doWhilst}, except the `test` is inverted. Note the
   * argument ordering differs from `until`.
   *
   * @name doUntil
   * @static
   * @memberOf module:ControlFlow
   * @method
   * @see [async.doWhilst]{@link module:ControlFlow.doWhilst}
   * @category Control Flow
   * @param {AsyncFunction} iteratee - An async function which is called each time
   * `test` fails. Invoked with (callback).
   * @param {Function} test - synchronous truth test to perform after each
   * execution of `iteratee`. Invoked with any non-error callback results of
   * `iteratee`.
   * @param {Function} [callback] - A callback which is called after the test
   * function has passed and repeated execution of `iteratee` has stopped. `callback`
   * will be passed an error and any arguments passed to the final `iteratee`'s
   * callback. Invoked with (err, [results]);
   */function doUntil(e,t,n){doWhilst(e,(function(){return!t.apply(this||r,arguments)}),n)}
/**
   * Like [`whilst`]{@link module:ControlFlow.whilst}, except the `test` is an asynchronous function that
   * is passed a callback in the form of `function (err, truth)`. If error is
   * passed to `test` or `fn`, the main callback is immediately called with the
   * value of the error.
   *
   * @name during
   * @static
   * @memberOf module:ControlFlow
   * @method
   * @see [async.whilst]{@link module:ControlFlow.whilst}
   * @category Control Flow
   * @param {AsyncFunction} test - asynchronous truth test to perform before each
   * execution of `fn`. Invoked with (callback).
   * @param {AsyncFunction} fn - An async function which is called each time
   * `test` passes. Invoked with (callback).
   * @param {Function} [callback] - A callback which is called after the test
   * function has failed and repeated execution of `fn` has stopped. `callback`
   * will be passed an error, if one occurred, otherwise `null`.
   * @example
   *
   * var count = 0;
   *
   * async.during(
   *     function (callback) {
   *         return callback(null, count < 5);
   *     },
   *     function (callback) {
   *         count++;
   *         setTimeout(callback, 1000);
   *     },
   *     function (err) {
   *         // 5 seconds have passed
   *     }
   * );
   */function during(e,r,t){t=onlyOnce(t||noop);var n=wrapAsync(r);var a=wrapAsync(e);function next(e){if(e)return t(e);a(check)}function check(e,r){if(e)return t(e);if(!r)return t(null);n(next)}a(check)}function _withoutIndex(e){return function(r,t,n){return e(r,n)}}
/**
   * Applies the function `iteratee` to each item in `coll`, in parallel.
   * The `iteratee` is called with an item from the list, and a callback for when
   * it has finished. If the `iteratee` passes an error to its `callback`, the
   * main `callback` (for the `each` function) is immediately called with the
   * error.
   *
   * Note, that since this function applies `iteratee` to each item in parallel,
   * there is no guarantee that the iteratee functions will complete in order.
   *
   * @name each
   * @static
   * @memberOf module:Collections
   * @method
   * @alias forEach
   * @category Collection
   * @param {Array|Iterable|Object} coll - A collection to iterate over.
   * @param {AsyncFunction} iteratee - An async function to apply to
   * each item in `coll`. Invoked with (item, callback).
   * The array index is not passed to the iteratee.
   * If you need the index, use `eachOf`.
   * @param {Function} [callback] - A callback which is called when all
   * `iteratee` functions have finished, or an error occurs. Invoked with (err).
   * @example
   *
   * // assuming openFiles is an array of file names and saveFile is a function
   * // to save the modified contents of that file:
   *
   * async.each(openFiles, saveFile, function(err){
   *   // if any of the saves produced an error, err would equal that error
   * });
   *
   * // assuming openFiles is an array of file names
   * async.each(openFiles, function(file, callback) {
   *
   *     // Perform operation on file here.
   *     console.log('Processing file ' + file);
   *
   *     if( file.length > 32 ) {
   *       console.log('This file name is too long');
   *       callback('File name too long');
   *     } else {
   *       // Do work to process file here
   *       console.log('File processed');
   *       callback();
   *     }
   * }, function(err) {
   *     // if any of the file processing produced an error, err would equal that error
   *     if( err ) {
   *       // One of the iterations produced an error.
   *       // All processing will now stop.
   *       console.log('A file failed to process');
   *     } else {
   *       console.log('All files have been processed successfully');
   *     }
   * });
   */function eachLimit(e,r,t){eachOf(e,_withoutIndex(wrapAsync(r)),t)}
/**
   * The same as [`each`]{@link module:Collections.each} but runs a maximum of `limit` async operations at a time.
   *
   * @name eachLimit
   * @static
   * @memberOf module:Collections
   * @method
   * @see [async.each]{@link module:Collections.each}
   * @alias forEachLimit
   * @category Collection
   * @param {Array|Iterable|Object} coll - A collection to iterate over.
   * @param {number} limit - The maximum number of async operations at a time.
   * @param {AsyncFunction} iteratee - An async function to apply to each item in
   * `coll`.
   * The array index is not passed to the iteratee.
   * If you need the index, use `eachOfLimit`.
   * Invoked with (item, callback).
   * @param {Function} [callback] - A callback which is called when all
   * `iteratee` functions have finished, or an error occurs. Invoked with (err).
   */function eachLimit$1(e,r,t,n){_eachOfLimit(r)(e,_withoutIndex(wrapAsync(t)),n)}
/**
   * The same as [`each`]{@link module:Collections.each} but runs only a single async operation at a time.
   *
   * @name eachSeries
   * @static
   * @memberOf module:Collections
   * @method
   * @see [async.each]{@link module:Collections.each}
   * @alias forEachSeries
   * @category Collection
   * @param {Array|Iterable|Object} coll - A collection to iterate over.
   * @param {AsyncFunction} iteratee - An async function to apply to each
   * item in `coll`.
   * The array index is not passed to the iteratee.
   * If you need the index, use `eachOfSeries`.
   * Invoked with (item, callback).
   * @param {Function} [callback] - A callback which is called when all
   * `iteratee` functions have finished, or an error occurs. Invoked with (err).
   */var jr=doLimit(eachLimit$1,1);
/**
   * Wrap an async function and ensure it calls its callback on a later tick of
   * the event loop.  If the function already calls its callback on a next tick,
   * no extra deferral is added. This is useful for preventing stack overflows
   * (`RangeError: Maximum call stack size exceeded`) and generally keeping
   * [Zalgo](http://blog.izs.me/post/59142742143/designing-apis-for-asynchrony)
   * contained. ES2017 `async` functions are returned as-is -- they are immune
   * to Zalgo's corrupting influences, as they always resolve on a later tick.
   *
   * @name ensureAsync
   * @static
   * @memberOf module:Utils
   * @method
   * @category Util
   * @param {AsyncFunction} fn - an async function, one that expects a node-style
   * callback as its last argument.
   * @returns {AsyncFunction} Returns a wrapped function with the exact same call
   * signature as the function passed in.
   * @example
   *
   * function sometimesAsync(arg, callback) {
   *     if (cache[arg]) {
   *         return callback(null, cache[arg]); // this would be synchronous!!
   *     } else {
   *         doSomeIO(arg, callback); // this IO would be asynchronous
   *     }
   * }
   *
   * // this has a risk of stack overflows if many results are cached in a row
   * async.mapSeries(args, sometimesAsync, done);
   *
   * // this will defer sometimesAsync's callback if necessary,
   * // preventing stack overflows
   * async.mapSeries(args, async.ensureAsync(sometimesAsync), done);
   */function ensureAsync(e){return isAsync(e)?e:initialParams((function(t,n){var a=true;t.push((function(){var e=arguments;a?c((function(){n.apply(null,e)})):n.apply(null,e)}));e.apply(this||r,t);a=false}))}function notId(e){return!e}
/**
   * Returns `true` if every element in `coll` satisfies an async test. If any
   * iteratee call returns `false`, the main `callback` is immediately called.
   *
   * @name every
   * @static
   * @memberOf module:Collections
   * @method
   * @alias all
   * @category Collection
   * @param {Array|Iterable|Object} coll - A collection to iterate over.
   * @param {AsyncFunction} iteratee - An async truth test to apply to each item
   * in the collection in parallel.
   * The iteratee must complete with a boolean result value.
   * Invoked with (item, callback).
   * @param {Function} [callback] - A callback which is called after all the
   * `iteratee` functions have finished. Result will be either `true` or `false`
   * depending on the values of the async tests. Invoked with (err, result).
   * @example
   *
   * async.every(['file1','file2','file3'], function(filePath, callback) {
   *     fs.access(filePath, function(err) {
   *         callback(null, !err)
   *     });
   * }, function(err, result) {
   *     // if result is true then every file exists
   * });
   */var Or=doParallel(_createTester(notId,notId));
/**
   * The same as [`every`]{@link module:Collections.every} but runs a maximum of `limit` async operations at a time.
   *
   * @name everyLimit
   * @static
   * @memberOf module:Collections
   * @method
   * @see [async.every]{@link module:Collections.every}
   * @alias allLimit
   * @category Collection
   * @param {Array|Iterable|Object} coll - A collection to iterate over.
   * @param {number} limit - The maximum number of async operations at a time.
   * @param {AsyncFunction} iteratee - An async truth test to apply to each item
   * in the collection in parallel.
   * The iteratee must complete with a boolean result value.
   * Invoked with (item, callback).
   * @param {Function} [callback] - A callback which is called after all the
   * `iteratee` functions have finished. Result will be either `true` or `false`
   * depending on the values of the async tests. Invoked with (err, result).
   */var Sr=doParallelLimit(_createTester(notId,notId));
/**
   * The same as [`every`]{@link module:Collections.every} but runs only a single async operation at a time.
   *
   * @name everySeries
   * @static
   * @memberOf module:Collections
   * @method
   * @see [async.every]{@link module:Collections.every}
   * @alias allSeries
   * @category Collection
   * @param {Array|Iterable|Object} coll - A collection to iterate over.
   * @param {AsyncFunction} iteratee - An async truth test to apply to each item
   * in the collection in series.
   * The iteratee must complete with a boolean result value.
   * Invoked with (item, callback).
   * @param {Function} [callback] - A callback which is called after all the
   * `iteratee` functions have finished. Result will be either `true` or `false`
   * depending on the values of the async tests. Invoked with (err, result).
   */var Tr=doLimit(Sr,1);
/**
   * The base implementation of `_.property` without support for deep paths.
   *
   * @private
   * @param {string} key The key of the property to get.
   * @returns {Function} Returns the new accessor function.
   */function baseProperty(e){return function(r){return null==r?void 0:r[e]}}function filterArray(e,r,t,n){var a=new Array(r.length);e(r,(function(e,r,n){t(e,(function(e,t){a[r]=!!t;n(e)}))}),(function(e){if(e)return n(e);var t=[];for(var i=0;i<r.length;i++)a[i]&&t.push(r[i]);n(null,t)}))}function filterGeneric(e,r,t,n){var a=[];e(r,(function(e,r,n){t(e,(function(t,i){if(t)n(t);else{i&&a.push({index:r,value:e});n()}}))}),(function(e){e?n(e):n(null,arrayMap(a.sort((function(e,r){return e.index-r.index})),baseProperty("value")))}))}function _filter(e,r,t,n){var a=isArrayLike(r)?filterArray:filterGeneric;a(e,r,wrapAsync(t),n||noop)}
/**
   * Returns a new array of all the values in `coll` which pass an async truth
   * test. This operation is performed in parallel, but the results array will be
   * in the same order as the original.
   *
   * @name filter
   * @static
   * @memberOf module:Collections
   * @method
   * @alias select
   * @category Collection
   * @param {Array|Iterable|Object} coll - A collection to iterate over.
   * @param {Function} iteratee - A truth test to apply to each item in `coll`.
   * The `iteratee` is passed a `callback(err, truthValue)`, which must be called
   * with a boolean argument once it has completed. Invoked with (item, callback).
   * @param {Function} [callback] - A callback which is called after all the
   * `iteratee` functions have finished. Invoked with (err, results).
   * @example
   *
   * async.filter(['file1','file2','file3'], function(filePath, callback) {
   *     fs.access(filePath, function(err) {
   *         callback(null, !err)
   *     });
   * }, function(err, results) {
   *     // results now equals an array of the existing files
   * });
   */var Er=doParallel(_filter);
/**
   * The same as [`filter`]{@link module:Collections.filter} but runs a maximum of `limit` async operations at a
   * time.
   *
   * @name filterLimit
   * @static
   * @memberOf module:Collections
   * @method
   * @see [async.filter]{@link module:Collections.filter}
   * @alias selectLimit
   * @category Collection
   * @param {Array|Iterable|Object} coll - A collection to iterate over.
   * @param {number} limit - The maximum number of async operations at a time.
   * @param {Function} iteratee - A truth test to apply to each item in `coll`.
   * The `iteratee` is passed a `callback(err, truthValue)`, which must be called
   * with a boolean argument once it has completed. Invoked with (item, callback).
   * @param {Function} [callback] - A callback which is called after all the
   * `iteratee` functions have finished. Invoked with (err, results).
   */var Ir=doParallelLimit(_filter);
/**
   * The same as [`filter`]{@link module:Collections.filter} but runs only a single async operation at a time.
   *
   * @name filterSeries
   * @static
   * @memberOf module:Collections
   * @method
   * @see [async.filter]{@link module:Collections.filter}
   * @alias selectSeries
   * @category Collection
   * @param {Array|Iterable|Object} coll - A collection to iterate over.
   * @param {Function} iteratee - A truth test to apply to each item in `coll`.
   * The `iteratee` is passed a `callback(err, truthValue)`, which must be called
   * with a boolean argument once it has completed. Invoked with (item, callback).
   * @param {Function} [callback] - A callback which is called after all the
   * `iteratee` functions have finished. Invoked with (err, results)
   */var _r=doLimit(Ir,1);
/**
   * Calls the asynchronous function `fn` with a callback parameter that allows it
   * to call itself again, in series, indefinitely.
  
   * If an error is passed to the callback then `errback` is called with the
   * error, and execution stops, otherwise it will never be called.
   *
   * @name forever
   * @static
   * @memberOf module:ControlFlow
   * @method
   * @category Control Flow
   * @param {AsyncFunction} fn - an async function to call repeatedly.
   * Invoked with (next).
   * @param {Function} [errback] - when `fn` passes an error to it's callback,
   * this function will be called, and execution stops. Invoked with (err).
   * @example
   *
   * async.forever(
   *     function(next) {
   *         // next is suitable for passing to things that need a callback(err [, whatever]);
   *         // it will result in this function being called again.
   *     },
   *     function(err) {
   *         // if next is called with a value in its first parameter, it will appear
   *         // in here as 'err', and execution will stop.
   *     }
   * );
   */function forever(e,r){var t=onlyOnce(r||noop);var n=wrapAsync(ensureAsync(e));function next(e){if(e)return t(e);n(next)}next()}
/**
   * The same as [`groupBy`]{@link module:Collections.groupBy} but runs a maximum of `limit` async operations at a time.
   *
   * @name groupByLimit
   * @static
   * @memberOf module:Collections
   * @method
   * @see [async.groupBy]{@link module:Collections.groupBy}
   * @category Collection
   * @param {Array|Iterable|Object} coll - A collection to iterate over.
   * @param {number} limit - The maximum number of async operations at a time.
   * @param {AsyncFunction} iteratee - An async function to apply to each item in
   * `coll`.
   * The iteratee should complete with a `key` to group the value under.
   * Invoked with (value, callback).
   * @param {Function} [callback] - A callback which is called when all `iteratee`
   * functions have finished, or an error occurs. Result is an `Object` whoses
   * properties are arrays of values which returned the corresponding key.
   */var groupByLimit=function(e,r,t,n){n=n||noop;var a=wrapAsync(t);Ie(e,r,(function(e,r){a(e,(function(t,n){return t?r(t):r(null,{key:n,val:e})}))}),(function(e,r){var t={};var a=Object.prototype.hasOwnProperty;for(var i=0;i<r.length;i++)if(r[i]){var o=r[i].key;var c=r[i].val;a.call(t,o)?t[o].push(c):t[o]=[c]}return n(e,t)}))};
/**
   * Returns a new object, where each value corresponds to an array of items, from
   * `coll`, that returned the corresponding key. That is, the keys of the object
   * correspond to the values passed to the `iteratee` callback.
   *
   * Note: Since this function applies the `iteratee` to each item in parallel,
   * there is no guarantee that the `iteratee` functions will complete in order.
   * However, the values for each key in the `result` will be in the same order as
   * the original `coll`. For Objects, the values will roughly be in the order of
   * the original Objects' keys (but this can vary across JavaScript engines).
   *
   * @name groupBy
   * @static
   * @memberOf module:Collections
   * @method
   * @category Collection
   * @param {Array|Iterable|Object} coll - A collection to iterate over.
   * @param {AsyncFunction} iteratee - An async function to apply to each item in
   * `coll`.
   * The iteratee should complete with a `key` to group the value under.
   * Invoked with (value, callback).
   * @param {Function} [callback] - A callback which is called when all `iteratee`
   * functions have finished, or an error occurs. Result is an `Object` whoses
   * properties are arrays of values which returned the corresponding key.
   * @example
   *
   * async.groupBy(['userId1', 'userId2', 'userId3'], function(userId, callback) {
   *     db.findById(userId, function(err, user) {
   *         if (err) return callback(err);
   *         return callback(null, user.age);
   *     });
   * }, function(err, result) {
   *     // result is object containing the userIds grouped by age
   *     // e.g. { 30: ['userId1', 'userId3'], 42: ['userId2']};
   * });
   */var Fr=doLimit(groupByLimit,Infinity);
/**
   * The same as [`groupBy`]{@link module:Collections.groupBy} but runs only a single async operation at a time.
   *
   * @name groupBySeries
   * @static
   * @memberOf module:Collections
   * @method
   * @see [async.groupBy]{@link module:Collections.groupBy}
   * @category Collection
   * @param {Array|Iterable|Object} coll - A collection to iterate over.
   * @param {number} limit - The maximum number of async operations at a time.
   * @param {AsyncFunction} iteratee - An async function to apply to each item in
   * `coll`.
   * The iteratee should complete with a `key` to group the value under.
   * Invoked with (value, callback).
   * @param {Function} [callback] - A callback which is called when all `iteratee`
   * functions have finished, or an error occurs. Result is an `Object` whoses
   * properties are arrays of values which returned the corresponding key.
   */var Pr=doLimit(groupByLimit,1);
/**
   * Logs the result of an `async` function to the `console`. Only works in
   * Node.js or in browsers that support `console.log` and `console.error` (such
   * as FF and Chrome). If multiple arguments are returned from the async
   * function, `console.log` is called on each argument in order.
   *
   * @name log
   * @static
   * @memberOf module:Utils
   * @method
   * @category Util
   * @param {AsyncFunction} function - The function you want to eventually apply
   * all arguments to.
   * @param {...*} arguments... - Any number of arguments to apply to the function.
   * @example
   *
   * // in a module
   * var hello = function(name, callback) {
   *     setTimeout(function() {
   *         callback(null, 'hello ' + name);
   *     }, 1000);
   * };
   *
   * // in the node repl
   * node> async.log(hello, 'world');
   * 'hello world'
   */var Br=consoleFunc("log");
/**
   * The same as [`mapValues`]{@link module:Collections.mapValues} but runs a maximum of `limit` async operations at a
   * time.
   *
   * @name mapValuesLimit
   * @static
   * @memberOf module:Collections
   * @method
   * @see [async.mapValues]{@link module:Collections.mapValues}
   * @category Collection
   * @param {Object} obj - A collection to iterate over.
   * @param {number} limit - The maximum number of async operations at a time.
   * @param {AsyncFunction} iteratee - A function to apply to each value and key
   * in `coll`.
   * The iteratee should complete with the transformed value as its result.
   * Invoked with (value, key, callback).
   * @param {Function} [callback] - A callback which is called when all `iteratee`
   * functions have finished, or an error occurs. `result` is a new object consisting
   * of each key from `obj`, with each transformed value on the right-hand side.
   * Invoked with (err, result).
   */function mapValuesLimit(e,r,t,n){n=once(n||noop);var a={};var i=wrapAsync(t);eachOfLimit(e,r,(function(e,r,t){i(e,r,(function(e,n){if(e)return t(e);a[r]=n;t()}))}),(function(e){n(e,a)}))}
/**
   * A relative of [`map`]{@link module:Collections.map}, designed for use with objects.
   *
   * Produces a new Object by mapping each value of `obj` through the `iteratee`
   * function. The `iteratee` is called each `value` and `key` from `obj` and a
   * callback for when it has finished processing. Each of these callbacks takes
   * two arguments: an `error`, and the transformed item from `obj`. If `iteratee`
   * passes an error to its callback, the main `callback` (for the `mapValues`
   * function) is immediately called with the error.
   *
   * Note, the order of the keys in the result is not guaranteed.  The keys will
   * be roughly in the order they complete, (but this is very engine-specific)
   *
   * @name mapValues
   * @static
   * @memberOf module:Collections
   * @method
   * @category Collection
   * @param {Object} obj - A collection to iterate over.
   * @param {AsyncFunction} iteratee - A function to apply to each value and key
   * in `coll`.
   * The iteratee should complete with the transformed value as its result.
   * Invoked with (value, key, callback).
   * @param {Function} [callback] - A callback which is called when all `iteratee`
   * functions have finished, or an error occurs. `result` is a new object consisting
   * of each key from `obj`, with each transformed value on the right-hand side.
   * Invoked with (err, result).
   * @example
   *
   * async.mapValues({
   *     f1: 'file1',
   *     f2: 'file2',
   *     f3: 'file3'
   * }, function (file, key, callback) {
   *   fs.stat(file, callback);
   * }, function(err, result) {
   *     // result is now a map of stats for each file, e.g.
   *     // {
   *     //     f1: [stats for file1],
   *     //     f2: [stats for file2],
   *     //     f3: [stats for file3]
   *     // }
   * });
   */var Dr=doLimit(mapValuesLimit,Infinity);
/**
   * The same as [`mapValues`]{@link module:Collections.mapValues} but runs only a single async operation at a time.
   *
   * @name mapValuesSeries
   * @static
   * @memberOf module:Collections
   * @method
   * @see [async.mapValues]{@link module:Collections.mapValues}
   * @category Collection
   * @param {Object} obj - A collection to iterate over.
   * @param {AsyncFunction} iteratee - A function to apply to each value and key
   * in `coll`.
   * The iteratee should complete with the transformed value as its result.
   * Invoked with (value, key, callback).
   * @param {Function} [callback] - A callback which is called when all `iteratee`
   * functions have finished, or an error occurs. `result` is a new object consisting
   * of each key from `obj`, with each transformed value on the right-hand side.
   * Invoked with (err, result).
   */var $r=doLimit(mapValuesLimit,1);function has(e,r){return r in e}
/**
   * Caches the results of an async function. When creating a hash to store
   * function results against, the callback is omitted from the hash and an
   * optional hash function can be used.
   *
   * If no hash function is specified, the first argument is used as a hash key,
   * which may work reasonably if it is a string or a data type that converts to a
   * distinct string. Note that objects and arrays will not behave reasonably.
   * Neither will cases where the other arguments are significant. In such cases,
   * specify your own hash function.
   *
   * The cache of results is exposed as the `memo` property of the function
   * returned by `memoize`.
   *
   * @name memoize
   * @static
   * @memberOf module:Utils
   * @method
   * @category Util
   * @param {AsyncFunction} fn - The async function to proxy and cache results from.
   * @param {Function} hasher - An optional function for generating a custom hash
   * for storing results. It has all the arguments applied to it apart from the
   * callback, and must be synchronous.
   * @returns {AsyncFunction} a memoized version of `fn`
   * @example
   *
   * var slow_fn = function(name, callback) {
   *     // do something
   *     callback(null, result);
   * };
   * var fn = async.memoize(slow_fn);
   *
   * // fn can now be used as if it were slow_fn
   * fn('some name', function() {
   *     // callback
   * });
   */function memoize(e,r){var t=Object.create(null);var n=Object.create(null);r=r||identity;var a=wrapAsync(e);var i=initialParams((function memoized(e,i){var o=r.apply(null,e);if(has(t,o))c((function(){i.apply(null,t[o])}));else if(has(n,o))n[o].push(i);else{n[o]=[i];a.apply(null,e.concat((function(){var e=slice(arguments);t[o]=e;var r=n[o];delete n[o];for(var a=0,i=r.length;a<i;a++)r[a].apply(null,e)})))}}));i.memo=t;i.unmemoized=e;return i}
/**
   * Calls `callback` on a later loop around the event loop. In Node.js this just
   * calls `process.nextTick`.  In the browser it will use `setImmediate` if
   * available, otherwise `setTimeout(callback, 0)`, which means other higher
   * priority events may precede the execution of `callback`.
   *
   * This is used internally for browser-compatibility purposes.
   *
   * @name nextTick
   * @static
   * @memberOf module:Utils
   * @method
   * @see [async.setImmediate]{@link module:Utils.setImmediate}
   * @category Util
   * @param {Function} callback - The function to call on a later loop around
   * the event loop. Invoked with (args...).
   * @param {...*} args... - any number of additional arguments to pass to the
   * callback on the next tick.
   * @example
   *
   * var call_order = [];
   * async.nextTick(function() {
   *     call_order.push('two');
   *     // call_order now equals ['one','two']
   * });
   * call_order.push('one');
   *
   * async.setImmediate(function (a, b, c) {
   *     // a, b, and c equal 1, 2, and 3
   * }, 1, 2, 3);
   */var qr;qr=i||t?a.nextTick:fallback;var Mr=wrap(qr);function _parallel(e,r,t){t=t||noop;var n=isArrayLike(r)?[]:{};e(r,(function(e,r,t){wrapAsync(e)((function(e,a){arguments.length>2&&(a=slice(arguments,1));n[r]=a;t(e)}))}),(function(e){t(e,n)}))}
/**
   * Run the `tasks` collection of functions in parallel, without waiting until
   * the previous function has completed. If any of the functions pass an error to
   * its callback, the main `callback` is immediately called with the value of the
   * error. Once the `tasks` have completed, the results are passed to the final
   * `callback` as an array.
   *
   * **Note:** `parallel` is about kicking-off I/O tasks in parallel, not about
   * parallel execution of code.  If your tasks do not use any timers or perform
   * any I/O, they will actually be executed in series.  Any synchronous setup
   * sections for each task will happen one after the other.  JavaScript remains
   * single-threaded.
   *
   * **Hint:** Use [`reflect`]{@link module:Utils.reflect} to continue the
   * execution of other tasks when a task fails.
   *
   * It is also possible to use an object instead of an array. Each property will
   * be run as a function and the results will be passed to the final `callback`
   * as an object instead of an array. This can be a more readable way of handling
   * results from {@link async.parallel}.
   *
   * @name parallel
   * @static
   * @memberOf module:ControlFlow
   * @method
   * @category Control Flow
   * @param {Array|Iterable|Object} tasks - A collection of
   * [async functions]{@link AsyncFunction} to run.
   * Each async function can complete with any number of optional `result` values.
   * @param {Function} [callback] - An optional callback to run once all the
   * functions have completed successfully. This function gets a results array
   * (or object) containing all the result arguments passed to the task callbacks.
   * Invoked with (err, results).
   *
   * @example
   * async.parallel([
   *     function(callback) {
   *         setTimeout(function() {
   *             callback(null, 'one');
   *         }, 200);
   *     },
   *     function(callback) {
   *         setTimeout(function() {
   *             callback(null, 'two');
   *         }, 100);
   *     }
   * ],
   * // optional callback
   * function(err, results) {
   *     // the results array will equal ['one','two'] even though
   *     // the second function had a shorter timeout.
   * });
   *
   * // an example using an object instead of an array
   * async.parallel({
   *     one: function(callback) {
   *         setTimeout(function() {
   *             callback(null, 1);
   *         }, 200);
   *     },
   *     two: function(callback) {
   *         setTimeout(function() {
   *             callback(null, 2);
   *         }, 100);
   *     }
   * }, function(err, results) {
   *     // results is now equals to: {one: 1, two: 2}
   * });
   */function parallelLimit(e,r){_parallel(eachOf,e,r)}
/**
   * The same as [`parallel`]{@link module:ControlFlow.parallel} but runs a maximum of `limit` async operations at a
   * time.
   *
   * @name parallelLimit
   * @static
   * @memberOf module:ControlFlow
   * @method
   * @see [async.parallel]{@link module:ControlFlow.parallel}
   * @category Control Flow
   * @param {Array|Iterable|Object} tasks - A collection of
   * [async functions]{@link AsyncFunction} to run.
   * Each async function can complete with any number of optional `result` values.
   * @param {number} limit - The maximum number of async operations at a time.
   * @param {Function} [callback] - An optional callback to run once all the
   * functions have completed successfully. This function gets a results array
   * (or object) containing all the result arguments passed to the task callbacks.
   * Invoked with (err, results).
   */function parallelLimit$1(e,r,t){_parallel(_eachOfLimit(r),e,t)}
/**
   * A queue of tasks for the worker function to complete.
   * @typedef {Object} QueueObject
   * @memberOf module:ControlFlow
   * @property {Function} length - a function returning the number of items
   * waiting to be processed. Invoke with `queue.length()`.
   * @property {boolean} started - a boolean indicating whether or not any
   * items have been pushed and processed by the queue.
   * @property {Function} running - a function returning the number of items
   * currently being processed. Invoke with `queue.running()`.
   * @property {Function} workersList - a function returning the array of items
   * currently being processed. Invoke with `queue.workersList()`.
   * @property {Function} idle - a function returning false if there are items
   * waiting or being processed, or true if not. Invoke with `queue.idle()`.
   * @property {number} concurrency - an integer for determining how many `worker`
   * functions should be run in parallel. This property can be changed after a
   * `queue` is created to alter the concurrency on-the-fly.
   * @property {Function} push - add a new task to the `queue`. Calls `callback`
   * once the `worker` has finished processing the task. Instead of a single task,
   * a `tasks` array can be submitted. The respective callback is used for every
   * task in the list. Invoke with `queue.push(task, [callback])`,
   * @property {Function} unshift - add a new task to the front of the `queue`.
   * Invoke with `queue.unshift(task, [callback])`.
   * @property {Function} remove - remove items from the queue that match a test
   * function.  The test function will be passed an object with a `data` property,
   * and a `priority` property, if this is a
   * [priorityQueue]{@link module:ControlFlow.priorityQueue} object.
   * Invoked with `queue.remove(testFn)`, where `testFn` is of the form
   * `function ({data, priority}) {}` and returns a Boolean.
   * @property {Function} saturated - a callback that is called when the number of
   * running workers hits the `concurrency` limit, and further tasks will be
   * queued.
   * @property {Function} unsaturated - a callback that is called when the number
   * of running workers is less than the `concurrency` & `buffer` limits, and
   * further tasks will not be queued.
   * @property {number} buffer - A minimum threshold buffer in order to say that
   * the `queue` is `unsaturated`.
   * @property {Function} empty - a callback that is called when the last item
   * from the `queue` is given to a `worker`.
   * @property {Function} drain - a callback that is called when the last item
   * from the `queue` has returned from the `worker`.
   * @property {Function} error - a callback that is called when a task errors.
   * Has the signature `function(error, task)`.
   * @property {boolean} paused - a boolean for determining whether the queue is
   * in a paused state.
   * @property {Function} pause - a function that pauses the processing of tasks
   * until `resume()` is called. Invoke with `queue.pause()`.
   * @property {Function} resume - a function that resumes the processing of
   * queued tasks when the queue is paused. Invoke with `queue.resume()`.
   * @property {Function} kill - a function that removes the `drain` callback and
   * empties remaining tasks from the queue forcing it to go idle. No more tasks
   * should be pushed to the queue after calling this function. Invoke with `queue.kill()`.
   */
/**
   * Creates a `queue` object with the specified `concurrency`. Tasks added to the
   * `queue` are processed in parallel (up to the `concurrency` limit). If all
   * `worker`s are in progress, the task is queued until one becomes available.
   * Once a `worker` completes a `task`, that `task`'s callback is called.
   *
   * @name queue
   * @static
   * @memberOf module:ControlFlow
   * @method
   * @category Control Flow
   * @param {AsyncFunction} worker - An async function for processing a queued task.
   * If you want to handle errors from an individual task, pass a callback to
   * `q.push()`. Invoked with (task, callback).
   * @param {number} [concurrency=1] - An `integer` for determining how many
   * `worker` functions should be run in parallel.  If omitted, the concurrency
   * defaults to `1`.  If the concurrency is `0`, an error is thrown.
   * @returns {module:ControlFlow.QueueObject} A queue object to manage the tasks. Callbacks can
   * attached as certain properties to listen for specific events during the
   * lifecycle of the queue.
   * @example
   *
   * // create a queue object with concurrency 2
   * var q = async.queue(function(task, callback) {
   *     console.log('hello ' + task.name);
   *     callback();
   * }, 2);
   *
   * // assign a callback
   * q.drain = function() {
   *     console.log('all items have been processed');
   * };
   *
   * // add some items to the queue
   * q.push({name: 'foo'}, function(err) {
   *     console.log('finished processing foo');
   * });
   * q.push({name: 'bar'}, function (err) {
   *     console.log('finished processing bar');
   * });
   *
   * // add some items to the queue (batch-wise)
   * q.push([{name: 'baz'},{name: 'bay'},{name: 'bax'}], function(err) {
   *     console.log('finished processing item');
   * });
   *
   * // add some items to the front of the queue
   * q.unshift({name: 'bar'}, function (err) {
   *     console.log('finished processing bar');
   * });
   */var queue$1=function(e,r){var t=wrapAsync(e);return queue((function(e,r){t(e[0],r)}),r,1)};
/**
   * The same as [async.queue]{@link module:ControlFlow.queue} only tasks are assigned a priority and
   * completed in ascending priority order.
   *
   * @name priorityQueue
   * @static
   * @memberOf module:ControlFlow
   * @method
   * @see [async.queue]{@link module:ControlFlow.queue}
   * @category Control Flow
   * @param {AsyncFunction} worker - An async function for processing a queued task.
   * If you want to handle errors from an individual task, pass a callback to
   * `q.push()`.
   * Invoked with (task, callback).
   * @param {number} concurrency - An `integer` for determining how many `worker`
   * functions should be run in parallel.  If omitted, the concurrency defaults to
   * `1`.  If the concurrency is `0`, an error is thrown.
   * @returns {module:ControlFlow.QueueObject} A priorityQueue object to manage the tasks. There are two
   * differences between `queue` and `priorityQueue` objects:
   * * `push(task, priority, [callback])` - `priority` should be a number. If an
   *   array of `tasks` is given, all tasks will be assigned the same priority.
   * * The `unshift` method was removed.
   */var priorityQueue=function(e,r){var t=queue$1(e,r);t.push=function(e,r,n){null==n&&(n=noop);if("function"!==typeof n)throw new Error("task callback must be a function");t.started=true;B(e)||(e=[e]);if(0===e.length)return c((function(){t.drain()}));r=r||0;var a=t._tasks.head;while(a&&r>=a.priority)a=a.next;for(var i=0,o=e.length;i<o;i++){var u={data:e[i],priority:r,callback:n};a?t._tasks.insertBefore(a,u):t._tasks.push(u)}c(t.process)};delete t.unshift;return t};
/**
   * Runs the `tasks` array of functions in parallel, without waiting until the
   * previous function has completed. Once any of the `tasks` complete or pass an
   * error to its callback, the main `callback` is immediately called. It's
   * equivalent to `Promise.race()`.
   *
   * @name race
   * @static
   * @memberOf module:ControlFlow
   * @method
   * @category Control Flow
   * @param {Array} tasks - An array containing [async functions]{@link AsyncFunction}
   * to run. Each function can complete with an optional `result` value.
   * @param {Function} callback - A callback to run once any of the functions have
   * completed. This function gets an error or result from the first function that
   * completed. Invoked with (err, result).
   * @returns undefined
   * @example
   *
   * async.race([
   *     function(callback) {
   *         setTimeout(function() {
   *             callback(null, 'one');
   *         }, 200);
   *     },
   *     function(callback) {
   *         setTimeout(function() {
   *             callback(null, 'two');
   *         }, 100);
   *     }
   * ],
   * // main callback
   * function(err, result) {
   *     // the result will be equal to 'two' as it finishes earlier
   * });
   */function race(e,r){r=once(r||noop);if(!B(e))return r(new TypeError("First argument to race must be an array of functions"));if(!e.length)return r();for(var t=0,n=e.length;t<n;t++)wrapAsync(e[t])(r)}
/**
   * Same as [`reduce`]{@link module:Collections.reduce}, only operates on `array` in reverse order.
   *
   * @name reduceRight
   * @static
   * @memberOf module:Collections
   * @method
   * @see [async.reduce]{@link module:Collections.reduce}
   * @alias foldr
   * @category Collection
   * @param {Array} array - A collection to iterate over.
   * @param {*} memo - The initial state of the reduction.
   * @param {AsyncFunction} iteratee - A function applied to each item in the
   * array to produce the next step in the reduction.
   * The `iteratee` should complete with the next state of the reduction.
   * If the iteratee complete with an error, the reduction is stopped and the
   * main `callback` is immediately called with the error.
   * Invoked with (memo, item, callback).
   * @param {Function} [callback] - A callback which is called after all the
   * `iteratee` functions have finished. Result is the reduced value. Invoked with
   * (err, result).
   */function reduceRight(e,r,t,n){var a=slice(e).reverse();reduce(a,r,t,n)}
/**
   * Wraps the async function in another function that always completes with a
   * result object, even when it errors.
   *
   * The result object has either the property `error` or `value`.
   *
   * @name reflect
   * @static
   * @memberOf module:Utils
   * @method
   * @category Util
   * @param {AsyncFunction} fn - The async function you want to wrap
   * @returns {Function} - A function that always passes null to it's callback as
   * the error. The second argument to the callback will be an `object` with
   * either an `error` or a `value` property.
   * @example
   *
   * async.parallel([
   *     async.reflect(function(callback) {
   *         // do some stuff ...
   *         callback(null, 'one');
   *     }),
   *     async.reflect(function(callback) {
   *         // do some more stuff but error ...
   *         callback('bad stuff happened');
   *     }),
   *     async.reflect(function(callback) {
   *         // do some more stuff ...
   *         callback(null, 'two');
   *     })
   * ],
   * // optional callback
   * function(err, results) {
   *     // values
   *     // results[0].value = 'one'
   *     // results[1].error = 'bad stuff happened'
   *     // results[2].value = 'two'
   * });
   */function reflect(e){var t=wrapAsync(e);return initialParams((function reflectOn(e,n){e.push((function callback(e,r){if(e)n(null,{error:e});else{var t;t=arguments.length<=2?r:slice(arguments,1);n(null,{value:t})}}));return t.apply(this||r,e)}))}
/**
   * A helper function that wraps an array or an object of functions with `reflect`.
   *
   * @name reflectAll
   * @static
   * @memberOf module:Utils
   * @method
   * @see [async.reflect]{@link module:Utils.reflect}
   * @category Util
   * @param {Array|Object|Iterable} tasks - The collection of
   * [async functions]{@link AsyncFunction} to wrap in `async.reflect`.
   * @returns {Array} Returns an array of async functions, each wrapped in
   * `async.reflect`
   * @example
   *
   * let tasks = [
   *     function(callback) {
   *         setTimeout(function() {
   *             callback(null, 'one');
   *         }, 200);
   *     },
   *     function(callback) {
   *         // do some more stuff but error ...
   *         callback(new Error('bad stuff happened'));
   *     },
   *     function(callback) {
   *         setTimeout(function() {
   *             callback(null, 'two');
   *         }, 100);
   *     }
   * ];
   *
   * async.parallel(async.reflectAll(tasks),
   * // optional callback
   * function(err, results) {
   *     // values
   *     // results[0].value = 'one'
   *     // results[1].error = Error('bad stuff happened')
   *     // results[2].value = 'two'
   * });
   *
   * // an example using an object instead of an array
   * let tasks = {
   *     one: function(callback) {
   *         setTimeout(function() {
   *             callback(null, 'one');
   *         }, 200);
   *     },
   *     two: function(callback) {
   *         callback('two');
   *     },
   *     three: function(callback) {
   *         setTimeout(function() {
   *             callback(null, 'three');
   *         }, 100);
   *     }
   * };
   *
   * async.parallel(async.reflectAll(tasks),
   * // optional callback
   * function(err, results) {
   *     // values
   *     // results.one.value = 'one'
   *     // results.two.error = 'two'
   *     // results.three.value = 'three'
   * });
   */function reflectAll(e){var t;if(B(e))t=arrayMap(e,reflect);else{t={};baseForOwn(e,(function(e,n){t[n]=reflect.call(this||r,e)}))}return t}function reject$1(e,r,t,n){_filter(e,r,(function(e,r){t(e,(function(e,t){r(e,!t)}))}),n)}
/**
   * The opposite of [`filter`]{@link module:Collections.filter}. Removes values that pass an `async` truth test.
   *
   * @name reject
   * @static
   * @memberOf module:Collections
   * @method
   * @see [async.filter]{@link module:Collections.filter}
   * @category Collection
   * @param {Array|Iterable|Object} coll - A collection to iterate over.
   * @param {Function} iteratee - An async truth test to apply to each item in
   * `coll`.
   * The should complete with a boolean value as its `result`.
   * Invoked with (item, callback).
   * @param {Function} [callback] - A callback which is called after all the
   * `iteratee` functions have finished. Invoked with (err, results).
   * @example
   *
   * async.reject(['file1','file2','file3'], function(filePath, callback) {
   *     fs.access(filePath, function(err) {
   *         callback(null, !err)
   *     });
   * }, function(err, results) {
   *     // results now equals an array of missing files
   *     createFiles(results);
   * });
   */var Rr=doParallel(reject$1);
/**
   * The same as [`reject`]{@link module:Collections.reject} but runs a maximum of `limit` async operations at a
   * time.
   *
   * @name rejectLimit
   * @static
   * @memberOf module:Collections
   * @method
   * @see [async.reject]{@link module:Collections.reject}
   * @category Collection
   * @param {Array|Iterable|Object} coll - A collection to iterate over.
   * @param {number} limit - The maximum number of async operations at a time.
   * @param {Function} iteratee - An async truth test to apply to each item in
   * `coll`.
   * The should complete with a boolean value as its `result`.
   * Invoked with (item, callback).
   * @param {Function} [callback] - A callback which is called after all the
   * `iteratee` functions have finished. Invoked with (err, results).
   */var zr=doParallelLimit(reject$1);
/**
   * The same as [`reject`]{@link module:Collections.reject} but runs only a single async operation at a time.
   *
   * @name rejectSeries
   * @static
   * @memberOf module:Collections
   * @method
   * @see [async.reject]{@link module:Collections.reject}
   * @category Collection
   * @param {Array|Iterable|Object} coll - A collection to iterate over.
   * @param {Function} iteratee - An async truth test to apply to each item in
   * `coll`.
   * The should complete with a boolean value as its `result`.
   * Invoked with (item, callback).
   * @param {Function} [callback] - A callback which is called after all the
   * `iteratee` functions have finished. Invoked with (err, results).
   */var Ur=doLimit(zr,1);
/**
   * Creates a function that returns `value`.
   *
   * @static
   * @memberOf _
   * @since 2.4.0
   * @category Util
   * @param {*} value The value to return from the new function.
   * @returns {Function} Returns the new constant function.
   * @example
   *
   * var objects = _.times(2, _.constant({ 'a': 1 }));
   *
   * console.log(objects);
   * // => [{ 'a': 1 }, { 'a': 1 }]
   *
   * console.log(objects[0] === objects[1]);
   * // => true
   */function constant$1(e){return function(){return e}}
/**
   * Attempts to get a successful response from `task` no more than `times` times
   * before returning an error. If the task is successful, the `callback` will be
   * passed the result of the successful task. If all attempts fail, the callback
   * will be passed the error and result (if any) of the final attempt.
   *
   * @name retry
   * @static
   * @memberOf module:ControlFlow
   * @method
   * @category Control Flow
   * @see [async.retryable]{@link module:ControlFlow.retryable}
   * @param {Object|number} [opts = {times: 5, interval: 0}| 5] - Can be either an
   * object with `times` and `interval` or a number.
   * * `times` - The number of attempts to make before giving up.  The default
   *   is `5`.
   * * `interval` - The time to wait between retries, in milliseconds.  The
   *   default is `0`. The interval may also be specified as a function of the
   *   retry count (see example).
   * * `errorFilter` - An optional synchronous function that is invoked on
   *   erroneous result. If it returns `true` the retry attempts will continue;
   *   if the function returns `false` the retry flow is aborted with the current
   *   attempt's error and result being returned to the final callback.
   *   Invoked with (err).
   * * If `opts` is a number, the number specifies the number of times to retry,
   *   with the default interval of `0`.
   * @param {AsyncFunction} task - An async function to retry.
   * Invoked with (callback).
   * @param {Function} [callback] - An optional callback which is called when the
   * task has succeeded, or after the final failed attempt. It receives the `err`
   * and `result` arguments of the last attempt at completing the `task`. Invoked
   * with (err, results).
   *
   * @example
   *
   * // The `retry` function can be used as a stand-alone control flow by passing
   * // a callback, as shown below:
   *
   * // try calling apiMethod 3 times
   * async.retry(3, apiMethod, function(err, result) {
   *     // do something with the result
   * });
   *
   * // try calling apiMethod 3 times, waiting 200 ms between each retry
   * async.retry({times: 3, interval: 200}, apiMethod, function(err, result) {
   *     // do something with the result
   * });
   *
   * // try calling apiMethod 10 times with exponential backoff
   * // (i.e. intervals of 100, 200, 400, 800, 1600, ... milliseconds)
   * async.retry({
   *   times: 10,
   *   interval: function(retryCount) {
   *     return 50 * Math.pow(2, retryCount);
   *   }
   * }, apiMethod, function(err, result) {
   *     // do something with the result
   * });
   *
   * // try calling apiMethod the default 5 times no delay between each retry
   * async.retry(apiMethod, function(err, result) {
   *     // do something with the result
   * });
   *
   * // try calling apiMethod only when error condition satisfies, all other
   * // errors will abort the retry control flow and return to final callback
   * async.retry({
   *   errorFilter: function(err) {
   *     return err.message === 'Temporary error'; // only retry on a specific error
   *   }
   * }, apiMethod, function(err, result) {
   *     // do something with the result
   * });
   *
   * // to retry individual methods that are not as reliable within other
   * // control flow functions, use the `retryable` wrapper:
   * async.auto({
   *     users: api.getUsers.bind(api),
   *     payments: async.retryable(3, api.getPayments.bind(api))
   * }, function(err, results) {
   *     // do something with the results
   * });
   *
   */function retry(e,r,t){var n=5;var a=0;var i={times:n,intervalFunc:constant$1(a)};function parseTimes(e,r){if("object"===typeof r){e.times=+r.times||n;e.intervalFunc="function"===typeof r.interval?r.interval:constant$1(+r.interval||a);e.errorFilter=r.errorFilter}else{if("number"!==typeof r&&"string"!==typeof r)throw new Error("Invalid arguments for async.retry");e.times=+r||n}}if(arguments.length<3&&"function"===typeof e){t=r||noop;r=e}else{parseTimes(i,e);t=t||noop}if("function"!==typeof r)throw new Error("Invalid arguments for async.retry");var o=wrapAsync(r);var c=1;function retryAttempt(){o((function(e){e&&c++<i.times&&("function"!=typeof i.errorFilter||i.errorFilter(e))?setTimeout(retryAttempt,i.intervalFunc(c)):t.apply(null,arguments)}))}retryAttempt()}
/**
   * A close relative of [`retry`]{@link module:ControlFlow.retry}.  This method
   * wraps a task and makes it retryable, rather than immediately calling it
   * with retries.
   *
   * @name retryable
   * @static
   * @memberOf module:ControlFlow
   * @method
   * @see [async.retry]{@link module:ControlFlow.retry}
   * @category Control Flow
   * @param {Object|number} [opts = {times: 5, interval: 0}| 5] - optional
   * options, exactly the same as from `retry`
   * @param {AsyncFunction} task - the asynchronous function to wrap.
   * This function will be passed any arguments passed to the returned wrapper.
   * Invoked with (...args, callback).
   * @returns {AsyncFunction} The wrapped function, which when invoked, will
   * retry on an error, based on the parameters specified in `opts`.
   * This function will accept the same parameters as `task`.
   * @example
   *
   * async.auto({
   *     dep1: async.retryable(3, getFromFlakyService),
   *     process: ["dep1", async.retryable(3, function (results, cb) {
   *         maybeProcessData(results.dep1, cb);
   *     })]
   * }, callback);
   */var retryable=function(e,r){if(!r){r=e;e=null}var t=wrapAsync(r);return initialParams((function(r,n){function taskFn(e){t.apply(null,r.concat(e))}e?retry(e,taskFn,n):retry(taskFn,n)}))};
/**
   * Run the functions in the `tasks` collection in series, each one running once
   * the previous function has completed. If any functions in the series pass an
   * error to its callback, no more functions are run, and `callback` is
   * immediately called with the value of the error. Otherwise, `callback`
   * receives an array of results when `tasks` have completed.
   *
   * It is also possible to use an object instead of an array. Each property will
   * be run as a function, and the results will be passed to the final `callback`
   * as an object instead of an array. This can be a more readable way of handling
   *  results from {@link async.series}.
   *
   * **Note** that while many implementations preserve the order of object
   * properties, the [ECMAScript Language Specification](http://www.ecma-international.org/ecma-262/5.1/#sec-8.6)
   * explicitly states that
   *
   * > The mechanics and order of enumerating the properties is not specified.
   *
   * So if you rely on the order in which your series of functions are executed,
   * and want this to work on all platforms, consider using an array.
   *
   * @name series
   * @static
   * @memberOf module:ControlFlow
   * @method
   * @category Control Flow
   * @param {Array|Iterable|Object} tasks - A collection containing
   * [async functions]{@link AsyncFunction} to run in series.
   * Each function can complete with any number of optional `result` values.
   * @param {Function} [callback] - An optional callback to run once all the
   * functions have completed. This function gets a results array (or object)
   * containing all the result arguments passed to the `task` callbacks. Invoked
   * with (err, result).
   * @example
   * async.series([
   *     function(callback) {
   *         // do some stuff ...
   *         callback(null, 'one');
   *     },
   *     function(callback) {
   *         // do some more stuff ...
   *         callback(null, 'two');
   *     }
   * ],
   * // optional callback
   * function(err, results) {
   *     // results is now equal to ['one', 'two']
   * });
   *
   * async.series({
   *     one: function(callback) {
   *         setTimeout(function() {
   *             callback(null, 1);
   *         }, 200);
   *     },
   *     two: function(callback){
   *         setTimeout(function() {
   *             callback(null, 2);
   *         }, 100);
   *     }
   * }, function(err, results) {
   *     // results is now equal to: {one: 1, two: 2}
   * });
   */function series(e,r){_parallel(dr,e,r)}
/**
   * Returns `true` if at least one element in the `coll` satisfies an async test.
   * If any iteratee call returns `true`, the main `callback` is immediately
   * called.
   *
   * @name some
   * @static
   * @memberOf module:Collections
   * @method
   * @alias any
   * @category Collection
   * @param {Array|Iterable|Object} coll - A collection to iterate over.
   * @param {AsyncFunction} iteratee - An async truth test to apply to each item
   * in the collections in parallel.
   * The iteratee should complete with a boolean `result` value.
   * Invoked with (item, callback).
   * @param {Function} [callback] - A callback which is called as soon as any
   * iteratee returns `true`, or after all the iteratee functions have finished.
   * Result will be either `true` or `false` depending on the values of the async
   * tests. Invoked with (err, result).
   * @example
   *
   * async.some(['file1','file2','file3'], function(filePath, callback) {
   *     fs.access(filePath, function(err) {
   *         callback(null, !err)
   *     });
   * }, function(err, result) {
   *     // if result is true then at least one of the files exists
   * });
   */var Cr=doParallel(_createTester(Boolean,identity));
/**
   * The same as [`some`]{@link module:Collections.some} but runs a maximum of `limit` async operations at a time.
   *
   * @name someLimit
   * @static
   * @memberOf module:Collections
   * @method
   * @see [async.some]{@link module:Collections.some}
   * @alias anyLimit
   * @category Collection
   * @param {Array|Iterable|Object} coll - A collection to iterate over.
   * @param {number} limit - The maximum number of async operations at a time.
   * @param {AsyncFunction} iteratee - An async truth test to apply to each item
   * in the collections in parallel.
   * The iteratee should complete with a boolean `result` value.
   * Invoked with (item, callback).
   * @param {Function} [callback] - A callback which is called as soon as any
   * iteratee returns `true`, or after all the iteratee functions have finished.
   * Result will be either `true` or `false` depending on the values of the async
   * tests. Invoked with (err, result).
   */var Vr=doParallelLimit(_createTester(Boolean,identity));
/**
   * The same as [`some`]{@link module:Collections.some} but runs only a single async operation at a time.
   *
   * @name someSeries
   * @static
   * @memberOf module:Collections
   * @method
   * @see [async.some]{@link module:Collections.some}
   * @alias anySeries
   * @category Collection
   * @param {Array|Iterable|Object} coll - A collection to iterate over.
   * @param {AsyncFunction} iteratee - An async truth test to apply to each item
   * in the collections in series.
   * The iteratee should complete with a boolean `result` value.
   * Invoked with (item, callback).
   * @param {Function} [callback] - A callback which is called as soon as any
   * iteratee returns `true`, or after all the iteratee functions have finished.
   * Result will be either `true` or `false` depending on the values of the async
   * tests. Invoked with (err, result).
   */var Gr=doLimit(Vr,1);
/**
   * Sorts a list by the results of running each `coll` value through an async
   * `iteratee`.
   *
   * @name sortBy
   * @static
   * @memberOf module:Collections
   * @method
   * @category Collection
   * @param {Array|Iterable|Object} coll - A collection to iterate over.
   * @param {AsyncFunction} iteratee - An async function to apply to each item in
   * `coll`.
   * The iteratee should complete with a value to use as the sort criteria as
   * its `result`.
   * Invoked with (item, callback).
   * @param {Function} callback - A callback which is called after all the
   * `iteratee` functions have finished, or an error occurs. Results is the items
   * from the original `coll` sorted by the values returned by the `iteratee`
   * calls. Invoked with (err, results).
   * @example
   *
   * async.sortBy(['file1','file2','file3'], function(file, callback) {
   *     fs.stat(file, function(err, stats) {
   *         callback(err, stats.mtime);
   *     });
   * }, function(err, results) {
   *     // results is now the original array of files sorted by
   *     // modified date
   * });
   *
   * // By modifying the callback parameter the
   * // sorting order can be influenced:
   *
   * // ascending order
   * async.sortBy([1,9,3,5], function(x, callback) {
   *     callback(null, x);
   * }, function(err,result) {
   *     // result callback
   * });
   *
   * // descending order
   * async.sortBy([1,9,3,5], function(x, callback) {
   *     callback(null, x*-1);    //<- x*-1 instead of x, turns the order around
   * }, function(err,result) {
   *     // result callback
   * });
   */function sortBy(e,r,t){var n=wrapAsync(r);Te(e,(function(e,r){n(e,(function(t,n){if(t)return r(t);r(null,{value:e,criteria:n})}))}),(function(e,r){if(e)return t(e);t(null,arrayMap(r.sort(comparator),baseProperty("value")))}));function comparator(e,r){var t=e.criteria,n=r.criteria;return t<n?-1:t>n?1:0}}
/**
   * Sets a time limit on an asynchronous function. If the function does not call
   * its callback within the specified milliseconds, it will be called with a
   * timeout error. The code property for the error object will be `'ETIMEDOUT'`.
   *
   * @name timeout
   * @static
   * @memberOf module:Utils
   * @method
   * @category Util
   * @param {AsyncFunction} asyncFn - The async function to limit in time.
   * @param {number} milliseconds - The specified time limit.
   * @param {*} [info] - Any variable you want attached (`string`, `object`, etc)
   * to timeout Error for more information..
   * @returns {AsyncFunction} Returns a wrapped function that can be used with any
   * of the control flow functions.
   * Invoke this function with the same parameters as you would `asyncFunc`.
   * @example
   *
   * function myFunction(foo, callback) {
   *     doAsyncTask(foo, function(err, data) {
   *         // handle errors
   *         if (err) return callback(err);
   *
   *         // do some stuff ...
   *
   *         // return processed data
   *         return callback(null, data);
   *     });
   * }
   *
   * var wrapped = async.timeout(myFunction, 1000);
   *
   * // call `wrapped` as you would `myFunction`
   * wrapped({ bar: 'bar' }, function(err, data) {
   *     // if `myFunction` takes < 1000 ms to execute, `err`
   *     // and `data` will have their expected values
   *
   *     // else `err` will be an Error with the code 'ETIMEDOUT'
   * });
   */function timeout(e,r,t){var n=wrapAsync(e);return initialParams((function(a,i){var o=false;var c;function timeoutCallback(){var r=e.name||"anonymous";var n=new Error('Callback function "'+r+'" timed out.');n.code="ETIMEDOUT";t&&(n.info=t);o=true;i(n)}a.push((function(){if(!o){i.apply(null,arguments);clearTimeout(c)}}));c=setTimeout(timeoutCallback,r);n.apply(null,a)}))}var Wr=Math.ceil;var Nr=Math.max;
/**
   * The base implementation of `_.range` and `_.rangeRight` which doesn't
   * coerce arguments.
   *
   * @private
   * @param {number} start The start of the range.
   * @param {number} end The end of the range.
   * @param {number} step The value to increment or decrement by.
   * @param {boolean} [fromRight] Specify iterating from right to left.
   * @returns {Array} Returns the range of numbers.
   */function baseRange(e,r,t,n){var a=-1,i=Nr(Wr((r-e)/(t||1)),0),o=Array(i);while(i--){o[n?i:++a]=e;e+=t}return o}
/**
   * The same as [times]{@link module:ControlFlow.times} but runs a maximum of `limit` async operations at a
   * time.
   *
   * @name timesLimit
   * @static
   * @memberOf module:ControlFlow
   * @method
   * @see [async.times]{@link module:ControlFlow.times}
   * @category Control Flow
   * @param {number} count - The number of times to run the function.
   * @param {number} limit - The maximum number of async operations at a time.
   * @param {AsyncFunction} iteratee - The async function to call `n` times.
   * Invoked with the iteration index and a callback: (n, next).
   * @param {Function} callback - see [async.map]{@link module:Collections.map}.
   */function timeLimit(e,r,t,n){var a=wrapAsync(t);Ie(baseRange(0,e,1),r,a,n)}
/**
   * Calls the `iteratee` function `n` times, and accumulates results in the same
   * manner you would use with [map]{@link module:Collections.map}.
   *
   * @name times
   * @static
   * @memberOf module:ControlFlow
   * @method
   * @see [async.map]{@link module:Collections.map}
   * @category Control Flow
   * @param {number} n - The number of times to run the function.
   * @param {AsyncFunction} iteratee - The async function to call `n` times.
   * Invoked with the iteration index and a callback: (n, next).
   * @param {Function} callback - see {@link module:Collections.map}.
   * @example
   *
   * // Pretend this is some complicated async factory
   * var createUser = function(id, callback) {
   *     callback(null, {
   *         id: 'user' + id
   *     });
   * };
   *
   * // generate 5 users
   * async.times(5, function(n, next) {
   *     createUser(n, function(err, user) {
   *         next(err, user);
   *     });
   * }, function(err, users) {
   *     // we should now have 5 users
   * });
   */var Qr=doLimit(timeLimit,Infinity);
/**
   * The same as [times]{@link module:ControlFlow.times} but runs only a single async operation at a time.
   *
   * @name timesSeries
   * @static
   * @memberOf module:ControlFlow
   * @method
   * @see [async.times]{@link module:ControlFlow.times}
   * @category Control Flow
   * @param {number} n - The number of times to run the function.
   * @param {AsyncFunction} iteratee - The async function to call `n` times.
   * Invoked with the iteration index and a callback: (n, next).
   * @param {Function} callback - see {@link module:Collections.map}.
   */var Kr=doLimit(timeLimit,1);
/**
   * A relative of `reduce`.  Takes an Object or Array, and iterates over each
   * element in series, each step potentially mutating an `accumulator` value.
   * The type of the accumulator defaults to the type of collection passed in.
   *
   * @name transform
   * @static
   * @memberOf module:Collections
   * @method
   * @category Collection
   * @param {Array|Iterable|Object} coll - A collection to iterate over.
   * @param {*} [accumulator] - The initial state of the transform.  If omitted,
   * it will default to an empty Object or Array, depending on the type of `coll`
   * @param {AsyncFunction} iteratee - A function applied to each item in the
   * collection that potentially modifies the accumulator.
   * Invoked with (accumulator, item, key, callback).
   * @param {Function} [callback] - A callback which is called after all the
   * `iteratee` functions have finished. Result is the transformed accumulator.
   * Invoked with (err, result).
   * @example
   *
   * async.transform([1,2,3], function(acc, item, index, callback) {
   *     // pointless async:
   *     process.nextTick(function() {
   *         acc.push(item * 2)
   *         callback(null)
   *     });
   * }, function(err, result) {
   *     // result is now equal to [2, 4, 6]
   * });
   *
   * @example
   *
   * async.transform({a: 1, b: 2, c: 3}, function (obj, val, key, callback) {
   *     setImmediate(function () {
   *         obj[key] = val * 2;
   *         callback();
   *     })
   * }, function (err, result) {
   *     // result is equal to {a: 2, b: 4, c: 6}
   * })
   */function transform(e,r,t,n){if(arguments.length<=3){n=t;t=r;r=B(e)?[]:{}}n=once(n||noop);var a=wrapAsync(t);eachOf(e,(function(e,t,n){a(r,e,t,n)}),(function(e){n(e,r)}))}
/**
   * It runs each task in series but stops whenever any of the functions were
   * successful. If one of the tasks were successful, the `callback` will be
   * passed the result of the successful task. If all tasks fail, the callback
   * will be passed the error and result (if any) of the final attempt.
   *
   * @name tryEach
   * @static
   * @memberOf module:ControlFlow
   * @method
   * @category Control Flow
   * @param {Array|Iterable|Object} tasks - A collection containing functions to
   * run, each function is passed a `callback(err, result)` it must call on
   * completion with an error `err` (which can be `null`) and an optional `result`
   * value.
   * @param {Function} [callback] - An optional callback which is called when one
   * of the tasks has succeeded, or all have failed. It receives the `err` and
   * `result` arguments of the last attempt at completing the `task`. Invoked with
   * (err, results).
   * @example
   * async.tryEach([
   *     function getDataFromFirstWebsite(callback) {
   *         // Try getting the data from the first website
   *         callback(err, data);
   *     },
   *     function getDataFromSecondWebsite(callback) {
   *         // First website failed,
   *         // Try getting the data from the backup website
   *         callback(err, data);
   *     }
   * ],
   * // optional callback
   * function(err, results) {
   *     Now do something with the data.
   * });
   *
   */function tryEach(e,r){var t=null;var n;r=r||noop;jr(e,(function(e,r){wrapAsync(e)((function(e,a){n=arguments.length>2?slice(arguments,1):a;t=e;r(!e)}))}),(function(){r(t,n)}))}
/**
   * Undoes a [memoize]{@link module:Utils.memoize}d function, reverting it to the original,
   * unmemoized form. Handy for testing.
   *
   * @name unmemoize
   * @static
   * @memberOf module:Utils
   * @method
   * @see [async.memoize]{@link module:Utils.memoize}
   * @category Util
   * @param {AsyncFunction} fn - the memoized function
   * @returns {AsyncFunction} a function that calls the original unmemoized function
   */function unmemoize(e){return function(){return(e.unmemoized||e).apply(null,arguments)}}
/**
   * Repeatedly call `iteratee`, while `test` returns `true`. Calls `callback` when
   * stopped, or an error occurs.
   *
   * @name whilst
   * @static
   * @memberOf module:ControlFlow
   * @method
   * @category Control Flow
   * @param {Function} test - synchronous truth test to perform before each
   * execution of `iteratee`. Invoked with ().
   * @param {AsyncFunction} iteratee - An async function which is called each time
   * `test` passes. Invoked with (callback).
   * @param {Function} [callback] - A callback which is called after the test
   * function has failed and repeated execution of `iteratee` has stopped. `callback`
   * will be passed an error and any arguments passed to the final `iteratee`'s
   * callback. Invoked with (err, [results]);
   * @returns undefined
   * @example
   *
   * var count = 0;
   * async.whilst(
   *     function() { return count < 5; },
   *     function(callback) {
   *         count++;
   *         setTimeout(function() {
   *             callback(null, count);
   *         }, 1000);
   *     },
   *     function (err, n) {
   *         // 5 seconds have passed, n = 5
   *     }
   * );
   */function whilst(e,r,t){t=onlyOnce(t||noop);var n=wrapAsync(r);if(!e())return t(null);var next=function(r){if(r)return t(r);if(e())return n(next);var a=slice(arguments,1);t.apply(null,[null].concat(a))};n(next)}
/**
   * Repeatedly call `iteratee` until `test` returns `true`. Calls `callback` when
   * stopped, or an error occurs. `callback` will be passed an error and any
   * arguments passed to the final `iteratee`'s callback.
   *
   * The inverse of [whilst]{@link module:ControlFlow.whilst}.
   *
   * @name until
   * @static
   * @memberOf module:ControlFlow
   * @method
   * @see [async.whilst]{@link module:ControlFlow.whilst}
   * @category Control Flow
   * @param {Function} test - synchronous truth test to perform before each
   * execution of `iteratee`. Invoked with ().
   * @param {AsyncFunction} iteratee - An async function which is called each time
   * `test` fails. Invoked with (callback).
   * @param {Function} [callback] - A callback which is called after the test
   * function has passed and repeated execution of `iteratee` has stopped. `callback`
   * will be passed an error and any arguments passed to the final `iteratee`'s
   * callback. Invoked with (err, [results]);
   */function until(e,t,n){whilst((function(){return!e.apply(this||r,arguments)}),t,n)}
/**
   * Runs the `tasks` array of functions in series, each passing their results to
   * the next in the array. However, if any of the `tasks` pass an error to their
   * own callback, the next function is not executed, and the main `callback` is
   * immediately called with the error.
   *
   * @name waterfall
   * @static
   * @memberOf module:ControlFlow
   * @method
   * @category Control Flow
   * @param {Array} tasks - An array of [async functions]{@link AsyncFunction}
   * to run.
   * Each function should complete with any number of `result` values.
   * The `result` values will be passed as arguments, in order, to the next task.
   * @param {Function} [callback] - An optional callback to run once all the
   * functions have completed. This will be passed the results of the last task's
   * callback. Invoked with (err, [results]).
   * @returns undefined
   * @example
   *
   * async.waterfall([
   *     function(callback) {
   *         callback(null, 'one', 'two');
   *     },
   *     function(arg1, arg2, callback) {
   *         // arg1 now equals 'one' and arg2 now equals 'two'
   *         callback(null, 'three');
   *     },
   *     function(arg1, callback) {
   *         // arg1 now equals 'three'
   *         callback(null, 'done');
   *     }
   * ], function (err, result) {
   *     // result now equals 'done'
   * });
   *
   * // Or, with named functions:
   * async.waterfall([
   *     myFirstFunction,
   *     mySecondFunction,
   *     myLastFunction,
   * ], function (err, result) {
   *     // result now equals 'done'
   * });
   * function myFirstFunction(callback) {
   *     callback(null, 'one', 'two');
   * }
   * function mySecondFunction(arg1, arg2, callback) {
   *     // arg1 now equals 'one' and arg2 now equals 'two'
   *     callback(null, 'three');
   * }
   * function myLastFunction(arg1, callback) {
   *     // arg1 now equals 'three'
   *     callback(null, 'done');
   * }
   */var waterfall=function(e,r){r=once(r||noop);if(!B(e))return r(new Error("First argument to waterfall must be an array of functions"));if(!e.length)return r();var t=0;function nextTask(r){var n=wrapAsync(e[t++]);r.push(onlyOnce(next));n.apply(null,r)}function next(n){if(n||t===e.length)return r.apply(null,arguments);nextTask(slice(arguments,1))}nextTask([])};
/**
   * An "async function" in the context of Async is an asynchronous function with
   * a variable number of parameters, with the final parameter being a callback.
   * (`function (arg1, arg2, ..., callback) {}`)
   * The final callback is of the form `callback(err, results...)`, which must be
   * called once the function is completed.  The callback should be called with a
   * Error as its first argument to signal that an error occurred.
   * Otherwise, if no error occurred, it should be called with `null` as the first
   * argument, and any additional `result` arguments that may apply, to signal
   * successful completion.
   * The callback must be called exactly once, ideally on a later tick of the
   * JavaScript event loop.
   *
   * This type of function is also referred to as a "Node-style async function",
   * or a "continuation passing-style function" (CPS). Most of the methods of this
   * library are themselves CPS/Node-style async functions, or functions that
   * return CPS/Node-style async functions.
   *
   * Wherever we accept a Node-style async function, we also directly accept an
   * [ES2017 `async` function]{@link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/async_function}.
   * In this case, the `async` function will not be passed a final callback
   * argument, and any thrown error will be used as the `err` argument of the
   * implicit callback, and the return value will be used as the `result` value.
   * (i.e. a `rejected` of the returned Promise becomes the `err` callback
   * argument, and a `resolved` value becomes the `result`.)
   *
   * Note, due to JavaScript limitations, we can only detect native `async`
   * functions and not transpilied implementations.
   * Your environment must have `async`/`await` support for this to work.
   * (e.g. Node > v7.6, or a recent version of a modern browser).
   * If you are using `async` functions through a transpiler (e.g. Babel), you
   * must still wrap the function with [asyncify]{@link module:Utils.asyncify},
   * because the `async function` will be compiled to an ordinary function that
   * returns a promise.
   *
   * @typedef {Function} AsyncFunction
   * @static
   */var Hr={apply:apply,applyEach:Ee,applyEachSeries:Fe,asyncify:asyncify,auto:auto,autoInject:autoInject,cargo:cargo,compose:compose,concat:br,concatLimit:concatLimit,concatSeries:gr,constant:constant,detect:Lr,detectLimit:wr,detectSeries:Ar,dir:kr,doDuring:doDuring,doUntil:doUntil,doWhilst:doWhilst,during:during,each:eachLimit,eachLimit:eachLimit$1,eachOf:eachOf,eachOfLimit:eachOfLimit,eachOfSeries:dr,eachSeries:jr,ensureAsync:ensureAsync,every:Or,everyLimit:Sr,everySeries:Tr,filter:Er,filterLimit:Ir,filterSeries:_r,forever:forever,groupBy:Fr,groupByLimit:groupByLimit,groupBySeries:Pr,log:Br,map:Te,mapLimit:Ie,mapSeries:_e,mapValues:Dr,mapValuesLimit:mapValuesLimit,mapValuesSeries:$r,memoize:memoize,nextTick:Mr,parallel:parallelLimit,parallelLimit:parallelLimit$1,priorityQueue:priorityQueue,queue:queue$1,race:race,reduce:reduce,reduceRight:reduceRight,reflect:reflect,reflectAll:reflectAll,reject:Rr,rejectLimit:zr,rejectSeries:Ur,retry:retry,retryable:retryable,seq:seq,series:series,setImmediate:c,some:Cr,someLimit:Vr,someSeries:Gr,sortBy:sortBy,timeout:timeout,times:Qr,timesLimit:timeLimit,timesSeries:Kr,transform:transform,tryEach:tryEach,unmemoize:unmemoize,until:until,waterfall:waterfall,whilst:whilst,all:Or,allLimit:Sr,allSeries:Tr,any:Cr,anyLimit:Vr,anySeries:Gr,find:Lr,findLimit:wr,findSeries:Ar,forEach:eachLimit,forEachSeries:jr,forEachLimit:eachLimit$1,forEachOf:eachOf,forEachOfSeries:dr,forEachOfLimit:eachOfLimit,inject:reduce,foldl:reduce,foldr:reduceRight,select:Er,selectLimit:Ir,selectSeries:_r,wrapSync:asyncify};e.default=Hr;e.apply=apply;e.applyEach=Ee;e.applyEachSeries=Fe;e.asyncify=asyncify;e.auto=auto;e.autoInject=autoInject;e.cargo=cargo;e.compose=compose;e.concat=br;e.concatLimit=concatLimit;e.concatSeries=gr;e.constant=constant;e.detect=Lr;e.detectLimit=wr;e.detectSeries=Ar;e.dir=kr;e.doDuring=doDuring;e.doUntil=doUntil;e.doWhilst=doWhilst;e.during=during;e.each=eachLimit;e.eachLimit=eachLimit$1;e.eachOf=eachOf;e.eachOfLimit=eachOfLimit;e.eachOfSeries=dr;e.eachSeries=jr;e.ensureAsync=ensureAsync;e.every=Or;e.everyLimit=Sr;e.everySeries=Tr;e.filter=Er;e.filterLimit=Ir;e.filterSeries=_r;e.forever=forever;e.groupBy=Fr;e.groupByLimit=groupByLimit;e.groupBySeries=Pr;e.log=Br;e.map=Te;e.mapLimit=Ie;e.mapSeries=_e;e.mapValues=Dr;e.mapValuesLimit=mapValuesLimit;e.mapValuesSeries=$r;e.memoize=memoize;e.nextTick=Mr;e.parallel=parallelLimit;e.parallelLimit=parallelLimit$1;e.priorityQueue=priorityQueue;e.queue=queue$1;e.race=race;e.reduce=reduce;e.reduceRight=reduceRight;e.reflect=reflect;e.reflectAll=reflectAll;e.reject=Rr;e.rejectLimit=zr;e.rejectSeries=Ur;e.retry=retry;e.retryable=retryable;e.seq=seq;e.series=series;e.setImmediate=c;e.some=Cr;e.someLimit=Vr;e.someSeries=Gr;e.sortBy=sortBy;e.timeout=timeout;e.times=Qr;e.timesLimit=timeLimit;e.timesSeries=Kr;e.transform=transform;e.tryEach=tryEach;e.unmemoize=unmemoize;e.until=until;e.waterfall=waterfall;e.whilst=whilst;e.all=Or;e.allLimit=Sr;e.allSeries=Tr;e.any=Cr;e.anyLimit=Vr;e.anySeries=Gr;e.find=Lr;e.findLimit=wr;e.findSeries=Ar;e.forEach=eachLimit;e.forEachSeries=jr;e.forEachLimit=eachLimit$1;e.forEachOf=eachOf;e.forEachOfSeries=dr;e.forEachOfLimit=eachOfLimit;e.inject=reduce;e.foldl=reduce;e.foldr=reduceRight;e.select=Er;e.selectLimit=Ir;e.selectSeries=_r;e.wrapSync=asyncify;Object.defineProperty(e,"__esModule",{value:true})}));var i=n.exports;const o=n.exports.apply,c=n.exports.applyEach,u=n.exports.applyEachSeries,s=n.exports.asyncify,l=n.exports.auto,f=n.exports.autoInject,p=n.exports.cargo,v=n.exports.compose,y=n.exports.concat,h=n.exports.concatLimit,m=n.exports.concatSeries,d=n.exports.constant,x=n.exports.detect,b=n.exports.detectLimit,g=n.exports.detectSeries,L=n.exports.dir,w=n.exports.doDuring,A=n.exports.doUntil,k=n.exports.doWhilst,j=n.exports.during,O=n.exports.each,S=n.exports.eachLimit,T=n.exports.eachOf,E=n.exports.eachOfLimit,I=n.exports.eachOfSeries,_=n.exports.eachSeries,F=n.exports.ensureAsync,P=n.exports.every,B=n.exports.everyLimit,D=n.exports.everySeries,$=n.exports.filter,q=n.exports.filterLimit,M=n.exports.filterSeries,R=n.exports.forever,z=n.exports.groupBy,U=n.exports.groupByLimit,C=n.exports.groupBySeries,V=n.exports.log,G=n.exports.map,W=n.exports.mapLimit,N=n.exports.mapSeries,Q=n.exports.mapValues,K=n.exports.mapValuesLimit,H=n.exports.mapValuesSeries,J=n.exports.memoize,X=n.exports.nextTick,Y=n.exports.parallel,Z=n.exports.parallelLimit,ee=n.exports.priorityQueue,re=n.exports.queue,te=n.exports.race,ne=n.exports.reduce,ae=n.exports.reduceRight,ie=n.exports.reflect,oe=n.exports.reflectAll,ce=n.exports.reject,ue=n.exports.rejectLimit,se=n.exports.rejectSeries,le=n.exports.retry,fe=n.exports.retryable,pe=n.exports.seq,ve=n.exports.series,ye=n.exports.some,he=n.exports.someLimit,me=n.exports.someSeries,de=n.exports.sortBy,xe=n.exports.timeout,be=n.exports.times,ge=n.exports.timesLimit,Le=n.exports.timesSeries,we=n.exports.transform,Ae=n.exports.tryEach,ke=n.exports.unmemoize,je=n.exports.until,Oe=n.exports.waterfall,Se=n.exports.whilst,Te=n.exports.all,Ee=n.exports.allLimit,Ie=n.exports.allSeries,_e=n.exports.any,Fe=n.exports.anyLimit,Pe=n.exports.anySeries,Be=n.exports.find,De=n.exports.findLimit,$e=n.exports.findSeries,qe=n.exports.forEach,Me=n.exports.forEachSeries,Re=n.exports.forEachLimit,ze=n.exports.forEachOf,Ue=n.exports.forEachOfSeries,Ce=n.exports.forEachOfLimit,Ve=n.exports.inject,Ge=n.exports.foldl,We=n.exports.foldr,Ne=n.exports.select,Qe=n.exports.selectLimit,Ke=n.exports.selectSeries,He=n.exports.wrapSync,Je=n.exports.__esModule;const Xe=n.exports.setImmediate;export{Je as __esModule,Te as all,Ee as allLimit,Ie as allSeries,_e as any,Fe as anyLimit,Pe as anySeries,o as apply,c as applyEach,u as applyEachSeries,s as asyncify,l as auto,f as autoInject,p as cargo,v as compose,y as concat,h as concatLimit,m as concatSeries,d as constant,i as default,x as detect,b as detectLimit,g as detectSeries,L as dir,w as doDuring,A as doUntil,k as doWhilst,j as during,O as each,S as eachLimit,T as eachOf,E as eachOfLimit,I as eachOfSeries,_ as eachSeries,F as ensureAsync,P as every,B as everyLimit,D as everySeries,$ as filter,q as filterLimit,M as filterSeries,Be as find,De as findLimit,$e as findSeries,Ge as foldl,We as foldr,qe as forEach,Re as forEachLimit,ze as forEachOf,Ce as forEachOfLimit,Ue as forEachOfSeries,Me as forEachSeries,R as forever,z as groupBy,U as groupByLimit,C as groupBySeries,Ve as inject,V as log,G as map,W as mapLimit,N as mapSeries,Q as mapValues,K as mapValuesLimit,H as mapValuesSeries,J as memoize,X as nextTick,Y as parallel,Z as parallelLimit,ee as priorityQueue,re as queue,te as race,ne as reduce,ae as reduceRight,ie as reflect,oe as reflectAll,ce as reject,ue as rejectLimit,se as rejectSeries,le as retry,fe as retryable,Ne as select,Qe as selectLimit,Ke as selectSeries,pe as seq,ve as series,Xe as setImmediate,ye as some,he as someLimit,me as someSeries,de as sortBy,xe as timeout,be as times,ge as timesLimit,Le as timesSeries,we as transform,Ae as tryEach,ke as unmemoize,je as until,Oe as waterfall,Se as whilst,He as wrapSync};

