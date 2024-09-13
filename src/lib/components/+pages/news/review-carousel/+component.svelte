<script lang="ts" context="module">
	import { swipe as untypedSwipe } from 'svelte-gestures';

	import type { Swipe } from '$lib/types';

	import { checkIsInView } from '$lib/helpers';

	import { Icon } from '$lib/components';

	import TitleButton from './_title-button.svelte';
	import PrevNextButton from './_prev-next-button.svelte';

	const swipe: Swipe = untypedSwipe as any;

	const reviewTitles = [
		'Preumont Michel for Contert Monkey',
		'Stephen Harrison for Blues Matters',
		'Steve Yourglivch for Blue Bloods',
		'Martin Cooke for Blues Matters',
		"Martin Slidel for What's On London",
		'Martin Webb (1)',
		'Martin Webb (2)'
	];
</script>

<script lang="ts">
	let imagesContainer: HTMLDivElement;

	let isOverflow = false;

	$: {
		if (imagesContainer) {
			const scrollWidth = imagesContainer.scrollWidth;
			const offsetWidth = imagesContainer.offsetWidth;

			isOverflow = scrollWidth > offsetWidth;
		}
	}

	$: imageElements = !imagesContainer ? undefined : [...imagesContainer.children[0].children];

	let scrollLeft: number;

	let clickedOnImageIndex = 0;

	const scrollImageIntoView = (index: number) => {
		if (!imageElements) {
			return;
		}

		imageElements[index].scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
	};

	const handleGoToImage = (index: number) => {
		scrollImageIntoView(index);

		clickedOnImageIndex = index;
	};

	const goNextImage = () => {
		if (!imageElements) {
			return;
		}

		const nextImageIndex = clickedOnImageIndex + 1;

		const isLastImage = nextImageIndex > imageElements.length - 1;

		if (isLastImage) {
			return;
		}

		handleGoToImage(nextImageIndex);
	};

	const goPrevImage = () => {
		if (!imageElements) {
			return;
		}

		const prevImageIndex = clickedOnImageIndex - 1;

		if (prevImageIndex < 0) {
			return;
		}

		handleGoToImage(prevImageIndex);
	};
</script>

{#if imageElements}
	<div
		class="flex items-center flex-wrap gap-x-xxs xs:gap-x-xs sm:gap-x-sm gap-y-xs mt-xs max-w-full">
		{#each reviewTitles as reviewTitle, i}
			<TitleButton
				onClick={() => handleGoToImage(i)}
				checkIsInView={(onUpdate) =>
					checkIsInView({ container: imagesContainer, node: imageElements[i], onUpdate })}
				recalcInViewOn={scrollLeft}>
				{reviewTitle}
			</TitleButton>

			{#if i < reviewTitles.length - 1}
				<span class="text-my-black-50 text-sm"> | </span>
			{/if}
		{/each}
	</div>
{/if}

<div
	class="relative"
	use:swipe={{ timeframe: 300, minSwipeDistance: 100, touchAction: 'pan-y' }}
	on:swipe={(e) => (e.detail.direction === 'left' ? goNextImage() : goPrevImage())}>
	<div
		class="overflow-hidden relative mt-sm w-full h-[900px] max-h-[80vh]"
		bind:this={imagesContainer}
		on:scroll={() => {
			scrollLeft = imagesContainer.scrollLeft;
		}}>
		<div class="absolute left-0 top-0 flex gap-sm h-full">
			<slot />
		</div>
	</div>

	{#if isOverflow}
		<PrevNextButton type="previous" onClick={goPrevImage}>
			<Icon.CaretLeft />
		</PrevNextButton>

		<PrevNextButton type="next" onClick={goNextImage}>
			<Icon.CaretRight />
		</PrevNextButton>
	{/if}
</div>
