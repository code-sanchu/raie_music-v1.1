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

<p class="text-my-black tracking-wide leading-relaxed max-w-[768px] mt-sm">
	Raie's latest album Red Brick Angel is attracting attention from top international reviewers! ...
</p>

{#if windowWidth}
	<div class="mt-md">
		<ReviewCarousel>
			<!-- svelte-ignore a11y-click-events-have-key-events -->
			<!-- svelte-ignore a11y-no-static-element-interactions -->
			{#each reviewImages as image, i}
				{@const aspectRatio = image.naturalDimensions.width / image.naturalDimensions.height}
				{@const width = windowWidth * 0.7 >= 500 ? 500 : windowWidth * 0.7}
				{@const height =
					(width <= image.naturalDimensions.width ? width : image.naturalDimensions.width) /
					aspectRatio}
				<!-- svelte-ignore a11y-click-events-have-key-events -->
				<div
					class="border border-my-black-50/80 rounded-lg shrink-0 cursor-zoom-in flex items-stretch relative w-[500px] max-w-[70vw]">
					<div class="absolute inset-lg overflow-hidden bg-my-black-50/10">
						<div
							class="absolute inset-0"
							style:height="{height}px"
							style:max-width="{image.naturalDimensions.width}px"
							on:click={() => onClickImage(i)}>
							<Picture
								imageClass={`w-full h-full `}
								meta={image.src}
								sizes={`${image.naturalDimensions.width}px`}
								alt="" />
						</div>

						{#if i === 0}
							<div
								class="absolute bottom-0 z-10 bg-white/60 w-full p-1 flex justify-end cursor-pointer">
								<a
									class="uppercase text-xs tracking-wide"
									href="http://www.concertmonkey.be/albumreviews/album-red-brick-angel-raie"
									target="_blank">Visit website</a>
							</div>
						{/if}
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
