<script lang="ts" context="module">
	import '../app.css';

	import {
		globalFlagsStore,
		layoutStore,
		updateLayoutStore,
		type GlobalFlagsState,
		type LayoutState
	} from '$lib/stores';

	import { AudioElement, Header, LinksPanel, MusicBottomPanel } from '$lib/components';
	import { onMount } from 'svelte';
	import { fade } from 'svelte/transition';
</script>

<script lang="ts">
	let mounted = false;

	onMount(() => {
		mounted = true;
	});

	let globalFlags: GlobalFlagsState;

	globalFlagsStore.subscribe((store) => {
		globalFlags = store;
	});

	let layoutState: LayoutState;

	layoutStore.subscribe((store) => {
		layoutState = store;
	});

	let windowHeight: number | undefined;

	let headerNode: HTMLDivElement | undefined;

	$: {
		if (headerNode) {
			updateLayoutStore.headerHeight(headerNode.getBoundingClientRect().height);
		}
	}

	$: scrollDirection =
		!layoutState.scrollTopPrevious || layoutState.scrollTopPrevious < layoutState.scrollTopCurrent
			? 'down'
			: 'up';

	$: hideHeader =
		!globalFlags.firstPageHasMounted &&
		windowHeight &&
		layoutState.headerHeight &&
		windowHeight < 769 &&
		scrollDirection === 'down' &&
		layoutState.scrollTopCurrent > (layoutState.headerHeight ? layoutState.headerHeight * 3 : 100);
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

{#if mounted}
	<div
		class="fixed left-0 top-0 z-50 w-full transition-transform duration-300 ease-in-out"
		style:transform={hideHeader && layoutState.headerHeight
			? `translateY(-${layoutState.headerHeight}px)`
			: ''}
		bind:this={headerNode}
		in:fade>
		<Header />
	</div>
{/if}

<slot />

{#if globalFlags.firstPageHasMounted}
	<LinksPanel />

	<MusicBottomPanel />

	<AudioElement />
{/if}
