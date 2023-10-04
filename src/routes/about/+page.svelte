<script lang="ts" context="module">
	import { images } from '$lib/assets';
	import { Icon, PageLayout, Picture, Tooltip, YoutubeVideoPopup } from '$lib/components';
	import { external_links } from '$lib/data';
	import { musicPlayerStore, type MusicPlayer, updateMusicPlayer } from '$lib/stores';
</script>

<script lang="ts">
	let musicPlayer: MusicPlayer;

	musicPlayerStore.subscribe((playerStore) => {
		musicPlayer = playerStore;
	});

	let klfVideoIsOpen = false;
	let orchestreVideoIsOpen = false;
	let duduVideoIsOpen = false;
</script>

<PageLayout.VerticalSpacing sizing="1.5" />

<div class="relative prose max-w-full leading-relaxed text-lg sm:text-2xl tracking-wide">
	<p>
		<span class="uppercase tracking-widest text-xs italic mr-lg">About Raie</span>
		<span class="font-medium">Raie</span> was born in Scotland and came to London when she was 17
		years of age. Raie focused on being a young Mum to her son Ben before training at drama school
		in her late twenties; she moved into a music career writing for theatre and dance and also sang
		background vocals for a number of bands including the
		<span class="italic text-lg">KLF</span>
		<button
			class="inline-block text-base translate-y-[1px] text-my-black-600"
			on:click={() => {
				if (!musicPlayer.paused) {
					updateMusicPlayer.pause();
				}
				klfVideoIsOpen = true;
			}}
			id="klf-video"
			type="button"><Icon.Play weight="fill" /></button
		><Tooltip text="KLF is gonna rock ya..." triggeredById="klf-video" />,
		<span class="italic text-lg uppercase">Orchestre Jazira</span>
		<button
			class="inline-block text-base translate-y-[1px] text-my-black-600"
			on:click={() => {
				if (!musicPlayer.paused) {
					updateMusicPlayer.pause();
				}
				orchestreVideoIsOpen = true;
			}}
			id="orchestre-video"
			type="button"><Icon.Play weight="fill" /></button
		><Tooltip text="have a listen..." triggeredById="orchestre-video" />
		and
		<span class="italic text-lg uppercase">Dudu Pukwana</span>
		<button
			class="inline-block text-base translate-y-[1px] text-my-black-600"
			on:click={() => {
				if (!musicPlayer.paused) {
					updateMusicPlayer.pause();
				}
				duduVideoIsOpen = true;
			}}
			id="dudu-video"
			type="button"><Icon.Play weight="fill" /></button
		>.<Tooltip text="have a listen..." triggeredById="dudu-video" />
	</p>

	<p>
		<span class=" uppercase tracking-widest text-xs italic mr-lg">Albums</span>
		Raie's first album - This Music Thing - was 'birthed' at GMS studio in SE London with Wes at the
		helm - engineering and producing the full album; Wes brought in a host of wonderful players including
		Jon Klein (Specimen, Siouxie and the Banshees, Sinead O'Connor) and Chris Bell (Specimen, Thompson
		Twins, Hugh Cornwell).
	</p>

	<PageLayout.VerticalSpacing sizing="3/4" />
</div>

<div
	class="flex flex-col-reverse sm:flex-row gap-lg gap-y-[4.5rem] justify-between tracking-widest"
>
	<div class="flex flex-col gap-xl">
		<div>
			<h2 class="uppercase italic">contacts</h2>

			<div class="mt-xs">
				<a class="block font-medium" href="mailto:rachel@raiemusic.com" target="_blank"
					>rachel@raiemusic.com</a
				>
				<p class="font-medium text-sm mt-xs">07949 876 703</p>
			</div>
		</div>

		<div>
			<h2 class="uppercase italic">social media</h2>

			<div class="flex text-xl items-center gap-sm mt-xs">
				<a class="rounded-full p-xxs" href={external_links.follow.facebook} id="about-facebook">
					<Icon.Facebook weight="fill" />
				</a>
				<Tooltip text="Facebook" triggeredById="about-facebook" />

				<a
					class="rounded-full p-xxs"
					href={external_links.follow.instagram}
					target="_blank"
					id="about-insta"
				>
					<Icon.Instagram weight="fill" />
				</a>
				<Tooltip text="Instagram" triggeredById="about-insta" />
			</div>
		</div>

		<div>
			<h2 class="uppercase italic">Listen & Buy</h2>

			<div class="flex text-xl items-center gap-sm mt-xs">
				<a
					class="rounded-full p-xxs"
					href={external_links.listen.soundcloud}
					target="_blank"
					id="about-soundcloud"
				>
					<Icon.Soundcloud weight="fill" />
				</a>
				<Tooltip text="Soundcloud" triggeredById="about-soundcloud" />

				<a
					class="rounded-full p-xxs"
					href={external_links.listen.spotify}
					target="_blank"
					id="about-spotify"
				>
					<Icon.Spotify weight="fill" />
				</a>
				<Tooltip text="Spotify" triggeredById="about-spotify" />

				<a
					class="rounded-full p-xxs"
					href={external_links.listen.youtube}
					target="_blank"
					id="about-youtube"
				>
					<Icon.Youtube weight="fill" />
				</a>
				<Tooltip text="Youtube" triggeredById="about-youtube" />

				<a
					class="rounded-full p-xxs"
					href={external_links.buy.bandcamp}
					target="_blank"
					id="about-bandcamp"
				>
					<Icon.Bandcamp weight="fill" />
				</a>
				<Tooltip text="Bandcamp" triggeredById="about-bandcamp" />

				<a
					class="rounded-full p-xxs"
					href={external_links.buy.itunes}
					target="_blank"
					id="about-itunes"
				>
					<Icon.Itunes weight="fill" />
				</a>
				<Tooltip text="Itunes" triggeredById="about-itunes" />
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

<YoutubeVideoPopup
	src="https://www.youtube.com/embed/HDsCeC6f0zc?si=5EOP3K4rQM5nUS0v"
	bind:isOpen={klfVideoIsOpen}
/>
<YoutubeVideoPopup
	src="https://www.youtube.com/embed/p-GGcTc8FgM?si=gEx2PpdozaUOFoOh"
	bind:isOpen={orchestreVideoIsOpen}
/>
<YoutubeVideoPopup
	src="https://www.youtube.com/embed/-5prnBpWN6E?si=GI4GhYTbEu-sWCah"
	bind:isOpen={duduVideoIsOpen}
/>
