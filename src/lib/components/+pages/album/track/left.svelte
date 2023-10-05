<script lang="ts" context="module">
	import { Icon } from '$lib/components';

	import type { SongData } from '$lib/data';
	import { musicPlayerStore, songsList, type MusicPlayer } from '$lib/stores';
</script>

<script lang="ts">
	export let data: SongData;

	const { name, number, id } = data;

	let showReadMore: boolean;

	let musicPlayer: MusicPlayer;

	musicPlayerStore.subscribe((playerStore) => {
		musicPlayer = playerStore;
	});

	const songListIndex = songsList.findIndex((songListSong) => songListSong.id === id);

	$: currentTrackIndex = musicPlayer.currentTrackIndex;
	$: isCurrentTrack = currentTrackIndex === songListIndex;
</script>

<div class="flex gap-lg flex-nowrap items-center flex-grow">
	<p class="text-my-black-400 text-sm self-end">{number}</p>

	<button
		class="self-end flex flex-nowrap items-end gap-md text-sm group/button"
		on:click={() => (showReadMore = !showReadMore)}
		type="button">
		<span class="tracking-wider italic whitespace-nowrap">{name}</span>
		<span
			class="text-my-black-100 flex flex-nowrap gap-xs items-center transition-colors ease-in-out duration-75 ml-sm group-hover/track:text-my-black-400">
			<span class="whitespace-nowrap">read{showReadMore ? ' less' : ' more'}</span>
			<span
				class={`text-xs text-my-black-50 p-xxxs rounded-full group-hover/button:bg-gray-100 transition-all ease-in-out duration-75 ${
					showReadMore ? 'rotate-180' : ''
				}`}>
				<Icon.CaretDown />
			</span>
		</span>
	</button>

	{#if !musicPlayer.paused && isCurrentTrack}
		<p class="sm:hidden text-[0.8rem] italic text-my-black-300 tracking-wide">currently playing</p>
	{/if}
</div>
