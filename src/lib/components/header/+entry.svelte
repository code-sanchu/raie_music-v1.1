<script context="module" lang="ts">
	import { images } from '$lib/assets';
	import { Picture } from '$lib/components';
	import SiteMenu from './site-menu.svelte';
</script>

<header class="flex justify-between items-center w-full pt-sm sm:pt-md">
	<a class="z-[70]" href="/">
		<Picture
			meta={images.logo.src}
			imageClass="w-[70px] xs:w-[80px] sm:w-[90px] md:w-[100px] lg:w-[110px]"
			sizes={'110px'}
			alt="" />
	</a>

	<SiteMenu />
</header>
