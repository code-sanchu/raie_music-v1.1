<script lang="ts" context="module">
	import { Tooltip } from 'flowbite-svelte';
</script>

<script lang="ts">
	export let text: string;
	export let triggeredById: string;
</script>

<Tooltip
	class="py-xxs px-xs bg-site-grey text-white rounded-sm"
	type="custom"
	shadow={false}
	triggeredBy={`[id^='${triggeredById}']`}>{text}</Tooltip
>
