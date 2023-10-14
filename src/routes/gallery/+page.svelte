<script lang="ts" context="module">
	import { images } from '$lib/assets';
	import { Caption, ImageGalleryModal, Images, PageLayout, Picture } from '$lib/components';
	import Measure from './measure.svelte';

	const galleryImages = [
		images.dog_carpet,
		images.naz_and_nate_warmin_up,
		images.jill_cumberbatch_mandolin,
		images.louis_chords,
		images.jon_steinway,
		images.string_section_warm_up,
		images.farwell_drinks_day_6,
		images.jon_conducts_strings,
		images.galaxy['tim_gardner-violin-free_now'],
		images.altea_grey,
		images.wes_mics_up_strings,
		images.maria_crystal_girl,
		images.galaxy.chris,
		images.galaxy.wesonator,
		images.galaxy['christiano-bass']
	];
</script>

<script lang="ts">
	let imageModalIsOpen = false;
	let imageModalCurrentIndex = 0;

	let imageWidth: number;
	let containerHeight: number;

	let showImages = false;

	$: {
		if (imageWidth && containerHeight) {
			setTimeout(() => {
				showImages = true;
			}, 400);
		}
	}
</script>

<PageLayout.VerticalSpacing sizing="1.5" />

<Images.BrickBg.HorizontalThree />

<PageLayout.VerticalSpacing sizing="half" />

<h2
	class="tracking-widest text-sm md:text-base underline decoration-my-black-50 underline-offset-2 text-my-black-500">
	Red Brick Angel pic update
</h2>

<p class="mt-sm italic text-my-black-600">Galaxy Studio images by Christiano Tortoioli.</p>

<PageLayout.VerticalSpacing sizing="half" />

{#if showImages}
	<div class="flex flex-col flex-wrap gap-sm" style:height={`${containerHeight}px`}>
		{#each galleryImages as image, i}
			<!-- svelte-ignore a11y-click-events-have-key-events -->
			<!-- svelte-ignore a11y-no-static-element-interactions -->
			<div style:width={`${imageWidth}px`}>
				<div
					class={`relative cursor-zoom-in bg-my-black-50/10`}
					style:height={`${
						imageWidth / (image.naturalDimensions.width / image.naturalDimensions.height)
					}px`}
					on:click={() => {
						imageModalCurrentIndex = i;
						imageModalIsOpen = true;
					}}>
					<Picture
						pictureClass="absolute inset-0"
						imageClass={`grayscale hover:grayscale-0`}
						meta={image.src}
						sizes={`${image.naturalDimensions.width}px`}
						alt="" />
				</div>

				{#if image.caption}
					<Caption extraClasses="sm:!mt-xs no-underline !text-my-black-500 sm:!text-base">
						{image.caption}
					</Caption>
				{/if}
			</div>
		{/each}
	</div>
{/if}

<Measure images={galleryImages} bind:imageWidth bind:containerHeight />

<ImageGalleryModal
	bind:currentIndex={imageModalCurrentIndex}
	bind:isOpen={imageModalIsOpen}
	images={galleryImages} />
