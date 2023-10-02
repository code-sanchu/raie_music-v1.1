<script context="module" lang="ts">
	import { List } from 'phosphor-svelte';

	import { images } from '$lib/assets';
	import { Picture } from '$lib/components';
	import SiteMenu from './site-menu.svelte';
</script>

<header class="flex justify-between items-center w-screen pt-md px-lg">
	<a class="z-[70]" href="/">
		<Picture meta={images.logo.src} imageClass="w-[110px]" sizes={'110px'} alt="" />
	</a>

	<SiteMenu />
</header>
