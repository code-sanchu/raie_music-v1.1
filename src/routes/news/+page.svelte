<script lang="ts" context="module">
	import { fade } from 'svelte/transition';
	import { onMount } from 'svelte';

	import { updateGlobalFlags } from '$lib/stores';
	import { Images, PageLayout, LatestNews } from '$lib/components';
	import ArchiveReviews from './archive-reviews.svelte';
</script>

<script lang="ts">
	let mounted = false;

	onMount(() => {
		updateGlobalFlags.firstPageIsReady();

		mounted = true;
	});
</script>

<PageLayout.Body>
	<PageLayout.VerticalSpacing sizing="1.5" />

	{#if mounted}
		<h1 class="tracking-widest text-xl text-my-black-50/70 uppercase font-medium" in:fade>News</h1>

		<PageLayout.VerticalSpacing sizing="1/3" />

		<p class="text-my-black tracking-wide leading-relaxed max-w-[768px]">
			Raie is about to start a blog all about the journey of the album and her experiences in the
			industry ... watch this space...
		</p>
	{/if}

	<PageLayout.VerticalSpacing sizing="2/3" />

	{#if mounted}
		<div class="h-[10px] overflow-hidden" in:fade={{ delay: 200 }}>
			<Images.BrickBg.HorizontalThree />
		</div>
	{/if}

	<PageLayout.VerticalSpacing sizing="2/3" />

	{#if mounted}
		<div class="max-w-[750px]" in:fade={{ delay: 200 }}>
			<LatestNews />
		</div>
	{/if}

	<PageLayout.VerticalSpacing />

	{#if mounted}
		<div class="h-[10px] overflow-hidden" in:fade={{ delay: 400 }}>
			<Images.BrickBg.HorizontalThree />
		</div>
	{/if}

	<PageLayout.VerticalSpacing sizing="2/3" />

	{#if mounted}
		<div in:fade={{ delay: 400 }}>
			<ArchiveReviews />
		</div>
	{/if}
</PageLayout.Body>
