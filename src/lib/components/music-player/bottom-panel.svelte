<script context="module" lang="ts">
	import { Control } from 'phosphor-svelte';

	import { onClickOutside } from '$lib/helpers';
	import { musicPlayerStore, songsList, type MusicPlayer as MusicPlayerType } from '$lib/stores';
	import { Tooltip } from '$lib/components';
	import { MusicAnimation, MusicPlayer } from '.';
</script>

<script lang="ts">
	let musicPlayer: MusicPlayerType;

	musicPlayerStore.subscribe((playerStore) => {
		musicPlayer = playerStore;
	});

	$: currentSong = songsList[musicPlayer.currentTrackIndex];
</script>

<div
	class="fixed z-20 group/panel bottom-0 left-0 flex justify-between items-center w-screen px-[1.5rem] pb-xs"
	use:onClickOutside={() => {
		musicPlayerStore.update((state) => ({
			...state,
			isOpen: false
		}));
	}}
>
	<button
		class={`font-sans2 z-10 transition-all ease-in-out duration-300 font-thin flex items-center gap-xs tracking-[0.075em] px-xs py-xs ${
			!musicPlayer.isOpen
				? 'text-my-black-500 group-hover/panel:text-my-black-900 bg-white/70 backdrop-blur-sm'
				: 'text-white'
		}`}
		type="button"
		on:click={() =>
			musicPlayerStore.update((state) => ({
				...state,
				isOpen: true,
				tracksIsOpen: true
			}))}
		id="music-bottom-panel_track"
	>
		<span>Now playing</span>
		<span class="italic">{currentSong.name}</span>
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
						!musicPlayer.isOpen
							? 'text-my-black-300 group-hover/panel:text-my-black-600'
							: 'text-white'
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
					class={`text-[0.6rem] transition-all ease-in-out duration-300 ${
						!musicPlayer.isOpen
							? 'text-my-black-300 group-hover/panel:text-my-black-600'
							: 'text-white rotate-180'
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
