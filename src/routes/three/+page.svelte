<script context="module" lang="ts">
	import { images } from '$lib/static';
	import { Quotes } from 'phosphor-svelte';
</script>

<div class="h-screen px-2xl py-lg gap-x-[200px]">
	<div class="flex justify-center">
		<img class="w-[130px] opacity-80" src={images.logo} alt="logo" />
	</div>

	<div class="mt-[100px] flex flex-col gap-[100px]">
		<div>
			<p class="w-[500px] text-2xl font-sans2 font-thin tracking-wider flex flex-col gap-xxxs">
				<span
					><span class="float-left text-xl scale-x-[-1] pl-xs text-my-black-700">
						<Quotes weight="fill" />
					</span>
					One of life's trip-me-up revelations.
				</span>

				<span>A purveyor of pin-me-to-the wall, beautiful,</span>

				<span>life-enhancing soul music. A sweet, certain</span>

				<span class="self-start"
					>surprise...
					<span class="float-right text-xl pl-xs text-my-black-700">
						<Quotes weight="fill" />
					</span>
				</span>
			</p>

			<p class="pl-lg mt-md tracking-wide text-my-black-700">
				Martin Cooke - Bluesmatters Magazine
			</p>
		</div>

		<img class="w-[600px]" src={images.faceshots[1]} alt="" />

		<div class="">
			<p class="w-[500px] text-2xl font-sans2 font-thin tracking-wider flex flex-col gap-xxxs">
				<span
					><span class="float-left text-xl scale-x-[-1] pl-xs text-my-black-700">
						<Quotes weight="fill" />
					</span>
					Raie has stepped forward with a beautifully assured solo album...
				</span>

				<span>the opening 'Healin' Train' is a glorious blast</span>

				<span>of jangly electric guitar Americana...</span>

				<span>Heart-tuggingly moving and edgily joyous in</span>

				<span class="self-start"
					>equal measures. Love it!
					<span class="float-right text-xl pl-xs text-my-black-700">
						<Quotes weight="fill" />
					</span>
				</span>
			</p>

			<p class="pl-lg mt-md tracking-wide text-my-black-700">Martin Webb - R&R Magazine</p>
		</div>
	</div>

	<!-- <div class="font-sans2">Latest news</div> -->
</div>
