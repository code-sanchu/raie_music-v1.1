<script lang="ts" context="module">
	import { images } from '$lib/assets';

	import { ImageGalleryModal, Picture } from '$lib/components';
	import { ReviewCarousel } from '$lib/components/+pages/news';

	const reviewImages = Object.values(images.reviews);
</script>

<script lang="ts">
	let imageModalIsOpen = false;

	let imageModalCurrentIndex = 0;

	const onClickImage = (index: number) => {
		imageModalCurrentIndex = index;
		imageModalIsOpen = true;
	};

	let windowWidth: number;
</script>

<svelte:window bind:innerWidth={windowWidth} />

<h2 class="tracking-widest text-xs sm:text-sm text-my-black-600 uppercase">Archive Reviews</h2>

{#if windowWidth}
	<div class="mt-md">
		<ReviewCarousel>
			<!-- svelte-ignore a11y-click-events-have-key-events -->
			<!-- svelte-ignore a11y-no-static-element-interactions -->
			{#each reviewImages as image, i}
				{@const aspectRatio = image.naturalDimensions.width / image.naturalDimensions.height}
				{@const width = windowWidth * 0.7 >= 500 ? 500 : windowWidth * 0.7}
				{@const height = width / aspectRatio}
				<!-- svelte-ignore a11y-click-events-have-key-events -->
				<div
					class="border border-my-black-50/80 p-lg rounded-lg shrink-0 cursor-zoom-in flex items-stretch"
					on:click={() => onClickImage(i)}>
					<div
						class="relative w-[500px] max-w-[70vw] overflow-hidden bg-my-black-50/10"
						style:height="{height}px">
						<Picture
							imageClass={`w-full h-full`}
							meta={image.src}
							sizes={`${image.naturalDimensions.width}px`}
							alt="" />
					</div>
				</div>
			{/each}
		</ReviewCarousel>
	</div>
{/if}

<ImageGalleryModal
	bind:currentIndex={imageModalCurrentIndex}
	bind:isOpen={imageModalIsOpen}
	images={reviewImages} />
