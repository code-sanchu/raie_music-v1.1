<script lang="ts" context="module">
	import { PageLayout, Icon } from '$lib/components';
	import { ImageScroller, Track } from '$lib/components/+pages/album';
	import { images } from '$lib/static';
	import Gallery from './gallery.svelte';
	import { songs } from '$lib/data';
</script>

<script lang="ts">
	let imageShowIsOpen = false;

	let imageShowIndex = 0;

	const onClickImage = (index: number) => {
		imageShowIndex = index;
		imageShowIsOpen = true;
	};

	const imageSrcs = [
		images.albums.earthbound.album_cover,
		images.albums.earthbound['glam_pic-by_pete_pinto'],
		images.albums.earthbound.albany_theatre_13_piece_band,
		images.albums.earthbound['album_promo_shot-by_sara_samsavari'],
		images.albums.earthbound['promo-by_sara_samsavari']
	];
</script>

<PageLayout.VerticalSpacing />

<PageLayout.HorizontalSpacing>
	<div class="flex justify-center">
		<div class="max-w-[768px] w-full">
			<h1 class="text-3xl mt-md text-site-2-red lg:text-4xl">Earthbound</h1>

			<p class="mt-xs text-my-black-600">2016</p>

			<ImageScroller.Container>
				{#each imageSrcs as imageSrc, i}
					<ImageScroller.Image src={imageSrc} onClick={() => onClickImage(i)} />
				{/each}
			</ImageScroller.Container>

			<div class="prose text-my-black">
				<p class="mt-xs">
					Earthbound is an Indie/Folk Ballad about human determination and resourcefulness.
				</p>
				<p class="mt-xs">
					Raie journeyed to Goa in India with friends and Earthbound was inspired by seeing the
					incredible resourcefulness of the people.
				</p>
			</div>

			<div class="mt-md">
				<div class="flex items-center gap-sm">
					<p class="text-my-black-500">Buy tracks at</p>

					<div class="flex items-center gap-sm text-my-black-400">
						<a href="."><Icon.Bandcamp /></a>
						<a href="."><Icon.Apple /></a>
					</div>
				</div>
			</div>

			<div class="mt-lg">
				<h3 class="text-my-black-600">Tracklist</h3>

				<Track
					length="03:37"
					name="Wax n Wane"
					number="01"
					youtubeVideoSrc="https://www.youtube.com/embed/-8pC2h8qap0?si=6O6L3lgnOznP-7Qj"
					lyrics={songs.earthbound.wax_n_wane.lyrics}
				>
					<div class="mt-md" slot="read-more">
						<p>Wax 'n Wane is an Alternative Indie Ballad about acceptance of life and hardship.</p>
						<p>
							As a young single parent, I often sat at my window in the evening and Wax 'n Wane
							describes two characters I usually saw on their separate ways home; I felt I could
							relate to their loneliness and their struggles.
						</p>
						<p class="">
							<span class="text-my-black-400 inline-block mb-xs">Credits</span><br />
							© Original version Rachel Bennett, Dan Cochrane, Jem Clark 2007<br />
							© Re-arranged version Rachel Bennett, Wes Maebe 2011<br />
							Produced: Wes Maebe, Rachel Bennett 2011<br />
							Mixed and Mastered: Wes Maebe @ Sonic Cuisine 2011<br />
							Track recorded @ Inspired Studios & Sonic Cuisine
						</p>
						<p class="">
							Drums Matt Earnshaw / Guitars Elliott Randall / Double Bass Mike Comber / Percussion
							Hugh Wilkinson / Vibraphone Hugh Wilkinson / Horns Mark Chandler / Background Vocals
							Lynieve Austin, Nazarene / Lead Vocal Rachel Bennett.
						</p>
						<p class="text-sm border-b pb-md">PRS CODE: 372291AN</p>
					</div>
				</Track>

				<Track
					length="03:20"
					name="Talkin Bout You"
					number="02"
					lyrics={songs.earthbound.talkin_bout_you.lyrics}
				>
					<div class="mt-md" slot="read-more">
						<p>
							Talkin' Bout You is a Country Ballad about love and devotion when the 'chips are
							down'.
						</p>
						<p>
							Talkin' Bout You is about my son's support during our early lives together and it's a
							description of his uncanny perception, his support, his honesty and his wisdom.
						</p>
						<p class="">
							<span class="text-my-black-400 inline-block mb-xs">Credits</span><br />
							© Original version Rachel Bennett, peter J Pinto 2007<br />
							© Re-arranged version Rachel Bennett, Peter J Pinto, Wes Maebe 2011<br />
							Produced: Wes Maebe, Rachel Bennett 2011<br />
							Mixed and Mastered: Wes Maebe @ Sonic Cuisine 2011<br />
							Track recorded @ Inspired Studios & Sonic Cuisine
						</p>
						<p class="">
							Drums Matt Earnshaw / Guitars & Bass Peter J Pinto / Background Vocals Lynieve Austin,
							Nazarene, Peter J Pinto / Lead Vocal Rachel Bennett.
						</p>
						<p class="text-sm border-b pb-md">PRS CODE: 372333AR</p>
					</div>
				</Track>
			</div>
		</div>
	</div>
</PageLayout.HorizontalSpacing>

<Gallery bind:imageShowIndex bind:imageShowIsOpen {imageSrcs} />
