<script context="module" lang="ts">
	import { Play, Playlist, SkipBack, SkipForward } from 'phosphor-svelte';

	import { musicPlayerStore, updateMusicPlayer, type MusicPlayer } from '$lib/stores';
	import Tracks from './tracks.svelte';
</script>

<script lang="ts">
	let musicPlayerState: MusicPlayer;

	musicPlayerStore.subscribe((playerStore) => {
		musicPlayerState = playerStore;
	});
</script>

<div
	class={`absolute -z-10 w-screen px-lg pt-sm bottom-0 left-0 transition-all ease-out duration-300 ${
		musicPlayerState.visibility === 'closing' || musicPlayerState.visibility === 'closed'
			? 'translate-y-full'
			: 'translate-y-0'
	}`}
>
	<div class={`flex mb-xl`}>
		<div class="pt-[0.75rem] border-t-2 border-my-black-700 bg-white w-1/2">
			<Tracks />

			<div class="flex items-center gap-md">
				<button
					class="flex items-center gap-xs"
					on:click={musicPlayerState.tracksVisibility === 'closed' ||
					musicPlayerState.tracksVisibility === 'closing'
						? updateMusicPlayer.openTracks
						: updateMusicPlayer.closeTracks}
					type="button"
				>
					<span class="text-my-black-600 py-xxs">
						<Playlist weight="fill" />
					</span>

					<span class={`text-[0.7rem] text-my-black-600 uppercase`}>
						{#if musicPlayerState.tracksVisibility === 'closed' || musicPlayerState.tracksVisibility === 'closing'}
							show tracks
						{:else}
							hide tracks
						{/if}
					</span>
				</button>
			</div>
		</div>

		<div class="flex flex-col w-1/2">
			<button
				class="flex-grow h-full cursor-auto"
				on:click={updateMusicPlayer.close}
				type="button"
			/>

			<div class="pt-[0.75rem] w-full border-t-2 border-my-black-700 bg-white">
				<div class="flex items-center gap-md justify-end text-my-black-800">
					<a class="rounded-full p-xxs" href=".">
						<Play weight="fill" />
					</a>

					<a class="rounded-full p-xxs" href=".">
						<SkipBack weight="fill" />
					</a>

					<a class="rounded-full p-xxs" href=".">
						<SkipForward weight="fill" />
					</a>
				</div>
			</div>
		</div>
	</div>
</div>
