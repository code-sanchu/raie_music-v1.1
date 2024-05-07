<script lang="ts" context="module">
	import { Icon } from '$lib/components';
</script>

<script lang="ts">
	export let href: string;
	export let target: '_blank' | '_self' = '_blank';
	export let id: string | undefined = undefined;
</script>

<a
	class="group/link underline inline-flex items-center gap-xxxs font-thin text-inherit decoration-my-black-50/40 hover:decoration-my-black-50/80 transition-all ease-in-out duration-150 underline-offset-[3px]"
	{href}
	{target}
	{id}
	><slot />
	<span
		class="text-my-black-200/80 text-xs group-hover/link:text-my-black-400 transition-colors ease-in-out duration-300">
		<Icon.ExternalLink />
	</span>
</a>
