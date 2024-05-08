<script context="module" lang="ts">
	import type { ImageAsset } from '$lib/assets';

	import { Picture } from '$lib/components';

	const captionMarginTop = 8;
</script>

<script lang="ts">
	export let img: ImageAsset;

	let windowWidth: number;

	let containerNode: HTMLDivElement;
	let captionNode: HTMLDivElement;

	let imageWidth: number;
	let imageHeight: number;

	$: {
		if (containerNode && windowWidth) {
			const containerRect = containerNode.getBoundingClientRect();
			const containerWidth = containerRect.width;
			const containerHeight = containerRect.height;

			const captionHeight = captionNode ? captionNode.getBoundingClientRect().height : 0;

			const imgContainerHeight =
				containerHeight - (captionHeight === null ? 0 : captionHeight + captionMarginTop);

			const containerIsLandscape = containerWidth >= imgContainerHeight;

			const imgAspectRatio = img.naturalDimensions.width / img.naturalDimensions.height;

			const imgIsLandscape = imgAspectRatio >= 1;

			if (containerIsLandscape) {
				if (imgIsLandscape) {
					const maxImageWidth = imgContainerHeight * imgAspectRatio;

					if (maxImageWidth > containerWidth) {
						imageWidth = containerWidth;
					} else {
						imageWidth = maxImageWidth;
					}

					imageHeight = imageWidth / imgAspectRatio;
				} else {
					const maxImageHeight = containerWidth / imgAspectRatio;

					if (maxImageHeight > containerHeight) {
						imageHeight = containerHeight;
					} else {
						imageHeight = maxImageHeight;
					}

					imageWidth = imageHeight * imgAspectRatio;
				}
			} else {
				if (imgIsLandscape) {
					const maxImageHeight = containerWidth / imgAspectRatio;

					if (maxImageHeight > containerHeight) {
						imageHeight = containerHeight;
					} else {
						imageHeight = maxImageHeight;
					}

					imageWidth = imageHeight * imgAspectRatio;
				} else {
					const maxImageWidth = imgContainerHeight * imgAspectRatio;

					if (maxImageWidth > containerWidth) {
						imageWidth = containerWidth;
					} else {
						imageWidth = maxImageWidth;
					}

					imageHeight = imageWidth / imgAspectRatio;
				}
			}
		}
	}
</script>

<svelte:window bind:innerWidth={windowWidth} />

<Picture imageClass="w-full h-full" meta={img.src} sizes={'250px'} alt={img.caption} />

{#if img.caption}
	<p
		class="pl-xxs border-l-2 text-gray-600 text-xs mt-xs shrink-0 bg-white w-[96%]"
		bind:this={captionNode}>
		{img.caption}
	</p>
{/if}
