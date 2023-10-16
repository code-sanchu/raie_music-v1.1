<script lang="ts">
	export let extraClasses: string = '';
	export let numColumns: 1 | 2;
</script>

<div
	class={`max-h-[310px] pb-sm text-my-black tracking-wide leading-relaxed gap-md ${
		numColumns === 1 ? 'columns-1' : 'columns-1 sm:columns-2'
	} ${extraClasses}`}>
	<slot />
</div>
