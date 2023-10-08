import Utils from "./utils.js";

export const sliderCrew = (() => {
  let initial_value = -25;
    
  const moveSlider = (index) => {
    
    const elements = [
      {
        element: ".crew-photo img",
        className: "show-img",
      },
      {
        element: ".crew-description",
        className: "show-img",
      },
      {
        element: ".btn-indicator",
        className: "indicator-active",
      },
    ];
    elements.forEach(element => Utils.showElements(element, index));
    Utils.select(".crew-slider").moveHorizontal(initial_value * index);
  };
  return {
    moveSlider,
  };
})();
