<script lang="ts" context="module">
	import { onMount } from 'svelte';
	import { fade } from 'svelte/transition';

	import { updateGlobalFlags } from '$lib/stores';
	import { images } from '$lib/assets';
	import { songsArr } from '$lib/data';
	import { ImageGalleryModal, Images, PageLayout } from '$lib/components';
	import { ImageScroller, Track } from '$lib/components/+pages/album';
	import { Link } from '$lib/components/prose';

	const albumImages = [
		images.albums.red_brick_angels.band_hope_and_anchor,
		images.galaxy['full-band'],
		images.albums.red_brick_angels.album_sleeve
	];
</script>

<script lang="ts">
	let mounted = false;

	onMount(() => {
		updateGlobalFlags.firstPageIsReady();

		mounted = true;
	});

	let imageModalIsOpen = false;

	let imageModalCurrentIndex = 0;

	const onClickImage = (index: number) => {
		imageModalCurrentIndex = index;
		imageModalIsOpen = true;
	};

	let tracksContainer: HTMLDivElement;

	$: isTracksOverflow = false;

	$: {
		if (tracksContainer) {
			const scrollWidth = tracksContainer.scrollWidth;
			const offsetWidth = tracksContainer.offsetWidth;

			isTracksOverflow = scrollWidth > offsetWidth;
		}
	}

	let userHasScrolledTracks = false;
</script>

<PageLayout.Body>
	<PageLayout.VerticalSpacing sizing="1.5" />

	{#if mounted}
		<div class="flex justify-center" in:fade>
			<div class="max-w-[900px]">
				<Images.BrickBg.HorizontalThree />

				<PageLayout.VerticalSpacing sizing="2/3" />

				<div class="flex gap-x-xl flex-col sm:flex-row gap-y-sm sm:items-end">
					<h1 class="text-3xl lg:text-4xl tracking-widest">Red Brick Angel</h1>

					<p class="text-my-black-300 tracking-wide italic">November 8 2023</p>
				</div>

				<div class="mt-xl">
					<ImageScroller.Container>
						{#each albumImages as image, i}
							<ImageScroller.Image data={image} onClick={() => onClickImage(i)} />
						{/each}
					</ImageScroller.Container>
				</div>

				<div class="prose mt-xl text-my-black tracking-wider max-w-[650px]">
					<p class="">
						Red Brick Angel is Raie’s third album project with the award winning Wesonator!
					</p>
					<p class="">
						Recorded in six days at Galaxy studios in Belgium, the ‘live and real’ feel of the
						tracks is distinctive and inimitably superb! Raie is joined again by <Link
							href="https://www.linkedin.com/in/cristiano-tortoioli-b2b355294/"
							>Christiano Tortoioli</Link> on electric bass, <Link
							href="https://www.discogs.com/artist/532116-Chris-Bell-3">Chris Bell</Link>
						on drums as well as <Link href="https://en.wikipedia.org/wiki/Jon_Klein_(musician)"
							>Jon Klein</Link> and <Link href="https://en.wikipedia.org/wiki/Elliott_Randall"
							>Elliot Randal</Link> who both feature on guitar solo outros for the tracks Free Now and
						Convoy of Tears respectively.
					</p>
					<p>
						The wonderful Jon Dunn headed up the musical direction for strings and most of the song
						arrangements as well as playing acoustic and electric guitars … Louis Bell brought a
						beautiful array of electric guitar effects and superb slide then we were blessed with
						Tim Gardner who came off tour with Ry X to join us for piano, keys and second violin;
						Altea Narici’s cello is exquisite as is Maria Timus’ searingly beautiful violin work.
					</p>
					<p>
						In London at GMS (where This Music Thing was recorded) we put down the background vocals
						with Nazarene and Nathan Devonte who have worked with Raie for over a decade now; they
						were joined by Emily MacLean, Ethan Fleming and Damien James.
					</p>
					<p>
						Jill Cumberbatch added Mandolin to Crystal Girl and Mojo Wellington put some keys on
						This Thing Called Love.
					</p>
					<p>
						Thanks to Sean Woodlock as studio assistant/manager for the day, our visit to GMS was
						seamless and totally fruitful!
					</p>
				</div>

				<div class="mt-xl">
					<h3 class="italic tracking-widest text-sm">Tracklist</h3>

					<div
						class="relative flex flex-col gap-sm mt-md overflow-x-auto max-w-[calc(100vw-2rem)] pb-lg md:scrollbar-thin md:scrollbar-track-my-black-50/50 md:scrollbar-thumb-my-black-100 md:hover:scrollbar-thumb-my-black-200"
						bind:this={tracksContainer}
						on:scroll={(e) => {
							const scrollLeft = e.currentTarget.scrollLeft;

							if (scrollLeft > 20) {
								userHasScrolledTracks = true;
							}
						}}>
						{#each songsArr['red_brick_angel'] as track}
							<Track data={track} minWidth={480} noVideos noLyrics />
						{/each}
					</div>

					{#if isTracksOverflow && !userHasScrolledTracks}
						<div class="flex justify-end" transition:fade>
							<div class="flex items-center gap-xs text-my-black-400 text-sm italic tracking-wide">
								<p>scroll right for more...</p>
							</div>
						</div>
					{/if}
				</div>

				<PageLayout.VerticalSpacing sizing="2/3" />

				<h3 class="text-my-black-500 tracking-widest text-xs uppercase">Credits</h3>

				<div class="prose mt-sm">
					Produced by Wes &lsquo;Wesonator&rsquo; Maebe.<br />
					Mixed and Mastered by Wes Maebe at The Wheelhouse.<br />
					Recorded and Engineered by Wes Maebe at Galaxy Studios Belgium and at GMS London.<br />
					Peter Bennett&rsquo;s guitar recorded by Phil Riley at Life of Riley Studio NZ.<br />
					Album Musical Director Jon Dunn.<br />
					Copyright 2023 Raie Music.
				</div>
			</div>
		</div>
	{/if}
</PageLayout.Body>

<ImageGalleryModal
	bind:currentIndex={imageModalCurrentIndex}
	bind:isOpen={imageModalIsOpen}
	images={albumImages} />
