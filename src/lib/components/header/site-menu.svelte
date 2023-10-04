<script context="module" lang="ts">
	import { List } from 'phosphor-svelte';

	import { onClickOutside } from '$lib/helpers';
	import { external_links } from '$lib/data';
	import { updateMusicPlayer } from '$lib/stores';
	import { Icon, PageLayout, Tooltip } from '$lib/components';
</script>

<script lang="ts">
	let isOpen = false;
</script>

<button
	class="grid place-items-center text-2xl xs:text-3xl text-my-black-400 relative"
	on:click={() => (isOpen = true)}
	type="button"
>
	<List />
</button>

<div
	class={`fixed top-0 left-0 w-screen max-h-screen overflow-y-auto px-lg pb-lg flex justify-center gap-lg bg-white z-[80] transition-transform ease-in-out duration-300 ${
		isOpen ? '' : '-translate-y-full'
	}`}
	use:onClickOutside={() => (isOpen = false)}
>
	<PageLayout.HorizontalSpacing>
		<div class="grid md:grid-cols-2 gap-lg w-full mt-md">
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

					<button
						class="flex gap-md mt-md items-end"
						on:click={() => {
							isOpen = false;

							updateMusicPlayer.open();
						}}
						type="button"
					>
						<p class="tracking-widest text-my-black-700">Music player</p>
						<span class="text-[0.6rem] text-my-black-400 italic -translate-y-[1.5px] uppercase"
							>open</span
						>
					</button>
				</div>
			</div>

			<div class="pt-xs border-t-2 border-my-black">
				<h2 class="tracking-widest font-medium text-sm italic">Listen, Buy & Follow</h2>

				<div class="flex text-base items-center gap-sm mt-md">
					<a
						class="rounded-full p-xxs"
						href={external_links.listen.soundcloud}
						target="_blank"
						id="site_menu-soundcloud"
					>
						<Icon.Soundcloud weight="fill" />
					</a>
					<Tooltip text="Soundcloud" triggeredById="site_menu-soundcloud" />

					<a
						class="rounded-full p-xxs"
						href={external_links.listen.spotify}
						target="_blank"
						id="site_menu-spotify"
					>
						<Icon.Spotify weight="fill" />
					</a>
					<Tooltip text="Spotify" triggeredById="site_menu-spotify" />

					<a
						class="rounded-full p-xxs"
						href={external_links.listen.youtube}
						target="_blank"
						id="site_menu-youtube"
					>
						<Icon.Youtube weight="fill" />
					</a>
					<Tooltip text="Youtube" triggeredById="site_menu-youtube" />

					<a
						class="rounded-full p-xxs"
						href={external_links.buy.bandcamp}
						target="_blank"
						id="site_menu-bandcamp"
					>
						<Icon.Bandcamp weight="fill" />
					</a>
					<Tooltip text="Bandcamp" triggeredById="site_menu-bandcamp" />

					<a
						class="rounded-full p-xxs"
						href={external_links.buy.itunes}
						target="_blank"
						id="site_menu-itunes"
					>
						<Icon.Itunes weight="fill" />
					</a>
					<Tooltip text="Itunes" triggeredById="site_menu-itunes" />

					<a
						class="rounded-full p-xxs"
						href={external_links.follow.facebook}
						id="site_menu-facebook"
					>
						<Icon.Facebook weight="fill" />
					</a>
					<Tooltip text="Facebook" triggeredById="site_menu-facebook" />

					<a
						class="rounded-full p-xxs"
						href={external_links.follow.instagram}
						target="_blank"
						id="site_menu-insta"
					>
						<Icon.Instagram weight="fill" />
					</a>
					<Tooltip text="Instagram" triggeredById="site_menu-insta" />
				</div>

				<h2 class="mt-xl tracking-widest font-medium text-sm italic border-t border-my-black pt-xs">
					Contact
				</h2>

				<div class="mt-md">
					<div class="flex gap-md tracking-wider items-end">
						<p class="uppercase text-[0.6rem] tracking-widest -translate-y-[3px] italic">Email</p>
						<a class="tracking-widest itai" href="mailto:rachel@raiemusic.com" target="_blank"
							>rachel@raiemusic.com</a
						>
					</div>

					<div class="flex gap-md tracking-wider items-end mt-xs">
						<p class="uppercase text-[0.6rem] tracking-widest -translate-y-[2.01px] italic">
							Phone
						</p>
						<a class="text-sm" href="mailto:rachel@raiemusic.com" target="_blank">07949 876 703</a>
					</div>
				</div>
			</div>

			<div class="mt-lg flex justify-center md:hidden">
				<button
					class="border border-my-black p-xxs rounded-md"
					on:click={() => (isOpen = false)}
					type="button"><Icon.X /></button
				>
			</div>
		</div>
	</PageLayout.HorizontalSpacing>
</div>

<div
	class={`fixed inset-0 z-[70] bg-my-black/40 transition-opacity ease-in-out duration-300 ${
		isOpen ? '' : 'pointer-events-none opacity-0'
	}`}
/>
