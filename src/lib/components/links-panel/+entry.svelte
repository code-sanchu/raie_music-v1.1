<script context="module" lang="ts">
	import { Icon, Tooltip } from '$lib/components';
	import { onClickOutside } from '$lib/helpers';
	import { linksPanelStore, updateLinksPanel, type LinksPanel } from '$lib/stores';
</script>

<script lang="ts">
	let linksPanelState: LinksPanel;

	linksPanelStore.subscribe((currentState) => {
		linksPanelState = currentState;
	});
</script>

<div
	class={`fixed z-30 w-screen pb-lg px-md bottom-0 bg-white left-0 transition-all ease-out duration-300 pt-lg ${
		linksPanelState.visibility === 'closing' || linksPanelState.visibility === 'closed'
			? 'translate-y-full'
			: 'translate-y-0'
	}`}
	use:onClickOutside={updateLinksPanel.close}
>
	<div class="grid grid-cols-2 gap-xl">
		<div class="pt-xs border-t-2 border-my-black">
			<h5 class="italic text-sm">Buy songs</h5>

			<div class="flex items-center gap-md mt-md text-my-black-900">
				<a class="rounded-full p-xxs" href="." id="links_panel-bandcamp">
					<Icon.Bandcamp weight="fill" />
				</a>
				<Tooltip text="Bandcamp" triggeredById="links_panel-bandcamp" />

				<a class="rounded-full p-xxs" href="." id="links_panel-itunes">
					<Icon.Itunes weight="fill" />
				</a>
				<Tooltip text="Itunes" triggeredById="links_panel-itunes" />
			</div>
		</div>

		<div class="pt-xs border-t-2 border-my-black">
			<h5 class="italic text-sm">Listen & Follow</h5>

			<div class="flex items-center gap-md mt-md text-my-black-900">
				<a class="rounded-full p-xxs" href="." id="links_panel-soundcloud">
					<Icon.Soundcloud weight="fill" />
				</a>
				<Tooltip text="Soundcloud" triggeredById="links_panel-soundcloud" />

				<a class="rounded-full p-xxs" href="." id="links_panel-youtube">
					<Icon.Youtube weight="fill" />
				</a>
				<Tooltip text="Youtube" triggeredById="links_panel-youtube" />

				<a class="rounded-full p-xxs" href="." id="links_panel-spotify">
					<Icon.Spotify weight="fill" />
				</a>
				<Tooltip text="Spotify" triggeredById="links_panel-spotify" />

				<a class="rounded-full p-xxs" href="." id="links_panel-facebook">
					<Icon.Facebook weight="fill" />
				</a>
				<Tooltip text="Facebook" triggeredById="links_panel-facebook" />

				<a class="rounded-full p-xxs" href="." id="links_panel-insta">
					<Icon.Instagram weight="fill" />
				</a>
				<Tooltip text="Instagram" triggeredById="links_panel-insta" />
			</div>
		</div>
	</div>
</div>
