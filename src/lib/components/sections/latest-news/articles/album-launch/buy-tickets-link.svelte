<script context="module" lang="ts">
	import { Icon } from '$lib/components';
</script>

<script lang="ts">
	export let extraClasses: string;
</script>

<a
	class={`border items-center gap-xs py-xxs px-xs group/button ${extraClasses}`}
	href="https://www.fatsoma.com/e/un29hce9/raie-red-brick-angel-album-launch?fbclid=IwAR0kNsjw8-5Jh8ewuSZ7QSuG_J4tc-1V7BF8lAUr0KoCp0tHRXIs102nSqs"
	target="_blank">
	<span
		class="text-sm text-my-black-600 italic rounded-sm border-my-black-50/60 tracking-widest group-hover/button:text-my-black transition-colors ease-in-out duration-150"
		>Buy Tickets</span>
	<span
		class="text-xs text-my-black-400 group-hover/button:text-my-black-700 transition-colors ease-in-out duration-150"
		><Icon.ExternalLink weight="thin" /></span>
</a>
