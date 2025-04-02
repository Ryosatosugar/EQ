# Pin npm packages by running ./bin/importmap

pin "application", preload: true
pin "popper", to: "https://ga.jspm.io/npm:@popperjs/core@2.11.8/lib/index.js"
pin "bootstrap" # @5.3.3

pin "@popperjs/core", to: "@popperjs--core.js" # @2.11.8
