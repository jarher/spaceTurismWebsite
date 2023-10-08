import Utils from "./utils.js";

export const sliderTechnology = (() => {
  const setOpacity = (element, value) => (element.style.opacity = value);

  const showImg = (el) => {
    el.style.transform = Utils.translateX(0);
    setOpacity(el, 1);
  };

  const hideImg = (el) => {
    setOpacity(el, 0);
    Utils.timeOut(() => (el.style.transform = Utils.translateX(100)), 300);
  };

  const switchImg = (index) => {
    Array.from(Utils.selectMany("img").elements).forEach((el, i) =>
      i === index ? showImg(el) : hideImg(el)
    );
  };

  const createEffect = (index) => {
    const elements = [
      {
        element: ".slider-text",
        className: "show-block",
      },
      {
        element: ".indexes-container button",
        className: "index-active",
      },
    ];
    elements.forEach((object) =>
      Utils.selectMany(object.element).addClass(object.className, index)
    );
    Utils.timeOut(
      () => Utils.selectMany(".slider-text").addClass("show-img", index),
      300
    );
    switchImg(index);
  };

  const moveSlider = (index) => {
    createEffect(index);
  };
  return {
    moveSlider,
  };
})();
