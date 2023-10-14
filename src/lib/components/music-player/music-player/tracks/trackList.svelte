<script context="module" lang="ts">
	import { sineIn } from 'svelte/easing';
	import { fade } from 'svelte/transition';

	import { Icon } from '$lib/components';
	import { type SongTrackNamesOnly, songs_tracks_names_only } from '$lib/data';
	import { musicPlayerStore, songsList, updateMusicPlayer, type MusicPlayer } from '$lib/stores';
</script>

<script lang="ts">
	export let songs: SongTrackNamesOnly[];

	let musicPlayer: MusicPlayer;

	musicPlayerStore.subscribe((playerStore) => {
		musicPlayer = playerStore;
	});

	$: currentSong = songsList[musicPlayer.currentTrackIndex];
</script>

<div
	class={`h-full w-full max-w-full flex flex-col items-start gap-xs scrollbar-track-white scrollbar-thumb-my-black-100 ${
		musicPlayer.visibility === 'open' ? 'overflow-y-auto' : 'overflow-hidden'
	}`}
	transition:fade={{ easing: sineIn, duration: 200 }}>
	{#each songs as song, i}
		<button
			class="flex gap-sm md:gap-md group/track"
			on:click={() => {
				const songListIndex = songs_tracks_names_only.findIndex(
					(songListSong) => songListSong.id === song.id
				);

				if (songListIndex < 0) {
					return;
				}

				updateMusicPlayer.track(songListIndex);
			}}
			type="button">
			<span class="relative">
				<span
					class="group-hover/track:opacity-0 inline-block text-my-black-600 text-xs md:text-sm transition-opacity ease-in-out duration-100 w-[18px]">
					{i + 1}
				</span>
				<span
					class="absolute md:text-lg text-my-black-700 opacity-0 group-hover/track:opacity-100 transition-opacity ease-in-out duration-100 left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
					<Icon.Play weight="fill" />
				</span>
			</span>

			<span class={`whitespace-nowrap ${song.id === currentSong.id ? 'italic' : ''}`}
				>{song.name}</span>
		</button>
	{/each}
</div>
