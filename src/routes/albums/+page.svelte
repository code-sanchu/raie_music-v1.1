<script lang="ts" context="module">
	import { PageLayout } from '$lib/components';
	import { images } from '$lib/static';
</script>

<PageLayout.VerticalSpacing />

<PageLayout.HorizontalSpacing>
	<div class="flex justify-center">
		<div class="">
			<div class="flex">
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

			<h1 class="text-xl uppercase mt-md text-my-black-200 tracking-widest">Albums</h1>

			<PageLayout.VerticalSpacing sizing="half" />

			<div class="">
				<div class="flex gap-xl w-full justify-center">
					<a class="shrink-0" href="/albums/earthbound">
						<img
							src={images.albums.earthbound.album_cover}
							class="aspect-square grayscale h-[200px]"
							alt=""
						/>
					</a>

					<div class="max-w-[600px]">
						<a href="/albums/earthbound">
							<h2 class="text-2xl font-sans2 tracking-widest font-thin">Earthbound</h2>
						</a>

						<p class="mt-xs text-my-black-500">2016</p>

						<p class="mt-sm leading-relaxed">
							Earthbound is an Indie/Folk Ballad about human determination and resourcefulness.
						</p>
						<p class="mt-sm leading-relaxed">
							Raie journeyed to Goa in India with friends and Earthbound was inspired by seeing the
							incredible resourcefulness of the people.
						</p>

						<a class=" text-sm text-my-black-400 mt-sm block" href="/albums/earthbound">
							Read more
						</a>
					</div>
				</div>

				<div class="flex gap-xl w-full justify-center mt-2xl">
					<a class="shrink-0" href="/albums/this-music-thing">
						<img
							src={images.albums.this_music_thing.album_cover}
							class="aspect-square grayscale h-[200px]"
							alt=""
						/>
					</a>

					<div class="max-w-[600px]">
						<a href="/albums/earthbound">
							<h2 class="text-2xl font-sans2 tracking-widest font-thin">This Music Thing</h2>
						</a>

						<p class="mt-xs text-my-black-500">2020</p>

						<p class="mt-sm leading-relaxed">
							This Music Thing is a beautiful album of storytelling in the Country Americana music
							style.
						</p>
						<p class="mt-sm leading-relaxed">
							It's produced by Wes Maebe and features artists such as Chris Bell (Specimen, Gene
							Loves Jezebel, Spear Of Destiny, Thompson Twins, Hugh Cornwell) and Jon Klein
							(Specimen, The Banshees, Sinead O'Connor)... and a host of other wonderful musicians.
						</p>

						<a class=" text-sm text-my-black-400 mt-sm block" href="/albums/earthbound">
							Read more
						</a>
					</div>
				</div>

				<div class="flex gap-xl w-full justify-center mt-2xl">
					<a class="shrink-0" href="/albums/this-music-thing">
						<div
							class="aspect-square grayscale h-[200px] bg-my-black-50/70 p-sm flex flex-col gap-xs"
						>
							<p class="text-white">Coming soon...</p>
							<img
								src={images.galaxy['full-band']}
								class="grayscale object-cover opacity-70 flex-grow"
								alt=""
							/>
						</div>
						<!-- <div class="aspect-square grayscale h-[200px] bg-my-black-50/70">
							<p class="text-white p-sm">Coming soon...</p>
						</div> -->
					</a>

					<div class="max-w-[600px]">
						<a href="/albums/red-brick-angels">
							<h2 class="text-2xl font-sans2 tracking-widest font-thin">Red Brick Angels</h2>
						</a>

						<p class="mt-xs text-my-black-500">8 November 2023</p>

						<p class="mt-sm leading-relaxed">Red Brick Angels is a beautiful 12 song album.</p>
						<p class="mt-sm leading-relaxed">
							We played and recorded it live in an intensive 6 days with Wes Maebe at the helm in
							Europe's renowned Galaxy Studios.
						</p>

						<a class=" text-sm text-my-black-400 mt-sm block" href="/albums/earthbound">
							Read more
						</a>
					</div>
				</div>

				<div class="mt-2xl flex">
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
			</div>
		</div>
	</div>
</PageLayout.HorizontalSpacing>
