// path-to-regexp@0.1.12 downloaded from https://ga.jspm.io/npm:path-to-regexp@0.1.12/index.js

var e={};e=pathToRegexp;var r=/\\.|\((?:\?<(.*?)>)?(?!\?)/g;
/**
 * Normalize the given path string,
 * returning a regular expression.
 *
 * An empty array should be passed,
 * which will contain the placeholder
 * key names. For example "/user/:id" will
 * then contain ["id"].
 *
 * @param  {String|RegExp|Array} path
 * @param  {Array} keys
 * @param  {Object} options
 * @return {RegExp}
 * @api private
 */function pathToRegexp(e,n,t){t=t||{};n=n||[];var a=t.strict;var i=t.end!==false;var o=t.sensitive?"":"i";var f=t.lookahead!==false;var s=0;var l=n.length;var p=0;var u=0;var g=0;var h="";var v;if(e instanceof RegExp){while(v=r.exec(e.source))v[0][0]!=="\\"&&n.push({name:v[1]||u++,optional:false,offset:v.index});return e}if(Array.isArray(e)){e=e.map((function(e){return pathToRegexp(e,n,t).source}));return new RegExp(e.join("|"),o)}if(typeof e!=="string")throw new TypeError("path must be a string, array of strings, or regular expression");e=e.replace(/\\.|(\/)?(\.)?:(\w+)(\(.*?\))?(\*)?(\?)?|[.*]|\/\(/g,(function(r,t,a,i,o,f,l,p){if(r[0]==="\\"){h+=r;g+=2;return r}if(r==="."){h+="\\.";s+=1;g+=1;return"\\."}t||a?h="":h+=e.slice(g,p);g=p+r.length;if(r==="*"){s+=3;return"(.*)"}if(r==="/("){h+="/";s+=2;return"/(?:"}t=t||"";a=a?"\\.":"";l=l||"";o=o?o.replace(/\\.|\*/,(function(e){return e==="*"?"(.*)":e})):h?"((?:(?!/|"+h+").)+?)":"([^/"+a+"]+?)";n.push({name:i,optional:!!l,offset:p+s});var u="(?:"+a+t+o+(f?"((?:[/"+a+"].+?)?)":"")+")"+l;s+=u.length-r.length;return u}));while(v=r.exec(e))if(v[0][0]!=="\\"){(l+p===n.length||n[l+p].offset>v.index)&&n.splice(l+p,0,{name:u++,optional:false,offset:v.index});p++}e+=a?"":e[e.length-1]==="/"?"?":"/?";i?e+="$":e[e.length-1]!=="/"&&(e+=f?"(?=/|$)":"(?:/|$)");return new RegExp("^"+e,o)}var n=e;export{n as default};

