<script context="module" lang="ts">
	import { ArrowRight, Play, Quotes } from 'phosphor-svelte';

	import { images } from '$lib/assets';
	import { Picture } from '$lib/components';
	import { updateMusicPlayer, updateLinksPanel } from '$lib/stores';

	// MUST DO
	// □ pause/play interaction with browser - i.e can pause music through browser.

	// TO DO
	// □ use local storage to save default user setting.
	// □ optimise images - sizes; width queries; if add width to w= on img query string and number is over the image natural wdth, vite won't create a source for that.
	// □ ...check image strings for max width for those that need to be max
	// □ optimise songs?
	// □ loading priority for images
	// □ different sizes for images - is done auto by Svelte?
	// □ blur placeholder for images
	// □ popper
	// □ make icon - take 'R' from logo
	// □ include links in this music thing article
	// □ prev/next news article
	// □ add buy now, radio shows news aticles links to thismusic thing article
	// □ everything is prerendering fine?
	// □ click outside music player doesn't work because bottom panel is seperate.
	// □ bind actua width values for bottom right panel
	// □ song time for open player (and closed?). on right side?
	// □ redesign music player a bit. Make as links panel. title on left and right. Maybe song name on right as title. song lengths?
	// □ loading song feedback..
	// □ clean up functions in event listeners
</script>

<div class="mt-3xl flex justify-center">
	<div class="max-w-[1300px] px-xl w-full">
		<div class="flex justify-between">
			<div class="flex flex-col justify-between">
				<div>
					<p class="text-2xl font-sans2 font-thin tracking-wider flex flex-col gap-xxs">
						<span>
							<span class="float-left text-xl scale-x-[-1] pl-xs text-my-black-100">
								<Quotes weight="fill" />
							</span>
							One of life's trip-me-up revelations.
						</span>

						<span>A purveyor of pin-me-to-the wall,</span>

						<span>beautiful, life-enhancing soul music.</span>

						<span />

						<span class="self-start"
							>A sweet, certain surprise...
							<span class="float-right text-xl pl-xs text-my-black-100">
								<Quotes weight="fill" />
							</span>
						</span>
					</p>

					<p class="pl-lg mt-md tracking-wide text-my-black-700 font-light">
						Martin Cooke - Bluesmatters Magazine
					</p>
				</div>

				<div class="">
					<p class="w-[500px] text-2xl font-sans2 font-thin tracking-wider flex flex-col gap-xxxs">
						<span>
							<span class="float-left text-xl scale-x-[-1] pl-xs text-my-black-100">
								<Quotes weight="fill" />
							</span>
							Raie has stepped forward with a beautifully assured solo album...
						</span>

						<span>Heart-tuggingly moving and edgily</span>

						<span class="self-start">
							joyous in equal measures. Love it!

							<span class="float-right text-xl pl-xs text-my-black-100">
								<Quotes weight="fill" />
							</span>
						</span>
					</p>

					<p class="pl-lg mt-md tracking-wide text-my-black-700 font-light">
						Martin Webb - R&R Magazine
					</p>
				</div>

				<div>
					<button
						class="flex items-center gap-sm text-xl text-my-black-700"
						on:click={() => updateMusicPlayer.play()}
						type="button"
					>
						<span class="text-my-black-100 opacity-40 text-2xl">
							<Play weight="fill" />
						</span>

						<span class="text-my-black-800 font-light text-base tracking-widest uppercase">
							Play music
						</span>
					</button>
				</div>
			</div>

			<Picture
				imageClass="w-[500px]"
				meta={images.faceshots[1].src}
				sizes={'50vw'}
				loading="eager"
				alt=""
			/>
		</div>

		<div class="mt-2xl flex">
			<Picture
				imageClass="w-[400px] h-[20px] overflow-hidden opacity-80"
				meta={images.brick_bg.src}
				sizes={'400px'}
				alt=""
			/>
			<Picture
				imageClass="w-[400px] h-[20px] overflow-hidden opacity-80"
				meta={images.brick_bg.src}
				sizes={'400px'}
				alt=""
			/>
			<Picture
				imageClass="w-[400px] h-[20px] overflow-hidden opacity-80"
				meta={images.brick_bg.src}
				sizes={'400px'}
				alt=""
			/>
		</div>

		<div class="mt-xl flex justify-between">
			<div>
				<h3 class="tracking-widest text-sm text-my-black-600 font-sans2 uppercase font-thin">
					Latest News
				</h3>

				<h4 class="mt-xs text-2xl font-sans2 tracking-widest font-thin text-my-black-600">
					Galaxy Studios
				</h4>

				<div class="mt-lg flex gap-xl">
					<div class="w-[250px] shrink-0">
						<Picture
							imageClass="rounded-sm"
							meta={images.galaxy['full-band'].src}
							sizes={'250px'}
							alt=""
						/>
					</div>

					<p class="leading-relaxed font-sans2 text-lg max-w-[500px] font-thin tracking-wide">
						We came - We saw - We recorded a 12 track album in six days!<br /><br /> Deep in the
						Belgian countryside, surrounded by birdsong and spring breezes - we dug deep into the
						beautiful Galaxy Studios - Eight musicians and Engineer/Producer The Wesonator!<br /><br
						/> It was intense but we handled the pressure with a real belief in the album and we were
						well prepared having spent two intense days in rehearsal back in London.
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
				class="flex flex-col gap-sm justify-center items-end font-sans2 text-lg font-thin tracking-wide text-my-black-700"
			>
				<span class="text-my-black-800">
					<ArrowRight weight="thin" />
				</span>

				<a class="flex flex-col items-end" href=".">
					<span>Gallery</span>
				</a>
				<a class="flex flex-col items-end" href="/albums">
					<span>Albums</span>
				</a>
				<a class="flex flex-col items-end" href=".">
					<span>Voice Coaching</span>
				</a>
				<a class="" href="/about">About</a>

				<button class="mt-md" on:click={updateLinksPanel.open} type="button">Links</button>
			</div>
		</div>
	</div>
</div>
