<script lang="ts">
	import { onMount } from 'svelte';
	import type { ImgMeta } from './types';

	export let meta: ImgMeta[];
	// if there is only one, vite-imagetools won't wrap the object in an array
	if (!(meta instanceof Array)) meta = [meta];

	const sources = meta[0].sources;
	const fallback = meta[0].img;

	export let sizes = '100vw';
	export let alt = '';
	export let loading: 'lazy' | 'eager' | null | undefined = 'lazy';

	export let imageClass = '';
	export let pictureClass = '';

	let imgNode: HTMLImageElement;

	let loadingComplete = false;

	onMount(() => {
		if (!imgNode) {
			return;
		}
		if (imgNode.complete) {
			loadingComplete = true;
			return;
		}
		imgNode.onload = () => {
			loadingComplete = true;
		};
	});
</script>

<picture class={pictureClass}>
	{#each Object.entries(sources) as [type, srcMeta]}
		<source
			type="image/{type}"
			{sizes}
			srcset={srcMeta.map((m) => `${m.src} ${m.w}w`).join(', ')} />
	{/each}

	<img
		src={fallback.src}
		{alt}
		{loading}
		class={`${imageClass} transition-opacity ease-in-out duration-300 select-none ${
			loadingComplete ? 'opacity-100' : 'opacity-0'
		}`}
		draggable={false}
		bind:this={imgNode} />
</picture>
