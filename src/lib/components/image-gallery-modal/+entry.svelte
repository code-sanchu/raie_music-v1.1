<script lang="ts" context="module">
	import { Dialog, DialogOverlay, Transition, TransitionChild } from '@rgossiaux/svelte-headlessui';
	import {
		swipe as untypedSwipe,
		type ParametersSwitch,
		type SwipeParameters
	} from 'svelte-gestures';
	import type { Action } from 'svelte/action';

	import { Icon } from '$lib/components';
	import type { Data } from '$lib/types';
	import MyImage from './my-image.svelte';

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
</script>

<Transition show={isOpen}>
	<Dialog class="relative z-[70]" on:close={() => (isOpen = false)}>
		<TransitionChild
			enter="ease-out duration-300"
			enterFrom="opacity-0"
			enterTo="opacity-100"
			leave="ease-in duration-200"
			leaveFrom="opacity-100"
			leaveTo="opacity-0">
			<DialogOverlay class="fixed inset-0 bg-white cursor-zoom-out" />
		</TransitionChild>

		<TransitionChild
			as="div"
			class="z-20 fixed top-sm left-1/2 -translate-x-1/2"
			enter="ease-out duration-300"
			enterFrom="opacity-0 scale-95"
			enterTo="opacity-100 scale-100"
			leave="ease-in duration-200"
			leaveFrom="opacity-100 scale-100"
			leaveTo="opacity-0 scale-95">
			<button
				class="border-[0.8px] border-my-black-100 text-my-black-900 p-xxs rounded-md"
				on:click={() => (isOpen = false)}
				type="button"
				aria-label="close images modal"><Icon.X weight="thin" /></button>
		</TransitionChild>

		<TransitionChild
			as="div"
			class="z-10 fixed left-0 top-1/2 -translate-y-1/2 w-screen flex"
			enter="ease-out duration-300"
			enterFrom="opacity-0 scale-95"
			enterTo="opacity-100 scale-100"
			leave="ease-in duration-200"
			leaveFrom="opacity-100 scale-100"
			leaveTo="opacity-0 scale-95">
			<div class="w-[10vw] grid place-items-center">
				<button
					class={`text-4xl transition-opacity ease-in-out duration-75 ${
						currentIndex === 0 ? 'opacity-40' : ''
					}`}
					on:click={goPrevImage}
					type="button"><Icon.CaretLeft /></button>
			</div>

			<div class="flex-grow w-[80vw] max-h-[90vh] overflow-hidden">
				<div
					class="overflow-visible flex transition-transform ease-in-out duration-500"
					style:transform={`translateX(-${currentIndex * 80}vw)`}>
					{#each images as image, i}
						<div
							class="w-[80vw] h-[90vh] shrink-0 grid place-items-center"
							use:swipe={{ timeframe: 300, minSwipeDistance: 100, touchAction: 'pan-y' }}
							on:swipe={(e) => (e.detail.direction === 'left' ? goNextImage() : goPrevImage())}>
							<MyImage {image} />
						</div>
					{/each}
				</div>
			</div>

			<div class="w-[10vw] grid place-items-center">
				<button
					class={` text-4xl transition-opacity ease-in-out duration-75 ${
						currentIndex + 1 === images.length ? 'opacity-40' : ''
					}`}
					on:click={goNextImage}
					type="button"><Icon.CaretRight /></button>
			</div>
		</TransitionChild>
	</Dialog>
</Transition>
