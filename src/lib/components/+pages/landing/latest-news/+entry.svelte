<script lang="ts" context="module">
	import { Icon } from '$lib/components';
	import { AlbumLaunch, GalaxyStudios, RecentGigs } from './articles';
	import TitleButton from './title-button.svelte';
</script>

<script lang="ts">
	let currentNews: 'galaxy' | 'last few months' | 'album launch' = 'album launch';

	let isOverflow = false;
	let userHasScrolledTracks = false;

	let albumLaunchHeight: number;
	let galaxyStudiosHeight: number;
	let recentGigsHeight: number;
</script>

<div>
	<h3 class="tracking-widest text-xs sm:text-sm text-my-black-600 uppercase">Latest News</h3>

	<div
		class="flex items-center flex-wrap gap-x-xxs xs:gap-x-xs sm:gap-x-sm gap-y-xs mt-xs max-w-full overflow-hidden">
		<TitleButton
			text="Album Launch"
			onClick={() => (currentNews = 'album launch')}
			isActive={currentNews === 'album launch'} />

		<span class="text-my-black-50 text-sm">
			<Icon.DotOutline weight="thin" />
		</span>

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
	</div>

	<div
		class="mt-md lg:mt-lg max-h-[345px] overflow-y-hidden transition-all ease-in-out duration-300"
		style:height={`${
			currentNews === 'album launch'
				? albumLaunchHeight
				: currentNews === 'galaxy'
				? galaxyStudiosHeight
				: recentGigsHeight
		}px`}>
		{#if currentNews === 'album launch'}
			<AlbumLaunch bind:isOverflow bind:userHasScrolledTracks bind:height={albumLaunchHeight} />
		{:else if currentNews === 'galaxy'}
			<GalaxyStudios bind:isOverflow bind:userHasScrolledTracks bind:height={galaxyStudiosHeight} />
		{:else}
			<RecentGigs bind:isOverflow bind:userHasScrolledTracks bind:height={recentGigsHeight} />
		{/if}
	</div>

	<div
		class={`mt-xs flex justify-end transition-opacity ease-in-out duration-300 ${
			isOverflow && !userHasScrolledTracks ? '' : 'opacity-0'
		}`}>
		<div class="flex items-center gap-xs text-my-black-400 text-xs italic tracking-wide">
			<p>scroll right for more...</p>
		</div>
	</div>
</div>
