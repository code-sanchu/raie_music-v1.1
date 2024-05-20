import { w as writable } from "./exports.js";
import { c as create_ssr_component } from "./ssr.js";
const musicPlayerInitData = {
  currentTrackIndex: 19,
  trackIndexOnLastInteraction: null,
  paused: true,
  hasBeenPlayed: false,
  volume: 0.6,
  visibility: "closed",
  tracksVisibility: "closed",
  isLoadingAudio: false
};
const musicPlayerStore = writable(musicPlayerInitData);
const linksPanelInitData = {
  linksPanelVisibility: "closed",
  firstPageIsReady: false
};
const globalFlagsStore = writable(linksPanelInitData);
function updateGlobalFlagsStore(field, value) {
  globalFlagsStore.update((state) => {
    return {
      ...state,
      [field]: value
    };
  });
}
const updateGlobalFlags = {
  openLinksPanel: () => {
    updateGlobalFlagsStore("linksPanelVisibility", "opening");
    setTimeout(() => {
      updateGlobalFlagsStore("linksPanelVisibility", "open");
    }, 300);
  },
  closeLinksPanel: () => {
    updateGlobalFlagsStore("linksPanelVisibility", "closing");
    setTimeout(() => {
      updateGlobalFlagsStore("linksPanelVisibility", "closed");
    }, 300);
  },
  firstPageIsReady: () => updateGlobalFlagsStore("firstPageIsReady", true)
};
const Tooltip_1 = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { text } = $$props;
  let { triggeredById } = $$props;
  if ($$props.text === void 0 && $$bindings.text && text !== void 0)
    $$bindings.text(text);
  if ($$props.triggeredById === void 0 && $$bindings.triggeredById && triggeredById !== void 0)
    $$bindings.triggeredById(triggeredById);
  return ` ${``}`;
});
export {
  Tooltip_1 as T,
  globalFlagsStore as g,
  musicPlayerStore as m,
  updateGlobalFlags as u
};
