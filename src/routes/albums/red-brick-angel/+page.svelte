<script lang="ts" context="module">
	import { onMount } from 'svelte';

	import { images } from '$lib/assets';
	import { ImageGalleryModal, Images, PageLayout } from '$lib/components';
	import { Link } from '$lib/components/prose';
	import { ImageScroller } from '$lib/components/+pages/album';
	import { updateGlobalFlags } from '$lib/stores';
	import { fade } from 'svelte/transition';

	const albumImages = [
		images.albums.red_brick_angels.band_hope_and_anchor,
		images.galaxy['full-band']
	];
</script>

<script lang="ts">
	let mounted = false;

	onMount(() => {
		updateGlobalFlags.firstPageIsReady();

		mounted = true;
	});

	let imageShowIsOpen = false;

	let imageShowIndex = 0;

	const onClickImage = (index: number) => {
		imageShowIndex = index;
		imageShowIsOpen = true;
	};
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

				<PageLayout.VerticalSpacing sizing="1/3" />

				<Images.BrickBg.HorizontalThree />

				<PageLayout.VerticalSpacing sizing="1/3" />

				<div class="prose text-my-black tracking-wider max-w-[650px]">
					<p>
						Whilst we wait on the mastered album to go live – check out some moments from Raie’s 6
						beautiful days at Galaxy Studios:
					</p>

					<ul>
						<li>
							<Link href="https://www.facebook.com/rachel.bennett.56863/videos/1477803819694223"
								>Maria Timus puts down violin on Crystal Girl – one take!
							</Link>
						</li>

						<li>
							<Link href="https://www.facebook.com/rachel.bennett.56863/videos/600233685497969"
								>Tim Gardner magics another one take keys part for Whisky Song
							</Link>
						</li>

						<li>
							<Link href="https://www.facebook.com/rachel.bennett.56863/videos/611123494271915"
								>A rehearsal for Grey in Galaxy’s beautiful ‘quietest room in the world’
							</Link>
						</li>

						<li>
							<Link href="https://www.facebook.com/rachel.bennett.56863/videos/1421341705302857"
								>The inimitable Louis Bell gets that amazing guitar sound down on Young Love
							</Link>
						</li>
					</ul>
				</div>
			</div>
		</div>
	{/if}
</PageLayout.Body>

<ImageGalleryModal
	bind:currentIndex={imageShowIndex}
	bind:isOpen={imageShowIsOpen}
	images={albumImages} />
