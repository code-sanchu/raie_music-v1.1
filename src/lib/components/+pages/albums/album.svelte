<script lang="ts">
	export let href: string;
	export let title: string;
</script>

<a class="group/album block mt-2xl" {href}>
	<div class="flex items-end gap-lg">
		<h4 class="text-2xl tracking-widest">{title}</h4>

		<span
			class="text-sm tracking-wide uppercase -translate-y-[3px] gap-sm opacity-0 transition-opacity ease-in-out text-my-black-100 duration-100 group-hover/album:opacity-100">
			visit
		</span>
	</div>

	<div class="mt-lg">
		<p class="leading-relaxed text-lg max-w-[550px] tracking-wide">
			<slot name="description" />
		</p>
	</div>
</a>
