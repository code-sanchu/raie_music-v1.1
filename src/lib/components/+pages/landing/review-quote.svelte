<script lang="ts" context="module">
	import QuoteMarkIcon from './quote-mark-icon.svelte';
</script>

<script lang="ts">
	export let reviewer: { name: string; org: string };
	export let text: string[];
</script>

<div
	class="w-[278px] xxs:w-[310px] xs:w-[348.5px] sm:w-[322px] sm/md:w-[333px] md:w-[355px] md/lg:w-[388px] lg:w-[420px] max-w-full">
	<p
		class="xxs:text-lg xs:text-xl sm:text-lg sm/md:text-1.5lg md:text-xl md/lg:text-1.5xl lg:text-2xl tracking-wider flex flex-col gap-xxs md:gap-xs items-start">
		{#each text as line, i}
			<span class="relative">
				{#if i === 0}
					<QuoteMarkIcon type="left" />
				{/if}

				{line}

				{#if i === text.length - 1}
					<QuoteMarkIcon type="right" />
				{/if}
			</span>
		{/each}
	</p>

	<p
		class="pl-md md:pl-lg text-sm lg:text-base mt-sm md:mt-md tracking-wide text-my-black-700 font-light">
		{reviewer.name} — {reviewer.org}
	</p>
</div>
