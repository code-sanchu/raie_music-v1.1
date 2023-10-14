<script context="module" lang="ts">
	import { musicPlayerStore, type MusicPlayer, updateMusicPlayer } from '$lib/stores';
	import { songsList } from '$lib/data';
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

			audioElement.addEventListener(
				'loadstart',
				() => {
					updateMusicPlayer.isLoadingAudio(true);
				},
				{ passive: true }
			);

			audioElement.addEventListener(
				'canplay',
				() => {
					updateMusicPlayer.isLoadingAudio(false);
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
