<script lang="ts" context="module">
	import { images } from '$lib/assets';
	import { Picture } from '$lib/components';
</script>

<Picture
	imageClass="w-full h-[20px] overflow-hidden opacity-80 object-cover"
	meta={images.brick_bg.src}
	sizes={'400px'}
	alt="" />
