<script context="module" lang="ts">
	import {
		MusicNotes,
		Parallelogram,
		SoundcloudLogo,
		SpotifyLogo,
		YoutubeLogo
	} from 'phosphor-svelte';

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
			<h5 class="italic text-sm">Buy Tracks</h5>

			<div class="flex items-center gap-md mt-md text-my-black-900">
				<a class="rounded-full p-xxs" href=".">
					<Parallelogram weight="fill" />
				</a>

				<a class="rounded-full p-xxs" href=".">
					<MusicNotes weight="fill" />
				</a>
			</div>
		</div>

		<div class="pt-xs border-t-2 border-my-black">
			<h5 class="italic text-sm">Listen & Follow</h5>

			<div class="flex items-center gap-md mt-md text-my-black-900">
				<a class="rounded-full p-xxs" href=".">
					<SoundcloudLogo weight="fill" />
				</a>

				<a class="rounded-full p-xxs" href=".">
					<YoutubeLogo weight="fill" />
				</a>

				<a class="rounded-full p-xxs" href=".">
					<SpotifyLogo weight="fill" />
				</a>
			</div>
		</div>
	</div>
</div>
