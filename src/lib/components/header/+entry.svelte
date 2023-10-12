<script context="module" lang="ts">
	import logo from '$assets/images/logo.svg';
	import SiteMenu from './site-menu.svelte';
</script>

<header class="flex justify-between items-center w-full pt-sm sm:pt-md px-4 md:px-8 lg:px-12">
	<a class="z-[70]" href="/">
		<img class="w-[70px] xs:w-[80px] sm:w-[90px] md:w-[100px] lg:w-[110px]" src={logo} alt="logo" />
	</a>

	<SiteMenu />
</header>
