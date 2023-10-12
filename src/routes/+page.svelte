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
	// □ seo stuff
	// □ page speed recommendations

	// TO DO
	// □ image gallerys + other swipe to move
	// □ lyrics modal cursor. + bg change?
	// □ images modal bg on load. all images bg on load?
	// □ height transition for landing latest news
	// □ page transitions on enter and exit
	// □ image sizes
	// □ remove extra images on about pg for mobiles?

	// □ sort out raie logo
	// □ make icon - take 'R' from logo

	// □ highlight album being played in music player tracks
	// □ disable tooltips on touchscreens
	// □ loading song feedback..
	// □ draw attention to music controls
	// □ bind actual width values for bottom right panel

	// □ clean up functions in event listeners

	// NICE TO HAVE
	// □ curate gallery as in https://cargo.site/Templates#services&programs ?
	// □ cascade images opacity
	// □ loading priority for images (as opposed to lazy/eager)
	// □ song time for open player (and closed?). on right side?
	// □ reset song button
	// □ auto rotate latest articles. (Interaction resets timer)
	// □ optimise images - sizes; width queries; if add width to w= on img query string and number is over the image natural wdth, vite won't create a source for that.
	// □ ...check image strings for max width for those that need to be max
	// □ prev/next news article
	// □ page transitions
	// □ on track, caret rotates on read less
	// □ fix grab handle for youtube popup
	// □ (blur) placeholder for image
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
		<div class="">
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

		<div
			class="translate-x-sm xxs:translate-x-md xs:translate-x-xl xs/sm:translate-x-[4rem] sm:translate-x-0">
			<ReviewQuote
				reviewer={{ name: 'Martin Webb', org: 'R&R Magazine' }}
				text={[
					'Raie has stepped forward with a',
					'beautifully assured solo album...',
					'Heart-tuggingly moving and edgily',
					'joyous. Love it!'
				]} />
		</div>

		<div
			class="flex justify-center bg-gray-50/50 sm:justify-start xs:mt-md -translate-x-[5.5px] sm:-translate-x-[7.5px] -mt-xs">
			<PlayMusicButton />
		</div>
	</div>

	<div class="hidden sm:block md:max-w-[400px] lg:max-w-[400px] xl:max-w-[450px] 2xl:max-w-[500px]">
		<Picture imageClass="" meta={images.faceshots[1].src} sizes={'50vw'} loading="eager" alt="" />
	</div>
</div>

<PageLayout.VerticalSpacing />

<div class="px-xs xs:px-lg h-[12px] sm:h-[16px] md:h-auto sm:px-0 overflow-hidden">
	<Images.BrickBg.HorizontalThree />
</div>

<PageLayout.VerticalSpacing />

<div class="flex flex-col sm:flex-row justify-between sm:gap-lg lg:gap-xl flex-shrink-0">
	<div class="pl-sm xs:pl-md pr-sm sm:px-0">
		<LatestNews />
	</div>

	<div class="sm:hidden">
		<PageLayout.VerticalSpacing />
	</div>

	<div class="px-xs xs:px-lg h-[12px] sm:hidden overflow-hidden">
		<Images.BrickBg.HorizontalThree />
	</div>

	<div class="sm:hidden">
		<PageLayout.VerticalSpacing sizing="half" />
	</div>

	<div class="sm:pt-[40px] px-md sm:px-0">
		<PageLinks />
	</div>
</div>
