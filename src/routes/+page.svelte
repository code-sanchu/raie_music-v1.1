<script context="module" lang="ts">
	import { Stop } from 'phosphor-svelte';

	import { PageLayout } from '$lib/components';
	import { images } from '$lib/static';
</script>

<PageLayout.VerticalSpacing />

<PageLayout.HorizontalSpacing>
	<div class="grid grid-cols-2 gap-2xl">
		<div class="flex gap-2xl flex-col">
			<div class="relative">
				<p class="prose text-my-black line-clamp-6">
					Scots-born, London-based, Raie is one of life's trip-me-up revelations. A purveyor of
					pin-me-to-the wall, beautiful, life-enhancing soul music. A sweet, certain surprise… Raie
					has paid her dues playing live for many years - slipping through the net commercially,
					making astounding music. Chances are, Raie is playing somewhere in London right now and a
					select few are having their ears flipped over by her incredible voice...
				</p>

				<p class="mt-md pl-lg text-my-black-500">Martin Cooke - Bluesmatters Magazine</p>
			</div>

			<img class="w-full" src={images.faceshots[1]} alt="" />

			<div>
				<p class="prose line-clamp-6">
					Nearly fifty years in to a professional career of recording and performing as a backing
					singer with a variety of 'name' artists, Scottish songstress Raie has finally stepped
					forward with a solo album. And what a beautifully assured debut it is. Raie's first love
					is country music, and the opening 'Healin' Train' is a glorious blast of jangly electric
					guitar Americana. But whilst there are shades of Nashville throughout, the infusion of
					other soulful, bluesy and even gospel-laced influences delivers a diverse concoction which
					has its own original distinctiveness...
				</p>

				<p class="mt-md pl-lg text-my-black-500">Martin Webb - R&R Magazine</p>
			</div>
		</div>

		<div class="my-xl grid place-items-center">
			<div>
				<div class="pl-xl border-l">
					<h4 class="text-my-black-400">Music Player</h4>

					<div class="mt-xs flex gap-xxs">
						<p>Now playing</p>
						<p>
							<span class="font-medium text-my-black-900">Azhi</span> from
							<span class="font-medium text-my-black-900">This Music Thing</span>
						</p>
						<span class="text-xs text-my-black-300 ml-xs translate-y-[5.5px]">change</span>
					</div>

					<div class="mt-xs flex gap-lg">
						<p class="flex items-center gap-xs">
							<span class="text-my-black-600 text-sm">
								<Stop weight="fill" />
							</span>

							<span>Stop music</span>
						</p>

						<p class="flex items-center gap-xs">
							<span>Volume</span>
							<span class="text-my-black-400">60</span>
						</p>
					</div>
				</div>
				<div class="p-xl border-l mt-2xl">
					<h2 class="text-xl text-my-black-400">News</h2>

					<h3 class="mt-md">Galaxy Studios</h3>

					<div class="grid grid-cols-4 mt-sm gap-x-sm gap-y-md">
						<p class="col-span-3 prose text-my-black">
							We came - We saw - We recorded a 12 track album in six days!<br /><br />Deep in the
							Belgian countryside, surrounded by birdsong and spring breezes - we dug deep into the
							beautiful Galaxy Studios - Eight musicians and Engineer/Producer The Wesonator!
						</p>

						<!-- <div class="border rounded-md p-xxs border-my-black-300"> -->
						<img
							class="object-cover w-full h-full opacity-70 rounded-xl"
							src={images.galaxy['raie-lead_vocal-young_love']}
							alt=""
						/>
						<!-- </div> -->

						<p class="col-span-3 prose text-my-black">
							It was intense but we handled the pressure with a real belief in the album and we were
							well prepared having spent two intense days in rehearsal back in London. Galaxy houses
							the quietest room in the world - it's incredible! Drums, bass, piano, keys and strings
							were recorded...
							<br /><br />
							<span class="text-my-black-500 text-sm"> read more </span>
						</p>

						<img
							class="object-cover w-full h-full opacity-70 rounded-xl"
							src={images.galaxy['christiano-bass']}
							alt=""
						/>
					</div>
				</div>
			</div>
		</div>
	</div>
</PageLayout.HorizontalSpacing>
