<script context="module" lang="ts">
	import { images } from '$lib/static';
	import { ArrowRight, Play, Quotes } from 'phosphor-svelte';
</script>

<div class="mt-3xl flex justify-center">
	<div class="max-w-[1300px] px-xl w-full">
		<div class="flex justify-between">
			<div class="flex flex-col justify-between">
				<div>
					<p class="text-2xl font-sans2 font-thin tracking-wider flex flex-col gap-xxs">
						<span
							><span class="float-left text-xl scale-x-[-1] pl-xs text-my-black-100">
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
						<span
							><span class="float-left text-xl scale-x-[-1] pl-xs text-my-black-100">
								<Quotes weight="fill" />
							</span>
							Raie has stepped forward with a beautifully assured solo album...
						</span>

						<span>Heart-tuggingly moving and edgily</span>

						<span class="self-start"
							>joyous in equal measures. Love it!
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
					<button class="flex items-center gap-sm text-xl text-my-black-700" type="button">
						<span class="text-my-black-100 opacity-40 text-2xl">
							<Play weight="fill" />
						</span>
						<span class="text-my-black-800 font-light text-base tracking-widest uppercase"
							>Play music</span
						>
					</button>
				</div>
			</div>

			<img class="w-[500px]" src={images.faceshots[1]} alt="" />
		</div>

		<div class="mt-2xl flex">
			<!-- 			<img
				class="w-full h-[20px] overflow-hidden opacity-80"
				src="/images/table_cloth-bg.png"
				alt="background"
			/> -->

			<img
				class="w-[400px] h-[20px] overflow-hidden opacity-80"
				src="/images/brick_bg.png"
				alt="background"
			/>
			<img
				class="w-[400px] h-[20px] overflow-hidden opacity-80"
				src="/images/brick_bg.png"
				alt="background"
			/>
			<img
				class="w-[400px] h-[20px] overflow-hidden opacity-80"
				src="/images/brick_bg.png"
				alt="background"
			/>
		</div>

		<div class="mt-xl flex justify-between">
			<div>
				<h3 class="tracking-widest text-sm text-my-black-600 font-sans2 uppercase font-thin">
					Latest News
				</h3>

				<h4 class="mt-xs text-2xl font-sans2 tracking-widest text-my-black-600">Galaxy Studios</h4>

				<div class="mt-lg flex gap-xl">
					<div class="w-[250px] shrink-0">
						<img class="opacity-80 w-full" src={images.galaxy['full-band']} alt="" />
					</div>

					<p class="leading-relaxed text-my-black font-sans2 text-lg max-w-[500px]">
						We came - We saw - We recorded a 12 track album in six days!<br /><br /> Deep in the
						Belgian countryside, surrounded by birdsong and spring breezes - we dug deep into the
						beautiful Galaxy Studios - Eight musicians and Engineer/Producer The Wesonator!<br /><br
						/> It was intense but we handled the pressure with a real belief in the album and we were
						well prepared having spent two intense days in rehearsal back in London.
					</p>
				</div>
			</div>

			<div class="w-[16px] h-[400px] pt-[40px]">
				<img
					class="w-[16px] h-[300px] overflow-hidden opacity-80"
					src="/images/brick_bg.png"
					alt="background"
				/>
			</div>

			<div class="flex flex-col gap-sm justify-center items-end font-sans2 text-lg">
				<span class="text-my-black-800">
					<ArrowRight />
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
				<a class="" href=".">About</a>

				<p class="mt-md">Links</p>
				<!-- <p class="">Socials</p> -->
				<!-- 				<p class="flex items-center gap-xs mt-lg">
					<span class="text-my-black-200">
						<Headphones />
					</span>
					<span class="text-my-black-700">listen</span>
				</p>
				<p class="flex items-center gap-sm">
					<span class="text-my-black-200">
						<ShoppingCartSimple />
					</span>
					<span class="text-my-black-700">buy</span>
				</p>
				<p class="flex items-center gap-xs">
					<span class="text-my-black-200">
						<Globe />
					</span>
					<span class="text-my-black-700">socials</span>
				</p> -->
			</div>
		</div>
	</div>
</div>

<!-- <footer class="fixed bottom-0 z-30 flex w-full justify-between py-xs px-xs">
	<p
		class="mr-lg bg-white/50 backdrop-blur-sm py-xs px-xs rounded-sm font-sans2 font-thin text-lg tracking-wider"
	>
		rachel@raiemusic.com
	</p>

	<div class="text-my-black flex items-center gap-md bg-white/50 backdrop-blur-sm py-xs px-xs">
		<p class="flex items-center gap-xs">
			<span class="text-my-black-200">
				<Headphones />
			</span>
			<span class="text-my-black-700">listen</span>
		</p>
		<p class="flex items-center gap-xs">
			<span class="text-my-black-200">
				<ShoppingCartSimple />
			</span>
			<span class="text-my-black-700">buy</span>
		</p>
		<p class="flex items-center gap-xs">
			<span class="text-my-black-200">
				<Globe />
			</span>
			<span class="text-my-black-700">socials</span>
		</p>
	</div>

</footer> -->
