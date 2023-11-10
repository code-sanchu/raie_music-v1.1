<script context="module" lang="ts">
	import { images } from '$lib/assets';
	import { Picture } from '$lib/components';
	import { Link } from '$lib/components/prose';
	import { Container, TextContainer } from '../_components/';
	import EpkLink from './epk-link.svelte';
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

		<TextContainer numColumns={1} extraClasses="">
			<div class="w-[98px] aspect-square overflow-hidden md:hidden shrink-0 mb-sm">
				<Picture
					imageClass="rounded-sm grayscale opacity-80"
					meta={images.faceshots[2].src}
					sizes={'98px'}
					alt="" />
			</div>

			We launched the new album Red Brick Angel at <Link href="https://thecamdenclub.co.uk/"
				>The Camden Club</Link>
			on November 8th.

			<br /><br />

			<div class="sm:flex gap-md">
				<EpkLink extraClasses="inline-flex" />
			</div>

			<br />

			... all 12 beautiful new tracks have now been mastered and are avaiable to listen to on this
			site!
		</TextContainer>
	</div>
</Container>
