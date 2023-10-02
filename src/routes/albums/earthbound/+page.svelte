<script lang="ts" context="module">
	import { images } from '$lib/assets';
	import { Icon, Images, PageLayout } from '$lib/components';
	import { ImageScroller, Track } from '$lib/components/+pages/album';
	import { songsArr } from '$lib/data';
	import Gallery from './gallery.svelte';

	const albumImages = [
		images.albums.earthbound.album_cover,
		images.albums.earthbound['glam_pic-by_pete_pinto'],
		images.albums.earthbound.albany_theatre_13_piece_band,
		images.albums.earthbound['album_promo_shot-by_sara_samsavari'],
		images.albums.earthbound['promo-by_sara_samsavari']
	];

	// todo: max wdth video + image. albums data. links.
	// todo: betetr image gallery - click outside actual image to close.
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
			<h1 class="text-3xl lg:text-4xl tracking-widest">Earthbound</h1>

			<p class="text-my-black-300 tracking-wide italic">October 2016</p>
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
				Earthbound is an Indie/Folk Ballad about human determination and resourcefulness.
			</p>
			<p class="">
				Raie journeyed to Goa in India with friends and Earthbound was inspired by seeing the
				incredible resourcefulness of the people.
			</p>
		</div>

		<div class="mt-xl">
			<div class="flex items-center gap-md text-my-black-400">
				<p class="tracking-wider">Buy tracks at</p>

				<div class="flex items-center gap-md text-my-black-400">
					<a href="."><Icon.Bandcamp weight="thin" /></a>
					<a href="."><Icon.Apple weight="thin" /></a>
				</div>
			</div>
		</div>

		<div class="mt-xl">
			<h3 class="italic tracking-widest text-sm">Tracklist</h3>

			<div class="flex flex-col items-stretch gap-xs mt-md">
				{#each songsArr.earthbound as track, i}
					<Track data={track} />
				{/each}
			</div>
		</div>

		<div class="flex items-center gap-md mt-2xl">
			<p class="text-my-black-400 tracking-wider">Also listen on</p>

			<div class="flex items-center gap-md text-my-black-400">
				<a href="."><Icon.Spotify weight="light" /></a>
				<a href="."><Icon.Itunes weight="light" /></a>
			</div>
		</div>
	</div>
</div>

<Gallery bind:imageShowIndex bind:imageShowIsOpen images={albumImages} />
