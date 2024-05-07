<script lang="ts" context="module">
	import { checkIsInView } from '$lib/helpers';
</script>

<script lang="ts">
	export let onClick: () => void;
	export let imagesContainer: HTMLElement | undefined;
	export let imageNode: Element | undefined;
	export let recalcOn: boolean | number | undefined;

	let isActive = false;

	$: imagesContainer,
		imageNode,
		recalcOn,
		checkIsInView({
			container: imagesContainer,
			node: imageNode,
			onUpdate: ({ isInView }) => {
				console.log('hello');

				isActive = isInView;
			}
		});
</script>

<button
	class={`hover:text-my-black-600 transition-all ease-in-out duration-500
  ${isActive ? 'text-my-black-600 scale-110' : 'text-my-black-400'}`}
	on:click={onClick}
	type="button">
	<slot />
</button>
