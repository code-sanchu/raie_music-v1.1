<script lang="ts" context="module">
	import { Icon } from '$lib/components';
	import { contacts } from '$lib/data';
</script>

<div class="inline-flex flex-col">
	<h2 class="uppercase italic tracking-widest text-my-black-600 text-sm">contacts</h2>

	<div class="mt-md flex flex-col gap-x-md items-end gap-y-md">
		<div class="flex flex-wrap items-center gap-xs">
			<span class="text-my-black-300">
				<Icon.Email weight="thin" />
			</span>
			<a class="tracking-wider" href={`mailto:${contacts.email}`} target="_blank"
				>{contacts.email}</a>
		</div>

		<div class="flex flex-wrap items-center gap-xs">
			<span class="text-my-black-300">
				<Icon.Tel weight="thin" />
			</span>
			<a class="text-sm tracking-wider" href={`tel:${contacts.phone}`}>{contacts.phone}</a>
		</div>
	</div>
</div>
