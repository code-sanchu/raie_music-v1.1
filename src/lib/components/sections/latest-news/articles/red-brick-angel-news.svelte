<script context="module" lang="ts">
	import { images } from '$lib/assets';

	import { Tooltip } from '$lib/components';
	import { Icon } from '$lib/components/icon';
	import { Link } from '$lib/components/prose';

	import Image from './_image.svelte';
	import Container from './_container.svelte';
</script>

<Container styles="pt-[2px]">
	<p>
		<time class="text-[13px] opacity-80" datetime="2024-05-21">May 2024</time>
	</p>

	<div class="w-full md:w-1/2 md:float-right md:pl-md mt-[12px]">
		<Image img={images.red_brick_angels_may_2024.backing_singers} />
	</div>

	<p class="mt-[5px]">
		Since our wonderful spring ’23 news update we quietly prepped for our Red Brick Angel launch...<br />
		...and it happened! We had a beautiful night at The Camden Club – special thanks to Andrew Hart proprietor
		– We played to a full house and a standing ovation... was a night to remember. Check out the footage
		– you’ll need an evening and a glass of wine!
	</p>

	<Link href="https://www.youtube.com/watch?v=qvy-6zO_U4k">Watch the album launch on YouTube</Link>

	<p>
		We will be releasing the album officially in June ’24 but have already released two singles from
		the album... Young Love and Crystal Girl... have a listen...

		<Tooltip
			text="Listen to Young Love on Spotify"
			triggeredById="latest_news-red_brick-young_love-listen" />
		<Link
			href="https://open.spotify.com/track/4f6sNMRPmhYUTKSNrBdQGM?si=e052425e835e4665"
			id="latest_news-red_brick-young_love-listen">
			YOUNG LOVE released in November ‘23</Link>

		and...

		<Tooltip
			text="Listen to Crystal Girl on Spotify"
			triggeredById={`latest_news-red_brick-crystal_girl-listen`} />
		<Link
			href="https://open.spotify.com/track/6FzNBR1pCBWpEhRUy7N2sX?si=638d7ceb9b38425d"
			id={`latest_news-red_brick-crystal_girl-listen`}>
			CRYSTAL GIRL released in April ‘24</Link>
	</p>

	<p>
		Since the launch we have played at Bread & Roses pub in Feb ’24... where we played to a rowdy
		but appreciative audience and they hit the heights when we sang our encore... a sneak peek at
		one of the songs from a planned Raie EP (more news later)... check this out!
	</p>

	<Link href="https://www.youtube.com/watch?v=gkytBWj5WeA">Watch Roof Top Dog on YouTube</Link>

	<p>
		but had to take time out to bring in new players as our wonderful Louis Bell on lead guitar, Tim
		Gardner on violin and keys and Chris Bell on kit have been contracted on tours and labels... we
		hope to see them return before too long but...
	</p>

	<div class="gap-sm grid grid-cols-2">
		<Image img={images.red_brick_angels_may_2024.louis_bell} />
		<Image img={images.red_brick_angels_may_2024.tim_gardner} />
	</div>

	<p>
		We are also proud to be one of the bands opening the Brockley Max Festival this year on May
		31st... watch this space for coverage... We’ll be back soon with more news!...
	</p>

	<p>
		... we are proudly releasing Red Brick Angel - the full album via Distrokid onto all your media
		channels on June 1st
	</p>

	<p>... we also have Louis bell back on stage with us for the 31st ... see you all there!</p>

	<p>More pics from the gig:</p>

	<div class="gap-sm grid grid-cols-2">
		<Image img={images.red_brick_angels_may_2024.standing_ovation} />
		<Image img={images.red_brick_angels_may_2024.christiano_tortoioli} />
		<Image img={images.red_brick_angels_may_2024.jon_dunn} />
		<Image img={images.red_brick_angels_may_2024.jon_klein} />
		<Image img={images.red_brick_angels_may_2024.final_song} />
		<Image img={images.red_brick_angels_may_2024.altea_narici} />
		<Image img={images.red_brick_angels_may_2024.maria_tiimus} />
	</div>
</Container>
