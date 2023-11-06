<script lang="ts" context="module">
	import type { Song } from '$lib/data';
	import Left from './left.svelte';
	import Right from './right.svelte';
</script>

<script lang="ts">
	export let data: Song;
	export let noVideos = false;
	export let noLyrics = false;
	export let minWidth: number;

	let aboutNode: HTMLDivElement;
	let showAbout: boolean;
</script>

<div>
	<div class="grid grid-cols-2 gap-xl" style:min-width={`${minWidth}px`}>
		<Left {data} bind:showAbout />

		<div class="flex justify-end pr-xs">
			<Right {data} {noVideos} {noLyrics} />
		</div>
	</div>

	<div
		class="translate-x-0 ease-out duration-300 overflow-hidden"
		bind:this={aboutNode}
		style:height={!showAbout ? '0px' : `${aboutNode.scrollHeight}px`}
		style:opacity={!showAbout ? '0' : '1'}>
		<div class="prose border-b border-my-black-50 pb-md pl-[2.5rem] pr-sm mt-md">
			{@html data.description}

			<h4 class="text-my-black-400 font-thin">Credits</h4>

			{@html data.credits}
		</div>
	</div>
</div>
