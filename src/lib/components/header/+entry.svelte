<script context="module" lang="ts">
	import logo from '$assets/images/logo.svg';
	import SiteMenu from './site-menu.svelte';

	// const logoNaturalDimensions = { width: 614, height: 208 };
</script>

<header class="flex justify-between items-center w-full pt-sm sm:pt-md px-4 md:px-8 lg:px-12">
	<a class="z-[70]" href="/">
		<img
			class="w-[80px] xs:w-[90px] sm:w-[100px] md:w-[110px] lg:w-[120px] aspect-[614/208]"
			src={logo}
			alt="logo" />
	</a>

	<SiteMenu />
</header>
