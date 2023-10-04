<script lang="ts" context="module">
	import { images } from '$lib/assets';
	import { Picture } from '$lib/components';
</script>

<div>
	<h3 class="tracking-widest text-xs sm:text-sm text-my-black-600 uppercase">Latest News</h3>

	<h4 class="mt-xs text-xl sm:text-2xl tracking-widest text-my-black-600">Galaxy Studios</h4>

	<div class="mt-md lg:mt-lg flex gap-lg flex-col sm:flex-col lg:flex-row lg:gap-xl">
		<div class="w-[200px] lg:w-[250px] shrink-0">
			<Picture
				imageClass="rounded-sm"
				meta={images.galaxy['full-band'].src}
				sizes={'250px'}
				alt=""
			/>
		</div>

		<p class="leading-relaxed lg:text-lg max-w-[500px] tracking-wide">
			We came - We saw - We recorded a 12 track album in six days!<br /><br /> Deep in the Belgian
			countryside, surrounded by birdsong and spring breezes - we dug deep into the beautiful Galaxy
			Studios - Eight musicians and Engineer/Producer The Wesonator!<br /><br /> It was intense but we
			handled the pressure with a real belief in the album and we were well prepared having spent two
			intense days in rehearsal back in London.
		</p>
	</div>
</div>
