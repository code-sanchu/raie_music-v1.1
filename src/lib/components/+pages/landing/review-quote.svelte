<script lang="ts">
	export let reviewer: { name: string; org: string };
</script>

<div class="max-w-[520px]">
	<p class="text-2xl tracking-wider flex flex-col gap-xxs">
		<slot name="quote" />
	</p>

	<p class="pl-lg mt-md tracking-wide text-my-black-700 font-light">
		{reviewer.name} — {reviewer.org}
	</p>
</div>
