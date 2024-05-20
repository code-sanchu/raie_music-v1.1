import * as universal from '../entries/pages/_layout.ts.js';

export const index = 0;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_layout.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/+layout.ts";
export const imports = ["_app/immutable/nodes/0.DXvxb1NW.js","_app/immutable/chunks/scheduler.DAkf0w5B.js","_app/immutable/chunks/index.VK0yDZc7.js","_app/immutable/chunks/global-flags.C481sXFY.js","_app/immutable/chunks/entry.DfH_IOsH.js","_app/immutable/chunks/music-player.DB7VbJW1.js","_app/immutable/chunks/bar.svelte_svelte_type_style_lang.DdhlBqvV.js","_app/immutable/chunks/contacts.BwcsPs6M.js","_app/immutable/chunks/tooltip.htiGdkH9.js","_app/immutable/chunks/link-icon-switch.BPT2bext.js","_app/immutable/chunks/icon.DsJxqulC.js","_app/immutable/chunks/index.BzqXLcLw.js","_app/immutable/chunks/index.esm.L_mVL0cF.js"];
export const stylesheets = ["_app/immutable/assets/0.CQ6c3WBJ.css","_app/immutable/assets/bar.Dqj7qlns.css"];
export const fonts = [];
