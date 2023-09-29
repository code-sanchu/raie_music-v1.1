<script lang="ts" context="module">
	import { images } from '$lib/data';
	import { PageLayout, Picture } from '$lib/components';

	// could have youtube popup for well known bands raie's been a part of.
</script>

<PageLayout.VerticalSpacing />

<PageLayout.HorizontalSpacing>
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

	<PageLayout.VerticalSpacing sizing="3/4" />

	<div class="relative flex justify-center">
		<div>
			<p
				class="relative prose prose-lg leading-relaxed text-2xl max-w-[650px] font-sans2 font-thin tracking-wide"
			>
				<span class="italic font-sans2 font-thin text-my-black-500 tracking-widest text-sm mr-sm"
					>About Raie</span
				> Raie was born in Scotland and came to London when she was 17 years of age. Raie focused on
				being a young Mum to her son Ben before training at drama school in her late twenties; she moved
				into a music career writing for theatre and dance and also sang background vocals for a number
				of bands including the KLF, Orchestre Jazira and Dudu Pukwana.
			</p>

			<PageLayout.VerticalSpacing sizing="half" />

			<div class="flex justify-start">
				<Picture
					imageClass="w-[200px] rounded-sm"
					pictureClass="grayscale opacity-80"
					meta={images.raie_as_child.src}
					sizes={'200px'}
					loading="eager"
					alt=""
				/>
			</div>

			<PageLayout.VerticalSpacing sizing="half" />

			<div class="flex gap-lg">
				<h3 class="italic font-sans2 font-thin text-my-black-500 tracking-widest">The Albums</h3>

				<p
					class="relative prose prose-lg leading-relaxed text-xl max-w-[50ch] font-sans2 font-thin tracking-wide"
				>
					Raie's first album - This Music Thing - was 'birthed' at GMS studio in SE London with Wes
					at the helm - engineering and producing the full album; Wes brought in a host of wonderful
					players including Jon Klein (Specimen, Siouxie and the Banshees, Sinead O'Connor) and
					Chris Bell (Specimen, Thompson Twins, Hugh Cornwell).<br /><br />
				</p>
			</div>

			<PageLayout.VerticalSpacing sizing="3/4" />

			<Picture
				imageClass="w-[400px] h-[20px] overflow-hidden opacity-80"
				meta={images.brick_bg.src}
				sizes={'400px'}
				alt=""
			/>

			<h3 class="italic font-sans2 text-sm font-thin text-my-black-900 tracking-widest mt-md">
				Contacts
			</h3>
		</div>
	</div>

	<PageLayout.VerticalSpacing />
</PageLayout.HorizontalSpacing>
