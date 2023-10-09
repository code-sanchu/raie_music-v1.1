<script lang="ts">
	export let text: string;
	export let onClick: () => void;
	export let isActive: boolean;
</script>

<button
	class={`tracking-widest whitespace-nowrap transition-all ease-linear duration-200 ${
		isActive ? 'text-lg sm:text-xl text-my-black-600' : 'text-my-black-100 sm:text-lg'
	}`}
	on:click={onClick}
	type="button">{text}</button>
