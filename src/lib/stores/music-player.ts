import { writable } from 'svelte/store';

import { songsArr } from '$lib/data';

const songsList = [...songsArr.earthbound, ...songsArr.this_music_thing];

type MusicPlayer = {
	currentTrackIndex: number;
	trackIndexOnLastInteraction: number | null;
	paused: boolean;
	hasBeenPlayed: boolean;
	volume: number;
	isOpen: boolean;
	tracksIsOpen: boolean;
};

export const musicPlayerInitData: MusicPlayer = {
	currentTrackIndex: 0,
	trackIndexOnLastInteraction: null,
	paused: true,
	hasBeenPlayed: false,
	volume: 0.6,
	isOpen: false,
	tracksIsOpen: false
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
	isOpen: (isOpen: boolean) => updateMusicPlayerStore('isOpen', isOpen),
	tracksIsOpen: (isOpen: boolean) => updateMusicPlayerStore('tracksIsOpen', isOpen)
};

export { songsList, type MusicPlayer, musicPlayerStore };
