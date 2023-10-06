<script lang="ts" context="module">
	import { Icon } from '$lib/components';

	import type { SongData } from '$lib/data';
	import { musicPlayerStore, songsList, type MusicPlayer } from '$lib/stores';
</script>

<script lang="ts">
	export let data: SongData;
	export let showReadMore: boolean;

	const { name, number, id } = data;

	let musicPlayer: MusicPlayer;

	musicPlayerStore.subscribe((playerStore) => {
		musicPlayer = playerStore;
	});

	const songListIndex = songsList.findIndex((songListSong) => songListSong.id === id);

	$: currentTrackIndex = musicPlayer.currentTrackIndex;
	$: isCurrentTrack = currentTrackIndex === songListIndex;
</script>

<div class="flex gap-md sm:gap-lg flex-nowrap items-end flex-grow">
	<p class="text-my-black-400 text-sm">{number}</p>

	<button
		class="self-end flex flex-nowrap items-end gap-sm sm:gap-md group/button"
		on:click={() => (showReadMore = !showReadMore)}
		type="button">
		<span
			class={`tracking-wider border-b italic whitespace-nowrap text-[0.925rem] transition-colors ease-in-out duration-300 translate-y-[1.5px] ${
				showReadMore ? 'border-b-my-black-200' : 'border-b-transparent'
			}`}>{name}</span>

		<span class="flex flex-nowrap gap-xs items-center ml-sm">
			<span
				class={`whitespace-nowrap transition-colors ease-in-out duration-75 text-[0.65rem] tracking-wider italic ${
					showReadMore
						? 'text-my-black-300 group-hover/button:text-my-black-500'
						: 'text-my-black-100 group-hover/button:text-my-black-400'
				}`}>about</span>
			<!-- >read{showReadMore ? ' less' : ' more'}</span> -->

			<span
				class={`text-[0.65rem] border-[0.8px] border-transparent p-xxxs rounded-full transition-all ease-in-out duration-300 ${
					showReadMore
						? 'rotate-180 text-my-black-200 group-hover/button:border-my-black-50/40 group-hover/button:text-my-black-500'
						: 'text-my-black-50 group-hover/button:border-my-black-50/40 group-hover/button:text-my-black-400'
				}`}>
				<Icon.CaretDown weight="thin" />
			</span>
		</span>
	</button>

	{#if !musicPlayer.paused && isCurrentTrack}
		<p class="hidden sm:block text-[0.8rem] italic text-my-black-300 tracking-wide">
			currently playing
		</p>
	{/if}
</div>
