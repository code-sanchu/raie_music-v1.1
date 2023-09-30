<script lang="ts" context="module">
	import { Tooltip, Icon } from '$lib/components';
	import LyricsModal from './lyrics-modal.svelte';
	import YoutubeVideoModal from './youtube-video-modal.svelte';
</script>

<script lang="ts">
	export let number: string;
	export let name: string;
	export let length: string;
	export let youtubeVideoSrc: string | null = null;
	export let lyrics: string;

	let videoIsOpen = false;
	let lyricsIsOpen = false;

	let readMoreElement: HTMLDivElement;
	let showReadMore: boolean;
</script>

<div class="flex items-center justify-between mt-sm">
	<div class="flex gap-xl items-center">
		<p class="text-my-black-600">{number}.</p>
		<p class="">{name}</p>
		<p class="text-my-black-400 text-sm flex items-center gap-xs group/button">
			<button
				class="flex items-center gap-xs"
				on:click={() => (showReadMore = !showReadMore)}
				type="button"
			>
				<span>read{showReadMore ? ' less' : ' more'}</span>
				<span
					class="text-xs text-my-black-300 p-xxxs rounded-full group-hover/button:bg-gray-100 transition-all ease-in-out duration-75"
				>
					<Icon.CaretDown />
				</span>
			</button>
		</p>
	</div>

	<div class="flex gap-xl items-center">
		<p class="text-my-black-600">{length}</p>
		<div class="flex items-center gap-md text-my-black-600">
			{#if youtubeVideoSrc}
				<button
					class="p-xxs text-my-black-500 rounded-full hover:bg-gray-100 hover:text-my-black-700 transition-all ease-in-out duration-75"
					id="track-video"
					on:click={() => (videoIsOpen = !videoIsOpen)}
					type="button"><Icon.Video /></button
				>
				<Tooltip text="music video" triggeredById="track-video" />
			{:else}
				<button
					class="opacity-0 pointer-events-none text-my-black-500 p-xxs rounded-full hover:bg-gray-100 hover:text-my-black-700 transition-all ease-in-out duration-75"
					id="track-video"
					on:click={() => (videoIsOpen = !videoIsOpen)}
					type="button"><Icon.Video /></button
				>
			{/if}

			<button
				class="p-xxs rounded-full hover:bg-gray-100 hover:text-my-black-700 text-my-black-500 transition-all ease-in-out duration-75"
				on:click={() => (lyricsIsOpen = !lyricsIsOpen)}
				id="track-lyrics"
				type="button"><Icon.Lyrics /></button
			>
			<Tooltip text="lyrics" triggeredById="track-lyrics" />

			<button
				class="p-xxs rounded-full hover:bg-gray-100 hover:text-my-black-700 transition-all text-my-black-500 ease-in-out duration-75"
				on:click={() => (videoIsOpen = !videoIsOpen)}
				id="track-listen"
				type="button"><Icon.Play /></button
			>
			<Tooltip text="play" triggeredById="track-listen" />
		</div>
	</div>
</div>

<div
	class="prose text-my-black translate-x-0 ease-out duration-300 overflow-hidden"
	bind:this={readMoreElement}
	style:height={!showReadMore ? '0px' : `${readMoreElement.scrollHeight}px`}
	style:opacity={!showReadMore ? '0' : `1`}
>
	<slot name="read-more" />
</div>

{#if youtubeVideoSrc}
	<YoutubeVideoModal src={youtubeVideoSrc} bind:isOpen={videoIsOpen} />
{/if}

<LyricsModal {name} {lyrics} bind:isOpen={lyricsIsOpen} />
