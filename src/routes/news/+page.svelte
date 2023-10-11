<script lang="ts" context="module">
	import { Images, PageLayout } from '$lib/components';
	import { LatestNews } from '$lib/components/+pages/landing/latest-news';
	import ArchiveReviews from './archive-reviews.svelte';
</script>

<PageLayout.VerticalSpacing sizing="1.5" />

<!-- <Images.BrickBg.HorizontalThree /> -->

<!-- <PageLayout.VerticalSpacing /> -->

<h1 class="tracking-widest text-xl text-my-black-50/70 uppercase font-medium">News</h1>

<PageLayout.VerticalSpacing sizing="2/3" />

<div class="h-[10px] overflow-hidden">
	<Images.BrickBg.HorizontalThree />
</div>

<PageLayout.VerticalSpacing sizing="2/3" />

<div class="max-w-[750px]">
	<LatestNews />
</div>

<PageLayout.VerticalSpacing sizing="2/3" />

<div class="h-[10px] overflow-hidden">
	<Images.BrickBg.HorizontalThree />
</div>

<PageLayout.VerticalSpacing sizing="2/3" />

<ArchiveReviews />
