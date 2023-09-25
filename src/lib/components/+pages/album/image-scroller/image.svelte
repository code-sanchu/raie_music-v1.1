<script lang="ts">
	import type { Data } from '$lib/types';
	import { Spinner } from 'phosphor-svelte';

	export let data: Data['Image'];
	export let onClick: () => void;
</script>

<!-- svelte-ignore a11y-click-events-have-key-events -->
<!-- svelte-ignore a11y-no-static-element-interactions -->
<div
	class="rounded-md cursor-zoom-in border scroll-mx-lg p-xs"
	style:aspect-ratio={data.naturalDimensions.width / data.naturalDimensions.height}
	on:click={onClick}
>
	<div class="relative h-full">
		<img
			class="object-cover grayscale hover:grayscale-0 transition-all ease-in-out duration-300 z-10 absolute w-full h-full bg-gray-100"
			src={data.src}
			alt=""
		/>

		<div class="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
			<Spinner />
		</div>
	</div>
</div>
