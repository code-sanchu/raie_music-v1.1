import { writable } from 'svelte/store';

const player: { paused: boolean } = {
	paused: true
};

export type MusicPlayer = typeof player;

export const musicPlayerStore = writable(player);
