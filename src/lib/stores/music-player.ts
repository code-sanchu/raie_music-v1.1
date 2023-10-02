import { writable } from 'svelte/store';

import { songsArr } from '$lib/data';

const songsList = [...songsArr.earthbound, ...songsArr.this_music_thing];

type MusicPlayer = {
	currentTrackIndex: number;
	trackIndexOnLastInteraction: number | null;
	paused: boolean;
	hasBeenPlayed: boolean;
	volume: number;
	visibility: 'closed' | 'opening' | 'open' | 'closing';
	tracksVisibility: 'closed' | 'opening' | 'open' | 'closing';
};

export const musicPlayerInitData: MusicPlayer = {
	currentTrackIndex: 0,
	trackIndexOnLastInteraction: null,
	paused: true,
	hasBeenPlayed: false,
	volume: 0.6,
	visibility: 'closed',
	tracksVisibility: 'closed'
};

const musicPlayerStore = writable(musicPlayerInitData);

function updateMusicPlayerStore<TField extends keyof MusicPlayer>(
	field: TField,
	value: MusicPlayer[TField]
) {
	musicPlayerStore.update((state) => {
		return {
			...state,
			[field]: value
		};
	});
}

export const updateMusicPlayer = {
	track: (index: number | 'next' | 'prev') => {
		musicPlayerStore.update((state) => {
			const updatedIndex =
				typeof index === 'number'
					? index
					: index === 'next'
					? state.currentTrackIndex === songsList.length - 1
						? 0
						: state.currentTrackIndex + 1
					: state.currentTrackIndex === 0
					? songsList.length - 1
					: state.currentTrackIndex - 1;

			return {
				...state,
				paused: false,
				hasBeenPlayed: true,
				currentTrackIndex: updatedIndex,
				trackIndexOnLastInteraction: state.currentTrackIndex
			};
		});
	},

	play: () => {
		musicPlayerStore.update((state) => ({
			...state,
			paused: false,
			hasBeenPlayed: true,
			trackIndexOnLastInteraction: state.currentTrackIndex
		}));
	},

	pause: () => updateMusicPlayerStore('paused', true),
	open: () => {
		updateMusicPlayerStore('visibility', 'opening');

		setTimeout(() => {
			updateMusicPlayerStore('visibility', 'open');
		}, 300);
	},
	close: () => {
		updateMusicPlayerStore('visibility', 'closing');

		setTimeout(() => {
			updateMusicPlayerStore('visibility', 'closed');
		}, 300);
	},
	openTracks: () => {
		updateMusicPlayerStore('tracksVisibility', 'opening');

		setTimeout(() => {
			updateMusicPlayerStore('tracksVisibility', 'open');
		}, 150);
	},
	closeTracks: () => {
		updateMusicPlayerStore('tracksVisibility', 'closing');

		setTimeout(() => {
			updateMusicPlayerStore('tracksVisibility', 'closed');
		}, 150);
	}
};

export { songsList, type MusicPlayer, musicPlayerStore };
