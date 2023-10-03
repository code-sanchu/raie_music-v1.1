<script context="module" lang="ts">
	import { images } from '$lib/assets';
	import { Icon, PageLayout, Picture, Images } from '$lib/components';
	import { ReviewQuote } from '$lib/components/+pages/landing';
	import {
		updateLinksPanel,
		updateMusicPlayer,
		musicPlayerStore,
		type MusicPlayer
	} from '$lib/stores';

	// GO LIVE CHECKLIST
	// □ go through music player functionality. play pause skip, etc. on all pages.

	// MUST DO
	// □ pause music on play youtube video. And replay on close again?

	// TO DO
	// □ loading song feedback..
	// □ bind actual width values for bottom right panel

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

	// CONFIG
	// □ everything is prerendering?
</script>

<script lang="ts">
	let musicPlayer: MusicPlayer;

	musicPlayerStore.subscribe((playerStore) => {
		musicPlayer = playerStore;
	});
</script>

<PageLayout.VerticalSpacing sizing={'1.5'} />

<div class="flex justify-between gap-xl lg:gap-2xl">
	<div class="flex flex-col justify-between gap-xl">
		<ReviewQuote reviewer={{ name: 'Martin Cooke', org: 'Bluesmatters Magazine' }}>
			<svelte:fragment slot="quote">
				<span>
					<span class="float-left text-xl scale-x-[-1] pl-xs text-my-black-100">
						<Icon.Quotes weight="fill" />
					</span>
					One of life's trip-me-up revelations.
				</span>

				<span>A purveyor of pin-me-to-the wall,</span>

				<span>beautiful, life-enhancing soul music.</span>

				<span />

				<span class="self-start"
					>A sweet, certain surprise...
					<span class="float-right text-xl pl-xs text-my-black-100">
						<Icon.Quotes weight="fill" />
					</span>
				</span>
			</svelte:fragment>
		</ReviewQuote>

		<ReviewQuote reviewer={{ name: 'Martin Webb', org: 'R&R Magazine' }}>
			<svelte:fragment slot="quote">
				<span>
					<span class="float-left text-xl scale-x-[-1] pl-xs text-my-black-100">
						<Icon.Quotes weight="fill" />
					</span>
					Raie has stepped forward with a
				</span>

				<span>beautifully assured solo album...</span>

				<span>Heart-tuggingly moving and edgily</span>

				<span class="self-start">
					joyous in equal measures. Love it!

					<span class="float-right text-xl pl-xs text-my-black-100">
						<Icon.Quotes weight="fill" />
					</span>
				</span>
			</svelte:fragment>
		</ReviewQuote>

		<div>
			<button
				class="flex items-center gap-sm text-xl text-my-black-700"
				on:click={musicPlayer.paused ? updateMusicPlayer.play : updateMusicPlayer.pause}
				type="button"
			>
				<span class="text-my-black-100 opacity-40 text-2xl">
					{#if musicPlayer.paused}
						<Icon.Play weight="fill" />
					{:else}
						<Icon.Pause weight="fill" />
					{/if}
				</span>

				<span class="text-my-black-800 font-light text-base tracking-widest uppercase">
					{#if musicPlayer.paused}
						Play music
					{:else}
						Pause music
					{/if}
				</span>
			</button>
		</div>
	</div>

	<div class="md:max-w-[400px] lg:max-w-[450px] xl:max-w-[500px]">
		<Picture
			imageClass="w-full"
			meta={images.faceshots[1].src}
			sizes={'50vw'}
			loading="eager"
			alt=""
		/>
	</div>
</div>

<div class="mt-2xl">
	<Images.BrickBg.HorizontalThree />
</div>

<div class="mt-xl flex justify-between">
	<div>
		<h3 class="tracking-widest text-sm text-my-black-600 uppercase">Latest News</h3>

		<h4 class="mt-xs text-2xl tracking-widest text-my-black-600">Galaxy Studios</h4>

		<div class="mt-lg flex gap-xl">
			<div class="w-[250px] shrink-0">
				<Picture
					imageClass="rounded-sm"
					meta={images.galaxy['full-band'].src}
					sizes={'250px'}
					alt=""
				/>
			</div>

			<p class="leading-relaxed text-lg max-w-[500px] tracking-wide">
				We came - We saw - We recorded a 12 track album in six days!<br /><br /> Deep in the Belgian
				countryside, surrounded by birdsong and spring breezes - we dug deep into the beautiful
				Galaxy Studios - Eight musicians and Engineer/Producer The Wesonator!<br /><br /> It was intense
				but we handled the pressure with a real belief in the album and we were well prepared having
				spent two intense days in rehearsal back in London.
			</p>
		</div>
	</div>

	<div class="w-[16px] h-[400px] pt-[40px]">
		<Picture
			imageClass="w-[16px] h-[300px] overflow-hidden opacity-80"
			meta={images.brick_bg.src}
			sizes={'400px'}
			alt=""
		/>
	</div>

	<div
		class="flex flex-col gap-sm justify-center items-end text-lg tracking-wide text-my-black-700"
	>
		<span class="text-my-black-800">
			<Icon.ArrowRight weight="thin" />
		</span>

		<a class="flex flex-col items-end" href="/albums">
			<span>Albums</span>
		</a>

		<a class="" href="/about">About</a>

		<a class="flex flex-col items-end" href="/voice-coaching">
			<span>Voice Coaching</span>
		</a>

		<a class="flex flex-col items-end" href="/gallery">
			<span>Gallery</span>
		</a>

		<button class="mt-md" on:click={updateLinksPanel.open} type="button">Links</button>
	</div>
</div>
