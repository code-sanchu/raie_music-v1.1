<script lang="ts" context="module">
	import { images } from '$lib/assets';
	import { LinkIconSwitch, PageLayout, Picture, Tooltip } from '$lib/components';
	import { Link } from '$lib/components/prose';
	import { contacts, raie_links_arrs } from '$lib/data';
</script>

<PageLayout.VerticalSpacing sizing="1.5" />

<div class="relative prose max-w-[880px] leading-relaxed text-lg sm:text-xl tracking-wide">
	<p>
		<span class="uppercase tracking-widest text-xs italic mr-lg">About Raie</span>
		Raie has performed in a host of top venues in London including Hammersmith Apollo, The Forge Camden,
		Camden Round House, The Albany Theatre in Deptford as well as more recently at Purcell Room on London’s
		Southbank.<br /><br />
		Raie’s debut as a singer songwriter was a tour of London’s South East with guitarist Dan Cochrane;
		she went on to collaborate with a line up of superb musicians including Peter J Pinto (Modern Romance)
		and Manley O’Connor (Yolanda Brown) … to continue on the London Country Blues circuit.<br /><br />
		Music has been in Raie’s life from a young age when she sang for audiences in various contests in
		Scotland – winning accolades as a young ‘protest singer’.<br /><br />
		Raie came to her singer songwriter career later in life but has enjoyed a successful career working
		with upcoming artistes in her role as vocal tutor and coach … you can read about her work in the
		<Link href="/voice-coaching" target="_self">voice coaching section</Link>.<br /><br />
		Raie prefers to keep details of her family life relatively private as she is now a grandmother to
		two beautiful children … and the proud mother of a wonderful son.
	</p>
</div>

<PageLayout.VerticalSpacing sizing="3/4" />

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
