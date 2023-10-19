<script lang="ts" context="module">
	import type { Data } from '$lib/types';
	import { Picture } from '$lib/components';
</script>

<script lang="ts">
	export let data: Data['Image'];
	export let onClick: () => void;

	let mouseIsDown = false;
</script>

<!-- svelte-ignore a11y-click-events-have-key-events -->
<!-- svelte-ignore a11y-no-static-element-interactions -->
<div
	class={`rounded-md border scroll-mx-lg p-xs shrink-0 ${
		mouseIsDown ? 'cursor-grabbing' : 'cursor-zoom-in'
	}`}
	style:aspect-ratio={data.naturalDimensions.width / data.naturalDimensions.height}
	on:click={onClick}>
	<div class="relative w-full h-full bg-my-black-50/10">
		<Picture
			imageClass="object-cover grayscale hover:grayscale-0 transition-all ease-in-out duration-300 z-10 absolute w-full h-full bg-gray-100"
			meta={data.src}
			sizes="300px"
			alt="" />
	</div>
</div>
