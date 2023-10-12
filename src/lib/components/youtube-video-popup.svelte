<script lang="ts" context="module">
	import { Transition, TransitionChild } from '@rgossiaux/svelte-headlessui';
	import { Icon } from './icon';
</script>

<script lang="ts">
	export let isOpen = false;
	export let src: string;

	const params = `?modestbranding=1&rel=0&color=white&frameborder=0&autoplay=1&origin=${
		import.meta.env.PROD ? 'http://www.raiemusic.com' : ''
	}`;

	let moving = false;

	let left = 100;
	let top = 100;

	// todo: prevent moving outside of page
</script>

<Transition show={isOpen}>
	<TransitionChild
		as="div"
		class="fixed z-30 w-[550px] max-w-[90vw]"
		enter="ease-out duration-300"
		enterFrom="opacity-0 scale-95"
		enterTo="opacity-100 scale-100"
		leave="ease-in duration-200"
		leaveFrom="opacity-100 scale-100"
		leaveTo="opacity-0 scale-95"
		style="left: {left}px; top: {top}px;">
		<div
			class="flex justify-between items-center gap-md bg-white rounded-t-md py-xxs pl-xs pr-xxxs">
			<div class="flex gap-sm items-center">
				<button
					class={`p-[0.15rem] ${moving ? 'cursor-grabbing' : 'cursor-grab'}`}
					on:mousedown={() => (moving = true)}
					on:mousemove={(e) => {
						if (!moving) {
							return;
						}

						left += e.movementX;

						top += e.movementY;
					}}
					on:mouseup={() => (moving = false)}>
					<Icon.Handle />
				</button>
				<p class="uppercase text-[0.6rem] text-my-black-200">grab here to move</p>
			</div>
			<button
				class="p-[0.15rem] rounded-full text-[0.5rem] border border-my-black"
				on:click={() => (isOpen = false)}
				type="button"><Icon.X weight="bold" /></button>
		</div>
		<div class="aspect-video">
			<iframe
				width="100%"
				height="100%"
				src={src + params}
				title="YouTube video player"
				frameborder="0"
				allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
				allowfullscreen />
		</div>
	</TransitionChild>
</Transition>

<svelte:document class={`${moving ? 'cursor-grabbing' : ''}`} />

<svelte:window class={`${moving ? 'cursor-grabbing' : ''}`} />
