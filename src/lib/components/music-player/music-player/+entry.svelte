<script context="module" lang="ts">
	import { musicPlayerStore, updateMusicPlayer, type MusicPlayer } from '$lib/stores';
	import { Icon } from '$lib/components';
	import { Tracks } from './tracks';
</script>

<script lang="ts">
	export let pxFromBottom: number;

	let musicPlayer: MusicPlayer;

	musicPlayerStore.subscribe((playerStore) => {
		musicPlayer = playerStore;
	});
</script>

<div
	class={`absolute -z-10 w-screen px-sm sm:px-md md:px-lg pt-sm bottom-0 left-0 transition-all ease-out duration-300 $`}
	style:transform={musicPlayer.visibility === 'closing' || musicPlayer.visibility === 'closed'
		? 'translateY(100%)'
		: `translateY(-${pxFromBottom}px)`}>
	<div class={`flex flex-col md:flex-row`}>
		<div class="bg-white md:w-1/2 pt-lg pb-xs md:pr-md">
			<div class="pt-md border-t-2 border-my-black">
				<Tracks />

				<div class="flex items-center gap-md">
					<button
						class="flex items-center gap-xs"
						on:click={musicPlayer.tracksVisibility === 'closed' ||
						musicPlayer.tracksVisibility === 'closing'
							? updateMusicPlayer.openTracks
							: updateMusicPlayer.closeTracks}
						type="button">
						<span class="text-my-black-600 py-xxs">
							<Icon.Tracks weight="fill" />
						</span>

						<span class={`text-[0.7rem] text-my-black-600 uppercase`}>
							{#if musicPlayer.tracksVisibility === 'closed' || musicPlayer.tracksVisibility === 'closing'}
								show tracks
							{:else}
								hide tracks
							{/if}
						</span>
					</button>
				</div>
			</div>
		</div>

		<div class="flex flex-col md:w-1/2">
			<button
				class="flex-grow h-full cursor-auto"
				on:click={updateMusicPlayer.close}
				type="button" />

			<div class="w-full pt-md md:pt-lg pb-xs md:pl-md bg-white">
				<div class="pt-sm md:pt-md border-t md:border-t-2 border-my-black-700">
					<div class="flex items-center gap-md justify-end text-my-black-800">
						<button
							class="rounded-full p-xxs"
							on:click={musicPlayer.paused ? updateMusicPlayer.play : updateMusicPlayer.pause}
							aria-label="toggle music playing">
							{#if musicPlayer.paused}
								<Icon.Play weight="fill" />
							{:else}
								<Icon.Pause weight="fill" />
							{/if}
						</button>

						<button
							class="rounded-full p-xxs"
							on:click={() => updateMusicPlayer.track('prev')}
							aria-label="previous track">
							<Icon.Prev weight="fill" />
						</button>

						<button
							class="rounded-full p-xxs"
							on:click={() => updateMusicPlayer.track('next')}
							aria-label="next track">
							<Icon.Next weight="fill" />
						</button>
					</div>
				</div>
			</div>
		</div>
	</div>
</div>
