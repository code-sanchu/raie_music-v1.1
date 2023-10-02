<script lang="ts" context="module">
	import { Dialog, DialogOverlay, Transition, TransitionChild } from '@rgossiaux/svelte-headlessui';

	import { Picture, Icon } from '$lib/components';
	import type { Data } from '$lib/types';
</script>

<script lang="ts">
	export let isOpen: boolean;

	export let currentIndex = 0;

	export let images: Data['Image'][];

	let windowWidth: number;
	let windowHeight: number;

	$: currentImage = images[currentIndex];
	$: currentImageAspectRatio =
		currentImage.naturalDimensions.width / currentImage.naturalDimensions.height;
	$: currentImageWidth =
		currentImage.naturalDimensions.width > windowWidth * 0.8
			? windowWidth * 0.8
			: currentImage.naturalDimensions.width < 400
			? 400
			: currentImage.naturalDimensions.width;
	$: currentImageHeight = currentImageWidth / currentImageAspectRatio;

	$: console.log('currentImageHeight:', currentImageHeight);
</script>

<svelte:window bind:innerWidth={windowWidth} bind:innerHeight={windowHeight} />

<Transition show={isOpen}>
	<Dialog class="relative z-[70]" on:close={() => (isOpen = false)}>
		<TransitionChild
			enter="ease-out duration-300"
			enterFrom="opacity-0"
			enterTo="opacity-100"
			leave="ease-in duration-200"
			leaveFrom="opacity-100"
			leaveTo="opacity-0"
		>
			<DialogOverlay class="fixed inset-0 bg-white/80" />
		</TransitionChild>

		<TransitionChild
			as="div"
			class="z-10 fixed left-0 top-1/2 -translate-y-1/2 w-screen flex"
			enter="ease-out duration-300"
			enterFrom="opacity-0 scale-95"
			enterTo="opacity-100 scale-100"
			leave="ease-in duration-200"
			leaveFrom="opacity-100 scale-100"
			leaveTo="opacity-0 scale-95"
		>
			<div class="w-[10vw] grid place-items-center">
				<button
					class={`text-4xl transition-opacity ease-in-out duration-75 ${
						currentIndex === 0 ? 'opacity-40' : ''
					}`}
					on:click={() => {
						if (currentIndex === 0) {
							return;
						}
						currentIndex -= 1;
					}}
					type="button"><Icon.CaretLeft /></button
				>
			</div>

			<div class="flex-grow w-[80vw] max-h-[80vh] overflow-hidden">
				<div
					class="max-h-[80vh] flex transition-all ease-in-out duration-500"
					style:height={`${currentImageHeight}px`}
					style:transform={`translateX(-${currentIndex * 80}vw)`}
				>
					{#each images as image}
						<div class="w-[80vw] shrink-0 flex justify-center">
							<!-- svelte-ignore a11y-click-events-have-key-events -->
							<!-- svelte-ignore a11y-no-noninteractive-element-interactions -->
							<!-- svelte-ignore a11y-no-static-element-interactions -->
							<div
								class={`cursor-zoom-out max-h-[80vh] max-w-[80vw]`}
								style="width: {image.naturalDimensions.width < 400
									? 400
									: image.naturalDimensions.width}px; height: {image.naturalDimensions.width < 400
									? 400 / (image.naturalDimensions.width / image.naturalDimensions.height)
									: image.naturalDimensions.width /
									  (image.naturalDimensions.width / image.naturalDimensions.height)}px"
								on:click={() => (isOpen = false)}
							>
								<Picture
									imageClass={`w-full`}
									meta={image.src}
									sizes={`${image.naturalDimensions.width}px`}
									alt=""
								/>
							</div>
						</div>
					{/each}
				</div>
			</div>

			<div class="w-[10vw] grid place-items-center">
				<button
					class={` text-4xl transition-opacity ease-in-out duration-75 ${
						currentIndex + 1 === images.length ? 'opacity-40' : ''
					}`}
					on:click={() => {
						if (currentIndex + 1 === images.length) {
							return;
						}
						currentIndex += 1;
					}}
					type="button"><Icon.CaretRight /></button
				>
			</div>
		</TransitionChild>
	</Dialog>
</Transition>
