import { writable } from 'svelte/store';

import type { AlbumKey } from '$lib/data';

export type MusicPlayer = {
	currentTrack: { albumKey: AlbumKey; songKey: string };
	paused: boolean;
	volume: number;
	isOpen: boolean;
	tracksIsShowing: boolean;
};

const musicPlayer: MusicPlayer = {
	currentTrack: {
		albumKey: 'earthbound',
		songKey: 'blood'
	},
	paused: true,
	volume: 0.6,
	isOpen: false,
	tracksIsShowing: false
};

export const musicPlayerStore = writable(musicPlayer);
