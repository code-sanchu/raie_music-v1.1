<script lang="ts" context="module">
	import {
		swipe as untypedSwipe,
		type ParametersSwitch,
		type SwipeParameters
	} from 'svelte-gestures';
	import type { Action } from 'svelte/action';

	import { Icon } from '$lib/components';

	const swipe: Action<
		HTMLElement,
		ParametersSwitch<SwipeParameters>,
		{
			'on:swipe': (
				e: CustomEvent<{
					[x: string]: string;
					// detail: { direction: 'left' | 'right' };
				}>
			) => void;
		}
	> = untypedSwipe as any;
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

		const containerRect = imagesContainer.getBoundingClientRect();

		inViewArr = imageElements.map((imageElement) => {
			const imageRect = imageElement.getBoundingClientRect();

			const isTotallyInView =
				imageRect.left >= containerRect.left && imageRect.right <= containerRect.right;

			if (isTotallyInView) {
				return true;
			}

			const isTotallyOutOfView =
				imageRect.right < containerRect.left || imageRect.left > containerRect.right;

			if (isTotallyOutOfView) {
				return false;
			}

			const imageIsLargerThanContainerAndInView =
				imageRect.left <= containerRect.left && imageRect.right >= containerRect.right;

			if (imageIsLargerThanContainerAndInView) {
				return true;
			}

			const decimalInView =
				imageRect.left <= containerRect.left
					? (imageRect.right - containerRect.left) / imageRect.width
					: (containerRect.right - imageRect.left) / imageRect.width;

			const isInView = decimalInView >= 0.95;

			return isInView;
		});
	};

	$: scrollLeft, inViewFunc({ imagesContainer });

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
				imageElements[i].scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
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
				imageElements[i].scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
				break;
			}
		}
	};

	const scrollImageIntoView = (index: number) => {
		if (!imageElements) {
			return;
		}

		imageElements[index].scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
	};
</script>

<div
	class="flex items-center flex-wrap gap-x-xxs xs:gap-x-xs sm:gap-x-sm gap-y-xs mt-xs max-w-full">
	<button class="text-my-black-400" on:click={() => scrollImageIntoView(0)} type="button"
		>Steve Yourglivch for Blue Bloods</button>

	<span class="text-my-black-50 text-sm"> | </span>

	<button class="text-my-black-400" on:click={() => scrollImageIntoView(1)} type="button"
		>Martin Cooke for Blues Matters</button>

	<span class="text-my-black-50 text-sm"> | </span>

	<button class="text-my-black-400" on:click={() => scrollImageIntoView(2)} type="button"
		>Martin Slidel for What's On London</button>

	<span class="text-my-black-50 text-sm"> | </span>

	<button class="text-my-black-400" on:click={() => scrollImageIntoView(3)} type="button"
		>Martin Webb (1)</button>

	<span class="text-my-black-50 text-sm"> | </span>

	<button class="text-my-black-400" on:click={() => scrollImageIntoView(4)} type="button"
		>Martin Webb (2)</button>
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
		<button
			class="absolute bg-white/80 hover:bg-white/60 rounded-lg left-0 top-1/2 -translate-y-1/2 z-10 text-3xl hover:opacity-100 opacity-70 transition-all ease-in-out duration-75"
			type="button"
			on:click={goPrevImage}>
			<Icon.CaretLeft />
		</button>

		<button
			class="absolute right-0 bg-white/60 top-1/2 -translate-y-1/2 rounded-lg z-10 text-3xl hover:bg-white/40 opacity-70 hover:opacity-100 transition-all ease-in-out duration-75"
			type="button"
			on:click={goNextImage}>
			<Icon.CaretRight />
		</button>
	{/if}
</div>
