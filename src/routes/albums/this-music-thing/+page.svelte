<script lang="ts" context="module">
	import { images } from '$lib/assets';
	import { Images, PageLayout, ImageGalleryModal, Icon, Tooltip } from '$lib/components';
	import { ImageScroller, Track } from '$lib/components/+pages/album';
	import { songsArr } from '$lib/data';

	const albumImages = [
		images.albums.this_music_thing.album_cover,
		images.albums.this_music_thing.band_at_wes_place,
		images.albums.this_music_thing.raie_by_bam,
		images.albums.this_music_thing.band_outside_goldsmiths_studios,
		images.albums.this_music_thing.living_room_gig,
		images.albums.this_music_thing.raie_by_bim,
		images.albums.this_music_thing.studio_dog_and_others
	];
</script>

<script lang="ts">
	let imageShowIsOpen = false;

	let imageShowIndex = 0;

	const onClickImage = (index: number) => {
		imageShowIndex = index;
		imageShowIsOpen = true;
	};
</script>

<PageLayout.VerticalSpacing sizing="1.5" />

<div class="flex justify-center">
	<div class="max-w-[900px]">
		<Images.BrickBg.HorizontalThree />

		<PageLayout.VerticalSpacing sizing="2/3" />

		<div class="flex gap-xl items-end">
			<h1 class="text-3xl lg:text-4xl tracking-widest">This Music Thing</h1>

			<p class="text-my-black-300 tracking-wide italic">February 13, 2020</p>
		</div>

		<div class="mt-xl">
			<ImageScroller.Container>
				{#each albumImages as image, i}
					<ImageScroller.Image data={image} onClick={() => onClickImage(i)} />
				{/each}
			</ImageScroller.Container>
		</div>

		<div class="prose mt-xl text-my-black tracking-wider">
			<p class="">
				This Music Thing is a beautiful album of storytelling in the Country Americana music style.
			</p>
			<p class="">
				It's produced by Wes Maebe and features artists such as Chris Bell (Specimen, Gene Loves
				Jezebel, Spear Of Destiny, Thompson Twins, Hugh Cornwell) and Jon Klein (Specimen, The
				Banshees, Sinead O'Connor)... and a host of other wonderful musicians.
			</p>
		</div>

		<div class="flex items-center gap-md text-my-black-400 mt-xl">
			<p class="tracking-wider">Buy tracks at</p>

			<div class="flex items-center gap-md text-my-black-400">
				<a
					href="https://raie.bandcamp.com/album/this-music-thing"
					target="_blank"
					id="album-bandcamp"><Icon.Bandcamp weight="thin" /></a
				>
				<Tooltip text="Bandcamp" triggeredById="album-bandcamp" />

				<a
					href="https://music.apple.com/us/album/this-music-thing/1506845666"
					target="_blank"
					id="album-itunes"><Icon.Itunes weight="thin" /></a
				>
				<Tooltip text="Itunes" triggeredById="album-itunes" />
			</div>
		</div>

		<div class="mt-xl">
			<h3 class="italic tracking-widest text-sm">Tracklist</h3>

			<div class="flex flex-col items-stretch gap-xs mt-md">
				{#each songsArr.this_music_thing as track, i}
					<Track data={track} noVideos />
				{/each}
			</div>
		</div>

		<div class="flex items-center gap-md mt-2xl">
			<p class="text-my-black-400 tracking-wider">Also listen on</p>

			<div class="flex items-center gap-md text-my-black-400">
				<a
					href="https://open.spotify.com/album/45Wzle2Mwc6DDrxLMdFO8Q?si=sMUDIVPaRcqKzho69_YznA&nd=1"
					target="_blank"
					id="album-spotify"><Icon.Spotify weight="light" /></a
				>
				<Tooltip text="Spotify" triggeredById="album-spotify" />

				<a
					href="https://soundcloud.com/user966280536/sets/this-music-thing"
					target="_blank"
					id="album-soundcloud"><Icon.Soundcloud weight="light" /></a
				>
				<Tooltip text="Soundcloud" triggeredById="album-soundcloud" />

				<a
					href="https://music.youtube.com/playlist?list=OLAK5uy_mVL3pbMKWEx7S2mP3WGnf7-Yg2TS1Hqlg"
					target="_blank"
					id="album-youtube"><Icon.Youtube weight="light" /></a
				>
				<Tooltip text="Youtube Music" triggeredById="album-youtube" />
			</div>
		</div>
	</div>
</div>

<ImageGalleryModal
	bind:currentIndex={imageShowIndex}
	bind:isOpen={imageShowIsOpen}
	images={albumImages}
/>
