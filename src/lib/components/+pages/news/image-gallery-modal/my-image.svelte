<script lang="ts" context="module">
	import { Caption, Picture } from '$lib/components';
	import type { Data } from '$lib/types';
	import { fade } from 'svelte/transition';
</script>

<script lang="ts">
	export let image: Data['Image'];
	export let isActive: boolean;
	export let minWidth: number | string | undefined = undefined;
	export let maxWidth: number | string | undefined = undefined;

	let windowHeight: number;

	let mouseIsDown = false;
</script>

<svelte:window bind:innerHeight={windowHeight} />

{#if isActive}
	<!-- svelte-ignore a11y-click-events-have-key-events -->
	<!-- svelte-ignore a11y-no-noninteractive-element-interactions -->
	<!-- svelte-ignore a11y-no-static-element-interactions -->
	<div
		class={`h-full w-full flex flex-col items-center justify-center ${
			mouseIsDown ? 'cursor-grabbing' : 'cursor-grab'
		}`}
		on:mousedown={() => (mouseIsDown = true)}
		on:mouseup={() => (mouseIsDown = false)}
		in:fade={{ duration: 350 }}
		out:fade={{ duration: 500 }}>
		<div class="bg-my-black-50/10" style:min-width={minWidth} style:max-width={maxWidth}>
			<Picture
				imageClass={`h-full`}
				meta={image.src}
				sizes={`${image.naturalDimensions.width}px`}
				alt="" />
		</div>

		{#if image.caption}
			<div
				class="max-h-[10vh] overflow-y-auto text-center md:scrollbar-thin md:scrollbar-track-my-black-50/50 md:scrollbar-thumb-my-black-100 md:hover:scrollbar-thumb-my-black-200">
				<Caption
					extraClasses="!mt-0 py-xs pl-xs no-underline !text-my-black bg-white/60 sm:!text-base rounded-b-sm">
					{image.caption}
				</Caption>
			</div>
		{/if}
	</div>
{/if}
