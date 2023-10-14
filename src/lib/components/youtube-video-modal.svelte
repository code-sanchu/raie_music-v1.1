<script lang="ts" context="module">
	import { Icon, MyDialog } from '$lib/components';
	import { Dialog, Transition } from '@rgossiaux/svelte-headlessui';
</script>

<script lang="ts">
	export let isOpen = false;
	export let src: string;
	export let onClose: () => void;

	const params = `?modestbranding=1&rel=0&color=white&frameborder=0&autoplay=1&origin=${
		import.meta.env.PROD ? 'http://www.raiemusic.com' : ''
	}`;
</script>

<Transition show={isOpen}>
	<Dialog
		class="relative z-[70]"
		on:close={() => {
			isOpen = false;

			onClose();
		}}>
		<MyDialog.Bg bg="bg-white/80" />

		<MyDialog.ContentContainer classes="z-20 fixed top-xs left-1/2 -translate-x-1/2">
			<button
				class="border-[0.8px] border-my-black-100 bg-white/70 text-my-black-900 p-xxs rounded-md"
				on:click={() => (isOpen = false)}
				type="button"
				aria-label="close images modal"><Icon.X weight="thin" /></button>
		</MyDialog.ContentContainer>

		<MyDialog.ContentContainer
			classes="fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[90vw] max-w-[1600px] aspect-video">
			<iframe
				width="100%"
				height="100%"
				src={src + params}
				title="YouTube video player"
				frameborder="0"
				allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
				allowfullscreen />
		</MyDialog.ContentContainer>
	</Dialog>
</Transition>
