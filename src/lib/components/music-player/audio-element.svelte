<script context="module" lang="ts">
	import { songs, GetSongKey, AlbumKey } from '$lib/data';
	import { musicPlayerStore, type MusicPlayer } from '$lib/stores';
</script>

<script lang="ts">
	let audioElement: HTMLAudioElement;
	let musicPlayer: MusicPlayer;

	musicPlayerStore.subscribe((playerStore) => {
		musicPlayer = playerStore;
	});

	$: {
		if (audioElement) {
			audioElement.addEventListener('pause', () => {
				musicPlayerStore.update((state) => ({
					...state,
					paused: true
				}));
			});
		}
	}

	$: album = songs[musicPlayer.currentTrack.albumKey];
	$: song = album[musicPlayer.currentTrack.songKey];
</script>

<audio
	src={''}
	bind:paused={musicPlayer.paused}
	bind:volume={musicPlayer.volume}
	bind:this={audioElement}
/>
