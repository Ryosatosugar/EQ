// platform@1.3.6 downloaded from https://ga.jspm.io/npm:platform@1.3.6/platform.js

var e="undefined"!==typeof globalThis?globalThis:"undefined"!==typeof self?self:global;var t={};var r={exports:t};(function(){var i={function:true,object:true};var a=i[typeof window]&&window||this||e;var n=a;var o=i["object"]&&t;var l=i["object"]&&r&&!r.nodeType&&r;var s=o&&l&&"object"==typeof e&&e;!s||s.global!==s&&s.window!==s&&s.self!==s||(a=s);var b=Math.pow(2,53)-1;var c=/\bOpera/;var p=this||e;var u=Object.prototype;var f=u.hasOwnProperty;var d=u.toString;
/**
   * Capitalizes a string value.
   *
   * @private
   * @param {string} string The string to capitalize.
   * @returns {string} The capitalized string.
   */function capitalize(e){e=String(e);return e.charAt(0).toUpperCase()+e.slice(1)}
/**
   * A utility function to clean up the OS name.
   *
   * @private
   * @param {string} os The OS name to clean up.
   * @param {string} [pattern] A `RegExp` pattern matching the OS name.
   * @param {string} [label] A label for the OS.
   */function cleanupOS(e,t,r){var i={"10.0":"10",6.4:"10 Technical Preview",6.3:"8.1",6.2:"8",6.1:"Server 2008 R2 / 7","6.0":"Server 2008 / Vista",5.2:"Server 2003 / XP 64-bit",5.1:"XP",5.01:"2000 SP1","5.0":"2000","4.0":"NT","4.90":"ME"};t&&r&&/^Win/i.test(e)&&!/^Windows Phone /i.test(e)&&(i=i[/[\d.]+$/.exec(e)])&&(e="Windows "+i);e=String(e);t&&r&&(e=e.replace(RegExp(t,"i"),r));e=format(e.replace(/ ce$/i," CE").replace(/\bhpw/i,"web").replace(/\bMacintosh\b/,"Mac OS").replace(/_PowerPC\b/i," OS").replace(/\b(OS X) [^ \d]+/i,"$1").replace(/\bMac (OS X)\b/,"$1").replace(/\/(\d)/," $1").replace(/_/g,".").replace(/(?: BePC|[ .]*fc[ \d.]+)$/i,"").replace(/\bx86\.64\b/gi,"x86_64").replace(/\b(Windows Phone) OS\b/,"$1").replace(/\b(Chrome OS \w+) [\d.]+\b/,"$1").split(" on ")[0]);return e}
/**
   * An iteration utility for arrays and objects.
   *
   * @private
   * @param {Array|Object} object The object to iterate over.
   * @param {Function} callback The function called per iteration.
   */function each(e,t){var r=-1,i=e?e.length:0;if("number"==typeof i&&i>-1&&i<=b)while(++r<i)t(e[r],r,e);else forOwn(e,t)}
/**
   * Trim and conditionally capitalize string values.
   *
   * @private
   * @param {string} string The string to format.
   * @returns {string} The formatted string.
   */function format(e){e=trim(e);return/^(?:webOS|i(?:OS|P))/.test(e)?e:capitalize(e)}
/**
   * Iterates over an object's own properties, executing the `callback` for each.
   *
   * @private
   * @param {Object} object The object to iterate over.
   * @param {Function} callback The function executed per own property.
   */function forOwn(e,t){for(var r in e)f.call(e,r)&&t(e[r],r,e)}
/**
   * Gets the internal `[[Class]]` of a value.
   *
   * @private
   * @param {*} value The value.
   * @returns {string} The `[[Class]]`.
   */function getClassOf(e){return null==e?capitalize(e):d.call(e).slice(8,-1)}
/**
   * Host objects can return type values that are different from their actual
   * data type. The objects we are concerned with usually return non-primitive
   * types of "object", "function", or "unknown".
   *
   * @private
   * @param {*} object The owner of the property.
   * @param {string} property The property to check.
   * @returns {boolean} Returns `true` if the property value is a non-primitive, else `false`.
   */function isHostType(e,t){var r=null!=e?typeof e[t]:"number";return!/^(?:boolean|number|string|undefined)$/.test(r)&&("object"!=r||!!e[t])}
/**
   * Prepares a string for use in a `RegExp` by making hyphens and spaces optional.
   *
   * @private
   * @param {string} string The string to qualify.
   * @returns {string} The qualified string.
   */function qualify(e){return String(e).replace(/([ -])(?!$)/g,"$1?")}
/**
   * A bare-bones `Array#reduce` like utility function.
   *
   * @private
   * @param {Array} array The array to iterate over.
   * @param {Function} callback The function called per iteration.
   * @returns {*} The accumulated result.
   */function reduce(e,t){var r=null;each(e,(function(i,a){r=t(r,i,a,e)}));return r}
/**
   * Removes leading and trailing whitespace from a string.
   *
   * @private
   * @param {string} string The string to trim.
   * @returns {string} The trimmed string.
   */function trim(e){return String(e).replace(/^ +| +$/g,"")}
/**
   * Creates a new platform object.
   *
   * @memberOf platform
   * @param {Object|string} [ua=navigator.userAgent] The user agent string or
   *  context object.
   * @returns {Object} A platform object.
   */function parse(t){var r=a;var i=t&&"object"==typeof t&&"String"!=getClassOf(t);if(i){r=t;t=null}var o=r.navigator||{};var l=o.userAgent||"";t||(t=l);var s=i||p==n;var b=i?!!o.likeChrome:/\bChrome\b/.test(t)&&!/internal|\n/i.test(d.toString());var u="Object",f=i?u:"ScriptBridgingProxyObject",S=i?u:"Environment",g=i&&r.java?"JavaPackage":getClassOf(r.java),x=i?u:"RuntimeObject";var h=/\bJava/.test(g)&&r.java;var m=h&&getClassOf(r.environment)==S;var v=h?"a":"α";var O=h?"b":"β";var y=r.document||{};var w=r.operamini||r.opera;var M=c.test(M=i&&w?w["[[Class]]"]:getClassOf(w))?M:w=null;var E;var P=t;var C=[];var B=null;var W=t==l;var k=W&&w&&"function"==typeof w.version&&w.version();var R;var A=getLayout([{label:"EdgeHTML",pattern:"Edge"},"Trident",{label:"WebKit",pattern:"AppleWebKit"},"iCab","Presto","NetFront","Tasman","KHTML","Gecko"]);var I=getName(["Adobe AIR","Arora","Avant Browser","Breach","Camino","Electron","Epiphany","Fennec","Flock","Galeon","GreenBrowser","iCab","Iceweasel","K-Meleon","Konqueror","Lunascape","Maxthon",{label:"Microsoft Edge",pattern:"(?:Edge|Edg|EdgA|EdgiOS)"},"Midori","Nook Browser","PaleMoon","PhantomJS","Raven","Rekonq","RockMelt",{label:"Samsung Internet",pattern:"SamsungBrowser"},"SeaMonkey",{label:"Silk",pattern:"(?:Cloud9|Silk-Accelerated)"},"Sleipnir","SlimBrowser",{label:"SRWare Iron",pattern:"Iron"},"Sunrise","Swiftfox","Vivaldi","Waterfox","WebPositive",{label:"Yandex Browser",pattern:"YaBrowser"},{label:"UC Browser",pattern:"UCBrowser"},"Opera Mini",{label:"Opera Mini",pattern:"OPiOS"},"Opera",{label:"Opera",pattern:"OPR"},"Chromium","Chrome",{label:"Chrome",pattern:"(?:HeadlessChrome)"},{label:"Chrome Mobile",pattern:"(?:CriOS|CrMo)"},{label:"Firefox",pattern:"(?:Firefox|Minefield)"},{label:"Firefox for iOS",pattern:"FxiOS"},{label:"IE",pattern:"IEMobile"},{label:"IE",pattern:"MSIE"},"Safari"]);var T=getProduct([{label:"BlackBerry",pattern:"BB10"},"BlackBerry",{label:"Galaxy S",pattern:"GT-I9000"},{label:"Galaxy S2",pattern:"GT-I9100"},{label:"Galaxy S3",pattern:"GT-I9300"},{label:"Galaxy S4",pattern:"GT-I9500"},{label:"Galaxy S5",pattern:"SM-G900"},{label:"Galaxy S6",pattern:"SM-G920"},{label:"Galaxy S6 Edge",pattern:"SM-G925"},{label:"Galaxy S7",pattern:"SM-G930"},{label:"Galaxy S7 Edge",pattern:"SM-G935"},"Google TV","Lumia","iPad","iPod","iPhone","Kindle",{label:"Kindle Fire",pattern:"(?:Cloud9|Silk-Accelerated)"},"Nexus","Nook","PlayBook","PlayStation Vita","PlayStation","TouchPad","Transformer",{label:"Wii U",pattern:"WiiU"},"Wii","Xbox One",{label:"Xbox 360",pattern:"Xbox"},"Xoom"]);var F=getManufacturer({Apple:{iPad:1,iPhone:1,iPod:1},Alcatel:{},Archos:{},Amazon:{Kindle:1,"Kindle Fire":1},Asus:{Transformer:1},"Barnes & Noble":{Nook:1},BlackBerry:{PlayBook:1},Google:{"Google TV":1,Nexus:1},HP:{TouchPad:1},HTC:{},Huawei:{},Lenovo:{},LG:{},Microsoft:{Xbox:1,"Xbox One":1},Motorola:{Xoom:1},Nintendo:{"Wii U":1,Wii:1},Nokia:{Lumia:1},Oppo:{},Samsung:{"Galaxy S":1,"Galaxy S2":1,"Galaxy S3":1,"Galaxy S4":1},Sony:{PlayStation:1,"PlayStation Vita":1},Xiaomi:{Mi:1,Redmi:1}});var G=getOS(["Windows Phone","KaiOS","Android","CentOS",{label:"Chrome OS",pattern:"CrOS"},"Debian",{label:"DragonFly BSD",pattern:"DragonFly"},"Fedora","FreeBSD","Gentoo","Haiku","Kubuntu","Linux Mint","OpenBSD","Red Hat","SuSE","Ubuntu","Xubuntu","Cygwin","Symbian OS","hpwOS","webOS ","webOS","Tablet OS","Tizen","Linux","Mac OS X","Macintosh","Mac","Windows 98;","Windows "]);
/**
     * Picks the layout engine from an array of guesses.
     *
     * @private
     * @param {Array} guesses An array of guesses.
     * @returns {null|string} The detected layout engine.
     */function getLayout(e){return reduce(e,(function(e,r){return e||RegExp("\\b"+(r.pattern||qualify(r))+"\\b","i").exec(t)&&(r.label||r)}))}
/**
     * Picks the manufacturer from an array of guesses.
     *
     * @private
     * @param {Array} guesses An object of guesses.
     * @returns {null|string} The detected manufacturer.
     */function getManufacturer(e){return reduce(e,(function(e,r,i){return e||(r[T]||r[/^[a-z]+(?: +[a-z]+\b)*/i.exec(T)]||RegExp("\\b"+qualify(i)+"(?:\\b|\\w*\\d)","i").exec(t))&&i}))}
/**
     * Picks the browser name from an array of guesses.
     *
     * @private
     * @param {Array} guesses An array of guesses.
     * @returns {null|string} The detected browser name.
     */function getName(e){return reduce(e,(function(e,r){return e||RegExp("\\b"+(r.pattern||qualify(r))+"\\b","i").exec(t)&&(r.label||r)}))}
/**
     * Picks the OS name from an array of guesses.
     *
     * @private
     * @param {Array} guesses An array of guesses.
     * @returns {null|string} The detected OS name.
     */function getOS(e){return reduce(e,(function(e,r){var i=r.pattern||qualify(r);!e&&(e=RegExp("\\b"+i+"(?:/[\\d.]+|[ \\w.]*)","i").exec(t))&&(e=cleanupOS(e,i,r.label||r));return e}))}
/**
     * Picks the product name from an array of guesses.
     *
     * @private
     * @param {Array} guesses An array of guesses.
     * @returns {null|string} The detected product name.
     */function getProduct(e){return reduce(e,(function(e,r){var i=r.pattern||qualify(r);if(!e&&(e=RegExp("\\b"+i+" *\\d+[.\\w_]*","i").exec(t)||RegExp("\\b"+i+" *\\w+-[\\w]*","i").exec(t)||RegExp("\\b"+i+"(?:; *(?:[a-z]+[_-])?[a-z]+\\d+|[^ ();-]*)","i").exec(t))){(e=String(r.label&&!RegExp(i,"i").test(r.label)?r.label:e).split("/"))[1]&&!/[\d.]+/.test(e[0])&&(e[0]+=" "+e[1]);r=r.label||r;e=format(e[0].replace(RegExp(i,"i"),r).replace(RegExp("; *(?:"+r+"[_-])?","i")," ").replace(RegExp("("+r+")[-_.]?(\\w)","i"),"$1 $2"))}return e}))}
/**
     * Resolves the version using an array of UA patterns.
     *
     * @private
     * @param {Array} patterns An array of UA patterns.
     * @returns {null|string} The detected version.
     */function getVersion(e){return reduce(e,(function(e,r){return e||(RegExp(r+"(?:-[\\d.]+/|(?: for [\\w-]+)?[ /-])([\\d.]+[^ ();/_-]*)","i").exec(t)||0)[1]||null}))}
/**
     * Returns `platform.description` when the platform object is coerced to a string.
     *
     * @name toString
     * @memberOf platform
     * @returns {string} Returns `platform.description` if available, else an empty string.
     */function toStringPlatform(){return(this||e).description||""}A&&(A=[A]);/\bAndroid\b/.test(G)&&!T&&(E=/\bAndroid[^;]*;(.*?)(?:Build|\) AppleWebKit)\b/i.exec(t))&&(T=trim(E[1]).replace(/^[a-z]{2}-[a-z]{2};\s*/i,"")||null);F&&!T?T=getProduct([F]):F&&T&&(T=T.replace(RegExp("^("+qualify(F)+")[-_.\\s]","i"),F+" ").replace(RegExp("^("+qualify(F)+")[-_.]?(\\w)","i"),F+" $2"));(E=/\bGoogle TV\b/.exec(T))&&(T=E[0]);/\bSimulator\b/i.test(t)&&(T=(T?T+" ":"")+"Simulator");"Opera Mini"==I&&/\bOPiOS\b/.test(t)&&C.push("running in Turbo/Uncompressed mode");if("IE"==I&&/\blike iPhone OS\b/.test(t)){E=parse(t.replace(/like iPhone OS/,""));F=E.manufacturer;T=E.product}else if(/^iP/.test(T)){I||(I="Safari");G="iOS"+((E=/ OS ([\d_]+)/i.exec(t))?" "+E[1].replace(/_/g,"."):"")}else if("Konqueror"==I&&/^Linux\b/i.test(G))G="Kubuntu";else if(F&&"Google"!=F&&(/Chrome/.test(I)&&!/\bMobile Safari\b/i.test(t)||/\bVita\b/.test(T))||/\bAndroid\b/.test(G)&&/^Chrome/.test(I)&&/\bVersion\//i.test(t)){I="Android Browser";G=/\bAndroid\b/.test(G)?G:"Android"}else if("Silk"==I){if(!/\bMobi/i.test(t)){G="Android";C.unshift("desktop mode")}/Accelerated *= *true/i.test(t)&&C.unshift("accelerated")}else if("UC Browser"==I&&/\bUCWEB\b/.test(t))C.push("speed mode");else if("PaleMoon"==I&&(E=/\bFirefox\/([\d.]+)\b/.exec(t)))C.push("identifying as Firefox "+E[1]);else if("Firefox"==I&&(E=/\b(Mobile|Tablet|TV)\b/i.exec(t))){G||(G="Firefox OS");T||(T=E[1])}else if(!I||(E=!/\bMinefield\b/i.test(t)&&/\b(?:Firefox|Safari)\b/.exec(I))){I&&!T&&/[\/,]|^[^(]+?\)/.test(t.slice(t.indexOf(E+"/")+8))&&(I=null);(E=T||F||G)&&(T||F||/\b(?:Android|Symbian OS|Tablet OS|webOS)\b/.test(G))&&(I=/[a-z]+(?: Hat)?/i.exec(/\bAndroid\b/.test(G)?G:E)+" Browser")}else"Electron"==I&&(E=(/\bChrome\/([\d.]+)\b/.exec(t)||0)[1])&&C.push("Chromium "+E);k||(k=getVersion(["(?:Cloud9|CriOS|CrMo|Edge|Edg|EdgA|EdgiOS|FxiOS|HeadlessChrome|IEMobile|Iron|Opera ?Mini|OPiOS|OPR|Raven|SamsungBrowser|Silk(?!/[\\d.]+$)|UCBrowser|YaBrowser)","Version",qualify(I),"(?:Firefox|Minefield|NetFront)"]));(E="iCab"==A&&parseFloat(k)>3&&"WebKit"||/\bOpera\b/.test(I)&&(/\bOPR\b/.test(t)?"Blink":"Presto")||/\b(?:Midori|Nook|Safari)\b/i.test(t)&&!/^(?:Trident|EdgeHTML)$/.test(A)&&"WebKit"||!A&&/\bMSIE\b/i.test(t)&&("Mac OS"==G?"Tasman":"Trident")||"WebKit"==A&&/\bPlayStation\b(?! Vita\b)/i.test(I)&&"NetFront")&&(A=[E]);if("IE"==I&&(E=(/; *(?:XBLWP|ZuneWP)(\d+)/i.exec(t)||0)[1])){I+=" Mobile";G="Windows Phone "+(/\+$/.test(E)?E:E+".x");C.unshift("desktop mode")}else if(/\bWPDesktop\b/i.test(t)){I="IE Mobile";G="Windows Phone 8.x";C.unshift("desktop mode");k||(k=(/\brv:([\d.]+)/.exec(t)||0)[1])}else if("IE"!=I&&"Trident"==A&&(E=/\brv:([\d.]+)/.exec(t))){I&&C.push("identifying as "+I+(k?" "+k:""));I="IE";k=E[1]}if(W){if(isHostType(r,"global")){if(h){E=h.lang.System;P=E.getProperty("os.arch");G=G||E.getProperty("os.name")+" "+E.getProperty("os.version")}if(m){try{k=r.require("ringo/engine").version.join(".");I="RingoJS"}catch(e){if((E=r.system)&&E.global.system==r.system){I="Narwhal";G||(G=E[0].os||null)}}I||(I="Rhino")}else if("object"==typeof r.process&&!r.process.browser&&(E=r.process)){if("object"==typeof E.versions)if("string"==typeof E.versions.electron){C.push("Node "+E.versions.node);I="Electron";k=E.versions.electron}else if("string"==typeof E.versions.nw){C.push("Chromium "+k,"Node "+E.versions.node);I="NW.js";k=E.versions.nw}if(!I){I="Node.js";P=E.arch;G=E.platform;k=/[\d.]+/.exec(E.version);k=k?k[0]:null}}}else if(getClassOf(E=r.runtime)==f){I="Adobe AIR";G=E.flash.system.Capabilities.os}else if(getClassOf(E=r.phantom)==x){I="PhantomJS";k=(E=E.version||null)&&E.major+"."+E.minor+"."+E.patch}else if("number"==typeof y.documentMode&&(E=/\bTrident\/(\d+)/i.exec(t))){k=[k,y.documentMode];if((E=+E[1]+4)!=k[1]){C.push("IE "+k[1]+" mode");A&&(A[1]="");k[1]=E}k="IE"==I?String(k[1].toFixed(1)):k[0]}else if("number"==typeof y.documentMode&&/^(?:Chrome|Firefox)\b/.test(I)){C.push("masking as "+I+" "+k);I="IE";k="11.0";A=["Trident"];G="Windows"}G=G&&format(G)}if(k&&(E=/(?:[ab]|dp|pre|[ab]\d+pre)(?:\d+\+?)?$/i.exec(k)||/(?:alpha|beta)(?: ?\d)?/i.exec(t+";"+(W&&o.appMinorVersion))||/\bMinefield\b/i.test(t)&&"a")){B=/b/i.test(E)?"beta":"alpha";k=k.replace(RegExp(E+"\\+?$"),"")+("beta"==B?O:v)+(/\d+\+?/.exec(E)||"")}if("Fennec"==I||"Firefox"==I&&/\b(?:Android|Firefox OS|KaiOS)\b/.test(G))I="Firefox Mobile";else if("Maxthon"==I&&k)k=k.replace(/\.[\d.]+/,".x");else if(/\bXbox\b/i.test(T)){"Xbox 360"==T&&(G=null);"Xbox 360"==T&&/\bIEMobile\b/.test(t)&&C.unshift("mobile mode")}else if(!/^(?:Chrome|IE|Opera)$/.test(I)&&(!I||T||/Browser|Mobi/.test(I))||"Windows CE"!=G&&!/Mobi/i.test(t)){if("IE"==I&&W)try{null===r.external&&C.unshift("platform preview")}catch(e){C.unshift("embedded")}else if((/\bBlackBerry\b/.test(T)||/\bBB10\b/.test(t))&&(E=(RegExp(T.replace(/ +/g," *")+"/([.\\d]+)","i").exec(t)||0)[1]||k)){E=[E,/BB10/.test(t)];G=(E[1]?(T=null,F="BlackBerry"):"Device Software")+" "+E[0];k=null}else if((this||e)!=forOwn&&"Wii"!=T&&(W&&w||/Opera/.test(I)&&/\b(?:MSIE|Firefox)\b/i.test(t)||"Firefox"==I&&/\bOS X (?:\d+\.){2,}/.test(G)||"IE"==I&&(G&&!/^Win/.test(G)&&k>5.5||/\bWindows XP\b/.test(G)&&k>8||8==k&&!/\bTrident\b/.test(t)))&&!c.test(E=parse.call(forOwn,t.replace(c,"")+";"))&&E.name){E="ing as "+E.name+((E=E.version)?" "+E:"");if(c.test(I)){/\bIE\b/.test(E)&&"Mac OS"==G&&(G=null);E="identify"+E}else{E="mask"+E;I=M?format(M.replace(/([a-z])([A-Z])/g,"$1 $2")):"Opera";/\bIE\b/.test(E)&&(G=null);W||(k=null)}A=["Presto"];C.push(E)}}else I+=" Mobile";if(E=(/\bAppleWebKit\/([\d.]+\+?)/i.exec(t)||0)[1]){E=[parseFloat(E.replace(/\.(\d)$/,".0$1")),E];if("Safari"==I&&"+"==E[1].slice(-1)){I="WebKit Nightly";B="alpha";k=E[1].slice(0,-1)}else k!=E[1]&&k!=(E[2]=(/\bSafari\/([\d.]+\+?)/i.exec(t)||0)[1])||(k=null);E[1]=(/\b(?:Headless)?Chrome\/([\d.]+)/i.exec(t)||0)[1];537.36==E[0]&&537.36==E[2]&&parseFloat(E[1])>=28&&"WebKit"==A&&(A=["Blink"]);if(W&&(b||E[1])){A&&(A[1]="like Chrome");E=E[1]||(E=E[0],E<530?1:E<532?2:E<532.05?3:E<533?4:E<534.03?5:E<534.07?6:E<534.1?7:E<534.13?8:E<534.16?9:E<534.24?10:E<534.3?11:E<535.01?12:E<535.02?"13+":E<535.07?15:E<535.11?16:E<535.19?17:E<536.05?18:E<536.1?19:E<537.01?20:E<537.11?"21+":E<537.13?23:E<537.18?24:E<537.24?25:E<537.36?26:"Blink"!=A?"27":"28")}else{A&&(A[1]="like Safari");E=(E=E[0],E<400?1:E<500?2:E<526?3:E<533?4:E<534?"4+":E<535?5:E<537?6:E<538?7:E<601?8:E<602?9:E<604?10:E<606?11:E<608?12:"12")}A&&(A[1]+=" "+(E+="number"==typeof E?".x":/[.+]/.test(E)?"":"+"));"Safari"==I&&(!k||parseInt(k)>45)?k=E:"Chrome"==I&&/\bHeadlessChrome/i.test(t)&&C.unshift("headless")}if("Opera"==I&&(E=/\bzbov|zvav$/.exec(G))){I+=" ";C.unshift("desktop mode");if("zvav"==E){I+="Mini";k=null}else I+="Mobile";G=G.replace(RegExp(" *"+E+"$"),"")}else if("Safari"==I&&/\bChrome\b/.exec(A&&A[1])){C.unshift("desktop mode");I="Chrome Mobile";k=null;if(/\bOS X\b/.test(G)){F="Apple";G="iOS 4.3+"}else G=null}else/\bSRWare Iron\b/.test(I)&&!k&&(k=getVersion("Chrome"));k&&0==k.indexOf(E=/[\d.]+$/.exec(G))&&t.indexOf("/"+E+"-")>-1&&(G=trim(G.replace(E,"")));G&&-1!=G.indexOf(I)&&!RegExp(I+" OS").test(G)&&(G=G.replace(RegExp(" *"+qualify(I)+" *"),""));A&&!/\b(?:Avant|Nook)\b/.test(I)&&(/Browser|Lunascape|Maxthon/.test(I)||"Safari"!=I&&/^iOS/.test(G)&&/\bSafari\b/.test(A[1])||/^(?:Adobe|Arora|Breach|Midori|Opera|Phantom|Rekonq|Rock|Samsung Internet|Sleipnir|SRWare Iron|Vivaldi|Web)/.test(I)&&A[1])&&(E=A[A.length-1])&&C.push(E);C.length&&(C=["("+C.join("; ")+")"]);F&&T&&T.indexOf(F)<0&&C.push("on "+F);T&&C.push((/^on /.test(C[C.length-1])?"":"on ")+T);if(G){E=/ ([\d.+]+)$/.exec(G);R=E&&"/"==G.charAt(G.length-E[0].length-1);G={architecture:32,family:E&&!R?G.replace(E[0],""):G,version:E?E[1]:null,toString:function(){var t=(this||e).version;return(this||e).family+(t&&!R?" "+t:"")+(64==(this||e).architecture?" 64-bit":"")}}}if((E=/\b(?:AMD|IA|Win|WOW|x86_|x)64\b/i.exec(P))&&!/\bi686\b/i.test(P)){if(G){G.architecture=64;G.family=G.family.replace(RegExp(" *"+E),"")}I&&(/\bWOW64\b/i.test(t)||W&&/\w(?:86|32)$/.test(o.cpuClass||o.platform)&&!/\bWin64; x64\b/i.test(t))&&C.unshift("32-bit")}else G&&/^OS X/.test(G.family)&&"Chrome"==I&&parseFloat(k)>=39&&(G.architecture=64);t||(t=null);
/**
     * The platform object.
     *
     * @name platform
     * @type Object
     */var $={};
/**
     * The platform description.
     *
     * @memberOf platform
     * @type string|null
     */$.description=t;
/**
     * The name of the browser's layout engine.
     *
     * The list of common layout engines include:
     * "Blink", "EdgeHTML", "Gecko", "Trident" and "WebKit"
     *
     * @memberOf platform
     * @type string|null
     */$.layout=A&&A[0];
/**
     * The name of the product's manufacturer.
     *
     * The list of manufacturers include:
     * "Apple", "Archos", "Amazon", "Asus", "Barnes & Noble", "BlackBerry",
     * "Google", "HP", "HTC", "LG", "Microsoft", "Motorola", "Nintendo",
     * "Nokia", "Samsung" and "Sony"
     *
     * @memberOf platform
     * @type string|null
     */$.manufacturer=F;
/**
     * The name of the browser/environment.
     *
     * The list of common browser names include:
     * "Chrome", "Electron", "Firefox", "Firefox for iOS", "IE",
     * "Microsoft Edge", "PhantomJS", "Safari", "SeaMonkey", "Silk",
     * "Opera Mini" and "Opera"
     *
     * Mobile versions of some browsers have "Mobile" appended to their name:
     * eg. "Chrome Mobile", "Firefox Mobile", "IE Mobile" and "Opera Mobile"
     *
     * @memberOf platform
     * @type string|null
     */$.name=I;
/**
     * The alpha/beta release indicator.
     *
     * @memberOf platform
     * @type string|null
     */$.prerelease=B;
/**
     * The name of the product hosting the browser.
     *
     * The list of common products include:
     *
     * "BlackBerry", "Galaxy S4", "Lumia", "iPad", "iPod", "iPhone", "Kindle",
     * "Kindle Fire", "Nexus", "Nook", "PlayBook", "TouchPad" and "Transformer"
     *
     * @memberOf platform
     * @type string|null
     */$.product=T;
/**
     * The browser's user agent string.
     *
     * @memberOf platform
     * @type string|null
     */$.ua=t;
/**
     * The browser/environment version.
     *
     * @memberOf platform
     * @type string|null
     */$.version=I&&k;
/**
     * The name of the operating system.
     *
     * @memberOf platform
     * @type Object
     */$.os=G||{
/**
       * The CPU architecture the OS is built for.
       *
       * @memberOf platform.os
       * @type number|null
       */
architecture:null,
/**
       * The family of the OS.
       *
       * Common values include:
       * "Windows", "Windows Server 2008 R2 / 7", "Windows Server 2008 / Vista",
       * "Windows XP", "OS X", "Linux", "Ubuntu", "Debian", "Fedora", "Red Hat",
       * "SuSE", "Android", "iOS" and "Windows Phone"
       *
       * @memberOf platform.os
       * @type string|null
       */
family:null,
/**
       * The version of the OS.
       *
       * @memberOf platform.os
       * @type string|null
       */
version:null,
/**
       * Returns the OS string.
       *
       * @memberOf platform.os
       * @returns {string} The OS string.
       */
toString:function(){return"null"}};$.parse=parse;$.toString=toStringPlatform;$.version&&C.unshift(k);$.name&&C.unshift(I);!G||!I||G==String(G).split(" ")[0]&&(G==I.split(" ")[0]||T)||C.push(T?"("+G+")":"on "+G);C.length&&($.description=C.join(" "));return $}var S=parse();o&&l?forOwn(S,(function(e,t){o[t]=e})):a.platform=S}).call(t);var i=r.exports;export default i;

