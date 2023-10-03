<script lang="ts" context="module">
	import { images } from '$lib/assets';
	import { Images, PageLayout, ImageGalleryModal, Picture } from '$lib/components';

	const galleryImages = [
		images.dog_carpet,
		images.albums.earthbound.album_cover,
		images.crew_and_artists_red_brick_angels_GMS,
		images.jill_cumberbatch_mandolin,
		images.naz_and_nate_warmin_up,
		images.md_and_producer_chillin_GMS,
		images.crew_and_artists_red_brick_angels_GMS_2,
		images.galaxy['christiano-bass']
	];
</script>

<script lang="ts">
	let imageModalIsOpen = false;

	let imageModalCurrentImageIndex = 0;
</script>

<PageLayout.VerticalSpacing sizing="1.5" />

<Images.BrickBg.HorizontalThree />

<PageLayout.VerticalSpacing sizing="half" />

<div class="inline-flex flex-col h-[800px] flex-wrap gap-sm overflow-hidden">
	{#each galleryImages as image, i}
		<!-- svelte-ignore a11y-click-events-have-key-events -->
		<!-- svelte-ignore a11y-no-static-element-interactions -->
		<div
			class={`w-[calc(33.333%-0.666rem)] cursor-zoom-in `}
			on:click={() => {
				imageModalCurrentImageIndex = i;
				imageModalIsOpen = true;
			}}
		>
			<Picture
				imageClass={`w-full `}
				meta={image.src}
				sizes={`${image.naturalDimensions.width}px`}
				alt=""
			/>
		</div>
	{/each}
</div>

<ImageGalleryModal
	bind:currentIndex={imageModalCurrentImageIndex}
	bind:isOpen={imageModalIsOpen}
	images={galleryImages}
/>
