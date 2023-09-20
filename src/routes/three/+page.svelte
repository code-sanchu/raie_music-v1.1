<script context="module" lang="ts">
	import { images } from '$lib/static';
	import { ArrowRight, MusicNotes, MusicNotesSimple, Play, Quotes } from 'phosphor-svelte';
</script>

<div class="flex justify-center w-screen pt-lg">
	<img class="w-[130px] opacity-80" src={images.logo} alt="logo" />
</div>

<div class="px-2xl py-lg gap-x-[200px] flex">
	<div class="">
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
			<div class="relative">
				<img class="w-[600px]" src={images.faceshots[1]} alt="" />

				<div
					class="w-[12px] h-[100px] bg-my-black-50 absolute -right-[75px] top-0 opacity-20 translate-x-1/2"
				/>

				<div
					class="absolute -right-[150px] translate-x-full -top-[200px] w-[560px] flex gap-md items-center"
				>
					<span class="text-2xl text-my-black-400">
						<MusicNotesSimple weight="thin" />
					</span>
					<span class="text-lg font-sans2 font-thin tracking-widest">Play music</span>
				</div>

				<div class="absolute -right-[150px] translate-x-full top-0 h-full w-[560px] py-xl">
					<h3 class="tracking-widest text-sm text-my-black-600 font-sans2 uppercase font-thin">
						Latest news
					</h3>

					<h4 class="mt-xs text-2xl font-sans2 tracking-widest text-my-black-600">
						Galaxy Studios
					</h4>

					<div
						class="absolute right-0 bottom-[100px] -z-10 border border-my-black-100 p-xs rounded-sm"
					>
						<img
							class="object-cover opacity-80 w-[300px]"
							src={images.galaxy['full-band']}
							alt=""
						/>
					</div>

					<!-- <div class="grid grid-cols-3 gap-xs mt-md">
						<img
							class="object-cover aspect-[3/4] cursor-pointer border rounded-sm border-my-black-200 p-xs opacity-80"
							src={images.galaxy['full-band']}
							alt=""
						/>

						<img
							class="object-cover rounded-sm aspect-[3/4] cursor-pointer border border-my-black-200 p-xs opacity-80"
							src={images.galaxy.wesonator}
							alt=""
						/>

						<img
							class="object-cover aspect-[3/4] rounded-sm cursor-pointer border border-my-black-200 p-xs opacity-80"
							src={images.galaxy['jon_dunn-acoustic']}
							alt=""
						/>
					</div> -->

					<p class="mt-md leading-relaxed text-my-black font-sans2 text-lg">
						We came - We saw - We recorded a 12 track album in six days!<br /><br /> Deep in the
						Belgian countryside, surrounded by birdsong and spring breezes - we dug deep into the
						beautiful Galaxy Studios - Eight musicians and Engineer/Producer The Wesonator!<br /><br
						/> It was intense but we handled the pressure with a real belief in the album and we were
						well prepared having spent two intense days in rehearsal back in London.
					</p>
					<div class="flex justify-end">
						<a href="." class="inline-block mt-sm text-sm text-my-black-700">
							<ArrowRight />
						</a>
					</div>
				</div>
			</div>

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
	</div>
</div>
