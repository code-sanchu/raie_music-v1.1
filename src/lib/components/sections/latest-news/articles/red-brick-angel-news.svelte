<script context="module" lang="ts">
	import { images } from '$lib/assets';

	import { Tooltip } from '$lib/components';
	import { Link } from '$lib/components/prose';
	import { Icon } from '$lib/components/icon';
	import Container from './_container.svelte';
	import Image from './_image.svelte';
	import TextContainer from './_text-container.svelte';
</script>

<script lang="ts">
	export let height: number;
	export let isActive: boolean;
</script>

<Container bind:height bind:isActive>
	<div>
		<TextContainer numColumns={2}>
			Since our wonderful spring ’23 news update we quietly prepped for our Red Brick Angel
			launch...<br />
			...and it happened!

			<br /><br />

			We had a beautiful night at The Camden Club – special thanks to Andrew Hart proprietor – We
			played to a full house and a standing ovation... was a night to remember Check out the footage
			– you’ll need an evening and a glass of wine!

			<div class="gap-sm grid grid-cols-2 w-full h-full">
				<Image img={images.red_brick_angels_may_2024.backing_singers} />

				<Image img={images.red_brick_angels_may_2024.louis_bell} />
			</div>

			[link to launch footage coming soon...]

			<br /><br />

			We will be releasing the album officially in June ’24 but have already released two singles
			from the album... Young Love and Crystal Girl... have a listen...

			<br /><br />

			<Tooltip
				text="Listen to Young Love on Spotify"
				triggeredById="latest_news-red_brick-young_love-listen" />
			<Link
				href="https://open.spotify.com/track/4f6sNMRPmhYUTKSNrBdQGM?si=e052425e835e4665"
				id="latest_news-red_brick-young_love-listen">
				<span class="mr-xxs text-my-black-500">
					<Icon.Spotify weight="light" />
				</span>

				YOUNG LOVE released in November ‘23</Link>

			<br />

			and...

			<br />

			<Tooltip
				text="Listen to Crystal Girl on Spotify"
				triggeredById={`latest_news-red_brick-crystal_girl-listen`} />
			<Link
				href="https://open.spotify.com/track/6FzNBR1pCBWpEhRUy7N2sX?si=638d7ceb9b38425d"
				id={`latest_news-red_brick-crystal_girl-listen`}>
				<span class="mr-xxs text-my-black-500">
					<Icon.Spotify weight="light" />
				</span>
				CRYSTAL GIRL released in April ‘24</Link>

			<div class="gap-sm grid grid-cols-2 w-full h-full">
				<Image img={images.red_brick_angels_may_2024.altea_narici} />

				<Image img={images.red_brick_angels_may_2024.chris_bell} />
			</div>

			Since the launch we have played at Bread & Roses pub in Feb ’24... where we played to a rowdy
			but appreciative audience and they hit the heights when we sang our encore... a sneak peek at
			one of the songs from a planned Raie EP (more news later)... check this out!

			<br /><br />

			[link to gig footage coming soon...]

			<br /><br />

			but had to take time out to bring in new players as our wonderful Louis Bell on lead guitar,
			Tim Gardner on violin and keys and Chris Bell on kit have been contracted on tours and
			labels... we hope to see them return before too long but...

			<div class="gap-sm grid grid-cols-2 w-full h-full">
				<Image img={images.red_brick_angels_may_2024.maria_tiimus} />

				<Image img={images.red_brick_angels_may_2024.tim_gardner} />
			</div>

			...meanwhile we are welcoming the Felgate Bros. – a lead guitar and kit duo … and we have a
			beautiful upcoming gig at Karamel Restaurant N22 on May 11th.

			<Tooltip
				text="Tickets from EventBrite"
				triggeredById="latest_news-red_brick-tickets-karamel_restaurant" />
			<Link
				href="https://www.eventbrite.com/e/raie-bringing-sweet-music-to-the-karamel-club-tickets-883179913897?aff=ebdssbdestsearch&keep_tld=1"
				id="latest_news-red_brick-tickets-karamel_restaurant">
				Get your tickects here
				<span class="ml-xxs text-my-black-500">
					<Icon.Event weight="light" />
				</span>
			</Link>

			<br /><br />

			We are also proud to be one of the bands opening the Brockley Max Festival this year on May
			31st... watch this space for coverage... We’ll be back soon with more news!...

			<br /><br />

			<div class="grid grid-cols-1 w-full h-full">
				<Image img={images.red_brick_angels_may_2024.standing_ovation} />
			</div>

			<div class="gap-sm grid grid-cols-2 w-full h-full">
				<Image img={images.red_brick_angels_may_2024.christiano_tortoioli} />

				<Image img={images.red_brick_angels_may_2024.jon_dunn} />
			</div>

			<div class="gap-sm flex w-full h-full">
				<div class="w-[30%]">
					<Image img={images.red_brick_angels_may_2024.jon_klein} />
				</div>

				<div class="w-[70%]">
					<Image img={images.red_brick_angels_may_2024.final_song} />
				</div>
			</div>
		</TextContainer>
	</div>
</Container>
