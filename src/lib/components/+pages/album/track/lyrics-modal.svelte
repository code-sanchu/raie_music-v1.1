<script lang="ts" context="module">
	import { Dialog, DialogOverlay, Transition, TransitionChild } from '@rgossiaux/svelte-headlessui';

	import { Icon } from '$lib/components';
</script>

<script lang="ts">
	export let isOpen: boolean;
	export let lyrics: string;
	export let name: string;
</script>

<Transition show={isOpen}>
	<Dialog on:close={() => (isOpen = false)}>
		<TransitionChild
			as="div"
			class="z-[50] fixed inset-0 bg-white"
			enter="ease-out duration-300"
			enterFrom="opacity-0"
			enterTo="opacity-100"
			leave="ease-in duration-200"
			leaveFrom="opacity-100"
			leaveTo="opacity-0">
			<DialogOverlay class="fixed inset-0 bg-transparent" />
		</TransitionChild>

		<TransitionChild
			as="div"
			class="fixed z-[70] left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2  bg-white/90 rounded-xl prose max-h-[70vh] overflow-y-auto max-w-screen overflow-x-auto max-w-[80vw]"
			enter="ease-out duration-300"
			enterFrom="opacity-0 scale-95"
			enterTo="opacity-100 scale-100"
			leave="ease-in duration-200"
			leaveFrom="opacity-100 scale-100"
			leaveTo="opacity-0 scale-95">
			<div class=" flex justify-center md:hidden mb-xl">
				<button
					class="border border-my-black-50 text-my-black-600 p-xxs rounded-md"
					on:click={() => (isOpen = false)}
					type="button"><Icon.X weight="thin" /></button>
			</div>

			<h3 class="font-medium italic text-my-black-600 mb-md text-base">{name}</h3>

			<div class="prose whitespace-nowrap pr-sm">
				{@html lyrics}
			</div>

			<div class="mt-xl mb-md flex justify-center md:hidden">
				<button
					class="border border-my-black-100 text-my-black-600 p-xxs rounded-md"
					on:click={() => (isOpen = false)}
					type="button"><Icon.X weight="thin" /></button>
			</div>
		</TransitionChild>
	</Dialog>
</Transition>
