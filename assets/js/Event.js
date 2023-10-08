import { autoSlider } from "./auto-slider.js";
import { loader } from "./loader.js";
import { toggleNav } from "./menu.js";
import { sliderCrew } from "./slider-crew.js";
import { sliderDestination } from "./slider-destination.js";
import { sliderTechnology } from "./slider-technology.js";

const Event = (() => {
  function clicked() {
    document.addEventListener("click", (e) => {
      if (
        e.target.className === "menu-icon" ||
        e.target.className === "menu-close"
      ) {
        toggleNav();
      }
      if (
        e.target.dataset.id === "moon" ||
        e.target.dataset.id === "mars" ||
        e.target.dataset.id === "europa" ||
        e.target.dataset.id === "titan"
      ) {
        e.preventDefault();
        sliderDestination.moveSlider(e.target.dataset.id);
      }
      if (e.target.className === "btn-indicator") {
        const index = Number.parseInt(e.target.dataset.index);
        sliderCrew.moveSlider(index);
        autoSlider(index);
      }
      if (
        e.target.id === "tech-index-1" ||
        e.target.id === "tech-index-2" ||
        e.target.id === "tech-index-3"
      ) {
        sliderTechnology.moveSlider(Number.parseInt(e.target.dataset.index));
      }
    });
  }
  function resize() {
    window.addEventListener("resize", () => {
      loader.loadTechImgs();
    });
  }
  return {
    clicked,
    resize,
  };
})();

export default Event;
