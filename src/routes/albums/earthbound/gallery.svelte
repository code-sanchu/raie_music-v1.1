<script lang="ts" context="module">
	import { Dialog, DialogOverlay, Transition, TransitionChild } from '@rgossiaux/svelte-headlessui';
	import { CaretLeft, CaretRight } from 'phosphor-svelte';

	import { Picture } from '$lib/components';
	import type { Data } from '$lib/types';
</script>

<script lang="ts">
	export let imageShowIsOpen: boolean;

	export let imageShowIndex = 0;

	export let images: Data['Image'][];
</script>

<Transition show={imageShowIsOpen}>
	<Dialog class="relative z-[70]" on:close={() => (imageShowIsOpen = false)}>
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
			class="fixed left-1/2 top-1/2 -translate-x-1/2 translate-y-1/2"
			enter="ease-out duration-300"
			enterFrom="opacity-0 scale-95"
			enterTo="opacity-100 scale-100"
			leave="ease-in duration-200"
			leaveFrom="opacity-100 scale-100"
			leaveTo="opacity-0 scale-95"
		>
			<button
				class={`fixed z-50 left-[40vw] -translate-x-full -top-[48vh] text-xl transition-opacity ease-in-out duration-75 `}
				on:click={() => (imageShowIsOpen = false)}
				type="button">Close</button
			>

			<button
				class={`fixed z-50 left-[45vw] top-1/2 text-4xl transition-opacity ease-in-out duration-75 ${
					imageShowIndex + 1 === images.length ? 'opacity-40' : ''
				}`}
				on:click={() => {
					if (imageShowIndex + 1 === images.length) {
						return;
					}
					imageShowIndex += 1;
				}}
				type="button"><CaretRight /></button
			>
			<button
				class={`fixed z-50 right-[45vw] top-1/2 text-4xl transition-opacity ease-in-out duration-75 ${
					imageShowIndex === 0 ? 'opacity-40' : ''
				}`}
				on:click={() => {
					if (imageShowIndex === 0) {
						return;
					}
					imageShowIndex -= 1;
				}}
				type="button"><CaretLeft /></button
			>

			<div
				class="absolute flex w-[200vw] -left-[50vw] -top-[40vh] transition-transform ease-in-out duration-500"
				style:transform={`translateX(-${imageShowIndex * 100}vw)`}
			>
				{#each images as image}
					<div class="w-screen grid place-items-center shrink-0">
						<!-- svelte-ignore a11y-click-events-have-key-events -->
						<!-- svelte-ignore a11y-no-noninteractive-element-interactions -->
						<Picture
							imageClass="w-screen cursor-zoom-out object-contain max-h-[80vh] max-w-[80vw]"
							meta={image.src}
							sizes={'80vw'}
							on:click={() => (imageShowIsOpen = false)}
							alt=""
						/>
					</div>
				{/each}
			</div>
		</TransitionChild>
	</Dialog>
</Transition>
