<script context="module" lang="ts">
	import { Control, Pause, Play, SkipBack, SkipForward } from 'phosphor-svelte';

	import { musicPlayerStore, type MusicPlayer } from '$lib/stores';
</script>

<script lang="ts">
	let musicPlayer: MusicPlayer;

	musicPlayerStore.subscribe((playerStore) => {
		musicPlayer = playerStore;
	});

	$: isOpen = musicPlayer.isOpen;
</script>

<div
	class={`absolute -z-10 font-sans2 font-thin tracking-widest w-screen  pb-xs bottom-0 left-0 transition-all ease-out duration-300 bg-my-black-900 text-white pt-xxs rounded-t-lg ${
		!isOpen ? 'translate-y-full' : 'translate-y-0'
	}`}
>
	<div class="pt-xl px-lg border-t rounded-t-lg border-white">
		<div class="mb-[4.0rem] flex justify-between items-end">
			<div class="">
				<div
					class={`flex mb-lg gap-md border border-white rounded-lg overflow-hidden transition-all ease-in-out duration-300 ${
						!musicPlayer.tracksIsShowing ? 'h-0 opacity-0' : 'h-[290.4px] p-sm'
					}`}
				>
					<div class="flex flex-col gap-xs items-start border-r border-white pr-md">
						<h3 class="border-b uppercase text-sm pb-xxs mb-xs">Albums</h3>

						<button class="italic" type="button">This Music Thing</button>

						<button type="button">Earthbound</button>

						<button type="button">Red Brick Angels</button>
					</div>

					<div class="flex flex-col gap-xs items-start">
						<h3 class="border-b uppercase text-sm pb-xxs mb-xs">Tracks</h3>

						<button class="italic" type="button">01 Azhia</button>

						<button type="button">02 Blackbird</button>

						<button type="button">03 Healin' Train</button>

						<button type="button">04 For Jasmine - a Ghost Story</button>

						<button type="button">05 Lena's Song</button>

						<button type="button">06 Melody for Ruth</button>

						<button type="button">07 National TV</button>
					</div>
				</div>

				<button
					class="flex items-center gap-xs"
					on:click={() =>
						musicPlayerStore.update((state) => ({
							...state,
							tracksIsShowing: !musicPlayer.tracksIsShowing
						}))}
					type="button"
				>
					<span
						class={`italic text-my-black-300 text-[0.7rem] transition-all ease-out duration-300 uppercase ${
							!musicPlayer.isOpen ? 'text-my-black-300' : 'text-white'
						}`}
					>
						{#if !musicPlayer.tracksIsShowing}
							change track
						{:else}
							hide tracks
						{/if}
					</span>

					<span
						class={`text-[0.6rem] text-white transition-transform duration-75 ease-in-out ${
							!musicPlayer.tracksIsShowing ? '' : 'rotate-180'
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
							musicPlayerStore.update((state) => ({
								...state,
								paused: !musicPlayer.paused
							}))}
					>
						{#if musicPlayer.paused}
							<Play weight="fill" />
						{:else}
							<Pause weight="fill" />
						{/if}
					</button>

					<button class="text-white rounded-full p-xs text-sm border border-white" type="button">
						<SkipBack weight="fill" />
					</button>

					<button class="text-white rounded-full p-xs text-sm border border-white" type="button">
						<SkipForward weight="fill" />
					</button>

					<!-- <div class="flex items-center gap-sm">
					<p class="text-white text-lg">
						<SpeakerSimpleLow weight="fill" />
					</p>

					<div class="relative w-[100px] grid place-items-center accent-white">
						<Range bind:value={musicPlayer.volume} size="sm" />
					</div>
				</div> -->
				</div>
			</div>
		</div>
	</div>
</div>

<!-- 	<h3 class="font-medium">Music Player</h3>

	<div class="flex gap-md items-center mt-md flex-col">
		<div class="flex items-center gap-xl">
			<button class="text-my-black-200 text-xl" type="button">
				{#if musicPlayer.paused}
					<Play weight="fill" />
				{:else}
					<Pause />
				{/if}
			</button>

			<div class="flex items-center gap-xs">
				<p class="text-my-black-200 text-xl">
					<SpeakerSimpleLow weight="fill" />
				</p>

				<div class="relative w-[100px] grid place-items-center accent-my-black-100">
					<Range bind:value={musicPlayer.volume} size="sm" />
				</div>
			</div>
		</div>

		<p class="flex gap-sm flex-nowrap">
			<span class="whitespace-nowrap">Now playing</span>
			<span class="italic whitespace-nowrap">Wax 'n Wane</span>
		</p>
	</div>

	<div class="mt-md">
		<h4>Tracks</h4>

		<div class="mt-sm grid grid-cols-2">
			<div>
				<h5 class="">This Music Thing</h5>
			</div>

			<div>
				<h5>Earthbound</h5>
			</div>
		</div>
	</div> -->
