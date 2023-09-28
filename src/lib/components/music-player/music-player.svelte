<script context="module" lang="ts">
	import { Control, Pause, Play, SkipBack, SkipForward } from 'phosphor-svelte';

	import {
		musicPlayerStore,
		type MusicPlayer,
		songsList,
		updateMusicPlayer,
		musicPlayerInitData
	} from '$lib/stores';
	import { songsArr, type AlbumKey, albumsArr } from '$lib/data';
</script>

<script lang="ts">
	let musicPlayer: MusicPlayer;

	// $: console.log('musicPlayer:', musicPlayer);

	musicPlayerStore.subscribe((playerStore) => {
		musicPlayer = playerStore;
	});

	$: currentSong = songsList[musicPlayer.currentTrackIndex];

	let visibleAlbumKey: AlbumKey = songsList[musicPlayerInitData.currentTrackIndex].albumKey;
</script>

<div
	class={`absolute -z-10 font-sans2 font-thin tracking-widest w-screen  pb-xs bottom-0 left-0 transition-all ease-out duration-300 bg-my-black-900 text-white pt-xxs rounded-t-lg ${
		musicPlayer.visibility === 'closing' || musicPlayer.visibility === 'closed'
			? 'translate-y-full'
			: 'translate-y-0'
	}`}
>
	<div
		class={`pt-xl px-lg border-t rounded-t-lg border-white transition-opacity ease-out duration-100 ${
			musicPlayer.visibility === 'closed' || musicPlayer.visibility === 'closing' ? 'opacity-0' : ''
		}`}
	>
		<div class="mb-[4.0rem] flex justify-between items-end">
			<div class="">
				<div
					class={`flex mb-lg gap-md border border-white rounded-lg overflow-hidden transition-all ease-in-out duration-300 ${
						musicPlayer.tracksVisibility === 'closed' || musicPlayer.tracksVisibility === 'closing'
							? 'h-0 opacity-0'
							: `h-[258.4px] p-sm`
					}`}
				>
					<div class="flex flex-col gap-xs items-start border-r border-white pr-md">
						<h3 class="border-b uppercase text-sm pb-xxs mb-xs">Albums</h3>

						{#each albumsArr as album}
							<button
								class={`${album.key === visibleAlbumKey ? 'italic' : ''}`}
								on:click={() => (visibleAlbumKey = album.key)}
								type="button">{album.name}</button
							>
						{/each}
					</div>

					<div class="">
						<h3 class="border-b uppercase text-sm pb-xxs mb-sm">Tracks</h3>

						<div
							class={`h-full flex flex-col items-start gap-xs pr-md scrollbar-track-white scrollbar-thumb-my-black-100 ${
								musicPlayer.visibility === 'open' ? 'overflow-y-auto' : 'overflow-hidden'
							}`}
						>
							{#each songsArr[visibleAlbumKey] as albumSong}
								<button
									class="flex gap-md group/track"
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
											class="group-hover/track:opacity-0 transition-opacity ease-in-out duration-100"
										>
											{albumSong.number}
										</span>
										<span
											class="absolute text-lg opacity-0 group-hover/track:opacity-100 transition-opacity ease-in-out duration-100 left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
										>
											<Play weight="fill" />
										</span>
									</span>

									<span class={`${albumSong.id === currentSong.id ? 'italic' : ''}`}
										>{albumSong.name}</span
									>
								</button>
							{/each}
						</div>
					</div>
				</div>

				<button
					class="flex items-center gap-xs"
					on:click={musicPlayer.tracksVisibility === 'closed' ||
					musicPlayer.tracksVisibility === 'closing'
						? updateMusicPlayer.openTracks
						: updateMusicPlayer.closeTracks}
					type="button"
				>
					<span class={`italic text-[0.7rem] text-white uppercase`}>
						{#if !musicPlayer.tracksVisibility}
							change track
						{:else}
							hide tracks
						{/if}
					</span>

					<span
						class={`text-[0.6rem] text-white transition-transform duration-75 ease-in-out ${
							musicPlayer.tracksVisibility === 'closed' ||
							musicPlayer.tracksVisibility === 'closing'
								? ''
								: 'rotate-180'
						}`}
					>
						<Control />
					</span>
				</button>
			</div>

			<div>
				<div class="flex items-center gap-xl border-b-2 pb-lg border-white pl-3xl">
					<button
						class="text-white rounded-full p-xs text-sm border border-white"
						type="button"
						on:click={() =>
							musicPlayer.paused ? updateMusicPlayer.play() : updateMusicPlayer.pause()}
					>
						{#if musicPlayer.paused}
							<Play weight="fill" />
						{:else}
							<Pause weight="fill" />
						{/if}
					</button>

					<button
						class="text-white rounded-full p-xs text-sm border border-white"
						on:click={() => updateMusicPlayer.track('prev')}
						type="button"
					>
						<SkipBack weight="fill" />
					</button>

					<button
						class="text-white rounded-full p-xs text-sm border border-white"
						on:click={() => {
							updateMusicPlayer.track('next');
						}}
						type="button"
					>
						<SkipForward weight="fill" />
					</button>
				</div>
			</div>
		</div>
	</div>
</div>
