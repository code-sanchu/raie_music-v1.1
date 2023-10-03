<script context="module" lang="ts">
	import { Control } from 'phosphor-svelte';

	import { onClickOutside } from '$lib/helpers';
	import {
		musicPlayerStore,
		songsList,
		updateMusicPlayer,
		type MusicPlayer as MusicPlayerType
	} from '$lib/stores';

	import { AnimatedBars } from './animated-bars';
	import MusicPlayer from './music-player/+entry.svelte';
</script>

<script lang="ts">
	let musicPlayer: MusicPlayerType;

	musicPlayerStore.subscribe((playerStore) => {
		musicPlayer = playerStore;
	});

	$: currentSong = songsList[musicPlayer.currentTrackIndex];

	$: closedOrClosing = musicPlayer.visibility === 'closed' || musicPlayer.visibility === 'closing';
</script>

<div
	class="fixed z-20 group/panel bottom-0 left-0 w-screen"
	use:onClickOutside={updateMusicPlayer.close}
>
	<div
		class={`flex justify-between items-center px-[1.5rem] pb-xs transition-all ease-in-out duration-300 ${
			closedOrClosing ? '' : 'bg-white'
		}`}
	>
		<div class={`relative p-xs bg-white rounded-sm group/button`}>
			<button
				class={`z-10 transition-colors ease-in-out duration-150  flex items-center gap-xs tracking-[0.075em] ${
					closedOrClosing ? 'text-my-black-500 group-hover/panel:text-my-black-700' : ''
				}`}
				on:click={() => {
					if (musicPlayer.visibility === 'open' || musicPlayer.visibility === 'opening') {
						return;
					}
					updateMusicPlayer.open();
					updateMusicPlayer.openTracks();
				}}
				type="button"
			>
				<span>Now playing</span>
				<span class="italic">{currentSong.name}</span>
			</button>

			<span
				class={`text-[0.6rem]  uppercase italic absolute text-my-black-200 bottom-xxxs -right-0 translate-x-full opacity-0 ease-in-out duration-150 bg-white/80 p-xs delay-300 pointer-events-none ${
					musicPlayer.visibility === 'closed' ? 'group-hover/button:opacity-100' : ''
				}`}
			>
				Change track
			</span>
		</div>

		<div class={`p-xs rounded-sm bg-white`}>
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
						class={`text-my-black-500 whitespace-nowrap text-[0.7rem] italic transition-all ease-out duration-300 uppercase tracking-wider ${
							closedOrClosing ? 'text-my-black-500 group-hover/panel:text-my-black-700' : ''
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
							closedOrClosing
								? 'text-my-black-400 group-hover/panel:text-my-black-600'
								: 'rotate-180'
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
	</div>
	<MusicPlayer />
</div>

<!-- <div
	class={`fixed inset-0 -z-[20] bg-my-black/40 transition-opacity ease-in-out duration-300 ${
		musicPlayer.visibility === 'opening' || musicPlayer.visibility === 'open'
			? ''
			: 'pointer-events-none opacity-0'
	}`}
/> -->
