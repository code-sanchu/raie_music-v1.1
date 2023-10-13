<script lang="ts" context="module">
	import { images } from '$lib/assets';
	import { Caption, PageLayout, Picture } from '$lib/components';
	import { Contacts, ListenAndBuy, MainText, SocialMedia } from '$lib/components/+pages/about';
</script>

<PageLayout.VerticalSpacing sizing="1.5" />

<div class="flex justify-center">
	<MainText />
</div>

<PageLayout.VerticalSpacing sizing="3/4" />

<div class="flex justify-center">
	<div class="flex flex-col gap-y-xl md/lg:flex-row max-w-[880px] w-full">
		<!-- class="flex flex-col xs/sm:flex-col-reverse sm:flex-row flex-wrap-reverse gap-lg gap-y-[4.5rem] justify-between"> -->
		<div class="w-[200px] self-end max-w-full sm:hidden">
			<Picture
				imageClass="w-full rounded-sm"
				pictureClass="grayscale"
				meta={images.raie_as_child.src}
				sizes={'200px'}
				loading="eager"
				alt="" />
			<Caption>{images.raie_as_child.caption}</Caption>
		</div>

		<div class="flex flex-col gap-xl items-start">
			<Contacts />

			<SocialMedia />

			<ListenAndBuy />
		</div>

		<div class="flex flex-col sm:flex-row gap-lg justify-end flex-grow">
			<div class="w-[200px] max-w-full hidden sm:block">
				<Picture
					imageClass="w-full rounded-sm"
					pictureClass="grayscale"
					meta={images.raie_as_child.src}
					sizes={'200px'}
					loading="eager"
					alt="" />
				<Caption>{images.raie_as_child.caption}</Caption>
			</div>

			<div class="flex flex-col sm:items-end gap-lg">
				<div class="w-[250px] max-w-full self-end">
					<Picture
						imageClass="w-full rounded-sm"
						pictureClass="grayscale"
						meta={images.galaxy['full-band'].src}
						sizes={'200px'}
						loading="eager"
						alt="" />
					<Caption>{images.galaxy['full-band'].caption}</Caption>
				</div>

				<div class="w-[250px] max-w-full self-end">
					<Picture
						imageClass="w-full rounded-sm"
						pictureClass="grayscale"
						meta={images.galaxy['raie-lead_vocal-young_love'].src}
						sizes={'200px'}
						loading="eager"
						alt="" />
					<Caption>{images.galaxy['raie-lead_vocal-young_love'].caption}</Caption>
				</div>
			</div>
		</div>
	</div>
</div>
