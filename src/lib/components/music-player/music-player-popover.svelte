<script context="module" lang="ts">
	import { Pause, Play, SpeakerSimpleLow } from 'phosphor-svelte';
	import { Label, Range } from 'flowbite-svelte';

	import { musicPlayerStore, type MusicPlayer } from '$lib/stores';
</script>

<script lang="ts">
	import { SpeakerLow } from 'phosphor-svelte';

	let isOpen = true;

	let musicPlayer: MusicPlayer;

	musicPlayerStore.subscribe((playerStore) => {
		musicPlayer = playerStore;
	});

	// initially open to show controls. Option to chage track.
</script>

<button class="relative" on:click={() => (isOpen = !isOpen)}>
	<slot />
</button>

<div
	class={`fixed w-screen max-w-[800px] border-2 z-10 bottom-0 right-0 transition-all ease-out duration-500 bg-white p-lg rounded-lg ${
		!isOpen ? 'translate-y-full opacity-0' : '-translate-y-[40px] opacity-100'
	}`}
>
	<h3 class="font-medium">Music Player</h3>

	<div class="flex gap-md items-center mt-md flex-col">
		<div class="flex items-center gap-xl">
			<button class="text-my-black-200 text-xl" type="button">
				{#if musicPlayer.paused}
					<Play weight="fill" />
				{:else}
					<Pause />
				{/if}
			</button>

			<div class="flex items-center gap-xs">
				<p class="text-my-black-200 text-xl">
					<SpeakerSimpleLow weight="fill" />
				</p>

				<div class="relative w-[100px] grid place-items-center accent-my-black-100">
					<Range bind:value={musicPlayer.volume} size="sm" />
				</div>
			</div>
		</div>

		<p class="flex gap-sm flex-nowrap">
			<span class="whitespace-nowrap">Now playing</span>
			<span class="italic whitespace-nowrap">Wax 'n Wane</span>
		</p>
	</div>

	<div class="mt-md">
		<h4>Tracks</h4>

		<div class="mt-sm grid grid-cols-2">
			<div>
				<h5 class="">This Music Thing</h5>
			</div>

			<div>
				<h5>Earthbound</h5>
			</div>
		</div>
	</div>
</div>
