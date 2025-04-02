// methods@1.1.2 downloaded from https://ga.jspm.io/npm:methods@1.1.2/index.js

import e from"http";var t={};var o=e;t=getCurrentNodeMethods()||getBasicNodeMethods();function getCurrentNodeMethods(){return o.METHODS&&o.METHODS.map((function lowerCaseMethod(e){return e.toLowerCase()}))}function getBasicNodeMethods(){return["get","post","put","head","delete","options","trace","copy","lock","mkcol","move","purge","propfind","proppatch","unlock","report","mkactivity","checkout","merge","m-search","notify","subscribe","unsubscribe","patch","search","connect"]}var r=t;export default r;

