<script lang="ts" context="module">
	import { PageLayout, Icon } from '$lib/components';
	import { ImageScroller, Track } from '$lib/components/+pages/album';
	import { images } from '$lib/data';
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

	const albumImages = [
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
		<div class="max-w-[850px]">
			<div class="flex">
				<img
					class="w-[400px] h-[20px] overflow-hidden opacity-80"
					src="/images/brick_bg.png"
					alt="background"
				/>
				<img
					class="w-[400px] h-[20px] overflow-hidden opacity-80"
					src="/images/brick_bg.png"
					alt="background"
				/>
				<img
					class="w-[400px] h-[20px] overflow-hidden opacity-80"
					src="/images/brick_bg.png"
					alt="background"
				/>
			</div>

			<div class="flex gap-xl items-end mt-md">
				<h1 class="text-3xl mt-md text-site-2-red lg:text-4xl font-sans2 font-thin tracking-widest">
					Earthbound
				</h1>
				<p class="mt-sm text-my-black-300 tracking-wide">2016</p>
			</div>
		</div>
	</div>

	<div class="flex justify-center">
		<div class="max-w-[850px] w-full">
			<div class="mt-xl">
				<ImageScroller.Container>
					{#each albumImages as image, i}
						<ImageScroller.Image data={image} onClick={() => onClickImage(i)} />
					{/each}
				</ImageScroller.Container>
			</div>

			<div class="prose mt-xl text-my-black">
				<p class="">
					Earthbound is an Indie/Folk Ballad about human determination and resourcefulness.
				</p>
				<p class="mt-xs">
					Raie journeyed to Goa in India with friends and Earthbound was inspired by seeing the
					incredible resourcefulness of the people.
				</p>
			</div>

			<div class="mt-lg">
				<div class="flex items-center gap-md">
					<p class="text-my-black-600 font-sans2 font-light tracking-wider">Buy tracks at</p>

					<div class="flex items-center gap-md text-my-black-400">
						<a href="."><Icon.Bandcamp weight="light" /></a>
						<a href="."><Icon.Apple weight="light" /></a>
					</div>
				</div>
			</div>

			<div class="mt-lg">
				<h3 class="text-my-black-600">Tracklist</h3>

				<Track
					length={songs.earthbound.wax_n_wane.length}
					name={songs.earthbound.wax_n_wane.name}
					number={songs.earthbound.wax_n_wane.number}
					youtubeVideoSrc={songs.earthbound.wax_n_wane.youtubeEmbed}
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
					length={songs.earthbound.talkin_bout_you.length}
					name={songs.earthbound.talkin_bout_you.name}
					number={songs.earthbound.talkin_bout_you.number}
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

				<Track
					length={songs.earthbound.blood.length}
					name={songs.earthbound.blood.name}
					number={songs.earthbound.blood.number}
					lyrics={songs.earthbound.blood.lyrics}
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

				<Track
					length={songs.earthbound.katyas_song.length}
					name={songs.earthbound.katyas_song.name}
					number={songs.earthbound.katyas_song.number}
					lyrics={songs.earthbound.katyas_song.lyrics}
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

				<Track
					length={songs.earthbound.earthbound.length}
					name={songs.earthbound.earthbound.name}
					number={songs.earthbound.earthbound.number}
					lyrics={songs.earthbound.earthbound.lyrics}
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

				<Track
					length={songs.earthbound.goliath.length}
					name={songs.earthbound.goliath.name}
					number={songs.earthbound.goliath.number}
					lyrics={songs.earthbound.goliath.lyrics}
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

			<div class="flex items-center gap-md mt-2xl">
				<p class="text-my-black-400 font-sans2 font-light tracking-wider">Also listen on</p>

				<div class="flex items-center gap-md text-my-black-400">
					<a href="."><Icon.Spotify weight="light" /></a>
					<a href="."><Icon.Itunes weight="light" /></a>
				</div>
			</div>
		</div>
	</div>
</PageLayout.HorizontalSpacing>

<Gallery
	bind:imageShowIndex
	bind:imageShowIsOpen
	imageSrcs={albumImages.map((image) => image.src)}
/>
