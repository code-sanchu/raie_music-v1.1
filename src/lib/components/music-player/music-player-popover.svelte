<script context="module" lang="ts">
	import { musicPlayerStore, type MusicPlayer } from '$lib/stores';
</script>

<script lang="ts">
	let isOpen = true;

	let musicPlayer: MusicPlayer;

	musicPlayerStore.subscribe((playerStore) => {
		musicPlayer = playerStore;
	});

	$: paused = musicPlayer.paused;
</script>

<button class="relative" on:click={() => (isOpen = !isOpen)}>
	<slot />
</button>

<div
	class={`fixed border-2 z-10 bottom-0 right-0 transition-all ease-out duration-500 bg-white p-lg rounded-lg ${
		!isOpen ? 'translate-y-full' : '-translate-y-[40px]'
	}`}
>
	<h3>Music Player</h3>
</div>
