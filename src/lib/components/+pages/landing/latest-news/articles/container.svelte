<script context="module" lang="ts">
	import { sineInOut } from 'svelte/easing';
	import { fade } from 'svelte/transition';
</script>

<div
	class="text-my-black leading-relaxed lg:text-lg tracking-wide sm:scrollbar-track-white sm:scrollbar-thumb-[#f4f4f4] max-h-[330px] overflow-y-auto pr-lg transition-all"
	in:fade={{ easing: sineInOut, duration: 400, delay: 100 }}
	out:fade={{ easing: sineInOut, duration: 100 }}>
	<slot />
</div>
