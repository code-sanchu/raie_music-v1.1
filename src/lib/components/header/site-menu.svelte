<script context="module" lang="ts">
	import { List, MusicNote } from 'phosphor-svelte';

	import { Icon, PageLayout } from '$lib/components';
	import { onClickOutside } from '$lib/helpers';
	import { updateMusicPlayer } from '$lib/stores';
</script>

<script lang="ts">
	let isOpen = false;
</script>

<button
	class="grid place-items-center text-3xl text-my-black-400 relative"
	on:click={() => (isOpen = true)}
	type="button"
>
	<List />
</button>

<div
	class={`fixed top-0 left-0 w-screen px-lg pb-lg flex justify-center gap-lg bg-white z-[80] transition-transform ease-in-out duration-300 ${
		isOpen ? '' : '-translate-y-full'
	}`}
	use:onClickOutside={() => (isOpen = false)}
>
	<PageLayout.HorizontalSpacing>
		<div class="grid grid-cols-2 gap-lg w-full mt-md">
			<div class="pt-xs border-t-2 border-my-black">
				<h2 class="tracking-widest font-medium text-sm italic">Site</h2>

				<div class="tracking-widest flex flex-col gap-sm mt-md text-my-black-700">
					<a class="" on:click={() => (isOpen = false)} href="/albums">
						<span>Albums</span>
					</a>

					<a class="" on:click={() => (isOpen = false)} href="/about">About</a>

					<a class="" on:click={() => (isOpen = false)} href="/voice-coaching">
						<span>Voice Coaching</span>
					</a>

					<a class="" on:click={() => (isOpen = false)} href="/gallery">
						<span>Gallery</span>
					</a>
				</div>
			</div>

			<div class="pt-xs border-t-2 border-my-black">
				<h2 class="tracking-widest font-medium text-sm italic">Listen, Buy & Follow</h2>

				<div class="flex text-base items-center gap-sm mt-md">
					<a class="rounded-full p-xxs" href="." id="links_panel-facebook">
						<Icon.Soundcloud weight="fill" />
					</a>

					<a class="rounded-full p-xxs" href="." id="links_panel-insta">
						<Icon.Spotify weight="fill" />
					</a>

					<a class="rounded-full p-xxs" href="." id="links_panel-insta">
						<Icon.Youtube weight="fill" />
					</a>
					<a class="rounded-full p-xxs" href="." id="links_panel-insta">
						<Icon.Bandcamp weight="fill" />
					</a>

					<a class="rounded-full p-xxs" href="." id="links_panel-insta">
						<Icon.Itunes weight="fill" />
					</a>

					<a class="rounded-full p-xxs" href="." id="links_panel-facebook">
						<Icon.Facebook weight="fill" />
					</a>

					<a class="rounded-full p-xxs" href="." id="links_panel-insta">
						<Icon.Instagram weight="fill" />
					</a>
				</div>

				<h2 class="mt-xl tracking-widest font-medium text-sm italic border-t border-my-black pt-xs">
					Contact
				</h2>

				<div class="mt-md">
					<div class="flex gap-md tracking-wider items-center">
						<p class="uppercase text-[0.6rem]">Email</p>
						<a class="" href="mailto:rachel@raiemusic.com" target="_blank">rachel@raiemusic.com</a>
					</div>
					<div class="flex gap-md tracking-wider items-center mt-xs">
						<p class="uppercase text-[0.6rem]">Phone</p>
						<a class="text-sm" href="mailto:rachel@raiemusic.com" target="_blank">07949 876 703</a>
					</div>
				</div>

				<h2 class="mt-xl tracking-widest font-medium text-sm italic border-t border-my-black pt-xs">
					Music Player
				</h2>

				<div class="mt-md">
					<button
						class="uppercase text-xs tracking-widest border py-xxs px-xs border-my-black-300 rounded-md flex items-center gap-xs"
						on:click={() => {
							isOpen = false;
							setTimeout(() => {
								updateMusicPlayer.open();
							}, 100);
						}}
						type="button"
					>
						<span class="grid place-items-center text-my-black-300"><MusicNote /></span>
						<span>open</span>
					</button>
				</div>
			</div>
		</div>
	</PageLayout.HorizontalSpacing>
</div>

<div
	class={`fixed inset-0 z-[70] bg-my-black/40 transition-opacity ease-in-out duration-300 ${
		isOpen ? '' : 'pointer-events-none opacity-0'
	}`}
/>
