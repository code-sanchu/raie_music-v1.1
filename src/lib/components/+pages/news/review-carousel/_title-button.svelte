<script lang="ts">
	export let onClick: () => void;
	export let checkIsInView: (onUpdate: (arg0: { isInView: boolean }) => void) => void;
	export let recalcInViewOn: boolean | number | undefined;

	let node: HTMLButtonElement;

	let initialWidth: number;
	let initialHeight: number;

	$: if (node && !initialWidth) {
		const rect = node.getBoundingClientRect();

		initialWidth = rect.width;
		initialHeight = rect.height;
	}

	let isActive = false;

	$: recalcInViewOn, checkIsInView(({ isInView }) => (isActive = isInView));
</script>

<button
	class={`hover:text-my-black-600 transition-all ease-in-out duration-500 ${
		isActive ? 'text-my-black-600 scale-110' : 'text-my-black-400'
	}`}
	on:click={onClick}
	style:width="{initialWidth * 1.05}px"
	style:height="{initialHeight * 1.05}px"
	type="button"
	bind:this={node}>
	<slot />
</button>
