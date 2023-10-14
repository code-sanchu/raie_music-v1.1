<script lang="ts" context="module">
	import { DialogOverlay, TransitionChild } from '@rgossiaux/svelte-headlessui';
</script>

<TransitionChild
	enter="ease-out duration-300"
	enterFrom="opacity-0"
	enterTo="opacity-100"
	leave="ease-in duration-200"
	leaveFrom="opacity-100"
	leaveTo="opacity-0">
	<DialogOverlay class="fixed inset-0 bg-white cursor-zoom-out" />
</TransitionChild>
