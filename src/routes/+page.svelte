<script context="module" lang="ts">
	import { images } from '$lib/assets';
	import { Images, PageLayout, Picture } from '$lib/components';
	import {
		LatestNews,
		PageLinks,
		PlayMusicButton,
		ReviewQuote
	} from '$lib/components/+pages/landing';

	// GO LIVE CHECKLIST
	// □ go through music player functionality. play pause skip, etc. on all pages.

	// MUST DO
	// □ pause music on play youtube video. And replay on close again?

	// TO DO
	// □ loading song feedback..
	// □ disable tooltips on touchscreens
	// □ draw attention to music controls
	// □ go over gallery + voice coaching responsiveness
	// □ page transitions on enter and exit
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
	class="flex items-center justify-center sm:items-start sm:justify-between gap-xl md:gap-[4.5rem] lg:gap-2xl">
	<div class="flex flex-col gap-1.5xl sm:gap-xl">
		<div class="pl-md sm:pl-0">
			<ReviewQuote
				reviewer={{ name: 'Martin Cooke', org: 'Bluesmatters Magazine' }}
				text={[
					"One of life's trip-me-up revelations.",
					'A purveyor of pin-me-to-the wall,',
					'beautiful, life-enhancing soul music.',
					'A sweet, certain surprise...'
				]} />
		</div>

		<div class="sm:hidden max-w-[500px] flex justify-center">
			<Picture imageClass="" meta={images.faceshots[1].src} sizes={'50vw'} loading="eager" alt="" />
		</div>

		<div class="translate-x-[5.5rem] sm:translate-x-0">
			<ReviewQuote
				reviewer={{ name: 'Martin Webb', org: 'R&R Magazine' }}
				text={[
					'Raie has stepped forward with a',
					'beautifully assured solo album...',
					'Heart-tuggingly moving and edgily',
					'joyous. Love it!'
				]} />
		</div>

		<div class="mt-sm xs:mt-md -translate-x-[7.5px]">
			<PlayMusicButton />
		</div>
	</div>

	<div class="hidden sm:block md:max-w-[400px] lg:max-w-[400px] xl:max-w-[450px] 2xl:max-w-[500px]">
		<Picture imageClass="" meta={images.faceshots[1].src} sizes={'50vw'} loading="eager" alt="" />
	</div>
</div>

<PageLayout.VerticalSpacing />

<div class="px-lg h-[12px] overflow-hidden">
	<Images.BrickBg.HorizontalThree />
</div>

<!-- <PageLayout.VerticalSpacing />

<div class="flex flex-col sm:flex-row justify-between gap-lg lg:gap-xl flex-shrink-0">
	<LatestNews />

	<div class="sm:hidden mt-md">
		<Images.BrickBg.HorizontalThree />
	</div>

	<div class="pt-xs sm:pt-[40px]">
		<PageLinks />
	</div>
</div>
 -->
