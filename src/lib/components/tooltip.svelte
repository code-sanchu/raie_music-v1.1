<script lang="ts" context="module">
	import { Tooltip } from 'flowbite-svelte';
</script>

<script lang="ts">
	export let text: string;
	export let triggeredById: string;
</script>

<Tooltip
	class="py-xxs px-xs bg-my-black-300 text-white rounded-sm"
	type="custom"
	shadow={false}
	arrow={false}
	triggeredBy={`[id^='${triggeredById}']`}>{text}</Tooltip>
