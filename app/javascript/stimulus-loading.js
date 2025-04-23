import { Application } from "@hotwired/stimulus"
import { definitionsFromGlob } from "@hotwired/stimulus-loading"

window.Stimulus = Application.start()
const context = require.context("controllers", true, /\.js$/)
Stimulus.load(definitionsFromGlob(context))