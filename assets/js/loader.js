import { autoSlider } from "./auto-slider.js";
import { data } from "./data.js";
import {
  crew_description,
  img,
  planet_data,
  technology_text,
} from "./templates.js";
import Utils from "./utils.js";

export const loader = (() => {
  const loadTechImgs = () => {
    if (window.matchMedia("(max-width: 1024px)").matches) {
      Utils.select(".technology-img-container").insert(
        Utils.mappingData(data.technology, (object) =>
          img(object.images.landscape, object.name)
        )
      );
    } else {
      Utils.select(".technology-img-container").insert(
        Utils.mappingData(data.technology, (object) =>
          img(object.images.portrait, object.name)
        )
      );
    }
    Utils.selectMany("img").element(0).style.transform = Utils.translateX(0);
  };

  const loadContent = () => {
    const pathName = document.location.pathname
      .split("/")
      .pop()
      .replace(".html", "");

    const showFirstElement = ({ element, className, index }) => {
      Utils.selectMany(element).addClass(className, index);
    };

    if (pathName === "destination") {
      const elements = [
        {
          element: ".planet-img-container",
          data: data.destinations,
          type: "img",
        },
        {
          element: ".slider-content",
          data: data.destinations,
          type: "text",
          template: planet_data,
        },
      ];
      const firstElements = [
        {
          element: "img",
          className: "show-img",
          index: 0,
        },
        {
          element: ".planet-data",
          className: "show-img",
          index: 0,
        },
      ];
      elements.forEach((object) => Utils.insertDataInElement(object));
      firstElements.forEach((object) => showFirstElement(object));
    }
    if (pathName === "crew") {
      const elements = [
        {
          element: ".crew-photo",
          data: data.crew,
          type: "img",
        },
        {
          element: ".crew-slider",
          data: data.crew,
          type: "text",
          template: crew_description,
        },
      ];
      const firstElements = [
        {
          element: "img",
          className: "show-img",
          index: 0,
        },
        {
          element: ".crew-description",
          className: "show-img",
          index: 0,
        },
        {
          element: ".btn-indicator",
          className: "indicator-active",
          index: 0,
        },
      ];
      elements.forEach((object) => Utils.insertDataInElement(object));
      firstElements.forEach((object) => showFirstElement(object));
      autoSlider();
    }
    if (pathName === "technology") {
      loadTechImgs();

      const elements = [
        {
          element: ".wrapper",
          data: data.technology,
          type: "text",
          template: technology_text,
        },
      ];
      const firstElements = [
        {
          element: ".slider-text",
          className: "show-block",
          index: 0,
        },
        {
          element: ".slider-text",
          className: "show-img",
          index: 0,
        },
      ];
      elements.forEach((object) => Utils.insertDataInElement(object));
      firstElements.forEach((object) => showFirstElement(object));
      Utils.selectMany("img").element(0).style.transform = Utils.translateX(0);
    }
  };

  return {
    loadContent,
    loadTechImgs,
  };
})();
