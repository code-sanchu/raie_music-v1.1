<script context="module" lang="ts">
	import { MusicAnimation, MusicPlayerPopover } from './index';
	import { musicPlayerStore, type MusicPlayer } from '$lib/stores';
	import { Control } from 'phosphor-svelte';
</script>

<script lang="ts">
	let musicPlayer: MusicPlayer;

	musicPlayerStore.subscribe((playerStore) => {
		musicPlayer = playerStore;
	});

	$: paused = musicPlayer.paused;
</script>

<div class="fixed bottom-0 left-0 flex justify-between items-center w-screen px-lg pb-xs">
	<div
		class="text-my-black-500 font-sans2 font-thin flex items-center gap-xs tracking-[0.075em] bg-white/70 backdrop-blur-sm px-xs py-xs"
	>
		<p>Now playing</p>
		<p class="italic">Wax 'n Wane</p>
		<!-- 		<p>from the album</p>
		<p class="italic">Earthbound.</p>
		<p>Released</p>
		<p class="italic">2016.</p>
		<p>Next up</p>
		<p class="italic">Talkin 'Bout You</p> -->
	</div>

	<div class="px-xs py-xs rounded-sm bg-white/70 backdrop-blur-sm">
		<MusicPlayerPopover>
			<div class="flex items-center gap-xl">
				<div class="flex items-center gap-xs">
					<span class="text-my-black-300 text-[0.7rem] uppercase">open player</span>

					<span class="text-[0.6rem] text-my-black-300"><Control /></span>
				</div>

				<MusicAnimation />
			</div>
		</MusicPlayerPopover>
	</div>
</div>
