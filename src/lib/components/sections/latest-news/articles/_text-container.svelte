<script lang="ts">
	export let extraClasses: string = '';
	export let numColumns: 1 | 2;

	let containerWidth: number;
</script>

<div
	class={`h-[310px] pb-sm text-my-black tracking-wide leading-relaxed gap-md ${
		numColumns === 1 || containerWidth <= 768 ? 'columns-1 max-w-[650px]' : 'columns-1 sm:columns-2'
	} ${extraClasses}`}
	bind:clientWidth={containerWidth}>
	<slot />
</div>
