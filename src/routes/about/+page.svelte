<script lang="ts" context="module">
	import { images } from '$lib/assets';
	import { Icon, PageLayout, Picture } from '$lib/components';
	import YoutubeVideoModal from '$lib/components/+pages/album/track/youtube-video-modal.svelte';

	// may not be necessary - she initialy wasn't too concerned.
	// could have youtube popup for well known bands raie's been a part of.
</script>

<PageLayout.VerticalSpacing />

<PageLayout.HorizontalSpacing>
	<PageLayout.VerticalSpacing sizing="3/4" />

	<div
		class="relative prose prose-lg max-w-full leading-relaxed text-2xl font-sans2 font-thin tracking-wide"
	>
		<p>
			<span class=" uppercase font-sans2 font-thin tracking-widest text-xs italic mr-lg"
				>About Raie</span
			>
			<b>Raie</b> was born in Scotland and came to London when she was 17 years of age. Raie focused
			on being a young Mum to her son Ben before training at drama school in her late twenties; she
			moved into a music career writing for theatre and dance and also sang background vocals for a
			number of bands including the
			<span class="font-medium italic text-lg">KLF</span>
			<span class="inline-block text-base translate-y-[1px] text-my-black-700"
				><Icon.Play weight="fill" /></span
			>,
			<span class="font-medium italic text-lg uppercase">Orchestre Jazira</span>
			<span class="inline-block text-base translate-y-[1px] text-my-black-700"
				><Icon.Play weight="fill" /></span
			>
			and
			<span class="font-medium italic text-lg uppercase">Dudu Pukwana</span>
			<span class="inline-block text-base translate-y-[1px] text-my-black-700"
				><Icon.Play weight="fill" /></span
			>.
		</p>

		<p>
			<span class=" uppercase font-sans2 font-thin tracking-widest text-xs italic mr-lg"
				>Albums</span
			>
			Raie's first album - This Music Thing - was 'birthed' at GMS studio in SE London with Wes at the
			helm - engineering and producing the full album; Wes brought in a host of wonderful players including
			Jon Klein (Specimen, Siouxie and the Banshees, Sinead O'Connor) and Chris Bell (Specimen, Thompson
			Twins, Hugh Cornwell).
		</p>

		<PageLayout.VerticalSpacing sizing="3/4" />

		<!-- <h3 class="italic font-sans2 text-sm font-thin text-my-black-900 tracking-widest mt-md">
				Contacts
			</h3> -->
	</div>

	<div class="flex gap-lg justify-between font-sans2 font-thin tracking-widest">
		<div class="flex flex-col gap-xl">
			<div>
				<h2 class="uppercase italic">contacts</h2>

				<div class="mt-xs grid grid-cols-2">
					<div>
						<p>Email</p>
					</div>
					<div>
						<a class="font-medium" href="mailto:rachel@raiemusic.com" target="_blank"
							>rachel@raiemusic.com</a
						>
					</div>
				</div>
			</div>

			<div>
				<h2 class="uppercase italic">social media</h2>

				<div class="flex text-xl items-center gap-sm mt-xs">
					<a class="rounded-full p-xxs" href="." id="links_panel-facebook">
						<Icon.Facebook weight="light" />
					</a>

					<a class="rounded-full p-xxs" href="." id="links_panel-insta">
						<Icon.Instagram weight="light" />
					</a>
				</div>
			</div>

			<div>
				<h2 class="uppercase italic">Listen & Buy</h2>

				<div class="flex text-xl items-center gap-sm mt-xs">
					<a class="rounded-full p-xxs" href="." id="links_panel-facebook">
						<Icon.Soundcloud weight="light" />
					</a>

					<a class="rounded-full p-xxs" href="." id="links_panel-insta">
						<Icon.Spotify weight="light" />
					</a>

					<a class="rounded-full p-xxs" href="." id="links_panel-insta">
						<Icon.Youtube weight="light" />
					</a>
					<a class="rounded-full p-xxs" href="." id="links_panel-insta">
						<Icon.Bandcamp weight="light" />
					</a>

					<a class="rounded-full p-xxs" href="." id="links_panel-insta">
						<Icon.Itunes weight="light" />
					</a>
				</div>
			</div>
		</div>

		<div class="flex gap-lg justify-end">
			<Picture
				imageClass="w-[200px] rounded-sm"
				pictureClass="grayscale"
				meta={images.raie_as_child.src}
				sizes={'200px'}
				loading="eager"
				alt=""
			/>

			<!-- 			<Picture
				imageClass="w-[16px] h-[250px] "
				pictureClass="grayscale opacity-80 "
				meta={images.brick_bg.src}
				sizes={'200px'}
				loading="eager"
				alt=""
			/> -->

			<div class="flex flex-col items-end gap-lg">
				<Picture
					imageClass="w-[250px] rounded-sm"
					pictureClass="grayscale"
					meta={images.galaxy['full-band'].src}
					sizes={'200px'}
					loading="eager"
					alt=""
				/>

				<!-- 				<Picture
					imageClass="w-[250px] h-[16px]"
					pictureClass="grayscale opacity-80 "
					meta={images.brick_bg.src}
					sizes={'200px'}
					loading="eager"
					alt=""
				/> -->

				<Picture
					imageClass="w-[250px] rounded-sm"
					pictureClass="grayscale"
					meta={images.galaxy['raie-lead_vocal-young_love'].src}
					sizes={'200px'}
					loading="eager"
					alt=""
				/>
			</div>
		</div>
	</div>

	<PageLayout.VerticalSpacing />
</PageLayout.HorizontalSpacing>
