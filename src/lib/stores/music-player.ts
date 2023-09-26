import { writable } from 'svelte/store';

const player: { paused: boolean; volume: number } = {
	paused: true,
	volume: 60
};

export type MusicPlayer = typeof player;

export const musicPlayerStore = writable(player);
