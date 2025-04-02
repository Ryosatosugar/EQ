// utilise/colorfill@2.3.8 downloaded from https://ga.jspm.io/npm:utilise@2.3.8/colorfill.js

import r from"./client.js";import o from"./is.js";import t from"colors";import e from"./has.js";var i="undefined"!==typeof globalThis?globalThis:"undefined"!==typeof self?self:global;var f={};var l=r,n=!l&&t,p=e,s=o;f=colorfill();function colorfill(){["red","green","bold","grey","strip"].forEach((function(r){!s.str(String.prototype[r])&&Object.defineProperty(String.prototype,r,{get:function(){return String(this||i)}})}))}var a=f;export default a;

