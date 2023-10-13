<script lang="ts" context="module">
	import { Caption, Picture } from '$lib/components';
	import type { Data } from '$lib/types';
</script>

<script lang="ts">
	export let image: Data['Image'];

	let windowWidth: number;
	let windowHeight: number;

	let imageWidth: number;
	let imageHeight: number;

	$: {
		if (windowWidth && windowHeight) {
			const gap = 10;

			const maxHeightPx = windowHeight * 0.8;
			const maxWidthPx = windowWidth * 0.8 - gap;

			const imageAspectRatio = image.naturalDimensions.width / image.naturalDimensions.height;

			if (imageAspectRatio >= 1) {
				let tempImageWidth = maxWidthPx;
				let tempImageHeight = tempImageWidth / imageAspectRatio;

				if (tempImageHeight <= maxHeightPx) {
					imageWidth = tempImageWidth;
					imageHeight = tempImageHeight;
				} else {
					imageHeight = maxHeightPx;
					imageWidth = maxHeightPx * imageAspectRatio;
				}
			} else {
				let tempImageHeight = maxHeightPx;
				let tempImageWidth = tempImageHeight * imageAspectRatio;

				if (tempImageWidth <= maxWidthPx) {
					imageWidth = tempImageWidth;
					imageHeight = tempImageHeight;
				} else {
					imageWidth = maxWidthPx;
					imageHeight = maxWidthPx / imageAspectRatio;
				}
			}
		}
	}

	let mouseIsDown = false;
</script>

<svelte:window bind:innerWidth={windowWidth} bind:innerHeight={windowHeight} />

<!-- svelte-ignore a11y-click-events-have-key-events -->
<!-- svelte-ignore a11y-no-noninteractive-element-interactions -->
<!-- svelte-ignore a11y-no-static-element-interactions -->
<div
	class={`h-full w-full flex flex-col items-center justify-center ${
		mouseIsDown ? 'cursor-grabbing' : 'cursor-grab'
	}`}
	on:mousedown={() => (mouseIsDown = true)}
	on:mouseup={() => (mouseIsDown = false)}>
	{#if imageHeight && imageWidth}
		<div class="bg-my-black-50/10" style:width="{imageWidth}px" style:height="{imageHeight}px">
			<Picture
				imageClass={`w-full h-full`}
				meta={image.src}
				sizes={`${image.naturalDimensions.width}px`}
				alt="" />
		</div>
	{/if}

	{#if image.caption && imageWidth}
		<div class="max-h-[10vh] overflow-y-auto text-center" style:width="{imageWidth}px">
			<Caption
				extraClasses="!mt-0 py-xs pl-xs no-underline !text-my-black bg-white/60 sm:!text-base rounded-b-sm">
				{image.caption}
			</Caption>
		</div>
	{/if}
</div>
