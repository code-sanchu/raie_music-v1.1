<script lang="ts" context="module">
	import { Caption, Picture } from '$lib/components';
	import type { Data } from '$lib/types';
</script>

<script lang="ts">
	export let image: Data['Image'];
	export let onClick: () => void;

	let imageWidth: number;
</script>

<div class="h-full w-[98%] flex flex-col items-center justify-center">
	<!-- svelte-ignore a11y-click-events-have-key-events -->
	<!-- svelte-ignore a11y-no-noninteractive-element-interactions -->
	<!-- svelte-ignore a11y-no-static-element-interactions -->
	<div class="cursor-zoom-out" on:click={onClick} bind:clientWidth={imageWidth}>
		<Picture
			imageClass={`max-h-[75vh]`}
			meta={image.src}
			sizes={`${image.naturalDimensions.width}px`}
			alt="" />
	</div>

	{#if image.caption && imageWidth}
		<div class="max-h-[5vh] overflow-y-auto" style:width="{imageWidth}px">
			<Caption
				extraClasses="!mt-0 py-xs pl-xs no-underline !text-my-black bg-white/60 sm:!text-base rounded-b-sm">
				{image.caption}
			</Caption>
		</div>
	{/if}
</div>

<!-- <div
	class={`cursor-zoom-out flex flex-col max-h-[80vh] max-w-[78vw] `}
	style:width={`${image.naturalDimensions.width < 400 ? 400 : image.naturalDimensions.width}px`}
	on:click={onClick}>
	<div class="flex justify-center">
		<Picture
			imageClass={`max-h-[75vh]`}
			meta={image.src}
			sizes={`${image.naturalDimensions.width}px`}
			alt="" />
	</div>

	{#if image.caption}
		<div class="shrink-0">
			<Caption
				extraClasses="!mt-0 py-xs pl-xs no-underline !text-my-black bg-white/60 sm:!text-base rounded-b-sm">
				{image.caption}
			</Caption>
		</div>
	{/if}
</div> -->
