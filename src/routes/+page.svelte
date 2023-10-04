<script context="module" lang="ts">
	import { images } from '$lib/assets';
	import { Icon, Images, PageLayout, Picture } from '$lib/components';
	import { LatestNews, PlayMusicButton, ReviewQuote } from '$lib/components/+pages/landing';
	import { updateLinksPanel } from '$lib/stores';

	// GO LIVE CHECKLIST
	// □ go through music player functionality. play pause skip, etc. on all pages.

	// MUST DO
	// □ pause music on play youtube video. And replay on close again?

	// TO DO
	// □ loading song feedback..
	// □ bind actual width values for bottom right panel
	// □ highlight album being played in music player tracks

	// □ loading priority for images (as opposed to lazy/eager)
	// □ clean up functions in event listeners
	// □ max width for blown up images

	// □ make icon - take 'R' from logo
	// □ sort out raie logo

	// NICE TO HAVE
	// □ song time for open player (and closed?). on right side?
	// □ reset song button
	// □ optimise images - sizes; width queries; if add width to w= on img query string and number is over the image natural wdth, vite won't create a source for that.
	// □ ...check image strings for max width for those that need to be max
	// □ prev/next news article
	// □ page transitions
	// □ on track, caret rotates on read less
	// □ fix grab handle for youtube popup
	// □ (blur) placeholder for images
	// □ use local storage to save default user setting.
	// □ overlay on music player open?
	// □ for phone number, have it so click on to connect to mobile for mobiles?
	// □ in music player > tracks: give track numbers uniform width

	// CONFIG
	// □ everything is prerendering?
</script>

<PageLayout.VerticalSpacing sizing={'1.5'} />

<div
	class="flex items-center sm:items-start flex-col sm:flex-row sm:justify-between gap-[4.5rem] lg:gap-2xl"
>
	<div class="flex flex-col gap-xl">
		<ReviewQuote
			reviewer={{ name: 'Martin Cooke', org: 'Bluesmatters Magazine' }}
			text={[
				"One of life's trip-me-up revelations.",
				'A purveyor of pin-me-to-the wall,',
				'beautiful, life-enhancing soul music.',
				'A sweet, certain surprise...'
			]}
		/>

		<div class="sm:hidden max-w-[500px] flex justify-center">
			<Picture imageClass="" meta={images.faceshots[1].src} sizes={'50vw'} loading="eager" alt="" />
		</div>

		<ReviewQuote
			reviewer={{ name: 'Martin Webb', org: 'R&R Magazine' }}
			text={[
				'Raie has stepped forward with a',
				'beautifully assured solo album...',
				'Heart-tuggingly moving and edgily',
				'joyous. Love it!'
			]}
		/>

		<div class="mt-sm xs:mt-md self-start pl-lg">
			<PlayMusicButton />
		</div>
	</div>

	<div class="hidden sm:block md:max-w-[400px] lg:max-w-[400px] xl:max-w-[450px] 2xl:max-w-[500px]">
		<Picture imageClass="" meta={images.faceshots[1].src} sizes={'50vw'} loading="eager" alt="" />
	</div>
</div>

<PageLayout.VerticalSpacing />

<Images.BrickBg.HorizontalThree />

<PageLayout.VerticalSpacing />

<div class="flex flex-col sm:flex-row justify-between gap-lg lg:gap-xl flex-shrink-0">
	<LatestNews />
	<div class="sm:hidden mt-md">
		<Images.BrickBg.HorizontalThree />
	</div>

	<div class="flex gap-md justify-end sm:justify-normal pt-xs sm:pt-[40px]">
		<div class="hidden sm:block sm:w-[16px]">
			<Images.BrickBg.Vertical />
		</div>

		<div class="flex flex-col gap-sm items-end sm:text-lg tracking-wide text-my-black-700">
			<span class="text-my-black-800">
				<Icon.ArrowRight weight="thin" />
			</span>

			<a class="" href="/albums"> Albums </a>

			<a class="" href="/about">About</a>

			<a class="whitespace-nowrap" href="/voice-coaching"> Voice Coaching </a>

			<a class="" href="/gallery"> Gallery </a>

			<button class="mt-md" on:click={updateLinksPanel.open} type="button">Links</button>
		</div>
	</div>
</div>
