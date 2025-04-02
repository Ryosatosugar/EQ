# Pin npm packages by running ./bin/importmap

pin "application", preload: true
pin "popper" # @1.0.1
pin "bootstrap" # @5.3.3

pin "@popperjs/core", to: "@popperjs--core.js" # @2.11.8
pin "#lib/internal/streams/from.js", to: "#lib--internal--streams--from.js.js" # @3.6.2
pin "#lib/internal/streams/stream.js", to: "#lib--internal--streams--stream.js.js" # @2.3.8
pin "#readable.js" # @2.3.8
pin "#util.inspect.js" # @2.1.0
pin "@compone/class", to: "@compone--class.js" # @1.1.1
pin "@compone/define", to: "@compone--define.js" # @1.2.4
pin "@compone/event", to: "@compone--event.js" # @1.1.2
pin "@sindresorhus/is", to: "@sindresorhus--is.js" # @4.6.0
pin "@szmarczak/http-timer", to: "@szmarczak--http-timer.js" # @4.0.5
pin "JSONStream" # @1.3.5
pin "accepts" # @1.3.8
pin "acorn" # @7.4.1
pin "acorn-node" # @1.8.2
pin "acorn/dist/walk", to: "acorn--dist--walk.js" # @5.7.4
pin "ajv" # @6.12.6
pin "ajv/lib/refs/json-schema-draft-06.json", to: "ajv--lib--refs--json-schema-draft-06.json.js" # @6.12.6
pin "anymatch" # @1.3.2
pin "archiver" # @3.1.1
pin "archiver-utils" # @2.1.0
pin "arr-diff" # @2.0.0
pin "arr-flatten" # @1.1.0
pin "arr-union" # @3.1.0
pin "array-flatten" # @1.1.1
pin "array-unique" # @0.2.1
pin "asn1" # @0.2.6
pin "assert" # @2.1.0
pin "assert-plus" # @1.0.0
pin "assign-symbols" # @1.0.0
pin "async" # @2.6.4
pin "async-each" # @1.0.6
pin "async_hooks" # @2.1.0
pin "aws-sign2" # @0.7.0
pin "aws4" # @1.13.2
pin "balanced-match" # @1.0.2
pin "base" # @0.11.2
pin "base64-js" # @1.5.1
pin "bcrypt-pbkdf" # @1.0.2
pin "binary-extensions" # @1.13.1
pin "bindings" # @1.5.0
pin "bl" # @4.1.0
pin "body-parser" # @1.20.3
pin "brace-expansion" # @1.1.11
pin "braces" # @1.8.5
pin "browser-icons" # @0.0.1
pin "browser-pack" # @6.1.0
pin "browser-resolve" # @1.11.3
pin "browserify" # @12.0.2
pin "buffer" # @2.1.0
pin "buffer-crc32" # @0.2.13
pin "bytes" # @3.1.2
pin "cache-base" # @1.0.1
pin "cacheable-lookup" # @5.0.4
pin "cacheable-request" # @7.0.4
pin "cached-path-relative" # @1.1.0
pin "call-bind-apply-helpers" # @1.0.2
pin "call-bind-apply-helpers/functionApply", to: "call-bind-apply-helpers--functionApply.js" # @1.0.2
pin "call-bind-apply-helpers/functionCall", to: "call-bind-apply-helpers--functionCall.js" # @1.0.2
pin "call-bound" # @2.1.0
pin "caseless" # @0.12.0
pin "child_process" # @2.1.0
pin "chokidar" # @1.7.0
pin "class-utils" # @0.3.6
pin "clone-response" # @1.0.3
pin "collection-visit" # @1.0.0
pin "colors" # @1.4.2
pin "combine-source-map" # @0.8.0
pin "combined-stream" # @1.0.8
pin "component-emitter" # @1.3.0
pin "compress-commons" # @2.1.1
pin "compressible" # @2.0.18
pin "compression" # @1.8.0
pin "concat-map" # @0.0.1
pin "concat-stream" # @1.5.2
pin "constants" # @2.1.0
pin "content-disposition" # @0.5.4
pin "content-type" # @1.0.5
pin "convert-source-map" # @1.1.3
pin "cookie" # @0.7.1
pin "cookie-parser" # @1.4.7
pin "cookie-signature" # @1.0.6
pin "copy-descriptor" # @0.1.1
pin "core-util-is" # @1.0.2
pin "crc" # @3.8.0
pin "crc32-stream" # @3.0.1
pin "cryonic" # @1.0.0
pin "crypto" # @2.1.0
pin "dash-ast" # @1.0.0
pin "debug" # @2.6.9
pin "decompress-response" # @6.0.0
pin "defer-to-connect" # @2.0.1
pin "define-property" # @2.0.2
pin "defined" # @1.0.1
pin "delayed-stream" # @1.0.0
pin "depd" # @2.0.0
pin "deps-sort" # @2.0.1
pin "destroy" # @1.2.0
pin "detective" # @4.7.1
pin "djbx" # @1.0.3
pin "dns" # @2.1.0
pin "dunder-proto/get", to: "dunder-proto--get.js" # @1.0.0
pin "duplexer2" # @0.1.4
pin "ecc-jsbn" # @0.1.2
pin "ecc-jsbn/lib/ec", to: "ecc-jsbn--lib--ec.js" # @0.1.2
pin "ee-first" # @1.1.1
pin "encodeurl" # @2.0.0
pin "end-of-stream" # @1.4.4
pin "es-define-property" # @1.0.1
pin "es-errors" # @1.3.0
pin "es-errors/eval", to: "es-errors--eval.js" # @1.3.0
pin "es-errors/range", to: "es-errors--range.js" # @1.3.0
pin "es-errors/ref", to: "es-errors--ref.js" # @1.3.0
pin "es-errors/syntax", to: "es-errors--syntax.js" # @1.3.0
pin "es-errors/type", to: "es-errors--type.js" # @1.3.0
pin "es-errors/uri", to: "es-errors--uri.js" # @1.3.0
pin "es-object-atoms" # @1.1.1
pin "escape-html" # @1.0.3
pin "etag" # @1.8.1
pin "events" # @1.1.1
pin "expand-brackets" # @0.1.5
pin "expand-range" # @1.8.2
pin "express" # @4.21.2
pin "express-session" # @1.18.1
pin "extend" # @3.0.2
pin "extend-shallow" # @3.0.2
pin "extglob" # @0.3.2
pin "extsprintf" # @1.3.0
pin "fast-deep-equal" # @3.1.3
pin "fast-json-stable-stringify" # @2.1.0
pin "fast-safe-stringify" # @2.1.1
pin "file-uri-to-path" # @1.0.0
pin "filename-regex" # @2.0.1
pin "fill-range" # @4.0.0
pin "finalhandler" # @1.3.1
pin "find-package-json" # @1.2.0
pin "for-in" # @1.0.2
pin "for-own" # @0.1.5
pin "forever-agent" # @0.6.1
pin "form-data" # @2.3.3
pin "forwarded" # @0.2.0
pin "fragment-cache" # @0.2.1
pin "fresh" # @0.5.2
pin "fs" # @2.1.0
pin "fs-constants" # @1.0.0
pin "fs.realpath" # @1.0.0
pin "fsevents" # @1.2.13
pin "function-bind" # @1.1.2
pin "get-assigned-identifiers" # @1.2.0
pin "get-intrinsic" # @1.3.0
pin "get-proto" # @1.0.1
pin "get-proto/Object.getPrototypeOf", to: "get-proto--Object.getPrototypeOf.js" # @1.0.1
pin "get-proto/Reflect.getPrototypeOf", to: "get-proto--Reflect.getPrototypeOf.js" # @1.0.1
pin "get-stream" # @5.2.0
pin "get-value" # @2.0.6
pin "glob" # @7.2.3
pin "glob-base" # @0.3.0
pin "glob-parent" # @2.0.0
pin "gopd" # @1.2.0
pin "got" # @11.8.6
pin "graceful-fs" # @4.2.11
pin "har-schema" # @2.0.0
pin "har-validator" # @5.1.5
pin "has" # @1.0.4
pin "has-symbols" # @1.1.0
pin "has-value" # @1.0.0
pin "has-values" # @1.0.0
pin "hasown" # @2.0.2
pin "htmlescape" # @1.1.1
pin "http" # @2.1.0
pin "http-cache-semantics" # @4.1.1
pin "http-errors" # @2.0.0
pin "http-signature" # @1.2.0
pin "http2" # @2.1.0
pin "http2-wrapper" # @1.0.3
pin "https" # @2.1.0
pin "icon-android" # @0.0.1
pin "icon-chrome" # @0.0.1
pin "icon-firefox" # @0.0.1
pin "icon-ie" # @0.0.1
pin "icon-ios" # @0.0.1
pin "icon-linux" # @0.0.1
pin "icon-opera" # @0.0.1
pin "icon-osx" # @0.0.1
pin "icon-safari" # @0.0.1
pin "icon-windows" # @0.0.1
pin "iconv-lite" # @0.4.24
pin "ieee754" # @1.2.1
pin "inflight" # @1.0.6
pin "inherits" # @2.0.4
pin "inline-source-map" # @0.6.3
pin "insert-module-globals" # @7.2.1
pin "ipaddr.js" # @1.9.1
pin "is-accessor-descriptor" # @1.0.1
pin "is-binary-path" # @1.0.1
pin "is-buffer" # @1.1.6
pin "is-data-descriptor" # @1.0.1
pin "is-descriptor" # @1.0.3
pin "is-dotfile" # @1.0.3
pin "is-equal-shallow" # @0.1.3
pin "is-extendable" # @0.1.1
pin "is-extglob" # @1.0.0
pin "is-glob" # @2.0.1
pin "is-number" # @3.0.0
pin "is-plain-object" # @2.0.4
pin "is-posix-bracket" # @0.1.1
pin "is-primitive" # @2.0.0
pin "is-typedarray" # @1.0.0
pin "is-windows" # @1.0.2
pin "isarray" # @0.0.1
pin "isobject" # @3.0.1
pin "isstream" # @0.1.2
pin "jsbn" # @0.1.1
pin "json-buffer" # @3.0.1
pin "json-schema" # @0.4.0
pin "json-schema-traverse" # @0.4.1
pin "json-stable-stringify" # @0.0.1
pin "json-stringify-safe" # @5.0.1
pin "jsonify" # @0.0.1
pin "jsonparse" # @1.3.1
pin "jsprim" # @1.4.2
pin "keyv" # @4.5.4
pin "kind-of" # @3.2.2
pin "labeled-stream-splicer" # @2.0.2
pin "lazystream" # @1.0.1
pin "lodash" # @4.17.21
pin "lodash.clonedeep" # @4.5.0
pin "lodash.defaults" # @4.2.0
pin "lodash.difference" # @4.5.0
pin "lodash.flatten" # @4.4.0
pin "lodash.isplainobject" # @4.0.6
pin "lodash.memoize" # @3.0.4
pin "lodash.union" # @4.6.0
pin "lowercase-keys" # @2.0.0
pin "map-cache" # @0.2.2
pin "map-visit" # @1.0.0
pin "math-intrinsics/abs", to: "math-intrinsics--abs.js" # @1.1.0
pin "math-intrinsics/floor", to: "math-intrinsics--floor.js" # @1.1.0
pin "math-intrinsics/max", to: "math-intrinsics--max.js" # @1.1.0
pin "math-intrinsics/min", to: "math-intrinsics--min.js" # @1.1.0
pin "math-intrinsics/pow", to: "math-intrinsics--pow.js" # @1.1.0
pin "math-intrinsics/round", to: "math-intrinsics--round.js" # @1.1.0
pin "math-intrinsics/sign", to: "math-intrinsics--sign.js" # @1.1.0
pin "math-random" # @1.0.4
pin "media-typer" # @0.3.0
pin "merge-descriptors" # @1.0.3
pin "methods" # @1.1.2
pin "micromatch" # @2.3.11
pin "mime" # @1.6.0
pin "mime-db" # @1.52.0
pin "mime-types" # @2.1.35
pin "mimic-response" # @3.1.0
pin "minimatch" # @3.1.2
pin "minimist" # @1.2.8
pin "mixin-deep" # @1.3.2
pin "module-deps" # @4.1.1
pin "ms" # @2.0.0
pin "nanomatch" # @1.2.13
pin "nanosocket" # @1.1.0
pin "negotiator" # @0.6.4
pin "net" # @2.1.0
pin "ngrok" # @5.0.0
pin "normalize-path" # @2.1.1
pin "normalize-url" # @6.1.0
pin "oauth-sign" # @0.9.0
pin "object-copy" # @0.1.0
pin "object-inspect" # @1.13.4
pin "object-visit" # @1.0.1
pin "object.omit" # @2.0.1
pin "object.pick" # @1.3.0
pin "on-finished" # @2.4.1
pin "on-headers" # @1.0.2
pin "once" # @1.4.0
pin "os" # @2.1.0
pin "p-cancelable" # @2.1.1
pin "parents" # @1.0.1
pin "parse-glob" # @3.0.4
pin "parseurl" # @1.3.3
pin "pascalcase" # @0.1.1
pin "path" # @2.1.0
pin "path-is-absolute" # @1.0.1
pin "path-platform" # @0.11.15
pin "path-to-regexp" # @0.1.12
pin "performance-now" # @2.1.0
pin "platform" # @1.3.6
pin "posix-character-classes" # @0.1.1
pin "preserve" # @0.2.0
pin "process" # @2.1.0
pin "process-nextick-args" # @2.0.1
pin "proxy-addr" # @2.0.7
pin "psl" # @1.15.0
pin "pump" # @3.0.2
pin "punycode" # @1.4.1
pin "q" # @1.5.1
pin "qs" # @6.13.0
pin "querystring" # @2.1.0
pin "quick-lru" # @5.1.1
pin "random-bytes" # @1.0.0
pin "randomatic" # @3.1.1
pin "range-parser" # @1.2.1
pin "raw-body" # @2.5.2
pin "read-only-stream" # @2.0.0
pin "readable-stream" # @2.0.6
pin "readable-stream/passthrough", to: "readable-stream--passthrough.js" # @2.3.8
pin "readdirp" # @2.2.1
pin "regex-cache" # @0.4.4
pin "regex-not" # @1.0.2
pin "remove-trailing-separator" # @1.1.0
pin "repeat-element" # @1.1.4
pin "repeat-string" # @1.6.1
pin "request" # @2.88.0
pin "resolve" # @1.1.7
pin "resolve-alpn" # @1.2.1
pin "resolve-url" # @0.2.1
pin "responselike" # @2.0.1
pin "ret" # @0.1.15
pin "rijs" # @0.9.1
pin "rijs.components" # @3.1.16
pin "rijs.core" # @1.2.6
pin "rijs.css" # @1.2.4
pin "rijs.data" # @2.2.4
pin "rijs.fn" # @1.2.6
pin "rijs.npm" # @2.0.0
pin "rijs.pages" # @1.3.0
pin "rijs.resdir" # @1.4.4
pin "rijs.serve" # @1.1.1
pin "rijs.sessions" # @1.1.2
pin "rijs.singleton" # @1.0.0
pin "rijs.sync" # @2.3.5
pin "safe-buffer" # @5.2.1
pin "safe-regex" # @1.1.0
pin "safer-buffer" # @2.1.2
pin "send" # @0.19.0
pin "serve-static" # @1.16.2
pin "set-value" # @2.0.1
pin "setprototypeof" # @1.2.0
pin "sha.js" # @2.4.11
pin "shasum" # @1.0.2
pin "shasum-object" # @1.0.0
pin "side-channel" # @1.1.0
pin "side-channel-list" # @1.0.0
pin "side-channel-map" # @1.0.1
pin "side-channel-weakmap" # @1.0.2
pin "snapdragon" # @0.8.2
pin "snapdragon-node" # @2.1.1
pin "snapdragon-util" # @3.0.1
pin "source-map" # @0.5.7
pin "source-map-resolve" # @0.5.3
pin "source-map-url" # @0.4.1
pin "split-string" # @3.1.0
pin "sshpk" # @1.18.0
pin "static-extend" # @0.1.2
pin "statuses" # @2.0.1
pin "stream" # @2.1.0
pin "stream-combiner2" # @1.1.1
pin "stream-splicer" # @2.0.1
pin "string_decoder" # @1.1.1
pin "syntax-error" # @1.4.0
pin "tar-stream" # @2.2.0
pin "through" # @2.3.8
pin "through2" # @2.0.5
pin "tls" # @2.1.0
pin "to-object-path" # @0.3.0
pin "to-regex" # @3.0.2
pin "to-regex-range" # @2.1.1
pin "toidentifier" # @1.0.1
pin "tough-cookie" # @2.4.3
pin "tunnel-agent" # @0.6.0
pin "tweetnacl" # @0.14.5
pin "type-is" # @1.6.18
pin "typedarray" # @0.0.7
pin "uid-safe" # @2.1.5
pin "umd" # @3.0.3
pin "undeclared-identifiers" # @1.1.3
pin "union-value" # @1.0.1
pin "unpipe" # @1.0.0
pin "unset-value" # @1.0.0
pin "uri-js" # @4.4.1
pin "url" # @2.1.0
pin "use" # @3.1.1
pin "util" # @2.1.0
pin "util-deprecate" # @1.0.2
pin "utilise/append", to: "utilise--append.js" # @2.3.8
pin "utilise/attr", to: "utilise--attr.js" # @2.3.8
pin "utilise/by", to: "utilise--by.js" # @2.3.8
pin "utilise/client", to: "utilise--client.js" # @2.3.8
pin "utilise/colorfill", to: "utilise--colorfill.js" # @2.3.8
pin "utilise/deb", to: "utilise--deb.js" # @2.3.8
pin "utilise/def", to: "utilise--def.js" # @2.3.8
pin "utilise/emitterify", to: "utilise--emitterify.js" # @2.3.8
pin "utilise/err", to: "utilise--err.js" # @2.3.8
pin "utilise/extend", to: "utilise--extend.js" # @2.3.8
pin "utilise/file", to: "utilise--file.js" # @2.3.8
pin "utilise/flatten", to: "utilise--flatten.js" # @2.3.8
pin "utilise/fn", to: "utilise--fn.js" # @2.3.8
pin "utilise/header", to: "utilise--header.js" # @2.3.8
pin "utilise/identity", to: "utilise--identity.js" # @2.3.8
pin "utilise/includes", to: "utilise--includes.js" # @2.3.8
pin "utilise/is", to: "utilise--is.js" # @2.3.8
pin "utilise/key", to: "utilise--key.js" # @2.3.8
pin "utilise/keys", to: "utilise--keys.js" # @2.3.8
pin "utilise/lo", to: "utilise--lo.js" # @2.3.8
pin "utilise/log", to: "utilise--log.js" # @2.3.8
pin "utilise/merge", to: "utilise--merge.js" # @2.3.8
pin "utilise/noop", to: "utilise--noop.js" # @2.3.8
pin "utilise/not", to: "utilise--not.js" # @2.3.8
pin "utilise/overwrite", to: "utilise--overwrite.js" # @2.3.8
pin "utilise/owner", to: "utilise--owner.js" # @2.3.8
pin "utilise/pure", to: "utilise--pure.js" # @2.3.8
pin "utilise/ready", to: "utilise--ready.js" # @2.3.8
pin "utilise/send", to: "utilise--send.js" # @2.3.8
pin "utilise/set", to: "utilise--set.js" # @2.3.8
pin "utilise/str", to: "utilise--str.js" # @2.3.8
pin "utilise/time", to: "utilise--time.js" # @2.3.8
pin "utilise/to", to: "utilise--to.js" # @2.3.8
pin "utilise/update", to: "utilise--update.js" # @2.3.8
pin "utilise/values", to: "utilise--values.js" # @2.3.8
pin "utilise/za", to: "utilise--za.js" # @2.3.8
pin "utils-merge" # @1.0.1
pin "uuid" # @8.3.2
pin "uuid/lib/rng.js", to: "uuid--lib--rng.js.js" # @3.4.0
pin "uuid/v4", to: "uuid--v4.js" # @3.4.0
pin "vargs" # @0.1.0
pin "vary" # @1.1.2
pin "verror" # @1.10.0
pin "wd" # @1.14.0
pin "wrappy" # @1.0.2
pin "xrs/client", to: "xrs--client.js" # @1.2.2
pin "xtend" # @4.0.2
pin "yaml" # @2.7.1
pin "zip-stream" # @2.1.3
pin "zlib" # @2.1.0
