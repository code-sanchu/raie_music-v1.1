<script lang="ts">
	export let sizing: 'half' | 'normal' | '3/4' | 'double' = 'normal';
</script>

<div
	class={`${
		sizing === 'half'
			? 'mt-6 xs:mt-8 lg:mt-12'
			: sizing === 'double'
			? 'mt-24 xs:mt-32 lg:mt-48'
			: sizing === '3/4'
			? 'mt-[2.25rem]  xs:mt-12 lg:mt-[4.5rem]'
			: 'mt-12 xs:mt-16 lg:mt-24'
	} `}
/>
