<script lang="ts" context="module">
	import { onMount } from 'svelte';

	import { images } from '$lib/assets';
	import { Images, PageLayout, ImageGalleryModal, Picture, Caption } from '$lib/components';

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

	$: gapPxValue = remPxValue * 1;

	$: numCols = windowWidth < 704 ? 2 : 3;

	$: imageWidth = (containerOffsetWidth - (numCols - 1) * gapPxValue) / numCols;

	let dummyHeight: number;

	$: console.log('dummyHeight:', dummyHeight);

	$: containerHeight =
		dummyHeight && windowWidth < 704 ? dummyHeight / 2 + 200 : dummyHeight / 3 + 200;

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
	class="flex flex-col -z-10 pointer-events-none opacity-0 gap-sm bg-white absolute left-4 right-4 sm:left-8 sm:right-8 md:left-12 md:right-12 lg:left-16 lg:right-16"
	bind:clientWidth={containerOffsetWidth}
	bind:clientHeight={dummyHeight}>
	{#each galleryImages as image, i}
		<div class="border border-blue-400" style:width={`${imageWidth}px`}>
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

<div class="flex flex-col flex-wrap gap-sm overflow-x-hidden" style:height={`${containerHeight}px`}>
	{#each galleryImages as image, i}
		<!-- svelte-ignore a11y-click-events-have-key-events -->
		<!-- svelte-ignore a11y-no-static-element-interactions -->
		<div style:width={`${imageWidth}px`}>
			<div
				class={`relative cursor-zoom-in`}
				style:height={`${
					imageWidth / (image.naturalDimensions.width / image.naturalDimensions.height)
				}px`}
				on:click={() => {
					imageModalCurrentImageIndex = i;
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

<ImageGalleryModal
	bind:currentIndex={imageModalCurrentImageIndex}
	bind:isOpen={imageModalIsOpen}
	images={galleryImages} />
