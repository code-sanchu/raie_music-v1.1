<script lang="ts" context="module">
	import { images } from '$lib/static';
	import { PageLayout } from '$lib/components';
</script>

<PageLayout.VerticalSpacing />

<PageLayout.HorizontalSpacing>
	<div class="flex justify-center">
		<div class="max-w-[768px]">
			<h1 class="text-3xl mt-md text-my-black-400 tracking-wide">Albums</h1>

			<PageLayout.VerticalSpacing sizing="half" />

			<div>
				<div class="flex gap-md">
					<a class="shrink-0" href="/albums/earthbound">
						<img
							src={images.albums.earthbound.album_cover}
							class="border rounded-md p-xs aspect-square grayscale h-[200px]"
							alt=""
						/>
					</a>

					<div>
						<a href="/albums/earthbound">
							<h2 class="text-2xl font-medium">Earthbound</h2>
						</a>

						<p class="mt-xs text-my-black-500">2016</p>

						<p class="mt-xs">
							Earthbound is an Indie/Folk Ballad about human determination and resourcefulness.
						</p>
						<p class="mt-xs">
							Raie journeyed to Goa in India with friends and Earthbound was inspired by seeing the
							incredible resourcefulness of the people.
						</p>

						<a class=" text-sm text-my-black-400 mt-sm block" href="/albums/earthbound">
							Read more
						</a>
					</div>
				</div>
			</div>
		</div>
	</div>
</PageLayout.HorizontalSpacing>
