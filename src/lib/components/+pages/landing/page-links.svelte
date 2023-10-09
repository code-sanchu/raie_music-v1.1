<script lang="ts" context="module">
	import { Icon, Images } from '$lib/components';
	import { updateLinksPanel } from '$lib/stores';
</script>

<div class="flex gap-xl justify-end sm:justify-normal">
	<div class="hidden sm:block sm:w-[12px]">
		<Images.BrickBg.Vertical />
	</div>

	<div class="flex flex-col gap-sm items-end sm:text-lg tracking-wide text-my-black-700">
		<span class="text-my-black-800">
			<Icon.ArrowRight weight="thin" />
		</span>

		<a class="" href="/albums">Albums</a>

		<a class="" href="/about">About</a>

		<a class="whitespace-nowrap" href="/voice-coaching">Voice Coaching</a>

		<a class="" href="/gallery">Gallery</a>

		<button class="mt-md" on:click={updateLinksPanel.open} type="button">Links</button>
	</div>
</div>
