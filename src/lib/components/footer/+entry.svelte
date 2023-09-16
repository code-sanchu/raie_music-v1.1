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

<footer class="fixed bottom-0 z-30 flex w-full justify-between py-xs px-xs">
	<p class="text-base text-my-black-950 mr-lg bg-white/50 backdrop-blur-sm py-xs px-xs rounded-sm">
		Get in touch: rachel@raiemusic.com
	</p>

	<div
		class="text-my-black-400 flex items-center text-xl gap-md bg-white/50 backdrop-blur-sm py-xs px-xs"
	>
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
