<script context="module" lang="ts">
	import { sineInOut } from 'svelte/easing';
	import { fade } from 'svelte/transition';
</script>

<script lang="ts">
	export let userHasScrolledTracks = false;
	export let isOverflow = false;

	let node: HTMLDivElement;

	$: {
		if (node) {
			node.style.scrollBehavior = 'smooth';

			node.addEventListener('wheel', (event) => {
				event.preventDefault();

				node.scrollTo({ left: node.scrollLeft + event.deltaY, behavior: 'smooth' });
			});
		}
	}

	$: {
		if (node) {
			const scrollWidth = node.scrollWidth;
			const offsetWidth = node.offsetWidth;

			isOverflow = scrollWidth > offsetWidth;
		}
	}
</script>

<div
	class="max-w-full overflow-x-auto overflow-y-hidden scrollbar-track-white scrollbar-thumb-[#f4f4f4] hover:scrollbar-thumb-[#f4f4f4]"
	in:fade={{ easing: sineInOut, duration: 400, delay: 100 }}
	out:fade={{ easing: sineInOut, duration: 100 }}
	bind:this={node}
	on:scroll={(e) => {
		const scrollLeft = e.currentTarget.scrollLeft;

		if (scrollLeft > 20) {
			userHasScrolledTracks = true;
		}
	}}>
	<slot />
</div>
