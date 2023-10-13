<script lang="ts" context="module">
	import { LinkIconSwitch, Tooltip } from '$lib/components';
	import { raie_links_arrs } from '$lib/data';
</script>

<div>
	<h2 class="uppercase italic tracking-widest text-sm">Listen & Buy</h2>

	<div class="flex text-lg items-center gap-sm mt-sm">
		{#each [...raie_links_arrs.listen, ...raie_links_arrs.buy] as raieLink}
			<a
				class="rounded-full p-xxs"
				href={raieLink.href}
				target="_blank"
				id={`about-${raieLink.id}`}
				aria-label={`${raieLink.name} link`}>
				<LinkIconSwitch type={raieLink.id} weight="thin" />
			</a>
			<Tooltip text={raieLink.name} triggeredById={`about-${raieLink.id}`} />
		{/each}
	</div>
</div>
