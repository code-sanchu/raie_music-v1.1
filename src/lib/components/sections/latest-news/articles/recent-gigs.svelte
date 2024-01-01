<script context="module" lang="ts">
	import { images } from '$lib/assets';
	import { Link } from '$lib/components/prose';
	import { Picture } from '$lib/components';
	import { Container, TextContainer } from './_components';
	import { raie_links } from '$lib/data';
</script>

<script lang="ts">
	export let height: number;
	export let isActive: boolean;
</script>

<Container bind:height bind:isActive>
	<div>
		<TextContainer numColumns={2}>
			Raie performed to a full house and a standing ovation at The Camden Club when we launched the
			album Red Brick Angel ... highlights included Jon Klein's solo for Free Now and the whole room
			singing the chorus of This Thing Called Love!
			<br /><br />

			We sang the album single release Young Love for our encore The venue manager Andrew Hart is a
			total angel himself - we were looked after 'with stars on' and will definitely go back to play
			there again.
			<div class="flex gap-sm my-xs">
				<div class="w-[110px] xs:w-[150px] shrink-0">
					<Picture
						imageClass="rounded-sm"
						meta={images.albums.red_brick_angels.jon_k_solo_2.src}
						sizes={'250px'}
						alt="" />
					<p class="pl-xxs border-l-2 text-gray-600 text-xs mt-xs">Jon Klein on free now</p>
				</div>
				<div class="w-[150px] xs:w-[190px] shrink-0">
					<Picture
						imageClass="rounded-sm"
						meta={images.albums.red_brick_angels.the_house_sing_2.src}
						sizes={'250px'}
						alt="" />
					<p class="pl-xxs border-l-2 text-gray-600 text-xs mt-xs">The whole house singing</p>
				</div>
			</div>
			Sound man Giovanni Dominici did a great job on monitoring and our very own album producer and co-writer
			Wes Maebe ran FOH sound; Wes used an ipad system for this ... it was a new experience but his genius
			shone through - it might be the best sound I ever played to ...
			<br /><br />
			<Link href="https://nice-productions.com/">Jack Stanton</Link> photographed the night with Gregory
			Nice on still camera so watch this space for the full length footage of the live album...
			<br /><br />
			Raie sold out Hope and Anchor – home of The Stranglers and Sinead O’Connor and we were delighted
			to have Sinead’s guitarist Jon Klein play lead for us on the night; check out a couple of clips
			on Raie’s <Link href={raie_links.listen.youtube.href}>YouTube channel</Link>.
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
