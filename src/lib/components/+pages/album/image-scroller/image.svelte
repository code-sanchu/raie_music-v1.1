<script lang="ts">
	import { Spinner } from 'phosphor-svelte';

	import type { Data } from '$lib/types';
	import { Picture } from '$lib/components';

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
		<Picture
			imageClass="object-cover grayscale hover:grayscale-0 transition-all ease-in-out duration-300 z-10 absolute w-full h-full bg-gray-100"
			meta={data.src}
			sizes="300px"
			alt=""
		/>

		<div class="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
			<Spinner />
		</div>
	</div>
</div>
