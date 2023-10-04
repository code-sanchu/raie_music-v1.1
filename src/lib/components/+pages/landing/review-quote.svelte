<script lang="ts" context="module">
	import QuoteMarkIcon from './quote-mark-icon.svelte';
</script>

<script lang="ts">
	export let reviewer: { name: string; org: string };
	export let text: string[];
</script>

<div class="w-[420px] sm:w-[322px] md:w-[355px] lg:w-[420px] grid place-items-center">
	<p
		class="text-lg xs:text-xl sm:text-lg md:text-xl lg:text-2xl tracking-wider flex flex-col gap-xxs md:gap-xs items-start"
	>
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
		class="pl-md md:pl-lg text-sm lg:text-base mt-sm md:mt-md tracking-wide text-my-black-700 font-light"
	>
		{reviewer.name} — {reviewer.org}
	</p>
</div>
