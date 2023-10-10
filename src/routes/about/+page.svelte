<script lang="ts" context="module">
	import { images } from '$lib/assets';
	import { Icon, LinkIconSwitch, PageLayout, Picture, Tooltip } from '$lib/components';
	import Bar from '$lib/components/music-player/animated-bars/bar.svelte';
	import { Link } from '$lib/components/prose';
	import { contacts, raie_links_arrs } from '$lib/data';
	import { Envelope, Phone } from 'phosphor-svelte';
</script>

<PageLayout.VerticalSpacing sizing="1.5" />

<div class="relative prose text-my-black max-w-[880px] leading-relaxed text-lg tracking-wider">
	<p>
		<span class="uppercase tracking-widest text-xs italic mr-lg text-my-black-400">About Raie</span>
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
	class="flex flex-col-reverse sm:flex-row flex-wrap-reverse gap-lg gap-y-[4.5rem] justify-between">
	<div class="flex flex-col gap-xl">
		<div>
			<h2 class="uppercase italic tracking-widest text-my-black-600 text-sm">contacts</h2>

			<div class="mt-md flex flex-col gap-x-md items-end gap-y-md">
				<div class="flex items-center gap-xs">
					<span class="text-my-black-300">
						<Envelope weight="thin" />
					</span>
					<a class="tracking-wider" href={`mailto:${contacts.email}`} target="_blank"
						>{contacts.email}</a>
				</div>

				<!-- <span class="text-my-black-100 self-center text-xs"> | </span> -->
				<div class="flex items-center gap-xs">
					<span class="text-my-black-300">
						<Phone weight="thin" />
					</span>
					<a class="text-sm tracking-wider" href={`tel:${contacts.phone}`}>{contacts.phone}</a>
				</div>
			</div>
		</div>

		<div>
			<h2 class="uppercase italic tracking-widest text-sm">social media</h2>

			<div class="flex text-lg items-center gap-sm mt-sm">
				{#each [...raie_links_arrs.follow] as raieLink}
					<a
						class="rounded-full p-xxs"
						href={raieLink.href}
						target="_blank"
						id={`about-${raieLink.id}`}>
						<LinkIconSwitch type={raieLink.id} weight="thin" />
					</a>
					<Tooltip text={raieLink.name} triggeredById={`about-${raieLink.id}`} />
				{/each}
			</div>
		</div>

		<div>
			<h2 class="uppercase italic tracking-widest text-sm">Listen & Buy</h2>

			<div class="flex text-lg items-center gap-sm mt-sm">
				{#each [...raie_links_arrs.listen, ...raie_links_arrs.buy] as raieLink}
					<a
						class="rounded-full p-xxs"
						href={raieLink.href}
						target="_blank"
						id={`about-${raieLink.id}`}>
						<LinkIconSwitch type={raieLink.id} weight="thin" />
					</a>
					<Tooltip text={raieLink.name} triggeredById={`about-${raieLink.id}`} />
				{/each}
			</div>
		</div>
	</div>

	<div class="flex gap-lg justify-end flex-grow">
		<div class="w-[200px]">
			<Picture
				imageClass="w-full rounded-sm"
				pictureClass="grayscale"
				meta={images.raie_as_child.src}
				sizes={'200px'}
				loading="eager"
				alt="" />
			<p
				class="text-sm mt-xxs tracking-wide text-my-black-700 underline decoration-my-black-400 underline-offset-1">
				Raie as a young performer – singing Joan Baez’ Ghetto
			</p>
		</div>

		<div class="flex flex-col items-end gap-lg">
			<div class="w-[250px]">
				<Picture
					imageClass="w-full rounded-sm"
					pictureClass="grayscale"
					meta={images.galaxy['full-band'].src}
					sizes={'200px'}
					loading="eager"
					alt="" />
				<p
					class="text-sm mt-xxs tracking-wide text-my-black-700 underline decoration-my-black-400 underline-offset-1">
					The band ends six beautiful days at Galaxy
				</p>
			</div>

			<div class="w-[250px]">
				<Picture
					imageClass="w-full rounded-sm"
					pictureClass="grayscale"
					meta={images.galaxy['raie-lead_vocal-young_love'].src}
					sizes={'200px'}
					loading="eager"
					alt="" />
				<p
					class="text-sm mt-xxs tracking-wide text-my-black-700 underline decoration-my-black-400 underline-offset-1">
					Raie at the mic in Galaxy Studios
				</p>
			</div>
		</div>
	</div>
</div>
