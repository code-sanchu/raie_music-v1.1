<script context="module" lang="ts">
	import { sineInOut } from 'svelte/easing';
	import { fade } from 'svelte/transition';
</script>

<script lang="ts">
	export let styles: string = '';

	let isHovered = false;
</script>

<article
	class={`max-h-[360px] pr-sm md:pr-md lg:pr-lg overflow-auto prose max-w-full ${isHovered ? '' : 'scrollbar-none'} ${styles}`}
	on:mouseenter={() => (isHovered = true)}
	on:mouseleave={() => (isHovered = false)}
	in:fade={{ easing: sineInOut, duration: 400, delay: 100 }}
	out:fade={{ easing: sineInOut, duration: 100 }}>
	<slot />
</article>
