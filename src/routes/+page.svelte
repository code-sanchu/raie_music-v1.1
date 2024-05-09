<script context="module" lang="ts">
	import { fade } from 'svelte/transition';

	import { updateGlobalFlags } from '$lib/stores';

	import { images } from '$lib/assets';

	import { Images, PageLayout, Picture, LatestNews } from '$lib/components';
	import { PageLinks, PlayMusicButton, ReviewQuote } from '$lib/components/+pages/landing';
</script>

<script lang="ts">
	let criticalContentIsLoaded = false;

	$: {
		if (criticalContentIsLoaded) {
			updateGlobalFlags.firstPageIsReady();
		}
	}
</script>

<PageLayout.Body>
	<PageLayout.VerticalSpacing sizing={'1.5'} />

	<div
		class="flex items-center justify-center sm:items-start sm:justify-between gap-xl md:gap-[4.5rem] lg:gap-2xl">
		<div class="flex flex-col gap-1.5xl sm:gap-2xl">
			<div class="">
				<ReviewQuote
					reviewer={{ name: 'Martin Cooke', org: 'Bluesmatters Magazine' }}
					text={[
						"One of life's trip-me-up revelations.",
						'A purveyor of pin-me-to-the wall,',
						'beautiful, life-enhancing soul music.',
						'A sweet, certain surprise...'
					]} />
			</div>

			<div class="sm:hidden px-[4.5rem]">
				<div
					class="w-full"
					style:aspect-ratio={images.faceshots[1].naturalDimensions.width /
						images.faceshots[1].naturalDimensions.height}>
					<Picture
						imageClass="w-full"
						meta={images.faceshots[1].src}
						sizes={'50vw'}
						loading="eager"
						onLoad={() => (criticalContentIsLoaded = true)}
						alt="" />
				</div>
			</div>

			<div
				class="translate-x-sm xxs:translate-x-md xs:translate-x-xl xs/sm:translate-x-[4rem] sm:translate-x-[0rem]">
				<ReviewQuote
					reviewer={{ name: 'Martin Webb', org: 'R&R Magazine' }}
					text={[
						'Raie has stepped forward with a',
						'beautifully assured solo album...',
						'Heart-tuggingly moving and edgily',
						'joyous. Love it!'
					]}
					delay={100} />
			</div>
		</div>

		<div
			class="hidden sm:block md:w-[400px] lg:w-[400px] xl:w-[450px] 2xl:w-[500px]"
			style:aspect-ratio={images.faceshots[1].naturalDimensions.width /
				images.faceshots[1].naturalDimensions.height}>
			<Picture
				imageClass={`w-full`}
				meta={images.faceshots[1].src}
				sizes={'50vw'}
				loading="eager"
				onLoad={() => (criticalContentIsLoaded = true)}
				transitionDuration="duration-500"
				alt="" />
		</div>
	</div>

	<PageLayout.VerticalSpacing sizing="1.5" />

	{#if criticalContentIsLoaded}
		<div class="flex justify-center" in:fade>
			<PlayMusicButton />
		</div>
	{/if}

	{#if criticalContentIsLoaded}
		<PageLayout.VerticalSpacing />

		<div class="px-xs xs:px-lg h-[12px] sm:h-[16px] md:h-auto sm:px-0 overflow-hidden">
			<Images.BrickBg.HorizontalThree />
		</div>
	{/if}

	{#if criticalContentIsLoaded}
		<PageLayout.VerticalSpacing />

		<div
			class="flex flex-col sm:flex-row justify-between sm:gap-lg lg:gap-xl flex-shrink-0"
			in:fade={{ delay: 400 }}>
			<div class="px-xs xs:px-lg sm:px-0">
				<LatestNews />
			</div>

			<div class="sm:hidden">
				<PageLayout.VerticalSpacing sizing="1.5" />
			</div>

			<div class="px-xs xs:px-lg h-[12px] sm:hidden overflow-hidden">
				<Images.BrickBg.HorizontalThree />
			</div>

			<div class="sm:hidden">
				<PageLayout.VerticalSpacing sizing="half" />
			</div>

			<div class="sm:pt-[40px] px-md sm:px-0">
				<PageLinks />
			</div>
		</div>
	{/if}
</PageLayout.Body>
