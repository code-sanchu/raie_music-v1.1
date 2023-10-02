<script lang="ts" context="module">
	import { images } from '$lib/assets';
	import { PageLayout, Picture } from '$lib/components';

	// todo: maybe pictures under the top text.
</script>

<PageLayout.VerticalSpacing sizing="1.5" />

<div class="">
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

		<PageLayout.VerticalSpacing sizing="2/3" />

		<div class="flex justify-between">
			<div class="">
				<p
					class="text-2xl tracking-wider flex flex-col gap-xxs text-my-black-800 max-w-[700px] leading-relaxed"
				>
					To date, I've released 2 albums; soon to be 3 with the release of Red Brick Angels on 8th
					November. Maybe talk about Wes, Galaxy Studios a bit here...
				</p>

				<a class="group/album block mt-2xl" href="/albums/earthbound">
					<div class="flex items-end gap-lg">
						<h4 class="text-2xl tracking-widest">Earthbound</h4>

						<span
							class="text-sm tracking-wide uppercase -translate-y-[3px] gap-sm opacity-0 transition-opacity ease-in-out text-my-black-100 duration-100 group-hover/album:opacity-100"
						>
							visit
						</span>
					</div>

					<div class="mt-lg flex gap-xl">
						<p class="leading-relaxed text-lg max-w-[500px] tracking-wide">
							Earthbound is an Indie/Folk Ballad about human determination and resourcefulness.<br
							/><br />
							Raie journeyed to Goa in India with friends and Earthbound was inspired by seeing the incredible
							resourcefulness of the people.
						</p>
					</div>
				</a>

				<a class="group/album block mt-2xl" href="/albums/earthbound">
					<div class="flex items-end gap-lg">
						<h4 class="text-2xl tracking-widest">This Music Thing</h4>

						<span
							class="text-sm tracking-wide uppercase -translate-y-[3px] gap-sm opacity-0 transition-opacity ease-in-out text-my-black-100 duration-100 group-hover/album:opacity-100"
						>
							visit
						</span>
					</div>

					<div class="mt-lg flex gap-xl">
						<p class="leading-relaxed text-lg max-w-[500px] tracking-wide">
							This Music Thing is a beautiful album of storytelling in the Country Americana music
							style. <br /><br />
							It's produced by Wes Maebe and features artists such as Chris Bell (Specimen, Gene Loves
							Jezebel, Spear Of Destiny, Thompson Twins, Hugh Cornwell) and Jon Klein (Specimen, The
							Banshees, Sinead O'Connor)... and a host of other wonderful musicians.
						</p>
					</div>
				</a>

				<a class="group/album block mt-2xl" href="/albums/red-brick-angels">
					<div class="flex items-end gap-lg">
						<h4 class="text-2xl tracking-widest">Red Brick Angels</h4>

						<span
							class="text-sm tracking-wide uppercase -translate-y-[3px] gap-sm opacity-0 transition-opacity ease-in-out text-my-black-100 duration-100 group-hover/album:opacity-100"
						>
							visit
						</span>
					</div>

					<div class="mt-lg flex gap-xl">
						<p class="leading-relaxed text-lg max-w-[500px] tracking-wide">
							Red Brick Angels is a beautiful 12 song album.
							<br /><br />
							We played and recorded it live in an intensive 6 days with Wes Maebe at the helm in Europe's
							renowned Galaxy Studios.
						</p>
					</div>
				</a>
			</div>
		</div>
	</div>
</div>
