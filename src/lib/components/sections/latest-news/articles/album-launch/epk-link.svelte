<script context="module" lang="ts">
	import { Icon } from '$lib/components';
</script>

<script lang="ts">
	export let extraClasses: string;
</script>

<a
	class={`border items-center gap-xs py-xxs px-xs group/button ${extraClasses}`}
	href="https://raie.bandzoogle.com/home"
	target="_blank">
	<span
		class="text-sm text-my-black-600 italic rounded-sm border-my-black-50/60 tracking-widest group-hover/button:text-my-black transition-colors ease-in-out duration-150"
		>Raie EPK</span>
	<span
		class="text-xs text-my-black-400 group-hover/button:text-my-black-700 transition-colors ease-in-out duration-150"
		><Icon.ExternalLink weight="thin" /></span>
</a>
