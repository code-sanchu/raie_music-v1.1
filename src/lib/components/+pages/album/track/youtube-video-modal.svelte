<script lang="ts" context="module">
	import { Dialog, DialogOverlay, Transition, TransitionChild } from '@rgossiaux/svelte-headlessui';
	import { page } from '$app/stores';
</script>

<script lang="ts">
	export let isOpen = false;
	export let src: string;

	const params = `?modestbranding=1&rel=0&color=white&frameborder=0&autoplay=1&origin=${
		import.meta.env.PROD ? 'http://www.raiemusic.com' : ''
	}`;
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
			class="fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[90vw] aspect-video"
			enter="ease-out duration-300"
			enterFrom="opacity-0 scale-95"
			enterTo="opacity-100 scale-100"
			leave="ease-in duration-200"
			leaveFrom="opacity-100 scale-100"
			leaveTo="opacity-0 scale-95"
		>
			<iframe
				width="100%"
				height="100%"
				src={src + params}
				title="YouTube video player"
				frameborder="0"
				allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
				allowfullscreen
			/>
		</TransitionChild>
	</Dialog>
</Transition>
