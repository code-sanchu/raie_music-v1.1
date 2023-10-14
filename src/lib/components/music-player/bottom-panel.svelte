<script context="module" lang="ts">
	import { onMount } from 'svelte';
	import { fade } from 'svelte/transition';

	import { onClickOutside } from '$lib/helpers';
	import {
		musicPlayerStore,
		updateMusicPlayer,
		type MusicPlayer as MusicPlayerType
	} from '$lib/stores';
	import { songs_tracks_names_only } from '$lib/data';

	import { Icon } from '$lib/components';
	import { AnimatedBars } from './animated-bars';
	import { MusicPlayer } from './music-player';
</script>

<script lang="ts">
	let musicPlayer: MusicPlayerType;

	musicPlayerStore.subscribe((playerStore) => {
		musicPlayer = playerStore;
	});

	$: currentSong = songs_tracks_names_only[musicPlayer.currentTrackIndex];

	$: closedOrClosing = musicPlayer.visibility === 'closed' || musicPlayer.visibility === 'closing';

	let bottomPannelHeight: number = 44;

	let show = false;

	onMount(() => {
		show = true;
	});
</script>

{#if show}
	<div
		class={`fixed z-20 group/panel bottom-0 left-0 w-screen transition-all ease-in-out duration-300 ${
			closedOrClosing ? '' : 'bg-white'
		}`}
		use:onClickOutside={updateMusicPlayer.close}
		bind:clientHeight={bottomPannelHeight}
		in:fade>
		<div
			class="flex justify-between items-center pb-xs transition-all ease-in-out duration-300 px-3 md:px-7 lg:px-11">
			<div
				class={`p-xs rounded-sm group/button invisible xs:visible grid place-items-center`}
				style:background="radial-gradient(white, transparent)">
				<button
					class={`relative z-10 bg-white/10 pr-xs rounded-sm text-sm sm:text-base transition-colors ease-in-out duration-150 flex items-end gap-xs ${
						closedOrClosing ? 'text-my-black-500 group-hover/panel:text-my-black-700' : ''
					}`}
					on:click={() => {
						if (musicPlayer.visibility === 'open' || musicPlayer.visibility === 'opening') {
							return;
						}
						updateMusicPlayer.open();
						updateMusicPlayer.openTracks();
					}}
					type="button">
					<span class="uppercase text-[0.6rem] translate-y-[1.2px] text-my-black-200 tracking-wider"
						>Playing</span>

					<span class="italic text-[0.925rem] tracking-wide">{currentSong.name}</span>

					<span
						class={`text-[0.6rem] uppercase tracking-widest italic absolute text-my-black-800 -bottom-[3px] -right-sm translate-x-full opacity-0 ease-in-out duration-150 bg-white/80 px-xs py-xxxs delay-300 pointer-events-none ${
							musicPlayer.visibility === 'closed' ? 'group-hover/button:opacity-100' : ''
						}`}>
						Change track
					</span>
				</button>
			</div>

			<div
				class="py-xxs px-xs sm:p-xs rounded-xl grid place-items-center"
				style:background="radial-gradient(white, transparent)">
				<button
					class={`group/button relative flex items-end justify-between transition-all ease-out duration-700 ${
						musicPlayer.paused ? 'w-[89.963px]' : 'w-[159.087px]'
					}`}
					on:click={closedOrClosing ? updateMusicPlayer.open : updateMusicPlayer.close}
					type="button">
					<span class="flex items-center gap-xs">
						<span
							class={`text-my-black-900 bg-white/10 pl-xs rounded-sm whitespace-nowrap text-[0.7rem] italic transition-all ease-out duration-300 uppercase tracking-wider ${
								closedOrClosing ? '' : ''
							}`}>
							{#if closedOrClosing}
								music
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
							}`}>
							<Icon.CaretUpSmall />
						</span>
					</span>

					<div
						class={`h-[24px] transition-opacity ease-out duration-700 ${
							musicPlayer.paused ? 'opacity-0' : ''
						}`}>
						<AnimatedBars />
					</div>

					<span
						class={`text-[0.6rem] uppercase tracking-widest italic absolute text-my-black-700 -bottom-[1px] -left-sm -translate-x-full opacity-0 ease-in-out duration-150 bg-white/80 px-xs py-xxxs delay-300 pointer-events-none ${
							musicPlayer.visibility === 'closed' ? 'group-hover/button:opacity-100' : ''
						}`}>
						Open
					</span>
				</button>
			</div>
		</div>

		<MusicPlayer pxFromBottom={bottomPannelHeight} />
	</div>
{/if}
