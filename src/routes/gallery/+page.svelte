<script lang="ts" context="module">
	import { onMount } from 'svelte';

	import { images } from '$lib/assets';
	import { Images, PageLayout, ImageGalleryModal, Picture } from '$lib/components';

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

	let imageModalCurrentImageIndex = 0;

	let windowWidth: number;
	let containerOffsetWidth: number;

	let remPxValue: number;

	onMount(() => {
		if (document) {
			const fontSize = getComputedStyle(document.documentElement).fontSize;
			remPxValue = parseFloat(fontSize);
		}
	});

	$: gapPxValue = remPxValue * (2 / 3);

	$: numCols = windowWidth < 704 ? 2 : 3;

	$: imageWidth = (containerOffsetWidth - (numCols - 1) * gapPxValue) / numCols;

	/* 	$: console.log('imageWidth:', imageWidth);

	let imagesTotalHeightWithGaps: number;

	$: {
		if (imageWidth) {
			let totalHeightWithoutGaps = 0;

			galleryImages.forEach((image) => {
				let height = imageWidth / (image.naturalDimensions.width / image.naturalDimensions.height);

				totalHeightWithoutGaps += height;
			});

			// const totalGapsHeight = galleryImages
			imagesTotalHeightWithGaps = totalHeightWithoutGaps + 600;
		}
	}

	$: containerHeight = imagesTotalHeightWithGaps / 3; */
</script>

<svelte:window bind:innerWidth={windowWidth} />

<PageLayout.VerticalSpacing sizing="1.5" />

<Images.BrickBg.HorizontalThree />

<PageLayout.VerticalSpacing sizing="half" />

<div
	class="h-[600px] -z-10 overflow-x-auto flex flex-col flex-wrap bg-white border border-red-600 absolute left-4 right-4 sm:left-8 sm:right-8 md:left-12 md:right-12 lg:left-16 lg:right-16"
	bind:offsetWidth={containerOffsetWidth}>
	{#each galleryImages as image, i}
		<div
			class="bg-blue-200"
			style:width={`${imageWidth}px`}
			style:height={`${
				imageWidth / (image.naturalDimensions.width / image.naturalDimensions.height)
			}px`} />
	{/each}
</div>

<div class="flex flex-col flex-wrap gap-sm max-h-[1800px]">
	{#each galleryImages as image, i}
		<!-- svelte-ignore a11y-click-events-have-key-events -->
		<!-- svelte-ignore a11y-no-static-element-interactions -->
		<div
			class={`cursor-zoom-in`}
			style:width={`${imageWidth}px`}
			on:click={() => {
				imageModalCurrentImageIndex = i;
				imageModalIsOpen = true;
			}}>
			<Picture
				imageClass={`w-full grayscale hover:grayscale-0`}
				meta={image.src}
				sizes={`${image.naturalDimensions.width}px`}
				alt="" />
		</div>
	{/each}
</div>
<!-- </div> -->

<ImageGalleryModal
	bind:currentIndex={imageModalCurrentImageIndex}
	bind:isOpen={imageModalIsOpen}
	images={galleryImages} />
