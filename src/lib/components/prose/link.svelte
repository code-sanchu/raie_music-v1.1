<script lang="ts" context="module">
	import { Icon } from '$lib/components';
</script>

<script lang="ts">
	export let href: string;
	export let target: '_blank' | '_self' = '_blank';
</script>

<a
	class="underline inline-flex items-center gap-xxxs font-thin text-inherit decoration-my-black-50/40 hover:decoration-my-black-50/80 transition-all ease-in-out duration-150 underline-offset-2"
	{href}
	{target}
	><slot />
	<span class="text-my-black-200/80 text-xs">
		<Icon.ExternalLink />
	</span>
</a>
