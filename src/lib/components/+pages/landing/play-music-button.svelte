<script lang="ts" context="module">
	import { Icon } from '$lib/components/icon';
	import { musicPlayerStore, updateMusicPlayer, type MusicPlayer } from '$lib/stores';
</script>

<script lang="ts">
	let musicPlayer: MusicPlayer;

	musicPlayerStore.subscribe((playerStore) => {
		musicPlayer = playerStore;
	});
</script>

<button
	class="flex items-center gap-sm"
	on:click={musicPlayer.paused ? updateMusicPlayer.play : updateMusicPlayer.pause}
	type="button">
	<span class="text-my-black-50 opacity-30 text-xl md:text-2xl">
		{#if musicPlayer.paused}
			<Icon.Play weight="fill" />
		{:else}
			<Icon.Pause weight="fill" />
		{/if}
	</span>

	<span
		class="text-my-black-600 italic sm:text-my-black-700 font-light text-[0.8rem] md:text-base tracking-widest sm:uppercase">
		{#if musicPlayer.paused}
			Play music
		{:else}
			Pause music
		{/if}
	</span>
</button>
