<script context="module" lang="ts">
	import { musicPlayerStore, type MusicPlayer, songsList, updateMusicPlayer } from '$lib/stores';
</script>

<script lang="ts">
	let audioElement: HTMLAudioElement;
	let musicPlayer: MusicPlayer;

	musicPlayerStore.subscribe((playerStore) => {
		musicPlayer = playerStore;
	});

	$: {
		if (audioElement) {
			audioElement.addEventListener(
				'pause',
				() => {
					musicPlayerStore.update((state) => ({
						...state,
						paused: true
					}));
				},
				{ passive: true }
			);

			audioElement.addEventListener(
				'play',
				() => {
					musicPlayerStore.update((state) => ({
						...state,
						paused: false
					}));
				},
				{ passive: true }
			);
		}
	}

	$: currentTrackIndex = musicPlayer.currentTrackIndex;

	$: currentSong = songsList[currentTrackIndex];

	$: handleAudioOnTrackChange(currentSong);

	// could only get this func to run on track change with currentSong as argument; not with musicPlayer.currentTrackIndex, nor trackHasChanged;
	function handleAudioOnTrackChange(_currentSong: (typeof songsList)[number]) {
		// console.log('HANDLE TRACK CHAGE:', musicPlayer);

		if (!musicPlayer || !audioElement || !musicPlayer.hasBeenPlayed) {
			return;
		}

		const trackHasChanged =
			musicPlayer.currentTrackIndex !== musicPlayer.trackIndexOnLastInteraction;

		if (!trackHasChanged) {
			return;
		}

		if (musicPlayer.paused) {
			return;
		}

		setTimeout(() => {
			audioElement.play();
		}, 100);
	}
</script>

<audio
	src={currentSong.localSrc}
	bind:paused={musicPlayer.paused}
	bind:volume={musicPlayer.volume}
	bind:this={audioElement}
	on:ended={() => {
		updateMusicPlayer.track('next');
	}} />
