<script lang="ts" context="module">
	import { images } from '$lib/assets';
	import { ImageGalleryModal, Picture } from '$lib/components';
	import { ImageScroller } from '$lib/components/+pages/news';

	const reviewImages = Object.values(images.reviews);
</script>

<script lang="ts">
	let imageModalIsOpen = false;

	let imageModalCurrentIndex = 0;

	const onClickImage = (index: number) => {
		imageModalCurrentIndex = index;
		imageModalIsOpen = true;
	};
</script>

<h2 class="tracking-widest text-xs sm:text-sm text-my-black-600 uppercase">Archive Reviews</h2>

<div class="mt-md">
	<ImageScroller.Container>
		<!-- svelte-ignore a11y-click-events-have-key-events -->
		<!-- svelte-ignore a11y-no-static-element-interactions -->
		{#each reviewImages as image, i}
			<!-- svelte-ignore a11y-click-events-have-key-events -->
			<div
				class="border border-my-black-50/80 p-lg rounded-lg shrink-0 cursor-zoom-in flex items-stretch"
				on:click={() => onClickImage(i)}>
				<div class="relative w-[500px] max-w-[70vw] overflow-hidden">
					<Picture
						imageClass={`absolute w-full`}
						meta={image.src}
						sizes={`${image.naturalDimensions.width}px`}
						alt="" />
				</div>
			</div>
		{/each}
	</ImageScroller.Container>
</div>

<ImageGalleryModal
	bind:currentIndex={imageModalCurrentIndex}
	bind:isOpen={imageModalIsOpen}
	images={reviewImages} />
