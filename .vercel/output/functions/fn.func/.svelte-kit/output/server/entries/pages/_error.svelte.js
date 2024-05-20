import { c as create_ssr_component, v as validate_component } from "../../chunks/ssr.js";
import "../../chunks/bar.svelte_svelte_type_style_lang.js";
import { I as Icon } from "../../chunks/icon.js";
import "svelte-gestures";
const Error = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<div class="absolute left-1/2 top-[40%] -translate-x-1/2 -translate-y-1/2 grid place-items-center leading-relaxed max-w-[100vw]"><div class="flex flex-col items-center max-w-[65ch] text-center p-lg"><h1 class="text-lg font-semibold" data-svelte-h="svelte-te4v2d">Oops, we&#39;re sorry... It seems the page you&#39;re looking for cannot be found.</h1> <p class="mt-lg" data-svelte-h="svelte-b5ppx8">It&#39;s possible that the page may have been moved or deleted during our site updates.</p> <p class="mt-md" data-svelte-h="svelte-56dsy2">You can try navigating back to our homepage.</p> <a class="mt-sm flex items-center gap-xs border-2 rounded-md px-sm py-xxxs text-[15px] tracking-wider" href="/"><span data-svelte-h="svelte-1uu4rxf">To homepage</span> <span>${validate_component(Icon.ArrowRight, "Icon.ArrowRight").$$render($$result, { weight: "thin" }, {}, {})}</span></a></div></div>`;
});
export {
  Error as default
};
