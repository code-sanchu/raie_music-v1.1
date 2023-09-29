<script context="module" lang="ts">
	import { Pause, Play, Playlist, SkipBack, SkipForward } from 'phosphor-svelte';

	import { musicPlayerStore, updateMusicPlayer, type MusicPlayer } from '$lib/stores';
	import Tracks from './tracks.svelte';
</script>

<script lang="ts">
	let musicPlayerState: MusicPlayer;

	musicPlayerStore.subscribe((playerStore) => {
		musicPlayerState = playerStore;
	});
</script>

<div
	class={`absolute -z-10 w-screen px-lg pt-sm bottom-0 left-0 transition-all ease-out duration-300 ${
		musicPlayerState.visibility === 'closing' || musicPlayerState.visibility === 'closed'
			? 'translate-y-full'
			: 'translate-y-0'
	}`}
>
	<div class={`flex mb-xl`}>
		<div class="bg-white w-1/2 pt-lg pb-xs pr-md">
			<div class="pt-md border-t-2 border-my-black">
				<Tracks />

				<div class="flex items-center gap-md">
					<button
						class="flex items-center gap-xs"
						on:click={musicPlayerState.tracksVisibility === 'closed' ||
						musicPlayerState.tracksVisibility === 'closing'
							? updateMusicPlayer.openTracks
							: updateMusicPlayer.closeTracks}
						type="button"
					>
						<span class="text-my-black-600 py-xxs">
							<Playlist weight="fill" />
						</span>

						<span class={`text-[0.7rem] text-my-black-600 uppercase`}>
							{#if musicPlayerState.tracksVisibility === 'closed' || musicPlayerState.tracksVisibility === 'closing'}
								show tracks
							{:else}
								hide tracks
							{/if}
						</span>
					</button>
				</div>
			</div>
		</div>

		<div class="flex flex-col w-1/2">
			<button
				class="flex-grow h-full cursor-auto"
				on:click={updateMusicPlayer.close}
				type="button"
			/>

			<div class="w-full bg-white pt-lg pb-xs pl-md">
				<div class="pt-md border-t-2 border-my-black-700">
					<div class="flex items-center gap-md justify-end text-my-black-800">
						<button
							class="rounded-full p-xxs"
							on:click={musicPlayerState.paused ? updateMusicPlayer.play : updateMusicPlayer.pause}
						>
							{#if musicPlayerState.paused}
								<Play weight="fill" />
							{:else}
								<Pause weight="fill" />
							{/if}
						</button>

						<button class="rounded-full p-xxs" on:click={() => updateMusicPlayer.track('prev')}>
							<SkipBack weight="fill" />
						</button>

						<button class="rounded-full p-xxs" on:click={() => updateMusicPlayer.track('next')}>
							<SkipForward weight="fill" />
						</button>
					</div>
				</div>
			</div>
		</div>
	</div>
</div>
