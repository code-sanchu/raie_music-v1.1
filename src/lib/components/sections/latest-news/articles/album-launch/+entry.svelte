<script context="module" lang="ts">
	import { images } from '$lib/assets';
	import { Picture, Icon } from '$lib/components';
	import { Link } from '$lib/components/prose';
	import { Container, TextContainer } from '../_components/';
	import BuyTicketsLink from './buy-tickets-link.svelte';
</script>

<script lang="ts">
	export let height: number;
	export let isActive: boolean;
</script>

<Container bind:height bind:isActive>
	<div class="flex flex-row gap-sm sm:gap-lg lg:gap-xl">
		<div class="w-[98px] shrink-0 hidden md:block">
			<Picture
				imageClass="rounded-sm grayscale opacity-80"
				meta={images.faceshots[2].src}
				sizes={'98px'}
				alt="" />
		</div>

		<TextContainer numColumns={1} extraClasses="mt-sm sm:mt-0">
			<div class="w-[98px] aspect-square overflow-hidden mb-sm md:hidden">
				<Picture
					imageClass="rounded-sm grayscale opacity-80"
					meta={images.faceshots[2].src}
					sizes={'98px'}
					alt="" />
			</div>

			<BuyTicketsLink extraClasses="inline-flex sm:hidden mb-sm mt-xs" />

			<span class="sm:hidden">
				<br />
			</span>

			We launch the new album Red Brick Angel at <Link href="https://thecamdenclub.co.uk/"
				>The Camden Club</Link>
			on November 8th – doors at 18.15 – on stage at 19.15 – an early one so we can encourage industry
			to pop in after work!.. and besides it’s a mid-week gig so we have to think of work mornings on
			the 9th!

			<br /><br />

			<BuyTicketsLink extraClasses="hidden sm:inline-flex mb-sm mt-xs" />

			<span class="hidden sm:block">
				<br />
			</span>

			... all 12 beautiful new tracks are being mastered as you read this … and will be available on
			this site via the best streaming platform - yet to be decided … after the launch performance
			at midnight on November 8th … just so you don’t sneak an early peak!
		</TextContainer>
	</div>
</Container>
