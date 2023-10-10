<script lang="ts" context="module">
	import { Icon } from '$lib/components';
</script>

<script lang="ts">
	export let href: string;
	export let title: string;
</script>

<a class="group/album block mt-2xl" {href}>
	<div class="flex items-center sm:items-end gap-lg">
		<h4 class="text-2xl tracking-widest">{title}</h4>

		<span
			class="hidden sm:block text-sm tracking-wider uppercase -translate-y-[3px] gap-sm opacity-0 transition-opacity ease-in-out text-my-black-100 duration-100 group-hover/album:opacity-100">
			visit
		</span>

		<span class="sm:hidden text-my-black-100">
			<Icon.ArrowRight weight="thin" />
		</span>
	</div>

	<div class="mt-lg">
		<p class="prose text-my-black leading-relaxed text-lg max-w-[550px] tracking-wide">
			<slot name="description" />
		</p>
	</div>
</a>
