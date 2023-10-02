<script lang="ts" context="module">
	import { Icon, Tooltip, YoutubeVideoModal } from '$lib/components';
	import LyricsModal from './lyrics-modal.svelte';

	import type { SongData } from '$lib/data';
	import {
		musicPlayerStore,
		type MusicPlayer,
		songsList,
		updateMusicPlayer,
		musicPlayerInitData
	} from '$lib/stores';
</script>

<script lang="ts">
	export let data: SongData;

	const { name, number, length, lyrics, localSrc, description, credits, youtubeEmbed, id } = data;

	let videoIsOpen = false;
	let lyricsIsOpen = false;

	let readMoreElement: HTMLDivElement;
	let showReadMore: boolean;

	let musicPlayer: MusicPlayer;

	musicPlayerStore.subscribe((playerStore) => {
		musicPlayer = playerStore;
	});
</script>

<div class={`flex items-center justify-between group/track`}>
	<div class="flex gap-lg items-center">
		<p class="text-my-black-400 text-sm self-end">{number}</p>
		<button
			class="self-end flex items-end gap-md text-sm group/button"
			on:click={() => (showReadMore = !showReadMore)}
			type="button"
		>
			<span class="tracking-wider italic">{name}</span>
			<span
				class="text-my-black-100 flex gap-xs items-center transition-colors ease-in-out duration-75 ml-sm group-hover/track:text-my-black-400"
			>
				<span>read{showReadMore ? ' less' : ' more'}</span>
				<span
					class="text-xs text-my-black-50 p-xxxs rounded-full group-hover/button:bg-gray-100 transition-all ease-in-out duration-75"
				>
					<Icon.CaretDown />
				</span>
			</span>
		</button>
	</div>

	<div class="flex gap-xl items-center">
		<p class="text-my-black-600 mr-sm text-sm self-end">{length}</p>
		<div class="flex items-center gap-md text-my-black-600">
			{#if youtubeEmbed}
				<button
					class="p-xxs text-my-black-700 rounded-full"
					id="track-video"
					on:click={() => (videoIsOpen = !videoIsOpen)}
					type="button"><Icon.Video weight="thin" /></button
				>
				<Tooltip text="music video" triggeredById="track-video" />
			{:else}
				<button
					class="opacity-0 pointer-events-none p-xxs"
					id="track-video"
					on:click={() => (videoIsOpen = !videoIsOpen)}
					type="button"><Icon.Video weight="thin" /></button
				>
			{/if}

			<button
				class="p-xxs text-my-black-700 rounded-full"
				on:click={() => (lyricsIsOpen = !lyricsIsOpen)}
				id="track-lyrics"
				type="button"><Icon.Lyrics weight="thin" /></button
			>
			<Tooltip text="lyrics" triggeredById="track-lyrics" />

			<button
				class="p-xxs text-my-black-700 rounded-full"
				on:click={() => {
					const songListIndex = songsList.findIndex((songListSong) => songListSong.id === id);

					if (songListIndex < 0) {
						return;
					}

					const isCurrentTrack = musicPlayer.currentTrackIndex === songListIndex;

					if (isCurrentTrack) {
						if (musicPlayer.paused) {
							updateMusicPlayer.play();

							return;
						} else {
							return;
						}
					}

					updateMusicPlayer.track(songListIndex);
				}}
				id="track-listen"
				type="button"><Icon.Play weight="thin" /></button
			>
			<Tooltip text="play" triggeredById="track-listen" />
		</div>
	</div>
</div>

<div
	class="translate-x-0 ease-out duration-300 overflow-hidden"
	bind:this={readMoreElement}
	style:height={!showReadMore ? '0px' : `${readMoreElement.scrollHeight}px`}
	style:opacity={!showReadMore ? '0' : `1`}
>
	<div class="prose border-b border-my-black-50 pb-md mt-md">
		{@html description}
		<h4 class="text-my-black-400 font-thin">Credits</h4>
		{@html credits}
	</div>
</div>

{#if youtubeEmbed}
	<YoutubeVideoModal src={youtubeEmbed} bind:isOpen={videoIsOpen} />
{/if}

<LyricsModal {name} {lyrics} bind:isOpen={lyricsIsOpen} />
