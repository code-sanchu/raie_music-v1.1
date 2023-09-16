<script lang="ts" context="module">
	import '../app.css';

	import { Header, Footer, PageLayout } from '$lib/components/index';
</script>

<script lang="ts">
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
</script>

<svelte:window bind:innerHeight={windowHeight} />

<div
	class="fixed left-0 top-0 z-50 w-full bg-white transition-transform duration-300 ease-in-out"
	style:transform={hideHeader && headerHeight ? `translateY(-${headerHeight}px)` : ''}
	bind:clientHeight={headerHeight}
>
	<Header />
</div>

<div
	class="overflow-y-auto flex flex-col overflow-x-hidden transition-all duration-300 ease-in-out"
	style:height={!hideHeader ? `calc(100vh - ${headerHeight}px)` : '100vh'}
	style:transform={!hideHeader ? `translateY(${headerHeight}px)` : ''}
	bind:this={bodyElement}
	on:scroll={() => {
		if (!bodyElement) {
			return;
		}

		previousScrollTop = currentScrollTop;
		currentScrollTop = bodyElement.scrollTop;
	}}
>
	<div class="flex-grow">
		<slot />
	</div>

	<PageLayout.VerticalSpacing />

	<Footer />
</div>
