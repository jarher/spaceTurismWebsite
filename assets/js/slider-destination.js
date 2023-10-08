import Utils from "./utils.js";

export const sliderDestination = (() => {
  let initial_value = -25;

  const createEffect = (index) => {
    const elements = [
      {
        element: ".planet-img-container img",
        className: "show-img",
      },
      {
        element: ".planet-data",
        className: "show-img",
      },
    ];
    elements.forEach(element => Utils.showElements(element, index));
    Utils.select(".slider-content").moveHorizontal(index * initial_value);
  };

  function moveSlider(target) {
    if (target === "moon") {
      createEffect(0);
    }
    if (target === "mars") {
      createEffect(1);
    }
    if (target === "europa") {
      createEffect(2);
    }
    if (target === "titan") {
      createEffect(3);
    }
  }

  return {
    moveSlider,
  };
})();
