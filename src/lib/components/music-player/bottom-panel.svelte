<script context="module" lang="ts">
	import { Control } from 'phosphor-svelte';

	import { onClickOutside } from '$lib/helpers';
	import {
		musicPlayerStore,
		songsList,
		type MusicPlayer as MusicPlayerType,
		updateMusicPlayer
	} from '$lib/stores';

	import { Tooltip } from '$lib/components';
	import MusicPlayerNew from './music-player/+entry.svelte';
	import { AnimatedBars } from './animated-bars';
</script>

<script lang="ts">
	let musicPlayer: MusicPlayerType;

	musicPlayerStore.subscribe((playerStore) => {
		musicPlayer = playerStore;
	});

	$: currentSong = songsList[musicPlayer.currentTrackIndex];

	$: closedOrClosing = musicPlayer.visibility === 'closed' || musicPlayer.visibility === 'closing';

	// let openPlayerButton: HTMLButtonElement
	// let fullBottomRightPanelDummy: HTMLDivElement
</script>

<div
	class="fixed z-20 group/panel bottom-0 left-0 flex justify-between items-center w-screen px-[1.5rem] pb-xs"
	use:onClickOutside={updateMusicPlayer.close}
>
	<div
		class={`p-xs ${
			musicPlayer.visibility === 'closed' ? 'bg-white/70 backdrop-blur-sm' : 'bg-transparent'
		}`}
		id="music-bottom-panel_track"
	>
		<button
			class={`font-sans2 z-10 transition-colors ease-in-out duration-150 font-thin flex items-center gap-xs tracking-[0.075em] ${
				closedOrClosing ? 'text-my-black-500 group-hover/panel:text-my-black-700' : ''
			}`}
			on:click={() => {
				updateMusicPlayer.open();
				updateMusicPlayer.openTracks();
			}}
			type="button"
		>
			<span>Now playing</span>
			<span class="italic">{currentSong.name}</span>
		</button>
	</div>
	{#if musicPlayer.visibility === 'closed'}
		<Tooltip text="Change track" triggeredById="music-bottom-panel_track" />
	{/if}

	<div
		class={`p-xs rounded-sm ${
			musicPlayer.visibility === 'closed' ? 'bg-white/70 backdrop-blur-sm' : ''
		}`}
	>
		<button
			class={`flex items-center transition-all ease-out duration-700 ${
				musicPlayer.paused ? 'w-[89.963px]' : 'w-[179.087px]'
			}`}
			on:click={() => {
				if (closedOrClosing) {
					updateMusicPlayer.open();
				} else {
					updateMusicPlayer.close();
				}
			}}
			type="button"
		>
			<span class="flex items-center gap-xs">
				<span
					class={`text-my-black-300 whitespace-nowrap text-[0.7rem] italic transition-all ease-out duration-300 uppercase ${
						closedOrClosing ? 'text-my-black-300 group-hover/panel:text-my-black-600' : ''
					}`}
				>
					{#if closedOrClosing}
						open
					{:else}
						close
					{/if}
					player
				</span>

				<span
					class={`text-[0.6rem] transition-all ease-in-out duration-300 ${
						closedOrClosing ? 'text-my-black-300 group-hover/panel:text-my-black-600' : 'rotate-180'
					}`}
				>
					<Control />
				</span>
			</span>

			<div
				class={`ml-xl h-[24px] transition-opacity ease-out duration-700 ${
					musicPlayer.paused ? 'opacity-0' : ''
				}`}
			>
				<AnimatedBars />
			</div>
		</button>
	</div>

	<MusicPlayerNew />
</div>
