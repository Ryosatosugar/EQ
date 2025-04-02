// express-session@1.18.1 downloaded from https://ga.jspm.io/npm:express-session@1.18.1/index.js

import*as e from"safe-buffer";import*as s from"cookie";import*as o from"crypto";import*as r from"debug";import*as i from"depd";import*as t from"on-headers";import*as n from"parseurl";import*as a from"cookie-signature";import*as u from"uid-safe";import{_ as c,a as f,b as l}from"./_/CM0DGaml.js";import*as d from"util";import v from"process";import"events";var h=d;try{"default"in d&&(h=d.default)}catch(e){}var p={};var y=v;var g=c;var m=h;var k=typeof setImmediate==="function"?y.nextTick:function(e){y.nextTick(e.bind.apply(e,arguments))};p=MemoryStore$1;function MemoryStore$1(){g.call(this);this.sessions=Object.create(null)}m.inherits(MemoryStore$1,g);
/**
 * Get all active sessions.
 *
 * @param {function} callback
 * @public
 */MemoryStore$1.prototype.all=function all(e){var s=Object.keys(this.sessions);var o=Object.create(null);for(var r=0;r<s.length;r++){var i=s[r];var t=getSession.call(this,i);t&&(o[i]=t)}e&&k(e,null,o)};
/**
 * Clear all sessions.
 *
 * @param {function} callback
 * @public
 */MemoryStore$1.prototype.clear=function clear(e){this.sessions=Object.create(null);e&&k(e)};
/**
 * Destroy the session associated with the given session ID.
 *
 * @param {string} sessionId
 * @public
 */MemoryStore$1.prototype.destroy=function destroy(e,s){delete this.sessions[e];s&&k(s)};
/**
 * Fetch session by the given session ID.
 *
 * @param {string} sessionId
 * @param {function} callback
 * @public
 */MemoryStore$1.prototype.get=function get(e,s){k(s,null,getSession.call(this,e))};
/**
 * Commit the given session associated with the given sessionId to the store.
 *
 * @param {string} sessionId
 * @param {object} session
 * @param {function} callback
 * @public
 */MemoryStore$1.prototype.set=function set(e,s,o){this.sessions[e]=JSON.stringify(s);o&&k(o)};
/**
 * Get number of active sessions.
 *
 * @param {function} callback
 * @public
 */MemoryStore$1.prototype.length=function length(e){this.all((function(s,o){if(s)return e(s);e(null,Object.keys(o).length)}))};
/**
 * Touch the given session object associated with the given session ID.
 *
 * @param {string} sessionId
 * @param {object} session
 * @param {function} callback
 * @public
 */MemoryStore$1.prototype.touch=function touch(e,s,o){var r=getSession.call(this,e);if(r){r.cookie=s.cookie;this.sessions[e]=JSON.stringify(r)}o&&k(o)};function getSession(e){var s=this.sessions[e];if(s){s=JSON.parse(s);if(s.cookie){var o=typeof s.cookie.expires==="string"?new Date(s.cookie.expires):s.cookie.expires;if(o&&o<=Date.now()){delete this.sessions[e];return}}return s}}var S=p;var w=e;try{"default"in e&&(w=e.default)}catch(e){}var b=s;try{"default"in s&&(b=s.default)}catch(e){}var D=o;try{"default"in o&&(D=o.default)}catch(e){}var I=r;try{"default"in r&&(I=r.default)}catch(e){}var M=i;try{"default"in i&&(M=i.default)}catch(e){}var x=t;try{"default"in t&&(x=t.default)}catch(e){}var O=n;try{"default"in n&&(O=n.default)}catch(e){}var C=a;try{"default"in a&&(C=a.default)}catch(e){}var T=u;try{"default"in u&&(T=u.default)}catch(e){}var $={};var j=v;var N=w.Buffer;var q=b;var A=D;var E=I("express-session");var H=M("express-session");var z=x;var J=O;var _=C;var B=T.sync;var L=f;var U=S;var P=l;var W=c;var F="production";$=$=session;$.Store=W;$.Cookie=L;$.Session=P;$.MemoryStore=U;var G="Warning: connect.session() MemoryStore is not\ndesigned for a production environment, as it will leak\nmemory, and will not scale past a single process.";var K=typeof setImmediate==="function"?j.nextTick:function(e){j.nextTick(e.bind.apply(e,arguments))};
