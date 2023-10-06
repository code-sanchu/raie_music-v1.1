<script lang="ts" context="module">
	import { images } from '$lib/assets';
	import { Icon, ImageGalleryModal, Images, PageLayout, Tooltip } from '$lib/components';
	import { ImageScroller } from '$lib/components/+pages/album';
	import { TrackNew } from '$lib/components/+pages/album/track';
	import { songsArr } from '$lib/data';

	const albumImages = [
		images.albums.earthbound.album_cover,
		images.albums.earthbound['glam_pic-by_pete_pinto'],
		images.albums.earthbound.albany_theatre_13_piece_band,
		images.albums.earthbound['album_promo_shot-by_sara_samsavari'],
		images.albums.earthbound['promo-by_sara_samsavari']
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
			<h3 class="italic tracking-widest text-sm">Tracklist</h3>

			<div
				class="flex flex-col gap-sm mt-md !overflow-x-scroll sm:overflow-x-auto max-w-[calc(100vw-2rem)] pb-lg">
				{#each songsArr.earthbound as track}
					<TrackNew data={track} />
				{/each}
			</div>
		</div>

		<div class="flex items-center gap-md mt-lg sm:mt-xl">
			<p class="text-my-black-400 tracking-wider">Also listen on</p>

			<div class="flex items-center gap-md text-my-black-400">
				<a
					href="https://soundcloud.com/raiemusic/sets/earthbound-ep"
					target="_blank"
					id="album-soundcloud"><Icon.Soundcloud weight="light" /></a>
				<Tooltip text="Soundcloud" triggeredById="album-soundcloud" />
			</div>
		</div>
	</div>
</div>

<ImageGalleryModal
	bind:currentIndex={imageShowIndex}
	bind:isOpen={imageShowIsOpen}
	images={albumImages} />
