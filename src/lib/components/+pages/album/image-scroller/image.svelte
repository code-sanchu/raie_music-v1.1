<script lang="ts">
	export let src: string;
	export let onClick: () => void;
</script>

<!-- svelte-ignore a11y-click-events-have-key-events -->
<!-- svelte-ignore a11y-no-noninteractive-element-interactions -->
<img
	class="rounded-md cursor-zoom-in border p-xs object-cover scroll-mx-lg grayscale"
	{src}
	on:click={onClick}
	alt=""
/>
