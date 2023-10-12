<script lang="ts" context="module">
	import { Tooltip } from 'flowbite-svelte';
	import { onMount } from 'svelte';
	import Device from 'svelte-device-info';
</script>

<script lang="ts">
	export let text: string;
	export let triggeredById: string;

	let canHover: boolean;

	onMount(() => {
		canHover = Device.canHover;
	});
</script>

{#if canHover}
	<Tooltip
		class="py-xxs px-xs bg-my-black-300 text-white rounded-sm hover-hover:inline-block sm:inline-block !hidden"
		type="custom"
		shadow={false}
		arrow={false}
		triggeredBy={`[id^='${triggeredById}']`}>{text}</Tooltip>
{/if}
