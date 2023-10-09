<script lang="ts" context="module">
	import { images } from '$lib/assets';
	import { Picture, Icon } from '$lib/components';
</script>

<div>
	<h3 class="tracking-widest text-xs sm:text-sm text-my-black-600 uppercase">Latest News</h3>

	<div class="flex items-center gap-sm mt-xs max-w-full overflow-hidden">
		<h4 class="text-xl sm:text-2xl tracking-widest text-my-black-600">Galaxy Studios</h4>

		<span class="text-my-black-100 text-sm">
			<Icon.DotOutline weight="thin" />
		</span>

		<h4 class="text-base sm:text-2xl tracking-widest text-my-black-100">The Last Few Months</h4>

		<span class="text-my-black-100 text-sm">
			<Icon.DotOutline weight="thin" />
		</span>

		<h4 class="text-base sm:text-2xl tracking-widest text-my-black-100">Album Launch</h4>
	</div>

	<div class="mt-md lg:mt-lg flex gap-lg flex-col sm:flex-col lg:flex-row lg:gap-xl">
		<div class="w-[200px] lg:w-[250px] shrink-0">
			<Picture
				imageClass="rounded-sm"
				meta={images.galaxy['full-band'].src}
				sizes={'250px'}
				alt="" />
		</div>

		<div
			class="prose text-my-black leading-relaxed lg:text-lg max-w-[540px] sm:max-w-[500px] pb-sm tracking-wide max-h-[250px] overflow-y-auto pr-md">
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
</div>
