<script context="module" lang="ts">
	import { songs } from '$lib/data';
	import { musicPlayerStore, type MusicPlayer } from '$lib/stores';
</script>

<script lang="ts">
	let musicPlayer: MusicPlayer;

	musicPlayerStore.subscribe((playerStore) => {
		musicPlayer = playerStore;
	});
</script>

<audio
	src={songs.earthbound.wax_n_wane.localSrc}
	bind:paused={musicPlayer.paused}
	bind:volume={musicPlayer.volume}
/>
