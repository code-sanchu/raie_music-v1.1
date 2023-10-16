<script context="module" lang="ts">
	import { page } from '$app/stores';
	import { List } from 'phosphor-svelte';

	import { Icon, LinkIconSwitch, PageLayout, Tooltip } from '$lib/components';
	import { contacts, raie_links_arrs } from '$lib/data';
	import { onClickOutside } from '$lib/helpers';
	import { updateMusicPlayer } from '$lib/stores';
	import { quadInOut } from 'svelte/easing';
	import { fade, fly } from 'svelte/transition';

	const sitePageArr = [
		{ route: '/', text: 'Home' },
		{ route: '/albums', text: 'Albums' },
		{ route: '/news', text: 'News' },
		{ route: '/voice-coaching', text: 'Voice Coaching' },
		{ route: '/gallery', text: 'Gallery' },
		{ route: '/about', text: 'About' }
	];
</script>

<script lang="ts">
	let isOpen = false;

	let currentRoute: string;

	page.subscribe((pageStore) => {
		if (pageStore.route.id) {
			currentRoute = pageStore.route.id;
		}
	});
</script>

<button
	class="grid place-items-center text-[1.73rem] xs:text-3xl text-my-black-300 relative bg-white/60 rounded-full p-xxs translate-x-xxs"
	on:click={() => (isOpen = true)}
	aria-label="Menu"
	type="button">
	<List weight="thin" />
</button>

{#if isOpen}
	<div
		class={`fixed top-0 left-0 w-screen max-h-screen overflow-y-auto md:scrollbar-thin md:scrollbar-track-my-black-50/50 md:scrollbar-thumb-my-black-100 md:hover:scrollbar-thumb-my-black-200 px-xs xs:px-sm sm:px-md md:px-lg pb-lg flex justify-center gap-lg bg-white z-[80] transition-transform ease-in-out duration-300 ${
			isOpen ? '' : ''
			// isOpen ? '' : '-translate-y-full'
		}`}
		use:onClickOutside={() => (isOpen = false)}
		transition:fly={{ y: '-100%', duration: 750, easing: quadInOut }}>
		<PageLayout.HorizontalSpacing>
			<div class="flex justify-center md:hidden mt-sm">
				<button
					class="border-[0.8px] border-my-black-100 text-my-black-900 p-xxs rounded-md"
					on:click={() => (isOpen = false)}
					type="button"
					aria-label="close menu"><Icon.X weight="thin" /></button>
			</div>

			<div class="grid md:grid-cols-2 gap-xl md:gap-lg w-full mt-md">
				<div class="pt-xs border-t border-my-black-50/50">
					<h3 class="tracking-widest text-[0.8rem] italic text-my-black-600">Site</h3>

					<div class="tracking-widest flex flex-col gap-sm mt-md text-my-black-700">
						{#each sitePageArr as sitePage}
							<a
								class={`${sitePage.route === currentRoute ? 'italic' : ''}`}
								on:click={() => (isOpen = false)}
								href={sitePage.route}>{sitePage.text}</a>
						{/each}

						<button
							class="flex gap-md mt-md items-end"
							on:click={() => {
								isOpen = false;

								updateMusicPlayer.open();
							}}
							type="button">
							<p class="tracking-widest text-my-black-500">Music player</p>

							<!-- <span class="text-[0.6rem] text-my-black-400 italic -translate-y-[1.5px] uppercase"
							>open</span> -->
						</button>
					</div>
				</div>

				<div class="pt-xs border-t md:border-t border-my-black-50/50">
					<!-- <h3 class="tracking-widest font-medium text-sm italic">Listen, Buy & Follow</h3> -->
					<h3 class="tracking-widest text-[0.8rem] italic text-my-black-600">
						Listen, Buy & Follow
					</h3>

					<div class="flex text-base items-center gap-sm mt-md">
						{#each [...raie_links_arrs.listen, ...raie_links_arrs.buy, ...raie_links_arrs.follow] as raieLink}
							<a
								class="rounded-full p-xxs"
								href={raieLink.href}
								target="_blank"
								id={`site_menu-${raieLink.id}`}
								aria-label={`${raieLink.name} link`}>
								<LinkIconSwitch type={raieLink.id} weight="thin" />
							</a>
							<Tooltip text={raieLink.name} triggeredById={`site_menu-${raieLink.id}`} />
						{/each}
					</div>

					<!-- <h3
						class="mt-xl tracking-widest font-medium text-sm italic border-t border-my-black pt-xs">
						Contact
					</h3> -->
					<h3
						class="mt-xl tracking-widest text-[0.8rem] italic text-my-black-600 border-t border-my-black-50/50 pt-xs">
						Contact
					</h3>

					<div class="mt-md">
						<div class="flex gap-md items-baseline">
							<p
								class="uppercase text-[0.6rem] w-[35.913px] tracking-widest italic text-my-black-600">
								Email
							</p>

							<a
								class="tracking-wider text-my-black-700"
								href={`mailto:${contacts.email}`}
								target="_blank">{contacts.email}</a>
						</div>

						<div class="flex gap-md items-baseline mt-xs">
							<p class="uppercase text-[0.6rem] tracking-widest italic text-my-black-600">Phone</p>

							<a class="text-sm tracking-wider text-my-black-700" href={`tel:${contacts.phone}`}
								>{contacts.phone}</a>
						</div>
					</div>
				</div>

				<div class="mt-sm flex justify-center md:hidden mb-2xl">
					<button
						class="border-[0.8px] border-my-black-100 text-my-black-900 p-xxs rounded-md"
						on:click={() => (isOpen = false)}
						type="button"
						aria-label="close menu"><Icon.X weight="thin" /></button>
				</div>
			</div>
		</PageLayout.HorizontalSpacing>
	</div>
{/if}

{#if isOpen}
	<div
		class={`fixed inset-0 z-[70] bg-my-black/40 transition-opacity ease-in-out duration-300 ${
			isOpen ? '' : ''
			// isOpen ? '' : 'pointer-events-none opacity-0'
		}`}
		transition:fade={{ duration: 750, easing: quadInOut }} />
{/if}
