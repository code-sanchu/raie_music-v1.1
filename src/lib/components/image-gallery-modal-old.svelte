<script lang="ts" context="module">
	import { Dialog, DialogOverlay, Transition, TransitionChild } from '@rgossiaux/svelte-headlessui';
	import { CaretLeft, CaretRight } from 'phosphor-svelte';

	import { Picture } from '$lib/components';
	import type { Data } from '$lib/types';
</script>

<script lang="ts">
	export let isOpen: boolean;

	export let currentIndex = 0;

	export let images: Data['Image'][];
</script>

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
			<DialogOverlay class="fixed inset-0 bg-white/80 cursor-zoom-out" />
		</TransitionChild>

		<!-- svelte-ignore a11y-click-events-have-key-events -->
		<!-- svelte-ignore a11y-no-static-element-interactions -->
		<TransitionChild
			as="div"
			class="z-10 fixed left-1/2 top-1/2 -translate-x-1/2 translate-y-1/2"
			enter="ease-out duration-300"
			enterFrom="opacity-0 scale-95"
			enterTo="opacity-100 scale-100"
			leave="ease-in duration-200"
			leaveFrom="opacity-100 scale-100"
			leaveTo="opacity-0 scale-95"
		>
			<button
				class={`fixed z-50 left-[45vw] top-1/2 text-4xl transition-opacity ease-in-out duration-75 ${
					currentIndex + 1 === images.length ? 'opacity-40' : ''
				}`}
				on:click={() => {
					if (currentIndex + 1 === images.length) {
						return;
					}
					currentIndex += 1;
				}}
				type="button"><CaretRight /></button
			>
			<button
				class={`fixed z-50 right-[45vw] top-1/2 text-4xl transition-opacity ease-in-out duration-75 ${
					currentIndex === 0 ? 'opacity-40' : ''
				}`}
				on:click={() => {
					if (currentIndex === 0) {
						return;
					}
					currentIndex -= 1;
				}}
				type="button"><CaretLeft /></button
			>

			<!-- svelte-ignore a11y-click-events-have-key-events -->
			<div
				class="absolute flex w-[200vw] -left-[50vw] -top-[40vh] transition-transform ease-in-out duration-500 cursor-zoom-out"
				on:click={() => (isOpen = false)}
				style:transform={`translateX(-${currentIndex * 100}vw)`}
			>
				{#each images as image}
					<div class="w-screen grid place-items-center shrink-0">
						<!-- svelte-ignore a11y-click-events-have-key-events -->
						<!-- svelte-ignore a11y-no-noninteractive-element-interactions -->
						<!-- svelte-ignore a11y-no-static-element-interactions -->
						<div
							class={`cursor-zoom-out max-h-[80vh] max-w-[80vw] grid place-items-center`}
							style:width={`${
								image.naturalDimensions.width < 400 ? 400 : image.naturalDimensions.width
							}px`}
							style:height={`${
								image.naturalDimensions.width < 400
									? 400 / (image.naturalDimensions.width / image.naturalDimensions.height)
									: image.naturalDimensions.width /
									  (image.naturalDimensions.width / image.naturalDimensions.height)
							}px`}
							on:click={() => (isOpen = false)}
						>
							<Picture
								imageClass={`w-full h-full`}
								meta={image.src}
								sizes={`${image.naturalDimensions.width}px`}
								alt=""
							/>
						</div>
					</div>
				{/each}
			</div>
		</TransitionChild>
	</Dialog>
</Transition>
