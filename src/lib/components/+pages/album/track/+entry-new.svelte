<script lang="ts" context="module">
	import type { SongData } from '$lib/data';
	import Left from './left.svelte';
	import Right from './right.svelte';
</script>

<script lang="ts">
	export let data: SongData;
	export let noVideos = false;
	export let minWidth: number;

	let readMoreElement: HTMLDivElement;
	let showReadMore: boolean;
</script>

<div>
	<div class="grid grid-cols-2 gap-xl" style:min-width={`${minWidth}px`}>
		<Left {data} bind:showReadMore />

		<div class="flex justify-end pr-xs">
			<Right {data} {noVideos} />
		</div>
	</div>

	<div
		class="translate-x-0 ease-out duration-300 overflow-hidden"
		bind:this={readMoreElement}
		style:height={!showReadMore ? '0px' : `${readMoreElement.scrollHeight}px`}
		style:opacity={!showReadMore ? '0' : '1'}>
		<div class="prose border-b border-my-black-50 pb-md pl-[2.5rem] pr-sm mt-md">
			{@html data.description}

			<h4 class="text-my-black-400 font-thin">Credits</h4>

			{@html data.credits}
		</div>
	</div>
</div>
