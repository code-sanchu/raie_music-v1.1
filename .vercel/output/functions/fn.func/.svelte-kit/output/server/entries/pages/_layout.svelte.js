import { c as create_ssr_component, v as validate_component, a as add_attribute, e as each } from "../../chunks/ssr.js";
import { m as musicPlayerStore, g as globalFlagsStore, T as Tooltip_1 } from "../../chunks/tooltip.js";
import { l as layoutStore } from "../../chunks/layout.js";
import { s as songsList, a as songs_tracks_names_only, r as raie_links_arrs } from "../../chunks/bar.svelte_svelte_type_style_lang.js";
import "svelte-gestures";
import { I as Icon } from "../../chunks/icon.js";
const Link_icon_switch = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { type } = $$props;
  let { weight = "regular" } = $$props;
  if ($$props.type === void 0 && $$bindings.type && type !== void 0)
    $$bindings.type(type);
  if ($$props.weight === void 0 && $$bindings.weight && weight !== void 0)
    $$bindings.weight(weight);
  return `${type === "facebook" ? `${validate_component(Icon.Facebook, "Icon.Facebook").$$render($$result, { weight }, {}, {})}` : ``} ${type === "instagram" ? `${validate_component(Icon.Instagram, "Icon.Instagram").$$render($$result, { weight }, {}, {})}` : ``} ${type === "soundcloud" ? `${validate_component(Icon.Soundcloud, "Icon.Soundcloud").$$render($$result, { weight }, {}, {})}` : ``} ${type === "spotify" ? `${validate_component(Icon.Spotify, "Icon.Spotify").$$render($$result, { weight }, {}, {})}` : ``} ${type === "youtube" || type === "youtube_music" ? `${validate_component(Icon.Youtube, "Icon.Youtube").$$render($$result, { weight }, {}, {})}` : ``} ${type === "bandcamp" ? `${validate_component(Icon.Bandcamp, "Icon.Bandcamp").$$render($$result, { weight }, {}, {})}` : ``} ${type === "itunes" ? `${validate_component(Icon.Itunes, "Icon.Itunes").$$render($$result, { weight }, {}, {})}` : ``}`;
});
const Audio_element = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let currentTrackIndex;
  let currentSong;
  let audioElement;
  let musicPlayer;
  musicPlayerStore.subscribe((playerStore) => {
    musicPlayer = playerStore;
  });
  function handleAudioOnTrackChange(_currentSong) {
    if (!musicPlayer || !audioElement || !musicPlayer.hasBeenPlayed) {
      return;
    }
    const trackHasChanged = musicPlayer.currentTrackIndex !== musicPlayer.trackIndexOnLastInteraction;
    if (!trackHasChanged) {
      return;
    }
    if (musicPlayer.paused) {
      return;
    }
    setTimeout(
      () => {
        audioElement.play();
      },
      100
    );
  }
  currentTrackIndex = musicPlayer.currentTrackIndex;
  currentSong = songsList[currentTrackIndex];
  {
    handleAudioOnTrackChange();
  }
  return `<audio${add_attribute("src", currentSong.localSrc, 0)}${add_attribute("paused", musicPlayer.paused, 0)}${add_attribute("volume", musicPlayer.volume, 0)}${add_attribute("this", audioElement, 0)}></audio>`;
});
const Bottom_panel = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let musicPlayer;
  musicPlayerStore.subscribe((playerStore) => {
    musicPlayer = playerStore;
  });
  songs_tracks_names_only[musicPlayer.currentTrackIndex];
  musicPlayer.visibility === "closed" || musicPlayer.visibility === "closing";
  return `${``}`;
});
const Entry = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let linksPanelState;
  globalFlagsStore.subscribe((currentState) => {
    linksPanelState = currentState;
  });
  return `<div${add_attribute(
    "class",
    `fixed z-30 w-screen pb-lg px-md bottom-0 bg-white left-0 transition-all ease-out duration-300 pt-lg ${linksPanelState.linksPanelVisibility === "closing" || linksPanelState.linksPanelVisibility === "closed" ? "translate-y-full" : "translate-y-0"}`,
    0
  )}><div class="grid sm:grid-cols-2 gap-md sm:gap-xl"><div class="pt-xs border-t-2 border-my-black"><h3 class="italic text-sm" data-svelte-h="svelte-2pckrz">Buy songs</h3> <div class="flex items-center gap-md mt-sm sm:mt-md text-my-black-900">${each([...raie_links_arrs.buy], (raieLink) => {
    return `<a class="rounded-full p-xxs"${add_attribute("href", raieLink.href, 0)} target="_blank"${add_attribute("id", `links-panel-${raieLink.id}`, 0)}${add_attribute("aria-label", `${raieLink.name} link`, 0)}>${validate_component(Link_icon_switch, "LinkIconSwitch").$$render($$result, { type: raieLink.id, weight: "fill" }, {}, {})}</a> ${validate_component(Tooltip_1, "Tooltip").$$render(
      $$result,
      {
        text: raieLink.name,
        triggeredById: `links-panel-${raieLink.id}`
      },
      {},
      {}
    )}`;
  })}</div></div> <div class="pt-xs border-t sm:border-t-2 border-my-black"><h3 class="italic text-sm" data-svelte-h="svelte-phg3uj">Listen &amp; Follow</h3> <div class="flex items-center gap-md mt-sm sm:mt-md text-my-black-900">${each([...raie_links_arrs.listen, ...raie_links_arrs.follow], (raieLink) => {
    return `<a class="rounded-full p-xxs"${add_attribute("href", raieLink.href, 0)} target="_blank"${add_attribute("id", `links-panel-${raieLink.id}`, 0)}${add_attribute("aria-label", `${raieLink.name} link`, 0)}>${validate_component(Link_icon_switch, "LinkIconSwitch").$$render($$result, { type: raieLink.id, weight: "fill" }, {}, {})}</a> ${validate_component(Tooltip_1, "Tooltip").$$render(
      $$result,
      {
        text: raieLink.name,
        triggeredById: `links-panel-${raieLink.id}`
      },
      {},
      {}
    )}`;
  })}</div></div></div></div>`;
});
const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let scrollDirection;
  let globalFlags;
  globalFlagsStore.subscribe((store) => {
    globalFlags = store;
  });
  let layoutState;
  layoutStore.subscribe((store) => {
    layoutState = store;
  });
  let windowHeight;
  scrollDirection = !layoutState.scrollTopPrevious || layoutState.scrollTopPrevious < layoutState.scrollTopCurrent ? "down" : "up";
  !globalFlags.firstPageIsReady && windowHeight && layoutState.headerHeight && windowHeight < 769 && scrollDirection === "down" && layoutState.scrollTopCurrent > (layoutState.headerHeight ? layoutState.headerHeight * 3 : 100);
  return `${$$result.head += `<!-- HEAD_svelte-yzek4a_START -->${$$result.title = `<title>Raie</title>`, ""}<meta name="description" content="The official site of Raie"><link rel="preload" href="/fonts/HelveticaNeue-Thin.otf" as="font" type="font/otf" crossorigin="true"><!-- HEAD_svelte-yzek4a_END -->`, ""}  ${``} ${slots.default ? slots.default({}) : ``} ${globalFlags.firstPageIsReady ? `${validate_component(Entry, "LinksPanel").$$render($$result, {}, {}, {})} ${validate_component(Bottom_panel, "MusicBottomPanel").$$render($$result, {}, {}, {})} ${validate_component(Audio_element, "AudioElement").$$render($$result, {}, {}, {})}` : ``}`;
});
export {
  Layout as default
};
