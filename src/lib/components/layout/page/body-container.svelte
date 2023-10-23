<script lang="ts" context="module">
	import { PageLayout } from '$lib/components';
	import { layoutStore, type LayoutState, updateLayoutStore } from '$lib/stores';
</script>

<script lang="ts">
	// exists seperate from +layout.svelte at root because each page needs its own scroll container
	let layoutState: LayoutState;

	layoutStore.subscribe((store) => {
		layoutState = store;
	});

	let bodyElement: HTMLDivElement | undefined;
</script>

{#if layoutState.headerHeight}
	<div
		class="overflow-y-auto flex flex-col overflow-x-hidden transition-all duration-300 ease-in-out h-screen md:scrollbar-thin md:scrollbar-track-my-black-50/50 md:scrollbar-thumb-my-black-100 md:hover:scrollbar-thumb-my-black-200"
		style:padding-top={`${layoutState.headerHeight}px`}
		bind:this={bodyElement}
		on:scroll={() => {
			if (!bodyElement) {
				return;
			}

			updateLayoutStore.scrollTopPrevious(layoutState.scrollTopCurrent);

			updateLayoutStore.scrollTopCurrent(bodyElement.scrollTop);
		}}>
		<PageLayout.HorizontalSpacing>
			<slot />
		</PageLayout.HorizontalSpacing>

		<PageLayout.VerticalSpacing sizing="double" />
	</div>
{/if}
