<script lang="ts" context="module">
	import { images } from '$lib/assets';
	import { Caption, ImageGalleryModal, Images, PageLayout, Picture } from '$lib/components';
	import MeasureImages from './measure-images.svelte';

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

	let imageWidth: number;
	let containerHeight: number;

	let showImages = false;

	$: {
		if (containerHeight) {
			setTimeout(() => {
				showImages = true;
			}, 400);
		}
	}
</script>

<PageLayout.VerticalSpacing sizing="1.5" />

<Images.BrickBg.HorizontalThree />

<PageLayout.VerticalSpacing sizing="half" />

{#if showImages}
	<div
		class="flex flex-col flex-wrap gap-sm overflow-x-hidden"
		style:height={`${containerHeight}px`}>
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
{/if}

<MeasureImages images={galleryImages} bind:imageWidth bind:containerHeight />
<!-- <div
	class="fixed left-0 flex flex-col -z-10 invisible gap-sm w-[calc(100vw-2rem)] sm:w-[calc(100vw-4rem)] md:w-[calc(100vw-6rem)] lg:w-[calc(100vw-8rem)]"
	bind:clientWidth={containerOffsetWidth}
	bind:clientHeight={dummyHeight}>
	{#each galleryImages as image, i}
		<div style:width={`${imageWidth}px`}>
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
</div> -->

<ImageGalleryModal
	bind:currentIndex={imageModalCurrentImageIndex}
	bind:isOpen={imageModalIsOpen}
	images={galleryImages} />
