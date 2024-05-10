<script context="module" lang="ts">
	import { Icon } from '$lib/components';
</script>

<div
	class="absolute left-1/2 top-[40%] -translate-x-1/2 -translate-y-1/2 grid place-items-center leading-relaxed max-w-[100vw]">
	<div class="flex flex-col items-center max-w-[65ch] text-center p-lg">
		<h1 class="text-lg font-semibold">
			Oops, we're sorry... It seems the page you're looking for cannot be found.
		</h1>
		<p class="mt-lg">
			It's possible that the page may have been moved or deleted during our site updates.
		</p>

		<p class="mt-md">You can try navigating back to our homepage.</p>

		<a
			class="mt-sm flex items-center gap-xs border-2 rounded-md px-sm py-xxxs text-[15px] tracking-wider"
			href="/"
			><span>To homepage</span>
			<span><Icon.ArrowRight weight="thin" /></span>
		</a>
	</div>
</div>
