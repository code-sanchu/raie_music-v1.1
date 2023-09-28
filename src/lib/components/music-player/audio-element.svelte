<script context="module" lang="ts">
	import { musicPlayerStore, type MusicPlayer, songsList, updateMusicPlayer } from '$lib/stores';
</script>

<script lang="ts">
	let audioElement: HTMLAudioElement;
	let musicPlayer: MusicPlayer;

	$: console.log('musicPlayer:', musicPlayer);

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

			audioElement.addEventListener('play', () => {
				musicPlayerStore.update((state) => ({
					...state,
					paused: false
				}));
			});
		}
	}

	$: currentSong = songsList[musicPlayer.currentTrackIndex];

	$: handleAudioOnTrackChange(currentSong);

	function handleAudioOnTrackChange(_currentSong: (typeof songsList)[number]) {
		if (!musicPlayer || !audioElement || !musicPlayer.hasBeenPlayed) {
			return;
		}

		const trackHasChanged =
			musicPlayer.currentTrackIndex !== musicPlayer.trackIndexOnLastInteraction;

		if (!trackHasChanged) {
			return;
		}

		setTimeout(() => {
			audioElement.play();
		}, 50);
	}
</script>

<audio
	src={currentSong.localSrc}
	bind:paused={musicPlayer.paused}
	bind:volume={musicPlayer.volume}
	bind:this={audioElement}
/>
