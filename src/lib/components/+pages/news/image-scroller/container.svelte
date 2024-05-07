<script lang="ts" context="module">
	import { swipe as untypedSwipe } from 'svelte-gestures';

	import type { Swipe } from '$lib/types';

	import { checkIsInView } from '$lib/helpers';

	import { Icon } from '$lib/components';

	import TitleButton from './+title-button.svelte';
	import PrevNextButton from './prev-next-button.svelte';

	const swipe: Swipe = untypedSwipe as any;

	const reviewTitles = [
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

	let inViewArr: boolean[];

	const inViewFunc = ({ imagesContainer }: { imagesContainer: HTMLDivElement }) => {
		if (!imagesContainer || !imageElements) {
			return;
		}

		inViewArr = imageElements.map((imageElement) =>
			checkIsInView({ container: imagesContainer, node: imageElement })
		);
	};

	$: scrollLeft, inViewFunc({ imagesContainer });

	const scrollImageIntoView = (index: number) => {
		if (!imageElements) {
			return;
		}

		imageElements[index].scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
	};

	const goNextImage = () => {
		if (!imageElements) {
			return;
		}

		const endIndex = imageElements.length - 1;

		if (inViewArr[endIndex]) {
			return;
		}

		for (let i = endIndex; i >= 1; i--) {
			if (inViewArr[i - 1] && !inViewArr[i]) {
				scrollImageIntoView(i);
				break;
			}
		}
	};

	const goPrevImage = () => {
		if (!imageElements) {
			return;
		}

		if (inViewArr[0]) {
			return;
		}

		const endIndex = imageElements.length - 1;

		for (let i = 0; i < endIndex; i++) {
			if (inViewArr[i + 1] && !inViewArr[i]) {
				scrollImageIntoView(i);
				break;
			}
		}
	};
</script>

<div
	class="flex items-center flex-wrap gap-x-xxs xs:gap-x-xs sm:gap-x-sm gap-y-xs mt-xs max-w-full">
	{#each reviewTitles as reviewTitle, i}
		<TitleButton
			onClick={() => scrollImageIntoView(i)}
			imageNode={!imageElements ? undefined : imageElements[i]}
			{imagesContainer}
			recalcOn={scrollLeft}>
			{reviewTitle}
		</TitleButton>

		{#if i < reviewTitles.length - 1}
			<span class="text-my-black-50 text-sm"> | </span>
		{/if}
	{/each}
</div>

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
