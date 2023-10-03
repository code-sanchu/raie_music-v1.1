<script lang="ts" context="module">
	import { Images, PageLayout } from '$lib/components';
	import { Album } from '$lib/components/+pages/albums';
</script>

<PageLayout.VerticalSpacing sizing="1.5" />

<div class="">
	<div class="">
		<Images.BrickBg.HorizontalThree />

		<PageLayout.VerticalSpacing sizing="2/3" />

		<div class="flex justify-between">
			<div class="">
				<p
					class="text-2xl tracking-wider flex flex-col gap-xxs text-my-black-800 max-w-[700px] leading-relaxed"
				>
					To date, I've released 2 albums; soon to be 3 with the release of Red Brick Angels on 8th
					November. Maybe talk about Wes, Galaxy Studios a bit here...
				</p>
				<Album href="/albums/red-brick-angels" title="Red Brick Angels">
					<svelte:fragment slot="description">
						Red Brick Angels is an upcoming, beautiful 12 song album.
						<br /><br />
						We played and recorded it live in an intensive 6 days with Wes Maebe at the helm in Europe's
						renowned Galaxy Studios.
					</svelte:fragment>
				</Album>

				<Album href="/albums/this-music-thing" title="This Music Thing">
					<svelte:fragment slot="description">
						This Music Thing is a beautiful album of storytelling in the Country Americana music
						style. <br /><br />
						It's produced by Wes Maebe and features artists such as Chris Bell (Specimen, Gene Loves
						Jezebel, Spear Of Destiny, Thompson Twins, Hugh Cornwell) and Jon Klein (Specimen, The Banshees,
						Sinead O'Connor)... and a host of other wonderful musicians.
					</svelte:fragment>
				</Album>

				<Album href="/albums/earthbound" title="Earthbound">
					<svelte:fragment slot="description">
						Earthbound is an Indie/Folk Ballad about human determination and resourcefulness.<br
						/><br />
						Raie journeyed to Goa in India with friends and Earthbound was inspired by seeing the incredible
						resourcefulness of the people.
					</svelte:fragment>
				</Album>
			</div>
		</div>
	</div>
</div>
