<script context="module" lang="ts">
	import Container from './_container.svelte';

	const params = `?modestbranding=1&rel=0&color=white&frameborder=0&autoplay=0&origin=${
		import.meta.env.PROD ? 'http://www.raiemusic.com' : ''
	}`;
	const src = 'https://www.youtube.com/embed/uI1dUjpad14?si=GfVli16Kyvht6ppv' + params;
</script>

<Container styles="pt-[2px]">
	<p>
		<time class="text-[13px] opacity-80" datetime="2024-05-21">July 2024</time>
	</p>

	<p class="mt-[5px]">
		Raie are embarking on a new EP / album ... we're writing at a gentle pace and the plan is to
		release in late '25<br /><br />
		Please have a listen to the stripped back rehearsal of Waltz in the Lemon Light - the first full
		song (lyrics still subject to minor edits) ...<br /><br />
		The song is dedicated to all women in war torn lands ...
	</p>

	<div class="aspect-video grayscale">
		<iframe
			width="100%"
			height="100%"
			{src}
			title="YouTube video player"
			frameborder="0"
			allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
			allowfullscreen />
	</div>
</Container>
