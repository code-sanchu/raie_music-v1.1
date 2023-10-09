<script lang="ts" context="module">
	import { Images, PageLayout } from '$lib/components';
	import { Album } from '$lib/components/+pages/albums';
</script>

<PageLayout.VerticalSpacing sizing="1.5" />

<div class="">
	<div class="">
		<Images.BrickBg.HorizontalThree />

		<PageLayout.VerticalSpacing sizing="2/3" />

		<div
			class="prose prose-a:no-underline leading-relaxed italic text-lg tracking-wider text-my-black-700 max-w-[700px]">
			<p class="">
				Check out Raie’s albums here – two stunning releases over the last decade, soon to become
				three!
			</p>

			<p class="">
				Raie’s prolific writing talent combined with <a
					href="https://www.wesonator.com/"
					target="_blank">Wes Maebe’s</a> international award-winning engineering and production skills
				… a host of top UK/US players and some Love (that essential ingredient!) thrown in for good measure
				…. equals a recipe for success!
			</p>
		</div>

		<Album href="/albums/red-brick-angels" title="Red Brick Angels">
			<svelte:fragment slot="description">
				Red Brick Angel is Raie’s third album project with the award winning Wesonator!
				<br /><br />
				Recorded in six days at Galaxy studios in Belgium, the ‘live and real’ feel of the tracks is
				distinctive and inimitably superb! Raie is joined again by Christiano Tortoioli on electric bass,
				Chris Bell on drums as well as Jon Klein and Elliot Randal who both feature on guitar solo outros
				for the tracks Free Now and Convoy of Tears respectively.
			</svelte:fragment>
		</Album>

		<Album href="/albums/this-music-thing" title="This Music Thing">
			<svelte:fragment slot="description">
				This Music Thing is a beautiful album of storytelling in the Country Americana music style. <br /><br />
				It's produced by Wes Maebe and features artists such as Chris Bell (Specimen, Gene Loves Jezebel,
				Spear Of Destiny, Thompson Twins, Hugh Cornwell) and Jon Klein (Specimen, The Banshees, Sinead
				O'Connor)... and a host of other wonderful musicians.
			</svelte:fragment>
		</Album>

		<Album href="/albums/earthbound" title="Earthbound">
			<svelte:fragment slot="description">
				Earthbound is an Indie/Folk Ballad about human determination and resourcefulness.<br /><br />
				Raie journeyed to Goa in India with friends and Earthbound was inspired by seeing the incredible
				resourcefulness of the people.
			</svelte:fragment>
		</Album>
	</div>
</div>
