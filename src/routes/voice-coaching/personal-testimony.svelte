<script lang="ts" context="module">
	import { Icon } from '$lib/components';
	import type { voiceCoaching } from '$lib/data';
</script>

<script lang="ts">
	type Testimony = (typeof voiceCoaching.personalTestimony)[number];

	export let testimony: Testimony;
</script>

<div class="max-w-[65ch]">
	<div class="flex items-end gap-x-md gap-y-xs flex-wrap">
		<h3 class="mt-lg font-medium">
			<span>{testimony.name} — </span>
			<span class="inline-block translate-y-[1.5px]">{testimony.title}</span>
		</h3>

		<div class="flex items-center gap-xs text-gray-600">
			<a class="text-sm" href={testimony.aboutHref} target="_blank">about</a>

			<span class="text-xs">
				<Icon.ExternalLink weight="thin" />
			</span>
		</div>
	</div>

	<p class="prose mt-xs text-my-black tracking-wide">"{testimony.testimony}"</p>
</div>
