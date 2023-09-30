<script lang="ts" context="module">
	import { images } from '$lib/assets';
	import { Icon, PageLayout, Picture, YoutubeVideoPopup } from '$lib/components';
</script>

<script lang="ts">
	import Tooltip from '$lib/components/tooltip.svelte';

	let klfVideoIsOpen = false;
	let orchestreVideoIsOpen = false;
	let duduVideoIsOpen = false;
</script>

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
			<button
				class="inline-block text-base translate-y-[1px] text-my-black-700"
				on:click={() => (klfVideoIsOpen = true)}
				id="klf-video"
				type="button"><Icon.Play weight="fill" /></button
			><Tooltip text="KLF is gonna rock ya..." triggeredById="klf-video" />,
			<span class="font-medium italic text-lg uppercase">Orchestre Jazira</span>
			<button
				class="inline-block text-base translate-y-[1px] text-my-black-700"
				on:click={() => (orchestreVideoIsOpen = true)}
				id="orchestre-video"
				type="button"><Icon.Play weight="fill" /></button
			><Tooltip text="have a listen..." triggeredById="orchestre-video" />
			and
			<span class="font-medium italic text-lg uppercase">Dudu Pukwana</span>
			<button
				class="inline-block text-base translate-y-[1px] text-my-black-700"
				on:click={() => (duduVideoIsOpen = true)}
				id="dudu-video"
				type="button"><Icon.Play weight="fill" /></button
			>.<Tooltip text="have a listen..." triggeredById="dudu-video" />
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
	</div>

	<div class="flex gap-lg justify-between font-sans2 font-thin tracking-widest">
		<div class="flex flex-col gap-xl">
			<div>
				<h2 class="uppercase italic">contacts</h2>

				<div class="mt-xs">
					<a class="font-medium" href="mailto:rachel@raiemusic.com" target="_blank"
						>rachel@raiemusic.com</a
					>
				</div>
			</div>

			<div>
				<h2 class="uppercase italic">social media</h2>

				<div class="flex text-xl items-center gap-sm mt-xs">
					<a class="rounded-full p-xxs" href="." id="links_panel-facebook">
						<Icon.Facebook weight="fill" />
					</a>

					<a class="rounded-full p-xxs" href="." id="links_panel-insta">
						<Icon.Instagram weight="fill" />
					</a>
				</div>
			</div>

			<div>
				<h2 class="uppercase italic">Listen & Buy</h2>

				<div class="flex text-xl items-center gap-sm mt-xs">
					<a class="rounded-full p-xxs" href="." id="links_panel-facebook">
						<Icon.Soundcloud weight="fill" />
					</a>

					<a class="rounded-full p-xxs" href="." id="links_panel-insta">
						<Icon.Spotify weight="fill" />
					</a>

					<a class="rounded-full p-xxs" href="." id="links_panel-insta">
						<Icon.Youtube weight="fill" />
					</a>
					<a class="rounded-full p-xxs" href="." id="links_panel-insta">
						<Icon.Bandcamp weight="fill" />
					</a>

					<a class="rounded-full p-xxs" href="." id="links_panel-insta">
						<Icon.Itunes weight="fill" />
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
