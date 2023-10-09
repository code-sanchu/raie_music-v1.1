<script context="module" lang="ts">
	import { images } from '$lib/assets';
	import { Picture } from '$lib/components';
	import Container from './container.svelte';
</script>

<Container>
	<div class="flex flex-col sm:flex-col lg:flex-row gap-sm sm:gap-lg lg:gap-xl">
		<div class="w-[220px] lg:w-[250px] shrink-0 max-w-full">
			<Picture
				imageClass="rounded-sm"
				meta={images.galaxy['full-band'].src}
				sizes={'250px'}
				alt="" />
		</div>

		<div class="prose text-my-black leading-relaxed mt-sm sm:mt-0">
			<p>
				Raie successfully raised £4000 to help pay for the trip to Belgium’s <a
					href="https://galaxystudios.com/"
					target="_blank">Galaxy Studios</a>
			</p>
			<p>
				This was an opportunity of a lifetime – to record an album in six days at a world leading
				studio – that houses the quietest room in the world by the way!
			</p>
			<p>
				Without all our ‘friends of Raie’ and their generous contributions to the Crowdfunder, it’s
				doubtful we’d have been able to make the trip … but with the money raised, a really generous
				deal from Galaxy and a truly loyal, dedicated and focused band of troubadours … we managed
				to pay our rehearsal space, our Galaxy bill and feed and Eurotunnel (with gas) and fly the
				band … and sort accommodation for the string section too! So a huge thankyou to the
				Crowdfunders! Of course … you are all on the guest list for the album launch …
			</p>
			<p>
				This news bulletin can’t go out without a big shout out to <a
					href="https://www.wesonator.com/"
					target="_blank">Wes Maebe</a
				>.
			</p>
			<p>
				Wes is employed regularly by Galaxy and he convinced the studio that Raie were worth ‘a
				deal’ – he really believes in the project and is now a co-writer with Raie … plus his
				exquisite guitar playing features on the album; Raie and Wes have secured a fruitful, long
				lasting ‘music brother/sister’ bond over a decade!
			</p>
			<p>
				Galaxy couldn’t have been more welcoming – the studio hosted us with free coffees (that the
				band really needed on 10-12 hour sessions under pressure!) … and every morning we had a
				visit from CEO Wilfried-Van-Baelen – the friendliest guy who seems to have never forgotten
				his early ‘chicken coop’ days of the studio’s history – he tells it with real humility -
				very entertaining!
			</p>
			<p>
				The lunch area and grounds were sublime (the band were SO happy!) and the studio sound
				(including Steinway piano and a real Hammond set up) was … well … check it out for yourself
				– the album goes on sale November 9th – see the links page…
			</p>
		</div>
	</div>
</Container>
