<script context="module" lang="ts">
	import { LinkIconSwitch, Tooltip } from '$lib/components';
	import { raie_links_arrs } from '$lib/data';
	import { onClickOutside } from '$lib/helpers';
	import { globalFlagsStore, updateGlobalFlags, type GlobalFlagsState } from '$lib/stores';
</script>

<script lang="ts">
	let linksPanelState: GlobalFlagsState;

	globalFlagsStore.subscribe((currentState) => {
		linksPanelState = currentState;
	});
</script>

<div
	class={`fixed z-30 w-screen pb-lg px-md bottom-0 bg-white left-0 transition-all ease-out duration-300 pt-lg ${
		linksPanelState.linksPanelVisibility === 'closing' ||
		linksPanelState.linksPanelVisibility === 'closed'
			? 'translate-y-full'
			: 'translate-y-0'
	}`}
	use:onClickOutside={updateGlobalFlags.closeLinksPanel}>
	<div class="grid sm:grid-cols-2 gap-md sm:gap-xl">
		<div class="pt-xs border-t-2 border-my-black">
			<h3 class="italic text-sm">Buy songs</h3>

			<div class="flex items-center gap-md mt-sm sm:mt-md text-my-black-900">
				{#each [...raie_links_arrs.buy] as raieLink}
					<a
						class="rounded-full p-xxs"
						href={raieLink.href}
						target="_blank"
						id={`links-panel-${raieLink.id}`}
						aria-label={`${raieLink.name} link`}>
						<LinkIconSwitch type={raieLink.id} weight="fill" />
					</a>
					<Tooltip text={raieLink.name} triggeredById={`links-panel-${raieLink.id}`} />
				{/each}
			</div>
		</div>

		<div class="pt-xs border-t sm:border-t-2 border-my-black">
			<h3 class="italic text-sm">Listen & Follow</h3>

			<div class="flex items-center gap-md mt-sm sm:mt-md text-my-black-900">
				{#each [...raie_links_arrs.listen, ...raie_links_arrs.follow] as raieLink}
					<a
						class="rounded-full p-xxs"
						href={raieLink.href}
						target="_blank"
						id={`links-panel-${raieLink.id}`}
						aria-label={`${raieLink.name} link`}>
						<LinkIconSwitch type={raieLink.id} weight="fill" />
					</a>
					<Tooltip text={raieLink.name} triggeredById={`links-panel-${raieLink.id}`} />
				{/each}
			</div>
		</div>
	</div>
</div>
