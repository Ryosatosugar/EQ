import { application } from "./application";
import { registerControllers } from "@hotwired/stimulus-loading";

const controllers = import.meta.glob("./**/*_controller.js");
registerControllers(application, controllers);
