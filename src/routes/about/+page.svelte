<script lang="ts" context="module">
	import { images } from '$lib/assets';
	import { Icon, PageLayout, Picture, Tooltip, LinkIconSwitch } from '$lib/components';
	import { raie_links_arrs, contacts } from '$lib/data';
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
		<a
			class="text-base text-my-black-400 inline-block"
			href="https://www.youtube.com/watch?v=HDsCeC6f0zc&ab_channel=KLF"
			target="_blank"
			id="klf-video"><Icon.ExternalLink weight="thin" /></a
		><Tooltip text="have a listen..." triggeredById="klf-video" />,
		<span class="italic text-lg uppercase">Orchestre Jazira</span>
		<a
			class="text-base text-my-black-400 inline-block"
			href="https://www.youtube.com/watch?v=u-g5XLttIyw&ab_channel=TheArkive"
			id="orchestre-video"><Icon.ExternalLink weight="thin" /></a
		><Tooltip text="have a listen..." triggeredById="orchestre-video" />
		and
		<span class="italic text-lg uppercase">Dudu Pukwana</span>
		<a
			class="inline-block text-base text-my-black-400"
			href="https://www.youtube.com/watch?v=-5prnBpWN6E&ab_channel=alkis09"
			id="dudu-video"><Icon.ExternalLink weight="thin" /></a
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
	class="flex flex-col-reverse sm:flex-row gap-lg gap-y-[4.5rem] justify-between tracking-widest">
	<div class="flex flex-col gap-xl">
		<div>
			<h2 class="uppercase italic">contacts</h2>

			<div class="mt-xs">
				<a class="block font-medium" href={`mailto:${contacts.email}`} target="_blank"
					>{contacts.email}</a>
				<p class="font-medium text-sm mt-xs">{contacts.phone}</p>
			</div>
		</div>

		<div>
			<h2 class="uppercase italic">social media</h2>

			<div class="flex text-xl items-center gap-sm mt-xs">
				{#each [...raie_links_arrs.follow] as raieLink}
					<a
						class="rounded-full p-xxs"
						href={raieLink.href}
						target="_blank"
						id={`about-${raieLink.id}`}>
						<LinkIconSwitch type={raieLink.id} weight="fill" />
					</a>
					<Tooltip text={raieLink.name} triggeredById={`about-${raieLink.id}`} />
				{/each}
			</div>
		</div>

		<div>
			<h2 class="uppercase italic">Listen & Buy</h2>

			<div class="flex text-xl items-center gap-sm mt-xs">
				{#each [...raie_links_arrs.listen, ...raie_links_arrs.buy] as raieLink}
					<a
						class="rounded-full p-xxs"
						href={raieLink.href}
						target="_blank"
						id={`about-${raieLink.id}`}>
						<LinkIconSwitch type={raieLink.id} weight="fill" />
					</a>
					<Tooltip text={raieLink.name} triggeredById={`about-${raieLink.id}`} />
				{/each}
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
			alt="" />

		<div class="flex flex-col items-end gap-lg">
			<Picture
				imageClass="w-[250px] rounded-sm"
				pictureClass="grayscale"
				meta={images.galaxy['full-band'].src}
				sizes={'200px'}
				loading="eager"
				alt="" />

			<Picture
				imageClass="w-[250px] rounded-sm"
				pictureClass="grayscale"
				meta={images.galaxy['raie-lead_vocal-young_love'].src}
				sizes={'200px'}
				loading="eager"
				alt="" />
		</div>
	</div>
</div>
