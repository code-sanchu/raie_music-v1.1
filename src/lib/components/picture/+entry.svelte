<script lang="ts" context="module">
	import { onMount } from 'svelte';

	import type { ImgMeta } from '$lib/types';
</script>

<script lang="ts">
	export let meta: ImgMeta[] | ImgMeta;

	// if there is only one, vite-imagetools won't wrap the object in an array
	if (!(meta instanceof Array)) meta = [meta];

	const sources = meta[0].sources;
	const fallback = meta[0].img;

	export let sizes = '100vw';
	export let alt = '';
	export let loading: 'lazy' | 'eager' | null | undefined = 'lazy';

	export let imageClass = '';
	export let pictureClass = '';
	export let onLoad: () => void = () => null;
	export let duration: 'duration-300' | 'duration-500' = 'duration-300';
	export let disableTransition = false;
	export let fetchpriority: 'auto' | 'high' | 'low' | null | undefined = undefined;

	let imgNode: HTMLImageElement;

	let loadingComplete = false;

	onMount(() => {
		if (!imgNode) {
			return;
		}
		if (imgNode.complete) {
			loadingComplete = true;
			onLoad();
			return;
		}
		imgNode.onload = () => {
			loadingComplete = true;
			onLoad();
		};
	});
</script>

<picture class={pictureClass}>
	{#each Object.entries(sources) as [type, srcMeta]}
		<source type="image/{type}" {sizes} srcset={srcMeta} />
	{/each}

	<img
		src={fallback.src}
		{alt}
		{loading}
		class={`${imageClass} transition-opacity ease-in-out select-none ${
			loadingComplete || disableTransition ? 'opacity-100' : 'opacity-0'
		} ${duration}`}
		draggable={false}
		{fetchpriority}
		bind:this={imgNode} />
</picture>
