import { img } from "./templates.js";

const Utils = (() => {
  const mappingData = (data, func) =>
    Object.values(data)
      .map((object) => func(object))
      .join("");

  const userAgentVersion = (regExp) => {
    let version;
    window.navigator.userAgent.split(" ").forEach((el) => {
      if (el.match(regExp)) {
        version = el.split("/")[1];
      }
    });
    return Number.parseFloat(version);
  };

  const loadImg = (data) =>
    userAgentVersion(/Chrome\//) >= 32 ||
    userAgentVersion(/Edg\//) >= 18 ||
    userAgentVersion(/Firefox\//) >= 65
      ? data.webp
      : data.png;

  const translateX = (value) => `translateX(${value}%)`;

  const timeOut = (object, time) => setTimeout(() => object(), time);

  function selectManyElements(value) {
    this.elements = document.querySelectorAll(value);
    this.addClass = (className, index) => {
      Array.from(this.elements).forEach((element, i) => {
        i === index
          ? element.classList.add(className)
          : element.classList.remove(className);
      });
    };
    this.element = (value) => Array.from(this.elements)[value];
  }

  function selectOne(value) {
    this.element = document.querySelector(value);
    this.moveHorizontal = (value) =>
      (this.element.style.transform = translateX(value));
    this.insert = (content) => (this.element.innerHTML = content);
    this.addClass = (value) => element.classList.add(value);
  }

  const select = (value) => new selectOne(value);

  const selectMany = (value) => new selectManyElements(value);

  const showElements = ({ element, className }, index) =>
    selectMany(element).addClass(className, index);

  const insertDataInElement = (object) => {
    const { element, data, type } = object;
    if (type === "img") {
      Utils.select(element).insert(
        mappingData(data, (object) => img(loadImg(object.images), object.name))
      );
    } else {
      const { template } = object;
      Utils.select(element).insert(
        mappingData(data, (object) => template(object))
      );
    }
  };

  return {
    insertDataInElement,
    mappingData,
    select,
    selectMany,
    showElements,
    timeOut,
    translateX,
  };
})();

export default Utils;
