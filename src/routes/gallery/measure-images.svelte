<script lang="ts" context="module">
	import { onMount } from 'svelte';

	import type { Data } from '$lib/types';
	import { Caption } from '$lib/components';
</script>

<script lang="ts">
	export let images: Data['Image'][];
	export let imageWidth: number;
	export let containerHeight: number;

	let windowWidth: number;

	let dummyContainerWidth: number;
	let dummyContainerHeight: number;

	let remPxValue: number;

	onMount(() => {
		if (document) {
			const fontSize = getComputedStyle(document.documentElement).fontSize;
			remPxValue = parseFloat(fontSize);
		}
	});

	$: gapPxValue = remPxValue * 1;

	$: numCols = windowWidth < 704 ? 2 : 3;

	$: imageWidth = (dummyContainerWidth - (numCols - 1) * gapPxValue) / numCols;

	$: {
		if (windowWidth && dummyContainerWidth && dummyContainerHeight) {
			containerHeight =
				dummyContainerHeight && windowWidth < 704
					? dummyContainerHeight / 2 + 200
					: dummyContainerHeight / 3 + 200;
		}
	}
</script>

<svelte:window bind:innerWidth={windowWidth} />

<div
	class="fixed left-0 flex flex-col -z-10 invisible gap-sm w-[calc(100vw-2rem)] sm:w-[calc(100vw-4rem)] md:w-[calc(100vw-6rem)] lg:w-[calc(100vw-8rem)]"
	bind:clientWidth={dummyContainerWidth}
	bind:clientHeight={dummyContainerHeight}>
	{#each images as image, i}
		<div style:width={`${imageWidth}px`}>
			<div
				style:height={`${
					imageWidth / (image.naturalDimensions.width / image.naturalDimensions.height)
				}px`} />

			{#if image.caption}
				<Caption extraClasses="sm:!mt-xs no-underline !text-my-black-500 sm:!text-base">
					{image.caption}
				</Caption>
			{/if}
		</div>
	{/each}
</div>
