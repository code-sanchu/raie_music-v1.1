<script lang="ts" context="module">
	import '../app.css';

	import { navigating } from '$app/stores';
	import { globalFlagsStore, type GlobalFlagsState } from '$lib/stores';

	import { AudioElement, Header, MusicBottomPanel, LinksPanel, PageLayout } from '$lib/components';
</script>

<script lang="ts">
	let globalFlags: GlobalFlagsState;

	globalFlagsStore.subscribe((store) => {
		globalFlags = store;
	});

	let windowHeight: number | undefined;
	let headerHeight: number | undefined;

	let bodyElement: HTMLDivElement | undefined;

	let currentScrollTop = 0;
	let previousScrollTop = 1;

	$: scrollDirection = !previousScrollTop || previousScrollTop < currentScrollTop ? 'down' : 'up';

	$: hideHeader =
		windowHeight &&
		headerHeight &&
		windowHeight < 769 &&
		scrollDirection === 'down' &&
		currentScrollTop > (headerHeight ? headerHeight * 3 : 100);

	$: {
		if ($navigating && bodyElement) {
			bodyElement.scrollTop = 0;
		}
	}
</script>

<svelte:head>
	<title>Raie</title>
	<meta name="description" content="The official site of Raie" />
	<link
		rel="preload"
		href="/fonts/HelveticaNeue-Thin.otf"
		as="font"
		type="font/otf"
		crossorigin="true" />
</svelte:head>

<svelte:window bind:innerHeight={windowHeight} />

<div
	class="fixed left-0 top-0 z-50 w-full transition-transform duration-300 ease-in-out"
	style:transform={hideHeader && headerHeight ? `translateY(-${headerHeight}px)` : ''}
	bind:clientHeight={headerHeight}>
	<Header />
</div>

{#if headerHeight}
	<div
		class="overflow-y-auto flex flex-col overflow-x-hidden transition-all duration-300 ease-in-out h-screen"
		style:padding-top={`${headerHeight}px`}
		bind:this={bodyElement}
		on:scroll={() => {
			if (!bodyElement) {
				return;
			}

			previousScrollTop = currentScrollTop;
			currentScrollTop = bodyElement.scrollTop;
		}}>
		<PageLayout.HorizontalSpacing>
			<slot />
		</PageLayout.HorizontalSpacing>

		<PageLayout.VerticalSpacing sizing="double" />
	</div>

	{#if globalFlags.firstPageHasMounted}
		<LinksPanel />

		<MusicBottomPanel />

		<AudioElement />
	{/if}
{/if}
