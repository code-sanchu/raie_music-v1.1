<script lang="ts" context="module">
	import { fade } from 'svelte/transition';

	import { Icon } from '$lib/components';
	import { AlbumLaunch, GalaxyStudios, RecentGigs } from './articles';
	import TitleButton from './title-button.svelte';
</script>

<script lang="ts">
	let currentNews: 'galaxy' | 'last few months' | 'album launch' = 'galaxy';

	let isOverflow = false;
	let userHasScrolledTracks = false;
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

	<div class="mt-md lg:mt-lg h-[345px] overflow-y-hidden">
		{#if currentNews === 'galaxy'}
			<GalaxyStudios bind:isOverflow bind:userHasScrolledTracks />
		{:else if currentNews === 'last few months'}
			<RecentGigs bind:isOverflow bind:userHasScrolledTracks />
		{:else}
			<AlbumLaunch bind:isOverflow bind:userHasScrolledTracks />
		{/if}
	</div>

	{#if isOverflow && !userHasScrolledTracks}
		<div class="mt-xs flex justify-end" out:fade>
			<div class="flex items-center gap-xs text-my-black-400 text-sm italic tracking-wide">
				<p>scroll right for more...</p>
			</div>
		</div>
	{/if}
</div>
