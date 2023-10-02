<script lang="ts">
	export let sizing: 'half' | 'normal' | '3/4' | 'double' | '1.5' | '1/3' | '2/3' = 'normal';
</script>

<div
	class={`${
		sizing === 'half'
			? 'mt-6 xs:mt-8 lg:mt-12'
			: sizing === '1/3'
			? 'mt-4 xs:mt-[4/3rem] lg:mt-8'
			: sizing === '2/3'
			? 'mt-8 xs:mt-[8/3rem] lg:mt-16'
			: sizing === 'double'
			? 'mt-24 xs:mt-32 lg:mt-48'
			: sizing === '3/4'
			? 'mt-[2.25rem]  xs:mt-12 lg:mt-[4.5rem]'
			: sizing === '1.5'
			? 'mt-[4.5rem]  xs:mt-[6rem] lg:mt-[9rem]'
			: 'mt-12 xs:mt-16 lg:mt-24'
	} `}
/>
