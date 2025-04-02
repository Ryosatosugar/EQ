// inline-source-map@0.6.3 downloaded from https://ga.jspm.io/npm:inline-source-map@0.6.3/index.js

import*as t from"source-map";import n from"buffer";var r=t;try{"default"in t&&(r=t.default)}catch(t){}var e={};var o=n.Buffer;var a=r.SourceMapGenerator;function offsetMapping(t,n){return{line:n.line+t.line,column:n.column+t.column}}function newlinesIn(t){if(!t)return 0;var n=t.match(/\n/g);return n?n.length:0}function Generator(t){t=t||{};this.generator=new a({file:t.file||"",sourceRoot:t.sourceRoot||""});this.sourcesContent=void 0;this.opts=t}
/**
 * Adds the given mappings to the generator and offsets them if offset is given
 *
 * @name addMappings
 * @function
 * @param sourceFile {String} name of the source file
 * @param mappings {Array{{Object}} each object has the form { original: { line: _, column: _ }, generated: { line: _, column: _ } }
 * @param offset {Object} offset to apply to each mapping. Has the form { line: _, column: _ }
 * @return {Object} the generator to allow chaining
 */Generator.prototype.addMappings=function(t,n,r){var e=this.generator;r=r||{};r.line=r.hasOwnProperty("line")?r.line:0;r.column=r.hasOwnProperty("column")?r.column:0;n.forEach((function(n){e.addMapping({source:n.original?t:void 0,original:n.original,generated:offsetMapping(n.generated,r)})}));return this};
/**
 * Generates mappings for the given source, assuming that no translation from original to generated is necessary.
 *
 * @name addGeneratedMappings
 * @function
 * @param sourceFile {String} name of the source file
 * @param source {String} source of the file
 * @param offset {Object} offset to apply to each mapping. Has the form { line: _, column: _ }
 * @return {Object} the generator to allow chaining
 */Generator.prototype.addGeneratedMappings=function(t,n,r){var e=[],o=newlinesIn(n)+1;for(var a=1;a<=o;a++){var i={line:a,column:0};e.push({original:i,generated:i})}return this.addMappings(t,e,r)};
/**
 * Adds source content for the given source file.
 *
 * @name addSourceContent
 * @function
 * @param sourceFile {String} The source file for which a mapping is included
 * @param sourcesContent {String} The content of the source file
 * @return {Object} The generator to allow chaining
 */Generator.prototype.addSourceContent=function(t,n){this.sourcesContent=this.sourcesContent||{};this.sourcesContent[t]=n;return this};Generator.prototype.base64Encode=function(){var t=this.toString();return o.from?o.from(t).toString("base64"):new o(t).toString("base64")};Generator.prototype.inlineMappingUrl=function(){var t=this.opts.charset||"utf-8";return"//# sourceMappingURL=data:application/json;charset="+t+";base64,"+this.base64Encode()};Generator.prototype.toJSON=function(){var t=this.generator.toJSON();if(!this.sourcesContent)return t;var n=function(t){return typeof this.sourcesContent[t]==="string"?this.sourcesContent[t]:null}.bind(this);t.sourcesContent=t.sources.map(n);return t};Generator.prototype.toString=function(){return JSON.stringify(this)};Generator.prototype._mappings=function(){return this.generator._mappings._array};Generator.prototype.gen=function(){return this.generator};e=function(t){return new Generator(t)};e.Generator=Generator;var i=e;const s=e.Generator;export{s as Generator,i as default};

