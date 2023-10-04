<script context="module" lang="ts">
	import { songsArr, type AlbumKey } from '$lib/data';
	import {
		musicPlayerInitData,
		musicPlayerStore,
		songsList,
		updateMusicPlayer,
		type MusicPlayer
	} from '$lib/stores';
	import { Icon } from '$lib/components';
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
			<button
				class={`italic ${visibleAlbumKey === 'earthbound' ? 'font-medium translate-y-[1px]' : ''}`}
				on:click={() => (visibleAlbumKey = 'earthbound')}
				type="button">Earthbound</button
			>
			,
			<button
				class={`italic ${
					visibleAlbumKey === 'this_music_thing' ? 'font-medium translate-y-[2px]' : ''
				}`}
				on:click={() => (visibleAlbumKey = 'this_music_thing')}
				type="button"
			>
				&nbsp;This Music Thing
			</button>
		</div>

		<div
			class={`h-full max-w-full mt-sm self-start pr-lg lg:pr-3xl flex flex-col items-start gap-xs  scrollbar-track-white scrollbar-thumb-my-black-100 ${
				musicPlayer.visibility === 'open' ? 'overflow-y-auto' : 'overflow-hidden'
			}`}
		>
			{#each songsArr[visibleAlbumKey] as albumSong, i}
				<button
					class="flex gap-sm md:gap-md group/track"
					on:click={() => {
						const songListIndex = songsList.findIndex(
							(songListSong) => songListSong.id === albumSong.id
						);

						if (songListIndex < 0) {
							return;
						}

						updateMusicPlayer.track(songListIndex);
					}}
					type="button"
				>
					<span class="relative">
						<span
							class="group-hover/track:opacity-0 text-my-black-600 text-xs md:text-sm transition-opacity ease-in-out duration-100"
						>
							{i + 1}
						</span>
						<span
							class="absolute md:text-lg text-my-black-700 opacity-0 group-hover/track:opacity-100 transition-opacity ease-in-out duration-100 left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
						>
							<Icon.Play weight="fill" />
						</span>
					</span>

					<span class={`whitespace-nowrap ${albumSong.id === currentSong.id ? 'italic' : ''}`}
						>{albumSong.name}</span
					>
				</button>
			{/each}
		</div>
	</div>
</div>
