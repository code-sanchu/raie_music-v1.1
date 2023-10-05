<script context="module" lang="ts">
	import type { AlbumKey } from '$lib/data';
	import { musicPlayerInitData, musicPlayerStore, songsList, type MusicPlayer } from '$lib/stores';
	import AlbumTracks from './albumTracks.svelte';

	const albumButtonsData: { key: AlbumKey; name: string }[] = [
		{ key: 'this_music_thing', name: 'This Music Thing' },
		{ key: 'earthbound', name: 'Earthbound' }
	];
</script>

<script lang="ts">
	let musicPlayer: MusicPlayer;

	musicPlayerStore.subscribe((playerStore) => {
		musicPlayer = playerStore;
	});

	$: currentSong = songsList[musicPlayer.currentTrackIndex];

	let visibleAlbumKey: AlbumKey = songsList[musicPlayerInitData.currentTrackIndex].albumKey;

	$: closedOrClosing =
		musicPlayer.tracksVisibility === 'closed' || musicPlayer.tracksVisibility === 'closing';
</script>

<div
	class={`transition-all ease-out duration-150 flex flex-col bg-white ${
		closedOrClosing ? 'h-0 opacity-0 pointer-events-none' : 'h-[250px] mb-sm'
	}`}
>
	<h5 class="italic text-sm flex-shrink-0">Music player</h5>

	<div class="mt-md flex-grow overflow-hidden flex flex-col">
		<h3
			class={`self-start text-xs mr-sm text-my-black-200 italic pt-xs border-t border-my-black-100 ${
				visibleAlbumKey === 'earthbound' ? 'pr-2xl' : 'pr-sm'
			}`}
		>
			Albums
		</h3>

		<div
			class="self-start pr-xl pb-xs flex items-end tracking-wider flex-shrink-0 border-b border-b-my-black-100"
		>
			{#each albumButtonsData as album, i}
				{@const isActive = visibleAlbumKey === album.key}
				{@const isLast = i === albumButtonsData.length - 1}

				<button
					class={`italic transition-colors ease-in-out duration-75 ${
						isActive ? '' : 'text-my-black-400'
					}`}
					on:click={() => (visibleAlbumKey = album.key)}
					type="button"
				>
					{album.name}
				</button>
				{#if !isLast}
					,&nbsp;
				{/if}
			{/each}
		</div>

		<div class={`h-full w-full max-w-full mt-sm self-start overflow-hidden`}>
			{#if visibleAlbumKey === 'this_music_thing'}
				<AlbumTracks albumKey="this_music_thing" />
			{:else}
				<AlbumTracks albumKey="earthbound" />
			{/if}
		</div>
	</div>
</div>
