<script lang="ts">
	export let href: string;
	export let target: '_blank' | '_self' = '_blank';
</script>

<a
	class="underline font-thin text-inherit decoration-my-black-50/30 hover:decoration-my-black-50/80 transition-all ease-in-out duration-150 underline-offset-2"
	{href}
	{target}><slot /></a>
