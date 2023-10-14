<script context="module" lang="ts">
	import { images } from '$lib/assets';
	import { Picture, Icon } from '$lib/components';
	import { Link } from '$lib/components/prose';
	import { Container, TextContainer } from './_components/';
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
			<div class="w-[98px] aspect-video overflow-hidden mb-sm md:hidden">
				<Picture
					imageClass="rounded-sm grayscale opacity-80"
					meta={images.faceshots[2].src}
					sizes={'98px'}
					alt="" />
			</div>
			<a
				class="border mb-sm mt-xs sm:hidden inline-flex items-center gap-xs py-xxs px-xs group/button"
				href="https://www.fatsoma.com/e/un29hce9/raie-red-brick-angel-album-launch?fbclid=IwAR0kNsjw8-5Jh8ewuSZ7QSuG_J4tc-1V7BF8lAUr0KoCp0tHRXIs102nSqs"
				target="_blank">
				<span
					class="text-sm text-my-black-600 italic rounded-sm border-my-black-50/60 tracking-widest group-hover/button:text-my-black transition-colors ease-in-out duration-150"
					>Buy Tickets</span>
				<span
					class="text-xs text-my-black-400 group-hover/button:text-my-black-700 transition-colors ease-in-out duration-150"
					><Icon.ExternalLink weight="thin" /></span>
			</a>
			<span class="sm:hidden">
				<br />
			</span>

			We launch the new album Red Brick Angels at <Link href="https://thecamdenclub.co.uk/"
				>The Camden Club</Link>
			on November 8th – doors at 18.15 – on stage at 19.15 – an early one so we can encourage industry
			to pop in after work!.. and besides it’s a mid-week gig so we have to think of work mornings on
			the 9th!
			<br /><br />
			<a
				class="border hidden sm:inline-flex items-center gap-xs py-xxs px-xs group/button"
				href="https://www.fatsoma.com/e/un29hce9/raie-red-brick-angel-album-launch?fbclid=IwAR0kNsjw8-5Jh8ewuSZ7QSuG_J4tc-1V7BF8lAUr0KoCp0tHRXIs102nSqs"
				target="_blank">
				<span
					class="text-sm text-my-black-600 italic rounded-sm border-my-black-50/60 tracking-widest group-hover/button:text-my-black transition-colors ease-in-out duration-150"
					>Buy Tickets</span>
				<span
					class="text-xs text-my-black-400 group-hover/button:text-my-black-700 transition-colors ease-in-out duration-150"
					><Icon.ExternalLink weight="thin" /></span>
			</a>
			<br />
			<br />
			... all 12 beautiful new tracks are being mastered as you read this … and will be available on
			this site via the best streaming platform - yet to be decided … after the launch performance at
			midnight on November 8th … just so you don’t sneak an early peak!
		</TextContainer>
	</div>
</Container>
