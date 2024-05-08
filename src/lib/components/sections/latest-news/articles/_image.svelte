<script context="module" lang="ts">
	import type { ImageAsset } from '$lib/assets';

	import { Picture } from '$lib/components';

	const captionMarginTop = 8;
</script>

<script lang="ts">
	export let img: ImageAsset;

	let containerWidth: number;
	let containerHeight: number;

	let containerNode: HTMLDivElement;
	let captionNode: HTMLDivElement;

	let imageWidth: number;
	let imageHeight: number;

	const calcImageDimensions = () => {
		if (containerNode) {
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
	};

	$: containerWidth, containerNode, captionNode, calcImageDimensions();
</script>

<div
	class="w-full h-[95%] flex justify-center bg-my-black-100/20 pb-xxs border-2 border-my-black-200/10 rounded-sm"
	bind:this={containerNode}
	bind:clientWidth={containerWidth}
	bind:clientHeight={containerHeight}>
	<div class="h-full flex flex-col items-center">
		<div class="relative" style:height="{imageHeight}px" style:width="{imageWidth}px">
			<Picture
				imageClass="absolute w-full h-full"
				meta={img.src}
				sizes={'250px'}
				alt={img.caption} />
		</div>

		{#if img.caption}
			<p
				class="pl-xxs border-l-2 text-gray-600 text-xs mt-xs shrink-0 bg-white w-[96%]"
				bind:this={captionNode}>
				{img.caption}
			</p>
		{/if}
	</div>
</div>
