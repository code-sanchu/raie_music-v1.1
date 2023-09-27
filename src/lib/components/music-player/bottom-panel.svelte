<script context="module" lang="ts">
	import { Control } from 'phosphor-svelte';

	import { onClickOutside } from '$lib/helpers';
	import { musicPlayerStore, type MusicPlayer as MusicPlayerType } from '$lib/stores';
	import { Tooltip } from '$lib/components';
	import { MusicAnimation, MusicPlayer } from '.';
</script>

<script lang="ts">
	let musicPlayer: MusicPlayerType;

	$: console.log('musicPlayer:', musicPlayer);

	musicPlayerStore.subscribe((playerStore) => {
		musicPlayer = playerStore;
	});
</script>

<div
	class="fixed z-20 bottom-0 left-0 flex justify-between items-center w-screen px-[1.5rem] pb-xs"
	use:onClickOutside={() => {
		musicPlayerStore.update((state) => ({
			...state,
			isOpen: false
		}));
	}}
>
	<button
		class={`font-sans2 z-10 font-thin flex items-center gap-xs tracking-[0.075em] px-xs py-xs ${
			!musicPlayer.isOpen ? 'text-my-black-500 bg-white/70 backdrop-blur-sm' : 'text-white'
		}`}
		type="button"
		on:click={() =>
			musicPlayerStore.update((state) => ({
				...state,
				isOpen: true,
				tracksIsShowing: true
			}))}
		id="music-bottom-panel_track"
	>
		<span>Now playing</span>
		<span class="italic">Wax 'n Wane</span>
		<!-- 		<p>from the album</p>
		<p class="italic">Earthbound.</p>
		<p>Released</p>
		<p class="italic">2016.</p>
		<p>Next up</p>
		<p class="italic">Talkin 'Bout You</p> -->
	</button>
	<Tooltip text="Change track" triggeredById="music-bottom-panel_track" />

	<div
		class={`px-xs py-xs transition-all ease-out duration-300 rounded-sm ${
			!musicPlayer.isOpen ? 'bg-white/70 backdrop-blur-sm' : 'text-white'
		}`}
	>
		<button
			class="flex items-center gap-xl"
			on:click={() =>
				musicPlayerStore.update((state) => ({
					...state,
					isOpen: !musicPlayer.isOpen
				}))}
			type="button"
		>
			<span class="flex items-center gap-xs">
				<span
					class={`text-my-black-300 text-[0.7rem] italic transition-all ease-out duration-300 uppercase ${
						!musicPlayer.isOpen ? 'text-my-black-300' : 'text-white'
					}`}
				>
					{#if !musicPlayer.isOpen}
						open
					{:else}
						close
					{/if}
					player
				</span>

				<span
					class={`text-[0.6rem] text-my-black-300 ${
						!musicPlayer.isOpen ? 'text-my-black-300' : 'text-white rotate-180'
					}`}
				>
					<Control />
				</span>
			</span>

			<MusicAnimation />
		</button>
	</div>

	<MusicPlayer />
</div>
