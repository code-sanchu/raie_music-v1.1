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
				Red Brick Angel is Raie’s third album project with the award winning Wesonator!
			</p>
			<p class="">
				Recorded in six days at Galaxy studios in Belgium, the ‘live and real’ feel of the tracks is
				distinctive and inimitably superb! Raie is joined again by Christiano Tortoioli on electric
				bass, Chris Bell on drums as well as Jon Klein and Elliot Randal who both feature on guitar
				solo outros for the tracks Free Now and Convoy of Tears respectively.
			</p>
			<p>
				The wonderful Jon Dunn headed up the musical direction for strings and most of the song
				arrangements as well as playing acoustic and electric guitars … Louis Bell brought a
				beautiful array of electric guitar effects and superb slide then we were blessed with Tim
				Gardner who came off tour with Ry X to join us for piano, keys and second violin; Altea
				Narici’s cello is exquisite as is Maria Timus’ searingly beautiful violin work.
			</p>
			<p>
				In London at GMS (where This Music Thing was recorded) we put down the background vocals
				with Nazarene and Nathan Devonte who have worked with Raie for over a decade now; they were
				joined by Emily MacLean, Ethan Fleming and Damien James.
			</p>
			<p>
				Jill Cumberbatch added Mandolin to Crystal Girl and Mojo Wellington put some keys on This
				Thing Called Love.
			</p>
			<p>
				Thanks to Sean Woodlock as studio assistant/manager for the day, our visit to GMS was
				seamless and totally fruitful!
			</p>
		</div>
	</div>
</div>

<ImageGalleryModal
	bind:currentIndex={imageShowIndex}
	bind:isOpen={imageShowIsOpen}
	images={albumImages} />
