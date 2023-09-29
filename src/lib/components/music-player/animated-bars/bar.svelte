<script lang="ts" context="module">
	import { musicPlayerStore, type MusicPlayer } from '$lib/stores';
</script>

<script lang="ts">
	export let animationDelay: string;

	let musicPlayer: MusicPlayer;

	musicPlayerStore.subscribe((playerStore) => {
		musicPlayer = playerStore;
	});
</script>

<span
	class={`inline-block my-animation bg-my-black-100 w-[3px] h-[1px] ${animationDelay}`}
	style:animation-iteration-count={musicPlayer.paused ? '1' : 'infinite'}
/>

<style>
	.my-animation {
		animation-name: pulse;
		animation-duration: 3.5s;
	}

	@keyframes pulse {
		0% {
			height: 1px;
			margin-top: 0;
			opacity: 20%;
		}
		10% {
			height: 9px;
			margin-top: -40px;
			opacity: 80%;
		}
		50% {
			height: 5px;
			margin-top: -20px;
			opacity: 50%;
		}
		60% {
			height: 7px;
			margin-top: -30px;
			opacity: 70%;
		}
		80% {
			height: 11px;
			margin-top: -60px;
			opacity: 100%;
		}
		100% {
			height: 1px;
			margin-top: 0;
			opacity: 20%;
		}
	}
</style>
