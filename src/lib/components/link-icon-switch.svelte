<script lang="ts" context="module">
	import { Icon, type IconProps } from '$lib/components';
</script>

<script lang="ts">
	export let type:
		| 'facebook'
		| 'instagram'
		| 'soundcloud'
		| 'spotify'
		| 'youtube'
		| 'bandcamp'
		| 'itunes';

	export let weight: IconProps['weight'] = 'regular';
</script>

{#if type === 'facebook'}
	<Icon.Facebook {weight} />
{/if}

{#if type === 'instagram'}
	<Icon.Instagram {weight} />
{/if}

{#if type === 'soundcloud'}
	<Icon.Soundcloud {weight} />
{/if}

{#if type === 'spotify'}
	<Icon.Spotify {weight} />
{/if}

{#if type === 'youtube'}
	<Icon.Youtube {weight} />
{/if}

{#if type === 'bandcamp'}
	<Icon.Bandcamp {weight} />
{/if}

{#if type === 'itunes'}
	<Icon.Itunes {weight} />
{/if}
