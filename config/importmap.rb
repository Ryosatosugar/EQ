# Pin npm packages by running ./bin/importmap

pin "application"
pin "@popperjs/core", to: "@popperjs--core.js" # @2.11.8
pin "bootstrap" # @5.3.5
pin "@rails/ujs", to: "rails--ujs.js", preload: true
