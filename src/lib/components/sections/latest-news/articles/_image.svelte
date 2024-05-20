<script context="module" lang="ts">
	import type { ImgAsset } from '$lib/assets';
	import { Picture } from '$lib/components';
</script>

<script lang="ts">
	export let img: ImgAsset;
</script>

<div class="w-full">
	<div class="w-full">
		<Picture imageClass="w-full" meta={img.src} sizes={'250px'} alt={img.caption} />
	</div>

	{#if img.caption}
		<p class="pl-xxs border-l-2 text-gray-600 text-sm -mt-sm">
			{img.caption}
		</p>
	{/if}
</div>
