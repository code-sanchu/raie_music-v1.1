<script lang="ts" context="module">
	import { images } from '$assets';
	import { PageLayout, Picture } from '$lib/components';
</script>

<PageLayout.VerticalSpacing />

<PageLayout.HorizontalSpacing>
	<div class="flex justify-center">
		<div class="">
			<div class="flex">
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

			<h1 class="text-xl uppercase mt-md text-my-black-200 tracking-widest">Albums</h1>

			<PageLayout.VerticalSpacing sizing="half" />

			<div class="">
				<div class="flex gap-xl w-full justify-center">
					<a class="shrink-0" href="/albums/earthbound">
						<Picture
							meta={images.albums.earthbound.album_cover.src}
							imageClass="aspect-square grayscale w-[200px] h-[200px]"
							sizes={'30vw'}
							loading="eager"
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
						<Picture
							meta={images.albums.this_music_thing.album_cover.src}
							imageClass="aspect-square grayscale h-[200px]"
							sizes={'30vw'}
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

							<Picture
								meta={images.galaxy['full-band'].src}
								imageClass="grayscale object-cover opacity-70 flex-grow"
								sizes={'30vw'}
								alt=""
							/>
						</div>
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
			</div>
		</div>
	</div></PageLayout.HorizontalSpacing
>
