<script lang="ts" context="module">
	import { Icon, Tooltip, YoutubeVideoModal } from '$lib/components';
	import LyricsModal from './lyrics-modal.svelte';

	import { type Song, songsList } from '$lib/data';
	import { musicPlayerStore, type MusicPlayer, updateMusicPlayer } from '$lib/stores';
</script>

<script lang="ts">
	export let data: Song;
	export let noVideos = false;

	const { name, length, lyrics, localSrc, youtubeEmbed, id } = data;

	let videoIsOpen = false;
	let lyricsIsOpen = false;
	let musicWasPlayingBeforeVideo = false;

	let musicPlayer: MusicPlayer;

	musicPlayerStore.subscribe((playerStore) => {
		musicPlayer = playerStore;
	});

	const songListIndex = songsList.findIndex((songListSong) => songListSong.id === id);

	$: currentTrackIndex = musicPlayer.currentTrackIndex;
	$: isCurrentTrack = currentTrackIndex === songListIndex;
</script>

<div class="flex flex-nowrap gap-lg sm:gap-xl items-center">
	<p class="text-my-black-400 text-sm self-end">{length}</p>

	<div class="flex flex-nowrap items-center gap-md text-my-black-600">
		{#if !noVideos}
			{#if youtubeEmbed}
				<button
					class="p-xxs text-my-black-500 rounded-full"
					id="track-video"
					on:click={() => {
						if (!musicPlayer.paused) {
							musicWasPlayingBeforeVideo = true;

							updateMusicPlayer.pause();
						}

						videoIsOpen = true;
					}}
					type="button"><Icon.Video weight="thin" /></button>
				<Tooltip text="music video" triggeredById="track-video" />
			{:else}
				<button class="opacity-0 pointer-events-none p-xxs" type="button"
					><Icon.Video weight="thin" /></button>
			{/if}
		{/if}

		<button
			class="p-xxs text-my-black-500 rounded-full"
			on:click={() => (lyricsIsOpen = !lyricsIsOpen)}
			id="track-lyrics"
			type="button"><Icon.Lyrics weight="thin" /></button>
		<Tooltip text="lyrics" triggeredById="track-lyrics" />

		{#if localSrc}
			<button
				class="p-xxs text-my-black-500 rounded-full"
				on:click={() => {
					if (songListIndex < 0) {
						return;
					}

					if (isCurrentTrack) {
						if (musicPlayer.paused) {
							updateMusicPlayer.play();

							return;
						} else {
							updateMusicPlayer.pause();
							return;
						}
					}

					updateMusicPlayer.track(songListIndex);
				}}
				id="track-listen"
				type="button">
				{#if isCurrentTrack && !musicPlayer.paused}
					<Icon.Pause weight="thin" />
				{:else}
					<Icon.Play weight="thin" />
				{/if}
			</button>
			<Tooltip text="play" triggeredById="track-listen" />
		{:else}
			<button class="p-xxs pointer-events-none opacity-0 rounded-full" type="button"
				><Icon.Play weight="thin" /></button>
		{/if}
	</div>
</div>

{#if youtubeEmbed}
	<YoutubeVideoModal
		src={youtubeEmbed}
		bind:isOpen={videoIsOpen}
		onClose={() => {
			if (musicWasPlayingBeforeVideo) {
				setTimeout(() => {
					updateMusicPlayer.play();
				}, 900);
			}
		}} />
{/if}

<LyricsModal {name} {lyrics} bind:isOpen={lyricsIsOpen} />
