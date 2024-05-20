<script lang="ts" context="module">
	import { HorizontalSpacing, VerticalSpacing } from '$lib/components/layout';
	import { layoutStore, type LayoutState, updateLayoutStore } from '$lib/stores';
</script>

<script lang="ts">
	// exists seperate from +layout.svelte at root because each page needs its own scroll container
	let headerHeight: LayoutState['headerHeight'];
	let scrollTopCurrent: LayoutState['scrollTopCurrent'];

	layoutStore.subscribe((store) => {
		headerHeight = store.headerHeight;
		scrollTopCurrent = store.scrollTopCurrent;
	});

	let bodyElement: HTMLDivElement | undefined;
</script>

{#if headerHeight}
	<div
		class="overflow-y-auto flex flex-col overflow-x-hidden transition-all duration-300 ease-in-out h-screen md:scrollbar-thin md:scrollbar-track-my-black-50/50 md:scrollbar-thumb-my-black-100 md:hover:scrollbar-thumb-my-black-200"
		style:padding-top={`${headerHeight}px`}
		bind:this={bodyElement}
		on:scroll={() => {
			if (!bodyElement) {
				return;
			}

			updateLayoutStore.scrollTopPrevious(scrollTopCurrent);

			updateLayoutStore.scrollTopCurrent(bodyElement.scrollTop);
		}}>
		<HorizontalSpacing>
			<slot />
		</HorizontalSpacing>

		<VerticalSpacing sizing="double" />
	</div>
{/if}
