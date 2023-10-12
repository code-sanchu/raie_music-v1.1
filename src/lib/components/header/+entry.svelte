<script context="module" lang="ts">
	import logo from '$assets/images/logo.svg';
	import SiteMenu from './site-menu.svelte';

	// const logoNaturalDimensions = { width: 614, height: 208 };
</script>

<header class="flex justify-between items-center w-full pt-sm sm:pt-md px-4 md:px-8 lg:px-12">
	<a class="z-[70]" href="/">
		<img
			class="w-[70px] xs:w-[80px] sm:w-[90px] md:w-[100px] lg:w-[110px] aspect-[614/208]"
			src={logo}
			alt="logo" />
	</a>

	<SiteMenu />
</header>
