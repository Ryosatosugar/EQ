# Pin npm packages by running ./bin/importmap

pin "application"
pin "@popperjs/core", to: "@popperjs--core.js" # @2.11.8
pin "bootstrap" # @5.3.5
pin "@hotwired/stimulus", to: "stimulus.min.js"
pin "@hotwired/stimulus-loading", to: "stimulus-loading.js"
pin_all_from "app/javascript/controllers", under: "controllers"
