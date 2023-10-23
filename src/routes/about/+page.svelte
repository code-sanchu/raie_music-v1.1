<script lang="ts" context="module">
	import { onMount } from 'svelte';

	import { images } from '$lib/assets';
	import { updateGlobalFlags } from '$lib/stores';
	import { Caption, PageLayout, Picture } from '$lib/components';
	import { Contacts, ListenAndBuy, MainText, SocialMedia } from '$lib/components/+pages/about';
	import { fade } from 'svelte/transition';
</script>

<script lang="ts">
	let mounted = false;

	onMount(() => {
		updateGlobalFlags.firstPageHasMounted();

		mounted = true;
	});
</script>

<PageLayout.Body>
	<PageLayout.VerticalSpacing sizing="1.5" />

	{#if mounted}
		<div class="flex justify-center" in:fade>
			<MainText />
		</div>
	{/if}

	<PageLayout.VerticalSpacing sizing="3/4" />

	<div class="flex justify-center">
		<div class="flex flex-col gap-y-xl md/lg:flex-row max-w-[880px] w-full">
			<!-- class="flex flex-col xs/sm:flex-col-reverse sm:flex-row flex-wrap-reverse gap-lg gap-y-[4.5rem] justify-between"> -->
			{#if mounted}
				<div class="w-[200px] self-end max-w-full sm:hidden" in:fade={{ delay: 200 }}>
					<Picture
						imageClass="w-full rounded-sm"
						pictureClass="grayscale"
						meta={images.raie_as_child.src}
						sizes={'200px'}
						loading="eager"
						alt="" />
					<Caption>{images.raie_as_child.caption}</Caption>
				</div>
			{/if}

			{#if mounted}
				<div class="flex flex-col gap-xl items-start" in:fade>
					<Contacts />

					<SocialMedia />

					<ListenAndBuy />
				</div>
			{/if}

			<div class="flex flex-col sm:flex-row gap-lg justify-end flex-grow" in:fade={{ delay: 200 }}>
				{#if mounted}
					<div
						class="w-[200px] max-w-full hidden sm:block bg-my-black-50/10"
						style:aspect-ratio={images.raie_as_child.naturalDimensions.width /
							images.raie_as_child.naturalDimensions.height}>
						<Picture
							imageClass="w-full rounded-sm"
							pictureClass="grayscale"
							meta={images.raie_as_child.src}
							sizes={'200px'}
							loading="eager"
							alt="" />
						<Caption>{images.raie_as_child.caption}</Caption>
					</div>
				{/if}

				<div class="flex flex-col sm:items-end gap-lg">
					{#if mounted}
						<div>
							<div
								class="w-[250px] max-w-full self-end bg-my-black-50/10"
								in:fade={{ delay: 400 }}
								style:aspect-ratio={images.galaxy['full-band'].naturalDimensions.width /
									images.galaxy['full-band'].naturalDimensions.height}>
								<Picture
									imageClass="w-full rounded-sm"
									pictureClass="grayscale"
									meta={images.galaxy['full-band'].src}
									sizes={'200px'}
									loading="eager"
									alt="" />
								<Caption>{images.galaxy['full-band'].caption}</Caption>
							</div>
						</div>
					{/if}

					{#if mounted}
						<div>
							<div
								class="w-[250px] max-w-full self-end bg-my-black-50/10"
								in:fade={{ delay: 500 }}
								style:aspect-ratio={images.galaxy['raie-lead_vocal-young_love'].naturalDimensions
									.width / images.galaxy['raie-lead_vocal-young_love'].naturalDimensions.height}>
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
					{/if}
				</div>
			</div>
		</div>
	</div>
</PageLayout.Body>
