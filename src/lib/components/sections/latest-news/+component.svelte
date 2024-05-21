<script lang="ts" context="module">
	import { Icon } from '$lib/components';
	import { AlbumLaunch, GalaxyStudios, Gigs, RedBrickAngelNews } from './articles';
	import TitleButton from './_title-button.svelte';
</script>

<script lang="ts">
	let showing: 'galaxy' | 'gigs' | 'album launch' | 'red brick angel news' = 'red brick angel news';
</script>

<div>
	<h3 class="tracking-widest text-xs sm:text-sm text-my-black-600 uppercase">Latest News</h3>

	<div
		class="flex items-center flex-wrap gap-x-xxs xs:gap-x-xs sm:gap-x-sm gap-y-xs mt-xs max-w-full overflow-hidden">
		<TitleButton
			text="Red Brick Angel News"
			onClick={() => (showing = 'red brick angel news')}
			isActive={showing === 'red brick angel news'} />

		<span class="text-my-black-50 text-sm">
			<Icon.DotOutline weight="thin" />
		</span>

		<TitleButton
			text="Album Launch"
			onClick={() => (showing = 'album launch')}
			isActive={showing === 'album launch'} />

		<span class="text-my-black-50 text-sm">
			<Icon.DotOutline weight="thin" />
		</span>

		<TitleButton
			text="Galaxy Studios"
			onClick={() => (showing = 'galaxy')}
			isActive={showing === 'galaxy'} />

		<span class="text-my-black-50 text-sm">
			<Icon.DotOutline weight="thin" />
		</span>

		<TitleButton text="Gigs" onClick={() => (showing = 'gigs')} isActive={showing === 'gigs'} />
	</div>

	<div class="max-w-[768px]">
		{#if showing === 'red brick angel news'}
			<RedBrickAngelNews />
		{:else if showing === 'album launch'}
			<AlbumLaunch />
		{:else if showing === 'galaxy'}
			<GalaxyStudios />
		{:else}
			<Gigs />
		{/if}
	</div>
</div>
