<script lang="ts" context="module">
	import { Dialog, DialogOverlay, Transition, TransitionChild } from '@rgossiaux/svelte-headlessui';
</script>

<script lang="ts">
	export let isOpen: boolean;
	export let lyrics: string;
	export let name: string;
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
			<DialogOverlay class="fixed inset-0 bg-white/80" />
		</TransitionChild>

		<TransitionChild
			as="div"
			class="fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2  bg-white/70 p-2xl rounded-xl prose max-h-[70vh] overflow-y-auto"
			enter="ease-out duration-300"
			enterFrom="opacity-0 scale-95"
			enterTo="opacity-100 scale-100"
			leave="ease-in duration-200"
			leaveFrom="opacity-100 scale-100"
			leaveTo="opacity-0 scale-95"
		>
			<h3 class="font-medium italic text-my-black-600 mb-md text-base">{name}</h3>

			{@html lyrics}
		</TransitionChild>
	</Dialog>
</Transition>
