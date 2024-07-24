<script lang="ts" context="module">
	import type { CompanyTestimony } from '$lib/types';
</script>

<script lang="ts">
	export let testimony: CompanyTestimony;
</script>

<p class="mt-lg border-my-black-50/20 prose text-my-black max-w-[65ch] tracking-wide">
	{testimony.testimony}
</p>
<p class="pl-xs mt-xs italic text-my-black-700 font-medium">— {testimony.title}</p>
