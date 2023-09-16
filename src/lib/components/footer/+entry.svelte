<script context="module" lang="ts">
	import {
		Headphones,
		ShoppingCartSimple,
		InstagramLogo,
		FacebookLogo,
		SoundcloudLogo,
		YoutubeLogo
	} from 'phosphor-svelte';
</script>

<footer class="flex justify-between pb-sm px-md">
	<p class="text-base text-my-black-950 mr-lg">Get in touch: rachel@raiemusic.com</p>

	<div class="text-my-black-400 flex items-center text-xl gap-md">
		<a href="/gallery">
			<Headphones />
		</a>
		<a href="/lyrics">
			<ShoppingCartSimple />
		</a>
		<a href="/albums">
			<InstagramLogo />
		</a>
		<a href="/coaching">
			<FacebookLogo />
		</a>
		<a href="/coaching">
			<SoundcloudLogo />
		</a>
		<a href="/coaching">
			<YoutubeLogo />
		</a>
	</div>
</footer>
