<script context="module" lang="ts">
	import { sineInOut } from 'svelte/easing';
	import { fade } from 'svelte/transition';
</script>

<script lang="ts">
	export let height: number;
	export let isActive: boolean;

	let isOverflow = false;
	let userHasScrolledTracks = false;
	let showScrollRightMessage = false;

	let node: HTMLDivElement;

	$: {
		if (node) {
			const scrollWidth = node.scrollWidth;
			const offsetWidth = node.offsetWidth;

			isOverflow = scrollWidth > offsetWidth;

			if (scrollWidth > offsetWidth) {
				node.style.scrollBehavior = 'smooth';

				node.addEventListener('wheel', (event) => {
					event.preventDefault();

					node.scrollTo({ left: node.scrollLeft + event.deltaY, behavior: 'smooth' });

					userHasScrolledTracks = true;
					showScrollRightMessage = false;
				});
			}
		}
	}

	$: {
		if (isActive && isOverflow && !userHasScrolledTracks && !showScrollRightMessage) {
			setTimeout(() => {
				showScrollRightMessage = true;
			}, 100);
		}
	}
</script>

<div
	class={`max-w-full max-h-[330px] overflow-x-auto overflow-y-hidden scrollbar-track-bricks-bg-gray scrollbar-thumb-my-black-50/50 hover:scrollbar-thumb-my-black-50/50 md:scrollbar-thin md:scrollbar-track-my-black-50/50 md:scrollbar-thumb-my-black-100 md:hover:scrollbar-thumb-my-black-200 ${
		isOverflow ? '' : ''
	}`}
	in:fade={{ easing: sineInOut, duration: 400, delay: 100 }}
	out:fade={{ easing: sineInOut, duration: 100 }}
	bind:this={node}
	on:scroll={(e) => {
		const scrollLeft = e.currentTarget.scrollLeft;

		if (scrollLeft > 20) {
			userHasScrolledTracks = true;
		}
	}}
	bind:clientHeight={height}>
	<slot />
</div>

<div
	class={`mt-xs flex justify-end transition-opacity ease-in-out duration-300 ${
		showScrollRightMessage ? '' : 'opacity-0'
	}`}>
	<div class="flex items-center gap-xs text-my-black-400 text-xs italic tracking-wide">
		<p>scroll right for more...</p>
	</div>
</div>
