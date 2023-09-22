<script context="module" lang="ts">
	import { images } from '$lib/static';
	import { List } from 'phosphor-svelte';
</script>

<header class="flex justify-between w-screen pt-md px-lg">
	<a href="/">
		<img class="w-[110px] opacity-80" src={images.logo} alt="logo" />
	</a>

	<div class="text-3xl text-my-black-400">
		<List />
	</div>
</header>
