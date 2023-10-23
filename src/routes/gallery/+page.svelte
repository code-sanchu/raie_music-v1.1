<script lang="ts" context="module">
	import { onMount } from 'svelte';

	import { images } from '$lib/assets';
	import { Caption, ImageGalleryModal, Images, PageLayout, Picture } from '$lib/components';
	import { updateGlobalFlags } from '$lib/stores';
	import Measure from './measure.svelte';
	import { fade } from 'svelte/transition';

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
	let mounted = false;

	onMount(() => {
		updateGlobalFlags.firstPageIsReady();

		mounted = true;
	});

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

<PageLayout.Body>
	<PageLayout.VerticalSpacing sizing="1.5" />

	{#if mounted}
		<div in:fade>
			<Images.BrickBg.HorizontalThree />
		</div>
	{/if}

	<PageLayout.VerticalSpacing sizing="half" />

	{#if mounted}
		<h2
			class="tracking-widest uppercase text-sm md:text-sm decoration-my-black-50/80 underline-offset-4 text-my-black-200 flex gap-xs items-center"
			in:fade>
			<span class="w-[1.5px] h-[18px] bg-my-black-50/30" />
			<span> Red Brick Angel pic update</span>
		</h2>
	{/if}

	<PageLayout.VerticalSpacing sizing="2/3" />

	{#if showImages}
		<div class="flex flex-col flex-wrap gap-sm" style:height={`${containerHeight}px`}>
			{#each galleryImages as image, i}
				<!-- svelte-ignore a11y-click-events-have-key-events -->
				<!-- svelte-ignore a11y-no-static-element-interactions -->
				<div style:width={`${imageWidth}px`} in:fade={{ delay: 200 }}>
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

		<p class="mt-sm flex gap-xs items-center">
			<span class="w-[10px] h-[1.2px] bg-my-black-50" />
			<span class="text-sm md:text-base text-my-black-900">
				Galaxy Studio images by Christiano Tortoioli.</span>
		</p>
	{/if}
</PageLayout.Body>

<Measure images={galleryImages} bind:imageWidth bind:containerHeight />

<ImageGalleryModal
	bind:currentIndex={imageModalCurrentIndex}
	bind:isOpen={imageModalIsOpen}
	images={galleryImages} />
