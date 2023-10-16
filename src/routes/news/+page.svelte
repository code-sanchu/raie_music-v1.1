<script lang="ts" context="module">
	import { onMount } from 'svelte';

	import { updateGlobalFlags } from '$lib/stores';
	import { Images, PageLayout, LatestNews } from '$lib/components';
	import ArchiveReviews from './archive-reviews.svelte';
</script>

<script lang="ts">
	onMount(() => {
		updateGlobalFlags.firstPageHasMounted();
	});
</script>

<PageLayout.VerticalSpacing sizing="1.5" />

<h1 class="tracking-widest text-xl text-my-black-50/70 uppercase font-medium">News</h1>

<PageLayout.VerticalSpacing sizing="2/3" />

<div class="h-[10px] overflow-hidden">
	<Images.BrickBg.HorizontalThree />
</div>

<PageLayout.VerticalSpacing sizing="2/3" />

<div class="max-w-[750px]">
	<LatestNews />
</div>

<PageLayout.VerticalSpacing />

<div class="h-[10px] overflow-hidden">
	<Images.BrickBg.HorizontalThree />
</div>

<PageLayout.VerticalSpacing sizing="2/3" />

<ArchiveReviews />
