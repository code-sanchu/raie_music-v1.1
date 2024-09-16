<script lang="ts" context="module">
	import { Dialog, Transition } from '@rgossiaux/svelte-headlessui';
	import { pinch, swipe } from 'svelte-gestures';

	import type { Data } from '$lib/types';

	import { Icon, MyDialog } from '$lib/components';
	import MyImage from './my-image.svelte';
</script>

<script lang="ts">
	export let isOpen: boolean;

	export let currentIndex = 0;

	export let images: Data['Image'][];

	let openStatus: 'closed' | 'open' = 'closed';

	$: {
		if (isOpen && openStatus === 'closed') {
			const transitionDuration = 250;

			setTimeout(() => {
				openStatus = 'open';
			}, transitionDuration);
		}
	}

	const goPrevImage = () => {
		if (currentIndex === 0) {
			return;
		}
		currentIndex -= 1;
	};

	const goNextImage = () => {
		if (currentIndex + 1 === images.length) {
			return;
		}
		currentIndex += 1;
	};

	let windowWidth: number;
	let windowHeight: number;

	$: contentMaxHeight = !windowHeight ? undefined : windowHeight - 42;

	let imageMaxWidthPx: number;

	$: {
		if (windowWidth && windowHeight) {
			const gap = 10;

			imageMaxWidthPx = windowWidth * 0.8 - gap;
		}
	}

	let scale: number = 1;
</script>

<svelte:window bind:innerWidth={windowWidth} bind:innerHeight={windowHeight} />

<Transition show={isOpen}>
	<Dialog class="relative z-[70]" on:close={() => (isOpen = false)}>
		<MyDialog.Bg />

		<MyDialog.ContentContainer
			classes="z-20 w-full fixed top-xs left-1/2 -translate-x-1/2 flex flex-col items-center">
			<div>
				<button
					class="border-[0.8px] border-my-black-100 bg-white/70 text-my-black-900 p-xxs rounded-md"
					on:click={() => (isOpen = false)}
					type="button"
					aria-label="close images modal"><Icon.X weight="thin" /></button>
			</div>
		</MyDialog.ContentContainer>

		<MyDialog.ContentContainer classes={`z-10 fixed left-0 w-screen flex top-[62px]`}>
			<div class="w-[10vw] grid place-items-center">
				<button
					class={`text-4xl transition-opacity ease-in-out duration-75 ${
						currentIndex === 0 ? 'opacity-40' : ''
					}`}
					on:click={goPrevImage}
					type="button"><Icon.CaretLeft /></button>
			</div>

			<div class="flex-grow w-[80vw] overflow-hidden">
				{#if contentMaxHeight && imageMaxWidthPx}
					<div
						class="overflow-visible flex transition-transform ease-in-out duration-500"
						style:transform={`translateX(-${currentIndex * 80}vw)`}>
						{#each images as image, i}
							<div
								class="w-[80vw] shrink-0 grid place-items-center overflow-auto max-h-[85vh]"
								style:height="{contentMaxHeight}px"
								on:swipe={(e) => (e.detail.direction === 'left' ? goNextImage() : goPrevImage())}
								use:swipe
								on:pinch={(e) => {
									scale = e.detail.scale;
								}}
								use:pinch>
								<div style:transform={`scale(${scale})`}>
									<MyImage
										{image}
										isActive={currentIndex === i}
										minWidth={i === 0 ? `${900}px` : i === 1 ? `${100}px` : 'auto'}
										maxWidth={1200} />
								</div>
							</div>
						{/each}
					</div>
				{/if}
			</div>

			<div class="w-[10vw] grid place-items-center">
				<button
					class={` text-4xl transition-opacity ease-in-out duration-75 ${
						currentIndex + 1 === images.length ? 'opacity-40' : ''
					}`}
					on:click={goNextImage}
					type="button"><Icon.CaretRight /></button>
			</div>
		</MyDialog.ContentContainer>
	</Dialog>
</Transition>
