<script lang="ts" context="module">
	import { Dialog, DialogOverlay, Transition, TransitionChild } from '@rgossiaux/svelte-headlessui';

	import { Icon } from '$lib/components';
	import type { Data } from '$lib/types';
	import MyImage from './my-image.svelte';
</script>

<script lang="ts">
	export let isOpen: boolean;

	export let currentIndex = 0;

	export let images: Data['Image'][];

	let openStatus: 'closed' | 'open' = 'closed';

	$: {
		if (isOpen && openStatus === 'closed') {
			const transitionDuration = 200;

			setTimeout(() => {
				openStatus = 'open';
			}, transitionDuration);
		}
	}
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
			<DialogOverlay class="fixed inset-0 bg-white/80 cursor-zoom-out" />
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
					on:click={() => {
						if (currentIndex === 0) {
							return;
						}
						currentIndex -= 1;
					}}
					type="button"><Icon.CaretLeft /></button>
			</div>

			<div class="flex-grow w-[80vw] max-h-[90vh] overflow-hidden">
				<div
					class="overflow-visible flex transition-transform ease-in-out duration-500"
					style:transform={`translateX(-${currentIndex * 80}vw)`}>
					{#each images as image}
						<div class="w-[80vw] h-[90vh] shrink-0 grid place-items-center">
							<MyImage
								{image}
								onClick={() => {
									isOpen = false;
								}}
								bind:openStatus />
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
					type="button"><Icon.CaretRight /></button>
			</div>
		</TransitionChild>
	</Dialog>
</Transition>
