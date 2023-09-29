<script context="module" lang="ts">
	import { musicPlayerStore, type MusicPlayer, songsList, updateMusicPlayer } from '$lib/stores';
</script>

<script lang="ts">
	let audioElement: HTMLAudioElement;
	let musicPlayer: MusicPlayer;

	// $: console.log('musicPlayer:', musicPlayer);

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

		console.log('HELLLO');

		setTimeout(() => {
			audioElement.play();
		}, 50);
	}

	/* 	let timePlayed = 0;
	
	$: endOfTrack = (timePlayed) === audioElement.duration

	$: {
		if (endOfTrack) {

		}
	} */
</script>

<audio
	src={currentSong.localSrc}
	bind:paused={musicPlayer.paused}
	bind:volume={musicPlayer.volume}
	bind:this={audioElement}
	on:ended={() => {
		console.log('ENDED');

		updateMusicPlayer.track('next');
	}}
/>
