<script lang="ts" context="module">
	import { Caption, Picture } from '$lib/components';
	import type { Data } from '$lib/types';
	import { onMount } from 'svelte';
</script>

<script lang="ts">
	export let image: Data['Image'];

	let mouseIsDown = false;
</script>

<!-- svelte-ignore a11y-click-events-have-key-events -->
<!-- svelte-ignore a11y-no-noninteractive-element-interactions -->
<!-- svelte-ignore a11y-no-static-element-interactions -->
<div
	class={`h-full w-[98%] flex flex-col items-center justify-center ${
		mouseIsDown ? 'cursor-grabbing' : 'cursor-grab'
	}`}
	on:mousedown={() => (mouseIsDown = true)}
	on:mouseup={() => (mouseIsDown = false)}>
	<div>
		<Picture
			imageClass={`max-h-[80vh]`}
			meta={image.src}
			sizes={`${image.naturalDimensions.width}px`}
			alt="" />
	</div>

	{#if image.caption}
		<div class="max-h-[10vh] overflow-y-auto flex justify-center">
			<div class="max-w-[480px]">
				<Caption
					extraClasses="!mt-0 py-xs pl-xs no-underline !text-my-black bg-white/60 sm:!text-base rounded-b-sm">
					{image.caption}
				</Caption>
			</div>
		</div>
	{/if}
</div>
