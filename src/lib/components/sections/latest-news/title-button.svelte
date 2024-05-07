<script lang="ts">
	export let text: string;
	export let onClick: () => void;
	export let isActive: boolean;
</script>

<button
	class={`tracking-widest whitespace-nowrap hover:text-my-black-600 transition-all ease-linear duration-200 ${
		isActive
			? 'xs:text-lg sm:text-xl text-my-black-600'
			: 'text-my-black-100 text-sm xs:text-base sm:text-lg'
	}`}
	on:click={onClick}
	type="button">{text}</button>
