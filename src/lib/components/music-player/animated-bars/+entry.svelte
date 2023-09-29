<script lang="ts" context="module">
	import { musicPlayerStore, type MusicPlayer } from '$lib/stores';

	import Bar from './bar.svelte';
</script>

<script lang="ts">
	let musicPlayer: MusicPlayer;

	musicPlayerStore.subscribe((playerStore) => {
		musicPlayer = playerStore;
	});
</script>

<div>
	<Bar animationDelay="animation-delay-500" />
	<Bar animationDelay="animation-delay-200" />
	<Bar animationDelay="animation-delay-[900ms]" />
	<Bar animationDelay="animation-delay-[2500ms]" />
</div>
