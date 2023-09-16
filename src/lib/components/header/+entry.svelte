<script context="module" lang="ts">
	import { images } from '$lib/static';
</script>

<header class="flex justify-between">
	<div class="py-sm pl-md">
		<a href="/">
			<img class="w-[100px] lg:w-[110px]" src={images.logo} alt="logo" />
		</a>
	</div>

	<div class="text-site-2-red px-md flex items-center lg:text-lg gap-md">
		<a href="/gallery">Gallery</a>
		<a href="/lyrics">Lyrics</a>
		<a href="/albums">Albums</a>
		<a href="/coaching">Coaching</a>
	</div>
</header>
