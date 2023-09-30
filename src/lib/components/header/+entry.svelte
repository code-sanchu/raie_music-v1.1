<script context="module" lang="ts">
	import { List } from 'phosphor-svelte';

	import { images } from '$lib/assets';
	import { Picture } from '$lib/components';
</script>

<header class="flex justify-between items-center w-screen pt-md px-lg">
	<a href="/">
		<Picture meta={images.logo.src} imageClass="w-[110px]" sizes={'110px'} alt="" />
	</a>

	<div class="text-3xl text-my-black-400 relative">
		<List />
	</div>
</header>
