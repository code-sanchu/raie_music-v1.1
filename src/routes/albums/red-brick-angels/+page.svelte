<script lang="ts" context="module">
	import { images } from '$lib/assets';
	import { ImageGalleryModal, Images, PageLayout } from '$lib/components';
	import { ImageScroller } from '$lib/components/+pages/album';

	const albumImages = [
		images.albums.red_brick_angels.band_hope_and_anchor,
		images.galaxy['full-band']
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
			<h1 class="text-3xl lg:text-4xl tracking-widest">Red Brick Angels</h1>

			<p class="text-my-black-300 tracking-wide italic">November 8 2023</p>
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
				We release Raie’s ‘Red Brick Angels’ album on November 8th ’23 at The Camden Club, 72 Chalk
				Farm Road, London NW1 8AN.
			</p>
			<p class="">
				It’s a beautiful 12 song album played live in an intensive six days with Wes Maebe at the
				helm in Europe’s renowned Galaxy Studios.
			</p>
			<p>
				Much of the early work was rehearsed at Raie’s place in SE London and then we deepened
				rehearsals at Music Rooms London in SE14 – the staff and service there and the equipment are
				all just ‘the bom’ and we were made to feel so welcome! Any musician will tell you that the
				vibe at a rehearsal studio really can impact the success of the time spent there!
			</p>
			<p>
				We tested out some of the songs pre and post Galaxy Studios … see our news page for the mini
				London tour and also all about how we pulled this incredible Red Brick Angels achievement
				together … the story behind the title track Red Brick Angel and news on the upcoming single
				Young Love!!!
			</p>
		</div>
	</div>
</div>

<ImageGalleryModal
	bind:currentIndex={imageShowIndex}
	bind:isOpen={imageShowIsOpen}
	images={albumImages}
/>
