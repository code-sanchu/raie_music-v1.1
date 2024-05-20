import { w as writable } from "./exports.js";
const initData = {
  headerHeight: null,
  scrollTopPrevious: null,
  scrollTopCurrent: 0
};
const layoutStore = writable(initData);
export {
  layoutStore as l
};
