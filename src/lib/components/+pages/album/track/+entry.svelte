<script lang="ts" context="module">
	import { Icon, Tooltip, YoutubeVideoModal } from '$lib/components';
	import LyricsModal from './lyrics-modal.svelte';

	import type { SongData } from '$lib/data';
</script>

<script lang="ts">
	export let data: SongData;

	const { name, number, length, lyrics, localSrc, description, credits, youtubeEmbed } = data;

	let videoIsOpen = false;
	let lyricsIsOpen = false;

	let readMoreElement: HTMLDivElement;
	let showReadMore: boolean;
</script>

<div class="flex items-center justify-between mt-sm group/track">
	<div class="flex gap-lg items-center">
		<p class="text-my-black-400 text-sm self-end">{number}</p>
		<p class="tracking-wider italic">{name}</p>
		<button
			class="self-end text-my-black-100 transition-colors ease-in-out duration-75 text-sm flex items-center gap-xs group/button ml-sm group-hover/track:text-my-black-400"
			on:click={() => (showReadMore = !showReadMore)}
			type="button"
		>
			<span>read{showReadMore ? ' less' : ' more'}</span>
			<span
				class="text-xs text-my-black-50 p-xxxs rounded-full group-hover/button:bg-gray-100 transition-all ease-in-out duration-75"
			>
				<Icon.CaretDown />
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
				on:click={() => (videoIsOpen = !videoIsOpen)}
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
	<div class="prose border-b pb-md mt-md">
		{@html description}
		<h4 class="text-my-black-400 font-thin">Credits</h4>
		{@html credits}
	</div>
</div>

{#if youtubeEmbed}
	<YoutubeVideoModal src={youtubeEmbed} bind:isOpen={videoIsOpen} />
{/if}

<LyricsModal {name} {lyrics} bind:isOpen={lyricsIsOpen} />
