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
			const extraSpace =
				dummyContainerHeight && windowWidth < 704 ? 200 : windowWidth < 900 ? 200 : 200;

			containerHeight =
				dummyContainerHeight && windowWidth < 704
					? dummyContainerHeight / 2 + extraSpace
					: dummyContainerHeight / 3 + extraSpace;
		}
	}
</script>

<svelte:window bind:innerWidth={windowWidth} />

<div
	class="absolute flex flex-col gap-sm left-4 right-4 sm:left-8 sm:right-8 md:left-12 md:right-12 lg:left-16 lg:right-16"
	bind:clientWidth={dummyContainerWidth} />

{#if dummyContainerWidth}
	<div
		class="fixed flex flex-col gap-sm"
		style:width={`${dummyContainerWidth}px`}
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
{/if}

<!-- class="fixed flex flex-col -z-10 invisible gap-sm w-[calc(100vw-2rem)] sm:w-[calc(100vw-4rem)] md:w-[calc(100vw-6rem)] lg:w-[calc(100vw-8rem)]" -->

<!-- class="absolute flex flex-col gap-sm left-4 right-4 sm:left-8 sm:right-8 md:left-12 md:right-12 lg:left-16 lg:right-16 border border-red-600" -->
