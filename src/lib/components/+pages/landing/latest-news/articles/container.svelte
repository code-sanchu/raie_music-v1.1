<script context="module" lang="ts">
	import { sineInOut } from 'svelte/easing';
	import { fade } from 'svelte/transition';
</script>

<div
	class="prose text-my-black leading-relaxed lg:text-lg max-w-[540px] sm:max-w-[500px] pb-sm tracking-wide max-h-[250px] overflow-y-auto pr-md"
	in:fade={{ easing: sineInOut, duration: 400 }}
	out:fade={{ easing: sineInOut, duration: 100 }}>
	<slot />
</div>
