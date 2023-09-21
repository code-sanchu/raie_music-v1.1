<script context="module" lang="ts">
	import { images } from '$lib/static';
	import { Quotes } from 'phosphor-svelte';
</script>

<div class="flex justify-between w-screen pt-md px-lg">
	<img class="w-[110px] opacity-80" src={images.logo} alt="logo" />

	<div>.</div>
</div>

<div class="mt-3xl flex justify-center">
	<div class="max-w-[1300px] px-xl w-full">
		<div class="flex justify-between">
			<div>
				<div>
					<p class="text-2xl font-sans2 font-thin tracking-wider flex flex-col gap-xxs">
						<span
							><span class="float-left text-xl scale-x-[-1] pl-xs text-my-black-700">
								<Quotes weight="fill" />
							</span>
							One of life's trip-me-up revelations.
						</span>

						<span>A purveyor of pin-me-to-the wall,</span>

						<span>beautiful, life-enhancing soul music.</span>

						<span />

						<span class="self-start"
							>A sweet, certain surprise...
							<span class="float-right text-xl pl-xs text-my-black-700">
								<Quotes weight="fill" />
							</span>
						</span>
					</p>

					<p class="pl-lg mt-md tracking-wide text-my-black-700">
						Martin Cooke - Bluesmatters Magazine
					</p>
				</div>

				<div class="mt-3xl">
					<p class="w-[500px] text-2xl font-sans2 font-thin tracking-wider flex flex-col gap-xxxs">
						<span
							><span class="float-left text-xl scale-x-[-1] pl-xs text-my-black-700">
								<Quotes weight="fill" />
							</span>
							Raie has stepped forward with a beautifully assured solo album...
						</span>

						<span>Heart-tuggingly moving and edgily</span>

						<span class="self-start"
							>joyous in equal measures. Love it!
							<span class="float-right text-xl pl-xs text-my-black-700">
								<Quotes weight="fill" />
							</span>
						</span>
					</p>

					<p class="pl-lg mt-md tracking-wide text-my-black-700">Martin Webb - R&R Magazine</p>
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

		<div class="mt-xl">
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
					/> It was intense but we handled the pressure with a real belief in the album and we were well
					prepared having spent two intense days in rehearsal back in London.
				</p>
			</div>
		</div>
	</div>
</div>
