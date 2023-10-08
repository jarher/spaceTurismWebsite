import Utils from "./utils.js";
let unit = 100;

export const toggleNav = () => {
  unit = unit === 100 ? 0 : 100;
  Utils.select(".main-nav").moveHorizontal(unit);
};
