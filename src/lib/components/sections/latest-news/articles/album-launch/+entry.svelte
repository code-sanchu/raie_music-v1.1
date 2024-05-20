<script context="module" lang="ts">
	import { images } from '$lib/assets';

	import { Link } from '$lib/components/prose';
	import Image from '../_image.svelte';
	import EpkLink from './epk-link.svelte';
</script>

<article class="max-h-[360px] pr-sm md:pr-md lg:pr-lg overflow-auto prose max-w-full">
	<div class="w-full max-w-[120px] float-left pr-md">
		<Image img={images.faceshots[2]} />
	</div>

	<p>
		We launched the new album Red Brick Angel at <Link href="https://thecamdenclub.co.uk/"
			>The Camden Club</Link>
		on November 8th to a standing ovation and we have now released our first Red Brick Angel album single
		YOUNG LOVE...... listen on <Link
			href="https://open.spotify.com/track/4f6sNMRPmhYUTKSNrBdQGM?fbclid=IwAR1Hq03ZHNhzSkHdSD_lmZK8-kkLxkAzqIhS5wOloJdqe6H_rYK2AxjEWxw"
			>the link</Link> and help us increase our algorithms...
	</p>

	<p class="sm:flex gap-md">
		<EpkLink extraClasses="inline-flex" />
	</p>

	<p>
		... all 12 beautiful new tracks have now been mastered and are avaiable to listen to on this
		site!
	</p>
</article>
