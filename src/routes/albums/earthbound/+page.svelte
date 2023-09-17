<script lang="ts" context="module">
	import { CaretDown, Headphones, ShoppingCartSimple, Video } from 'phosphor-svelte';

	import { PageLayout } from '$lib/components';
	import { ImageScroller } from '$lib/components/+pages/album';
	import { images } from '$lib/static';
	import Gallery from './gallery.svelte';
</script>

<script lang="ts">
	let imageShowIsOpen = false;

	let imageShowIndex = 0;

	let readMoreElement: HTMLDivElement;
	let readMore = false;
</script>

<PageLayout.VerticalSpacing />

<PageLayout.HorizontalSpacing>
	<div class="flex justify-center">
		<div class="max-w-[768px]">
			<h1 class="text-3xl mt-md text-site-2-red lg:text-4xl">Earthbound</h1>

			<p class="mt-xs text-my-black-600">2016</p>

			<ImageScroller.Container>
				<ImageScroller.Image
					src={images.albums.earthbound.album_cover}
					onClick={() => {
						imageShowIndex = 0;
						imageShowIsOpen = true;
					}}
				/>
				<ImageScroller.Image
					src={images.albums.earthbound['glam_pic-by_pete_pinto']}
					onClick={() => {
						imageShowIndex = 1;
						imageShowIsOpen = true;
					}}
				/>
				<ImageScroller.Image
					src={images.albums.earthbound.albany_theatre_13_piece_band}
					onClick={() => {
						imageShowIndex = 2;
						imageShowIsOpen = true;
					}}
				/>
				<ImageScroller.Image
					src={images.albums.earthbound['album_promo_shot-by_sara_samsavari']}
					onClick={() => {
						imageShowIndex = 3;
						imageShowIsOpen = true;
					}}
				/>
				<ImageScroller.Image
					src={images.albums.earthbound['promo-by_sara_samsavari']}
					onClick={() => {
						imageShowIndex = 4;
						imageShowIsOpen = true;
					}}
				/>
			</ImageScroller.Container>

			<div class="mt-lg flex gap-md">
				<div class="prose text-my-black">
					<p class="mt-xs">
						Earthbound is an Indie/Folk Ballad about human determination and resourcefulness.
					</p>
					<p class="mt-xs">
						Raie journeyed to Goa in India with friends and Earthbound was inspired by seeing the
						incredible resourcefulness of the people.
					</p>
				</div>
			</div>

			<div class="mt-lg">
				<h3 class="text-my-black-600">Tracklist</h3>

				<div class="flex items-center justify-between mt-sm">
					<div class="flex gap-xl items-center">
						<p class="">01.</p>
						<p>Wax 'n Wane</p>
						<p class="text-my-black-400 text-sm flex items-center gap-xs">
							<button on:click={() => (readMore = !readMore)} type="button">read more</button>
							<span class="text-xs text-my-black-300">
								<CaretDown />
							</span>
						</p>
					</div>

					<div class="flex gap-xl items-center">
						<p class="">03:37</p>
						<div class="flex items-center gap-md">
							<p><Video /></p>
							<p><Headphones /></p>
							<p><ShoppingCartSimple /></p>
						</div>
					</div>
				</div>

				<div
					class="prose text-my-black translate-x-0 ease-linear duration-300 overflow-hidden"
					bind:this={readMoreElement}
					style:height={!readMore ? '0px' : `${readMoreElement.scrollHeight}px`}
					style:opacity={!readMore ? '0' : `1`}
				>
					<p class="mt-md">
						Wax 'n Wane is an Alternative Indie Ballad about acceptance of life and hardship.
					</p>
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

				<div class="flex items-center justify-between mt-md">
					<div class="flex gap-xl items-center">
						<p class="">02.</p>
						<p>Talkin Bout You</p>
						<p class="text-my-black-400 text-sm flex items-center gap-xs">
							<span>read more</span>
							<span class="text-xs text-my-black-300">
								<CaretDown />
							</span>
						</p>
					</div>

					<div class="flex gap-xl items-center">
						<p class="">03:20</p>
						<div class="flex items-center gap-md">
							<p><Video /></p>
							<p><Headphones /></p>
							<p><ShoppingCartSimple /></p>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</PageLayout.HorizontalSpacing>

<Gallery bind:imageShowIndex bind:imageShowIsOpen />
