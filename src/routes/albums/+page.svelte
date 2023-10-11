<script lang="ts" context="module">
	import { Images, PageLayout } from '$lib/components';
	import { Album } from '$lib/components/+pages/albums';
	import { Link } from '$lib/components/prose';
	import { raie_links } from '$lib/data';
</script>

<PageLayout.VerticalSpacing sizing="1.5" />

<Images.BrickBg.HorizontalThree />

<PageLayout.VerticalSpacing sizing="2/3" />

<div class="prose leading-relaxed italic text-lg tracking-wider text-my-black-700 max-w-[700px]">
	<p class="">
		Check out Raie’s albums here – two stunning releases over the last decade, soon to become three!
	</p>

	<p class="">
		Raie’s prolific writing talent combined with <Link href="https://www.wesonator.com/"
			>Wes Maebe’s</Link> international award-winning engineering and production skills … a host of top
		UK/US players and some Love (that essential ingredient!) thrown in for good measure …. equals a recipe
		for success!
	</p>

	<p>
		Have a listen on the easy clicks below … and you can check out Raie’s <Link
			href={raie_links.listen.youtube.href}>YouTube page</Link> for some video chats and music film footage
		…
	</p>
</div>

<Album href="/albums/red-brick-angel" title="Red Brick Angel">
	<svelte:fragment slot="description">
		Red Brick Angel is Raie’s third album project with the award winning Wesonator!
		<br /><br />
		Recorded in six days at Galaxy studios in Belgium, the ‘live and real’ feel of the tracks is distinctive
		and inimitably superb! Raie is joined again by <Link
			href="https://www.linkedin.com/in/cristiano-tortoioli-b2b355294/">Christiano Tortoioli</Link> on
		electric bass, <Link href="https://www.discogs.com/artist/532116-Chris-Bell-3">Chris Bell</Link>
		on drums as well as <Link href="https://en.wikipedia.org/wiki/Jon_Klein_(musician)"
			>Jon Klein</Link> and <Link href="https://en.wikipedia.org/wiki/Elliott_Randall"
			>Elliot Randal</Link> who both feature on guitar solo outros for the tracks Free Now and Convoy
		of Tears respectively.
	</svelte:fragment>
</Album>

<Album href="/albums/this-music-thing" title="This Music Thing">
	<svelte:fragment slot="description">
		<!-- 		{#each albums_meta['this_music_thing']['summary'] as line}
			<p>{@html line}</p>
		{/each} -->
		<p>
			Raie worked with <Link href="https://www.highvioletprandplugging.com/">High Violet PR</Link> to
			promote the re-launch of This Music Thing.
		</p>
		<p>
			The album has attracted some notoriety across the globe – featuring on various radio stations.
		</p>
	</svelte:fragment>
</Album>

<Album href="/albums/earthbound" title="Earthbound">
	<svelte:fragment slot="description">
		<!-- 		{#each albums_meta['earthbound']['summary'] as line}
			<p>{@html line}</p>
		{/each} -->
		<p>
			Earthbound is Raie’s first EP recording to radio standard – produced by Wes Maebe, and is the
			forerunner for two further albums created by the Raie/Wes team and produced by The Wesonator!
			The album features world renowned guitarist <Link
				href="https://en.wikipedia.org/wiki/Elliott_Randall">Elliot Randal</Link> on two tracks – Waxn’
			Wane and Goliath – you can hear these on Raie’s Soundcloud
		</p>
	</svelte:fragment>
</Album>
