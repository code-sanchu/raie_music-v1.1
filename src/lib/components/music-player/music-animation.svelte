<script lang="ts" context="module">
	import { musicPlayerStore, type MusicPlayer } from '$lib/stores';
</script>

<script lang="ts">
	let musicPlayer: MusicPlayer;

	musicPlayerStore.subscribe((playerStore) => {
		musicPlayer = playerStore;
	});

	$: paused = musicPlayer.paused;
	$: console.log('paused:', paused);
</script>

<div class="relative inline-block">
	<div class="inline-block">
		<span
			class="bar n1"
			style:animation-iteration-count={paused ? '1' : 'infinite'}
			style:animation-play-state={paused ? 'paused' : 'running'}
		/>
		<span
			class="bar n2"
			style:animation-iteration-count={paused ? '1' : 'infinite'}
			style:animation-play-state={paused ? 'paused' : 'running'}
		/>
		<span
			class="bar n4"
			style:animation-iteration-count={paused ? '1' : 'infinite'}
			style:animation-play-state={paused ? 'paused' : 'running'}
		/>
		<span
			class="bar n5"
			style:animation-iteration-count={paused ? '1' : 'infinite'}
			style:animation-play-state={paused ? 'paused' : 'running'}
		/>
	</div>
</div>

<style>
	.bar {
		display: inline-block;
		position: relative;
		width: 3px;
		height: 1px;
		background: rgb(193, 193, 193);
		color: transparent;
		animation-name: pulse;
		animation-duration: 3.5s;
		/* animation-iteration-count: infinite; */
	}

	.n1 {
		animation-delay: 0.5s;
	}
	.n2 {
		animation-delay: 0.2s;
	}
	.n4 {
		animation-delay: 0.9s;
	}
	.n5 {
		animation-delay: 2.3s;
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
