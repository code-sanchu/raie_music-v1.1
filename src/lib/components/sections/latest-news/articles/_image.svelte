<script context="module" lang="ts">
	import type { ImgAsset } from '$lib/assets';
	import { Picture } from '$lib/components';
</script>

<script lang="ts">
	export let img: ImgAsset;
</script>

<div class="w-full flex flex-col gap-[10px] pb-xs">
	<div class="w-full">
		<Picture imageClass="w-full" meta={img.src} sizes={'250px'} alt={img.caption} />
	</div>

	{#if img.caption}
		<caption class="pl-xxs border-l-2 text-gray-600 text-sm w-full text-left">
			{img.caption}
		</caption>
	{/if}
</div>
