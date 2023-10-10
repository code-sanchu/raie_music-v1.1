<script lang="ts">
	export let extraClasses: string = '';
</script>

<p
	class={`text-sm mt-xxs tracking-wide text-my-black-700 underline decoration-my-black-400 underline-offset-1 ${extraClasses}`}>
	<slot />
</p>
