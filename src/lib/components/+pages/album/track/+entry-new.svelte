<script lang="ts" context="module">
	import type { SongData } from '$lib/data';
	import { musicPlayerStore, songsList, type MusicPlayer } from '$lib/stores';
</script>

<script lang="ts">
	export let data: SongData;
	export let noVideos = false;

	const { name, number, length, lyrics, localSrc, description, credits, youtubeEmbed, id } = data;

	let videoIsOpen = false;
	let lyricsIsOpen = false;

	let readMoreElement: HTMLDivElement;
	let showReadMore: boolean;

	let musicPlayer: MusicPlayer;

	musicPlayerStore.subscribe((playerStore) => {
		musicPlayer = playerStore;
	});

	const songListIndex = songsList.findIndex((songListSong) => songListSong.id === id);

	$: currentTrackIndex = musicPlayer.currentTrackIndex;
	$: isCurrentTrack = currentTrackIndex === songListIndex;
</script>

<div
	class="translate-x-0 ease-out duration-300 overflow-hidden"
	bind:this={readMoreElement}
	style:height={!showReadMore ? '0px' : `${readMoreElement.scrollHeight}px`}
	style:opacity={!showReadMore ? '0' : '1'}>
	<div class="prose border-b border-my-black-50 pb-md mt-md">
		{@html description}

		<h4 class="text-my-black-400 font-thin">Credits</h4>

		{@html credits}
	</div>
</div>
