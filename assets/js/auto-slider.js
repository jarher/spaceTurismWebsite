import { sliderCrew } from "./slider-crew.js";
import Utils from "./utils.js";

let index = 0;

let interval = (newIndex) => {
  if (newIndex) {
    index = newIndex;
  }

  setInterval(
    () => {
      sliderCrew.moveSlider(index);
      Utils.selectMany(".btn-indicator").addClass("indicator-active", index);
      index++;
      index = index > 3 ? 0 : index;
    },10000
  );
};

export const autoSlider = (newIndex) => {
  newIndex ? clearInterval(interval(newIndex)) : interval();
};
