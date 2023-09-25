<script context="module" lang="ts">
	import { List } from 'phosphor-svelte';

	import { Picture } from '$lib/components';
	import { images } from '$assets';
</script>

<header class="flex justify-between w-screen pt-md px-lg">
	<a href="/">
		<Picture meta={images.logo.src} imageClass="w-[110px]" sizes={'110px'} alt="" />
	</a>

	<div class="text-3xl text-my-black-400">
		<List />
	</div>
</header>
