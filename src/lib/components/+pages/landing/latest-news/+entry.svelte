<script lang="ts" context="module">
	import { Icon } from '$lib/components';

	import { AlbumLaunch, GalaxyStudios, RecentGigs } from './articles';
	import TitleButton from './title-button.svelte';
</script>

<script lang="ts">
	let currentNews: 'galaxy' | 'last few months' | 'album launch' = 'galaxy';
</script>

<div>
	<h3 class="tracking-widest text-xs sm:text-sm text-my-black-600 uppercase">Latest News</h3>

	<div
		class="flex items-center flex-wrap gap-x-xxs xs:gap-x-xs sm:gap-x-sm gap-y-xs mt-xs max-w-full overflow-hidden">
		<TitleButton
			text="Galaxy Studios"
			onClick={() => (currentNews = 'galaxy')}
			isActive={currentNews === 'galaxy'} />

		<span class="text-my-black-50 text-sm">
			<Icon.DotOutline weight="thin" />
		</span>

		<TitleButton
			text="Recent Gigs"
			onClick={() => (currentNews = 'last few months')}
			isActive={currentNews === 'last few months'} />

		<span class="text-my-black-50 text-sm">
			<Icon.DotOutline weight="thin" />
		</span>

		<TitleButton
			text="Album Launch"
			onClick={() => (currentNews = 'album launch')}
			isActive={currentNews === 'album launch'} />
	</div>

	<div class="mt-md lg:mt-lg h-[330px]">
		{#if currentNews === 'galaxy'}
			<GalaxyStudios />
		{:else if currentNews === 'last few months'}
			<RecentGigs />
		{:else}
			<AlbumLaunch />
		{/if}
	</div>
</div>
