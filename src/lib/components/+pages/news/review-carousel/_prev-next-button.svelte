<script lang="ts">
	export let onClick: () => void;
	export let type: 'previous' | 'next';
</script>

<button
	class={`absolute bg-white/80 hover:bg-white/60 rounded-lg top-1/2 -translate-y-1/2 z-10 text-3xl hover:opacity-100 opacity-70 transition-all ease-in-out duration-75 ${
		type === 'previous' ? 'left-0' : 'right-0'
	}`}
	type="button"
	on:click={onClick}>
	<slot />
</button>
