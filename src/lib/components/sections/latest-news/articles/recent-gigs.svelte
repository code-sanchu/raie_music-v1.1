<script context="module" lang="ts">
	import { Link } from '$lib/components/prose';
	import { Container, TextContainer } from './_components';
</script>

<script lang="ts">
	export let height: number;
	export let isActive: boolean;
</script>

<Container bind:height bind:isActive>
	<div>
		<TextContainer numColumns={2}>
			Raie sold out Hope and Anchor – home of The Stranglers and Sinead O’Connor and we were
			delighted to have Sinead’s guitarist Jon Klein play lead for us on the night; check out a
			couple of clips on Raie’s <Link href="https://www.youtube.com/@RachelBennettraiemusic/videos"
				>YouTube channel</Link
			>.
			<br /><br />
			Raie went on to play for Piri Markus’ photographic exhibition at ArtFix Greenwich … a gentle but
			very appreciative crowd supported us; we were a downsized band for this cosy venue … take a
			<Link href="https://www.facebook.com/rachel.bennett.56863/videos/1432514950845507"
				>look and listen</Link
			>.
			<br /><br />
			We packed out Music Room London to a terrific crowd and featured new songs from our upcoming album
			in our second set … the staff team at Music Room are exceptionally welcoming … even when you just
			want to book a rehearsal space – they set a standard for studios around London – clean, beautiful
			décor and a decent bar … sneak a peak at our first live performance of the title track for Red
			Brick Angel the upcoming album! Take a
			<Link href="https://www.facebook.com/rachel.bennett.56863/videos/775042324096807"
				>look and listen</Link
			>.
			<br /><br />
			Following this we were really honoured to headline at Anthony Anaxagorou’s OUTSPOKEN at the Purcell
			Room on London’s Southbank – great sound and a fantastic technical team;
			<Link href="https://www.facebook.com/rachel.bennett.56863/videos/1375720152984451"
				>look for yourself</Link
			>.
		</TextContainer>
	</div>
</Container>
