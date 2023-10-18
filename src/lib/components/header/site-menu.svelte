<script context="module" lang="ts">
	import { page } from '$app/stores';
	import { List } from 'phosphor-svelte';

	import { Icon, LinkIconSwitch, PageLayout, Tooltip } from '$lib/components';
	import { contacts, raie_links_arrs } from '$lib/data';
	import { onClickOutside } from '$lib/helpers';
	import { updateMusicPlayer } from '$lib/stores';
	import { expoOut, quadInOut } from 'svelte/easing';
	import { fade, fly, slide } from 'svelte/transition';

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

	let fadeIn = false;

	$: {
		if (isOpen) {
			setTimeout(() => {
				fadeIn = true;
			}, 200);
		} else {
			fadeIn = false;
		}
	}
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
		class={`fixed top-0 left-0 w-screen h-[396px] max-h-screen overflow-y-auto md:scrollbar-thin md:scrollbar-track-my-black-50/50 md:scrollbar-thumb-my-black-100 md:hover:scrollbar-thumb-my-black-200 px-xs xs:px-sm sm:px-md md:px-lg pb-lg flex justify-center gap-lg bg-white z-[80] `}
		use:onClickOutside={() => (isOpen = false)}
		transition:slide={{ axis: 'y', easing: expoOut, duration: 1100 }}>
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
					{#if fadeIn}
						<h3
							class="tracking-widest text-[0.8rem] italic text-my-black-600"
							in:fly={{ duration: 1300, y: '50%', easing: expoOut }}>
							Site
						</h3>
					{/if}

					<div class="tracking-widest flex flex-col gap-sm mt-md text-my-black-700 items-start">
						{#each sitePageArr as sitePage}
							{#if fadeIn}
								<a
									class={`block ${sitePage.route === currentRoute ? 'italic' : ''}`}
									on:click={() => (isOpen = false)}
									href={sitePage.route}
									in:fly={{
										duration: 1600,
										y: '50%',
										easing: expoOut
									}}>{sitePage.text}</a>
							{/if}
						{/each}

						{#if fadeIn}
							<button
								class="mt-md tracking-widest text-my-black-500"
								on:click={() => {
									isOpen = false;

									updateMusicPlayer.open();
								}}
								type="button"
								in:fly={{ duration: 1600, y: '100%' }}>
								Music player
							</button>
						{/if}
					</div>
				</div>

				<div class="pt-xs border-t md:border-t border-my-black-50/50">
					{#if fadeIn}
						<h3
							class="tracking-widest text-[0.8rem] italic text-my-black-600"
							in:fly={{ duration: 1300, y: '50%', easing: expoOut }}>
							Listen, Buy & Follow
						</h3>
					{/if}

					{#if fadeIn}
						<div
							class="flex text-base items-center gap-sm mt-md"
							in:fly={{
								duration: 1600,
								y: '50%',
								easing: expoOut
							}}>
							{#each [...raie_links_arrs.listen, ...raie_links_arrs.buy, ...raie_links_arrs.follow] as raieLink}
								<a
									class="block rounded-full p-xxs"
									href={raieLink.href}
									target="_blank"
									id={`site_menu-${raieLink.id}`}
									aria-label={`${raieLink.name} link`}>
									<LinkIconSwitch type={raieLink.id} weight="thin" />
								</a>
								<Tooltip text={raieLink.name} triggeredById={`site_menu-${raieLink.id}`} />
							{/each}
						</div>
					{/if}

					{#if fadeIn}
						<h3
							class="mt-xl tracking-widest text-[0.8rem] italic text-my-black-600 border-t border-my-black-50/50 pt-xs"
							in:fly={{ duration: 1300, y: '50%', easing: expoOut }}>
							Contact
						</h3>
					{/if}

					<div class="mt-md">
						{#if fadeIn}
							<div
								class="flex gap-md items-baseline"
								in:fly={{ duration: 1600, y: '50%', easing: expoOut }}>
								<p
									class="uppercase text-[0.6rem] w-[35.913px] tracking-widest italic text-my-black-600">
									Email
								</p>

								<a
									class="tracking-wider text-my-black-700"
									href={`mailto:${contacts.email}`}
									target="_blank">{contacts.email}</a>
							</div>
						{/if}

						{#if fadeIn}
							<div
								class="flex gap-md items-baseline mt-xs"
								in:fly={{ duration: 1600, y: '50%', easing: expoOut }}>
								<p class="uppercase text-[0.6rem] tracking-widest italic text-my-black-600">
									Phone
								</p>

								<a class="text-sm tracking-wider text-my-black-700" href={`tel:${contacts.phone}`}
									>{contacts.phone}</a>
							</div>
						{/if}
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
		class={`fixed inset-0 z-[70] bg-my-black/40 ${isOpen ? '' : ''}`}
		transition:fade={{ easing: expoOut, duration: 1100 }} />
{/if}
