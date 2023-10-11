<script lang="ts" context="module">
	import { Caption, Picture } from '$lib/components';
	import type { Data } from '$lib/types';
</script>

<script lang="ts">
	export let image: Data['Image'];
	export let onClick: () => void;
	export let openStatus: 'closed' | 'open';

	let imageWidth = 0;

	let imageContainer: HTMLDivElement;

	$: {
		// console.log('HELLO');
		// console.log('openStatus XXXX:', openStatus);
		// console.log('imageContainer:', imageContainer);

		if (openStatus === 'open' && imageContainer) {
			// console.log('2222');

			imageWidth = imageContainer.getBoundingClientRect().width;
		}
	}
</script>

<!-- svelte-ignore a11y-click-events-have-key-events -->
<!-- svelte-ignore a11y-no-noninteractive-element-interactions -->
<!-- svelte-ignore a11y-no-static-element-interactions -->
<div
	class="h-full w-[98%] flex flex-col items-center justify-center cursor-zoom-out"
	on:click={onClick}>
	<div class="" bind:this={imageContainer}>
		<!-- <div class="cursor-zoom-out bg-green-200" on:click={onClick} bind:clientWidth={imageWidth}> -->
		<Picture
			imageClass={`max-h-[80vh]`}
			meta={image.src}
			sizes={`${image.naturalDimensions.width}px`}
			alt="" />
	</div>

	{#if image.caption}
		<div class="max-h-[10vh] overflow-y-auto" style:width="{imageWidth}px">
			<Caption
				extraClasses="!mt-0 py-xs pl-xs no-underline !text-my-black bg-white/60 sm:!text-base rounded-b-sm">
				{image.caption}
			</Caption>
		</div>
	{/if}
</div>
