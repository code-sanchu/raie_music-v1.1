<script lang="ts" context="module">
	import { Icon } from '$lib/components/icon';
</script>

<script lang="ts">
	export let type: 'left' | 'right';
</script>

<span
	class={`text-xs xs:text-lg md:text-xl text-my-black-100 pl-xxs md:pl-xs ${
		type === 'left' ? 'float-left scale-x-[-1]' : 'float-right'
	}`}
>
	<Icon.Quotes weight="fill" />
</span>
