import Event from "./Event.js";
import { loader } from "./loader.js";

document.addEventListener("DOMContentLoaded", () => {
  Event.clicked();
  Event.resize();
  loader.loadContent();
});