/**
 * Setup session store with the given `options`.
 *
 * @param {Object} [options]
 * @param {Object} [options.cookie] Options for cookie
 * @param {Function} [options.genid]
 * @param {String} [options.name=connect.sid] Session ID cookie name
 * @param {Boolean} [options.proxy]
 * @param {Boolean} [options.resave] Resave unmodified sessions back to the store
 * @param {Boolean} [options.rolling] Enable/disable rolling session expiration
 * @param {Boolean} [options.saveUninitialized] Save uninitialized sessions to the store
 * @param {String|Array} [options.secret] Secret for signing session ID
 * @param {Object} [options.store=MemoryStore] Session store
 * @param {String} [options.unset]
 * @return {Function} middleware
 * @public
 */function session(e){var s=e||{};var o=s.cookie||{};var r=s.genid||generateSessionId;var i=s.name||s.key||"connect.sid";var t=s.store||new U;var n=s.proxy;var a=s.resave;var u=Boolean(s.rolling);var c=s.saveUninitialized;var f=s.secret;if(typeof r!=="function")throw new TypeError("genid option must be a function");if(a===void 0){H("undefined resave option; provide resave option");a=true}if(c===void 0){H("undefined saveUninitialized option; provide saveUninitialized option");c=true}if(s.unset&&s.unset!=="destroy"&&s.unset!=="keep")throw new TypeError('unset option must be "destroy" or "keep"');var l=s.unset==="destroy";if(Array.isArray(f)&&f.length===0)throw new TypeError("secret option array must contain one or more strings");f&&!Array.isArray(f)&&(f=[f]);f||H("req.secret; provide secret option");F==="production"&&t instanceof U&&console.warn(G);t.generate=function(e){e.sessionID=r(e);e.session=new P(e);e.session.cookie=new L(o);o.secure==="auto"&&(e.session.cookie.secure=issecure(e,n))};var d=typeof t.touch==="function";var v=true;t.on("disconnect",(function ondisconnect(){v=false}));t.on("connect",(function onconnect(){v=true}));return function session(e,s,r){if(e.session)r();else if(v){var h=J.original(e).pathname||"/";if(h.indexOf(o.path||"/")===0)if(f||e.secret){var p=f||[e.secret];var y;var g;var m;var k=false;e.sessionStore=t;var S=e.sessionID=getcookie(e,i,p);z(s,(function(){if(e.session){if(shouldSetCookie(e))if(!e.session.cookie.secure||issecure(e,n)){if(!k){e.session.touch();k=true}try{setcookie(s,i,e.sessionID,p[0],e.session.cookie.data)}catch(e){K(r,e)}}else E("not secured")}else E("no session")}));var w=s.end;var b=s.write;var D=false;s.end=function end(o,i){if(D)return false;D=true;var n;var a=true;function writeend(){if(a){n=w.call(s,o,i);a=false}else w.call(s)}function writetop(){if(!a)return n;s._header||s._implicitHeader();if(o==null){n=true;return n}var e=Number(s.getHeader("Content-Length"));if(!isNaN(e)&&e>0){o=N.isBuffer(o)?o:N.from(o,i);i=void 0;if(o.length!==0){E("split response");n=b.call(s,o.slice(0,o.length-1));o=o.slice(o.length-1,o.length);return n}}n=b.call(s,o,i);a=false;return n}if(shouldDestroy(e)){E("destroying");t.destroy(e.sessionID,(function ondestroy(e){e&&K(r,e);E("destroyed");writeend()}));return writetop()}if(!e.session){E("no session");return w.call(s,o,i)}if(!k){e.session.touch();k=true}if(shouldSave(e)){e.session.save((function onsave(e){e&&K(r,e);writeend()}));return writetop()}if(d&&shouldTouch(e)){E("touching");t.touch(e.sessionID,e.session,(function ontouch(e){e&&K(r,e);E("touched");writeend()}));return writetop()}return w.call(s,o,i)};if(e.sessionID){E("fetching %s",e.sessionID);t.get(e.sessionID,(function(s,o){if(s&&s.code!=="ENOENT"){E("error %j",s);r(s)}else{try{if(s||!o){E("no session found");generate()}else{E("session found");inflate(e,o)}}catch(e){r(e);return}r()}}))}else{E("no SID sent, generating session");generate();r()}}else r(new Error("secret option required for sessions"));else{E("pathname mismatch");r()}}else{E("store is disconnected");r()}function generate(){t.generate(e);g=e.sessionID;y=hash(e.session);wrapmethods(e.session)}function inflate(e,s){t.createSession(e,s);g=e.sessionID;y=hash(s);a||(m=y);wrapmethods(e.session)}function rewrapmethods(s,o){return function(){e.session!==s&&wrapmethods(e.session);o.apply(this,arguments)}}function wrapmethods(e){var s=e.reload;var o=e.save;function reload(e){E("reloading %s",this.id);s.call(this,rewrapmethods(this,e))}function save(){E("saving %s",this.id);m=hash(this);o.apply(this,arguments)}Object.defineProperty(e,"reload",{configurable:true,enumerable:false,value:reload,writable:true});Object.defineProperty(e,"save",{configurable:true,enumerable:false,value:save,writable:true})}function isModified(e){return g!==e.id||y!==hash(e)}function isSaved(e){return g===e.id&&m===hash(e)}function shouldDestroy(e){return e.sessionID&&l&&e.session==null}function shouldSave(e){if(typeof e.sessionID!=="string"){E("session ignored because of bogus req.sessionID %o",e.sessionID);return false}return c||m||S===e.sessionID?!isSaved(e.session):isModified(e.session)}function shouldTouch(e){if(typeof e.sessionID!=="string"){E("session ignored because of bogus req.sessionID %o",e.sessionID);return false}return S===e.sessionID&&!shouldSave(e)}function shouldSetCookie(e){return typeof e.sessionID==="string"&&(S!==e.sessionID?c||isModified(e.session):u||e.session.cookie.expires!=null&&isModified(e.session))}}}function generateSessionId(e){return B(24)}function getcookie(e,s,o){var r=e.headers.cookie;var i;var t;if(r){var n=q.parse(r);i=n[s];if(i)if(i.substr(0,2)==="s:"){t=unsigncookie(i.slice(2),o);if(t===false){E("cookie signature invalid");t=void 0}}else E("cookie unsigned")}if(!t&&e.signedCookies){t=e.signedCookies[s];t&&H("cookie should be available in req.headers.cookie")}if(!t&&e.cookies){i=e.cookies[s];if(i)if(i.substr(0,2)==="s:"){t=unsigncookie(i.slice(2),o);t&&H("cookie should be available in req.headers.cookie");if(t===false){E("cookie signature invalid");t=void 0}}else E("cookie unsigned")}return t}
