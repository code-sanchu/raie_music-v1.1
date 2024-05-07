<script context="module" lang="ts">
	import { images } from '$lib/assets';

	import { Link } from '$lib/components/prose';
	import { Picture, Tooltip } from '$lib/components';
	import { Container, TextContainer } from './_components';
</script>

<script lang="ts">
	import { Icon } from '$lib/components/icon';

	export let height: number;
	export let isActive: boolean;

	// todo: upload video to yt and add embed. 2 or 1 other video too - either upload to yt or straight on website.
</script>

<Container bind:height bind:isActive>
	<div>
		<TextContainer numColumns={2}>
			Since our wonderful spring ’23 news update we quietly prepped for our Red Brick Angel
			launch...<br />
			...and it happened!

			<br /><br />

			<div class="w-[180px] xs:w-[220px] shrink-0">
				<Picture
					imageClass="rounded-sm"
					meta={images.red_brick_angels_may_2024.standing_ovation.src}
					sizes={'250px'}
					alt="" />
			</div>

			<br /><br />

			We had a beautiful night at The Camden Club – special thanks to Andrew Hart proprietor – We
			played to a full house and a standing ovation... was a night to remember Check out the footage
			– you’ll need an evening and a glass of wine!

			<br /><br />

			[link to launch footage coming soon...]

			<!-- <br /><br /> -->

			<div class="flex gap-sm my-xs">
				<div class="w-[150px] xs:w-[190px] shrink-0">
					<Picture
						imageClass="rounded-sm"
						meta={images.red_brick_angels_may_2024.backing_singers.src}
						sizes={'250px'}
						alt="" />
					<p class="pl-xxs border-l-2 text-gray-600 text-xs mt-xs">
						Backing singers L to R Emily McLean Nathan Devonte and Nazarene
					</p>
				</div>
				<div class="w-[110px] xs:w-[150px] shrink-0">
					<Picture
						imageClass="rounded-sm"
						meta={images.red_brick_angels_may_2024.louis_bell.src}
						sizes={'250px'}
						alt="" />
					<p class="pl-xxs border-l-2 text-gray-600 text-xs mt-xs">Louis Bell on lead guitar.</p>
				</div>
			</div>

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

			<br /><br />

			Since the launch we have played at Bread & Roses pub in Feb ’24... where we played to a rowdy
			but appreciative audience and they hit the heights when we sang our encore... a sneak peek at
			one of the songs from a planned Raie EP (more news later)... check this out!

			<br /><br />

			[link to gig footage coming soon...]

			<br /><br />

			but had to take time out to bring in new players as our wonderful Louis Bell on lead guitar,
			Tim Gardner on violin and keys and Chris Bell on kit have been contracted on tours and
			labels... we hope to see them return before too long but...

			<br /><br />

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

			<div class="flex gap-sm my-xs">
				<div class="w-[150px] xs:w-[190px] shrink-0">
					<Picture
						imageClass="rounded-sm"
						meta={images.red_brick_angels_may_2024.altea_narici.src}
						sizes={'250px'}
						alt="" />
					<p class="pl-xxs border-l-2 text-gray-600 text-xs mt-xs">Altea Narici</p>
				</div>
				<div class="w-[110px] xs:w-[150px] shrink-0">
					<Picture
						imageClass="rounded-sm"
						meta={images.red_brick_angels_may_2024.chris_bell.src}
						sizes={'250px'}
						alt="" />
					<p class="pl-xxs border-l-2 text-gray-600 text-xs mt-xs">Chris Bell</p>
				</div>
			</div>

			<div class="flex gap-sm my-xs">
				<div class="w-[150px] xs:w-[190px] shrink-0">
					<Picture
						imageClass="rounded-sm"
						meta={images.red_brick_angels_may_2024.christiano_tortoioli.src}
						sizes={'250px'}
						alt="" />
					<p class="pl-xxs border-l-2 text-gray-600 text-xs mt-xs">Christiano Tortoioli</p>
				</div>

				<div class="w-[110px] xs:w-[150px] shrink-0">
					<Picture
						imageClass="rounded-sm"
						meta={images.red_brick_angels_may_2024.jon_dunn.src}
						sizes={'250px'}
						alt="" />
					<p class="pl-xxs border-l-2 text-gray-600 text-xs mt-xs">Jon Dunn</p>
				</div>
			</div>

			<!-- <div class="flex gap-sm my-xs">
				<div class="w-[110px] xs:w-[150px] shrink-0">
					<Picture
						imageClass="rounded-sm"
						meta={images.red_brick_angels_may_2024.jon_klein.src}
						sizes={'250px'}
						alt="" />
					<p class="pl-xxs border-l-2 text-gray-600 text-xs mt-xs">Jon Klein</p>
				</div>

				<div class="w-[110px] xs:w-[150px] shrink-0">
					<Picture
						imageClass="rounded-sm"
						meta={images.red_brick_angels_may_2024.maria_tiimus.src}
						sizes={'250px'}
						alt="" />
					<p class="pl-xxs border-l-2 text-gray-600 text-xs mt-xs">Maria Tiimus</p>
				</div>
			</div> -->

			<div class="flex gap-sm my-xs">
				<div class="w-[150px] xs:w-[190px] shrink-0">
					<Picture
						imageClass="rounded-sm"
						meta={images.red_brick_angels_may_2024.final_song.src}
						sizes={'250px'}
						alt="" />
					<p class="pl-xxs border-l-2 text-gray-600 text-xs mt-xs">The final song of the night!</p>
				</div>

				<div class="w-[110px] xs:w-[150px] shrink-0">
					<Picture
						imageClass="rounded-sm"
						meta={images.red_brick_angels_may_2024.tim_gardner.src}
						sizes={'250px'}
						alt="" />
					<p class="pl-xxs border-l-2 text-gray-600 text-xs mt-xs">Tim Gardner</p>
				</div>
			</div>
		</TextContainer>
	</div>
</Container>
