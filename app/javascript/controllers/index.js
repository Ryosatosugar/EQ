import { Application } from "@hotwired/stimulus";
import { definitionsFromGlob } from "@hotwired/stimulus-loading";

const application = Application.start();
const controllerFiles = import.meta.glob("./**/*_controller.js");
application.load(definitionsFromGlob(controllerFiles));
