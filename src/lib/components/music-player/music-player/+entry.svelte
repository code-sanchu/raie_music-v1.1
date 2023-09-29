<script context="module" lang="ts">
	import { Play, Playlist, SkipBack, SkipForward } from 'phosphor-svelte';

	import {
		musicPlayerInitData,
		musicPlayerStore,
		songsList,
		updateMusicPlayer,
		type MusicPlayer
	} from '$lib/stores';
	import Tracks from './tracks.svelte';
	// import { songsArr, type AlbumKey, albumsArr } from '$lib/data';
</script>

<script lang="ts">
	let musicPlayerState: MusicPlayer;

	// $: console.log('musicPlayer:', musicPlayer);

	musicPlayerStore.subscribe((playerStore) => {
		musicPlayerState = playerStore;
	});

	$: currentSong = songsList[musicPlayerState.currentTrackIndex];

	let visibleAlbumKey: AlbumKey = songsList[musicPlayerInitData.currentTrackIndex].albumKey;

	$: tracksClosedOrClosing =
		musicPlayerState.tracksVisibility === 'closed' ||
		musicPlayerState.tracksVisibility === 'closing';
</script>

<div
	class={`absolute -z-10 w-screen px-lg pt-sm bottom-0 bg-white left-0 transition-all ease-out duration-300 ${
		musicPlayerState.visibility === 'closing' || musicPlayerState.visibility === 'closed'
			? 'translate-y-full'
			: 'translate-y-0'
	}`}
>
	<div class={`flex gap-xl mb-xl items-end`}>
		<div class="pt-[0.75rem] border-t-2 border-my-black-700 flex flex-col w-1/2">
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

		<div class="pt-[0.75rem] border-t-2 border-my-black-700 w-1/2">
			<!-- <h5 class="italic text-sm">Controls</h5> -->

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