/**
 * Hash the given `sess` object omitting changes to `.cookie`.
 *
 * @param {Object} sess
 * @return {String}
 * @private
 */function hash(e){var s=JSON.stringify(e,(function(s,o){if(this!==e||s!=="cookie")return o}));return A.createHash("sha1").update(s,"utf8").digest("hex")}
/**
 * Determine if request is secure.
 *
 * @param {Object} req
 * @param {Boolean} [trustProxy]
 * @return {Boolean}
 * @private
 */function issecure(e,s){if(e.connection&&e.connection.encrypted)return true;if(s===false)return false;if(s!==true)return e.secure===true;var o=e.headers["x-forwarded-proto"]||"";var r=o.indexOf(",");var i=r!==-1?o.substr(0,r).toLowerCase().trim():o.toLowerCase().trim();return i==="https"}function setcookie(e,s,o,r,i){var t="s:"+_.sign(o,r);var n=q.serialize(s,t,i);E("set-cookie %s",n);var a=e.getHeader("Set-Cookie")||[];var u=Array.isArray(a)?a.concat(n):[a,n];e.setHeader("Set-Cookie",u)}
/**
 * Verify and decode the given `val` with `secrets`.
 *
 * @param {String} val
 * @param {Array} secrets
 * @returns {String|Boolean}
 * @private
 */function unsigncookie(e,s){for(var o=0;o<s.length;o++){var r=_.unsign(e,s[o]);if(r!==false)return r}return false}var Q=$;const R=$.Store,V=$.Cookie,X=$.Session,Y=$.MemoryStore;export{V as Cookie,Y as MemoryStore,X as Session,R as Store,Q as default};

