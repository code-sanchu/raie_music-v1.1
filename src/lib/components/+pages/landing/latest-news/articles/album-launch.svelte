<script context="module" lang="ts">
	import { Link } from '$lib/components/prose';
	import { Container, TextContainer } from './_components';
</script>

<script lang="ts">
	export let userHasScrolledTracks = false;
	export let isOverflow = false;
</script>

<Container bind:userHasScrolledTracks bind:isOverflow>
	<TextContainer numColumns={1}>
		We launch at <Link href="https://thecamdenclub.co.uk/">The Camden Club</Link>
		on November 8th – doors at 18.15 – on stage at 19.15 – an early one so we can encourage industry
		to pop in after work!.. and besides it’s a mid-week gig so we have to think of work mornings on the
		9th!
	</TextContainer>
</Container>
