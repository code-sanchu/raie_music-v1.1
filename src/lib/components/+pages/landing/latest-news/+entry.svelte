<script lang="ts" context="module">
	import { images } from '$lib/assets';
	import { Picture, Icon } from '$lib/components';

	import TitleButton from './title-button.svelte';
	import { GalaxyStudios, TheLastFewMonths, AlbumLaunch } from './articles';
</script>

<script lang="ts">
	let currentNews: 'galaxy' | 'last few months' | 'album launch' = 'galaxy';

	let isInteraction = false;
</script>

<div>
	<h3 class="tracking-widest text-xs sm:text-sm text-my-black-600 uppercase">Latest News</h3>

	<div class="flex items-center gap-sm mt-xs max-w-full overflow-hidden">
		<TitleButton
			text="Galaxy Studios"
			onClick={() => (currentNews = 'galaxy')}
			isActive={currentNews === 'galaxy'} />

		<span class="text-my-black-100 text-sm">
			<Icon.DotOutline weight="thin" />
		</span>

		<TitleButton
			text="The Last Few Months"
			onClick={() => (currentNews = 'last few months')}
			isActive={currentNews === 'last few months'} />

		<span class="text-my-black-100 text-sm">
			<Icon.DotOutline weight="thin" />
		</span>

		<TitleButton
			text="Album Launch"
			onClick={() => (currentNews = 'album launch')}
			isActive={currentNews === 'album launch'} />
	</div>

	<div class="mt-md lg:mt-lg flex gap-sm sm:gap-lg flex-col sm:flex-col lg:flex-row lg:gap-xl">
		<div class="w-[200px] lg:w-[250px] shrink-0">
			<Picture
				imageClass="rounded-sm"
				meta={images.galaxy['full-band'].src}
				sizes={'250px'}
				alt="" />
		</div>

		{#if currentNews === 'galaxy'}
			<GalaxyStudios />
		{:else if currentNews === 'last few months'}
			<TheLastFewMonths />
		{:else}
			<AlbumLaunch />
		{/if}
	</div>
</div>
