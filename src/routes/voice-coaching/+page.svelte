<script lang="ts" context="module">
	import { images } from '$lib/assets';
	import { Images, PageLayout, ImageGalleryModalNewTwo, Picture, Icon } from '$lib/components';

	const galleryImages = [
		images.dog_carpet,
		images.crew_and_artists_red_brick_angels_GMS,
		images.jill_cumberbatch_mandolin,
		images.naz_and_nate_warmin_up,
		images.md_and_producer_chillin_GMS,
		images.crew_and_artists_red_brick_angels_GMS_2,
		images.galaxy['christiano-bass']
	];
</script>

<script lang="ts">
	let imageModalIsOpen = false;

	let imageModalCurrentImageIndex = 0;
</script>

<PageLayout.VerticalSpacing sizing="1.5" />

<Images.BrickBg.HorizontalThree />

<PageLayout.VerticalSpacing sizing="half" />

<div class="flex justify-between">
	<div>
		<h1 class="text-3xl lg:text-4xl tracking-widest">Voice Coaching</h1>

		<h2 class="text-xl tracking-widest uppercase mt-lg">Vocal i.d</h2>

		<h3 class="text-lg tracking-widest mt-md italic">Individually designed by Rachel Bennett</h3>
		<p class="mt-sm prose text-my-black tracking-wide">
			Blending the personal touch with a programme designed specifically for your individual singing
			voice, Rachel will create a workout to suit your lifestyle.
		</p>

		<h3 class="text-lg tracking-widest mt-md italic">Realise and release your true potential</h3>
		<p class="mt-sm prose text-my-black tracking-wide">
			Let Rachel help you realise and release the natural beauty of your voice. Learn about breath
			support and body awareness, phrasing and clarity; hone performance skills, repertoire, and
			stylistic range.
		</p>

		<h3 class="text-lg tracking-widest mt-md italic">Systematic & diagnostic</h3>
		<p class="mt-sm prose text-my-black tracking-wide">
			Rachel's analytical skills are honed to a level of precision that only many years of
			experience can provide. She shares her deep knowledge of both the physiology and psychology of
			the vocalists' art with sensitivity & skill. She is able to quickly correct technical
			weaknesses, but crucially, she can show you how to nurture the artist within yourself by
			employing a completely holistic approach in her practice.
		</p>

		<h3 class="text-lg tracking-widest mt-md italic">Maturity and experience</h3>
		<p class="mt-sm prose text-my-black tracking-wide">
			Rachel Bennett has been teaching singers in one-to-one and class settings with real success
			for 40 years. She has worked consistently as a singer, composer, songwriter, and MD for
			theatre, television & recording studios across London. Rachel currently teaches singers at
			Goldsmiths University for the Popular Music Degree and the Masters BMus Programmes where she
			has taught for over a decade; she has taught across Undergraduate and Masters programmes for
			almost decade at Rose Bruford College/International Drama School; she ran the Singing
			department for the Trinity accredited Diploma in Professional Musical Theatre at WAC
			Performing Arts and Media College for several years. She has taught regularly for the Albany
			Theatre and leads their Entelechy Arts Meet Me weekly choir; she taught on programmes for
			Urban Development over several years and ran workshops for The National Theatre. She has
			worked internationally as both a teacher and a course consultant. 'I can work with you to
			build your technique, increase your understanding and develop your confidence as a singer and
			a performer — in any setting' Rachel coaches professional actors for plays and musicals;
			recent work includes vocal support for: The ensemble at The English Touring Co. productions of
			Jekyll and Hyde and Cabaret; Sasha Frost — Black British Theatre Award winner for best
			Supporting Actress in Folk at Hampstead Theatre; Carys McQueen for Cabaret -WE; Nina
			Toussanint White for Etienne Sisters at Theatre Royal Stratford East … Rachel also supports
			vocalists for band work; recent work includes Catrin Vincent for Another Sky, Jesse James
			McFarlane for The Wisebloods, Louise MacPhail for Prima Queen, Anna Papadimitriou for HAWXX …
			Rachel can come to your school, college or group to run one or a series of workshops tailored
			to suit your needs — a Masterclass, a fun singing day, detailed skills acquisition or
			repertoire and arrangement. Rachel works with singers from varied backgrounds, skill levels
			and experience. She can facilitate material for choral ensemble and coaches theatre and
			artiste showcases as well as preparation for audition technique.
		</p>

		<h2 class="text-xl tracking-widest uppercase mt-xl italic">Rates</h2>

		<p class="mt-sm border-my-black-50/20 prose text-my-black max-w-[500px] tracking-wide">
			Tuition rates on a sliding scale.
		</p>

		<div class="mt-xs flex items-end gap-sm">
			<p class="tracking-wider">Contact:</p>
			<div class="flex items-end gap-md">
				<a class="block tracking-wide" href="mailto:rachel@raiemusic.com" target="_blank"
					>rachel@raiemusic.com</a
				>
				<p class="tracking-wide">07949 876 703</p>
			</div>
		</div>

		<h2 class="text-xl tracking-widest uppercase mt-xl">Company Testimony</h2>

		<p class="mt-lg border-my-black-50/20 prose text-my-black max-w-[500px] tracking-wide">
			"With over two decades of superb vocal development behind Rachel Bennett we at Midas
			Productions trust when she undertakes to develop a voice it will be nourished with care,
			diligence, passion and excellence."
		</p>
		<p class="pl-xs mt-xs italic text-my-black-700">— Kevin Leo</p>

		<p class="mt-lg border-my-black-50/20 prose text-my-black max-w-[500px] tracking-wide">
			"Rachel Bennett is an extremely competent, skilled and inspiring vocal coach with years of
			experience as a performer/singer. Her techniques have provided students and singers alike with
			the confidence and ability to progress their professional careers."
		</p>
		<p class="pl-xs mt-xs italic text-my-black-700">
			— Wozzy Brewster, OBE, Executive Director, The Midi Music Company
		</p>

		<h2 class="text-xl tracking-widest uppercase mt-xl">Personal Testimony</h2>

		<div class="flex items-end gap-md">
			<h3 class="mt-lg font-medium">Carmody — Singer Songwriter</h3>

			<div class="flex items-center gap-xs text-gray-600">
				<a
					class="text-sm"
					href="https://dopecausewesaid.com/dope-features/london-based-singer-songwriter-carmody-unveils-her-debut-album-imperfect-constellations"
					target="_blank">about</a
				>
				<span class="text-xs">
					<Icon.ExternalLink weight="thin" />
				</span>
			</div>
		</div>

		<p class="mt-xs prose text-my-black max-w-[500px] tracking-wide">
			"Rachel is the best vocal coach I've come across! To me she is a sorceress, as the vocal
			exercises and suggestions she makes improve my voice, and the delivery of my songs, so
			dramatically it feels like magic. She is also a very soothing presence just before a big show
			and has really made me feel more at ease and confident about performing. I really love being
			coached by Rachel and recommend her to every vocalist I meet."
		</p>

		<div class="flex items-end gap-md">
			<h3 class="mt-lg font-medium">Anna Bernard — Actress Radio, TV and Theatre</h3>

			<div class="flex items-center gap-xs text-gray-600">
				<a class="text-sm" href="https://www.mandy.com/uk/a/anna-bernard" target="_blank">about</a>
				<span class="text-xs">
					<Icon.ExternalLink weight="thin" />
				</span>
			</div>
		</div>

		<p class="mt-xs prose text-my-black max-w-[500px] tracking-wide">
			"The joy of Rachel is that she hears what you can do when you sing, not what you can't. How
			refreshing. So great to be lifted up and feel inspired again with a sense of direction and
			also fun. I love her lessons."
		</p>

		<div class="flex items-end gap-md">
			<h3 class="mt-lg font-medium">
				Steve Medlin – Collage Arts/Wac Arts and theatre maker (original Unclassified Mime member)
			</h3>

			<div class="flex items-center gap-xs text-gray-600">
				<a
					class="text-sm"
					href="https://www.ayoungertheatre.com/author/steve-medlin/"
					target="_blank">about</a
				>
				<span class="text-xs">
					<Icon.ExternalLink weight="thin" />
				</span>
			</div>
		</div>

		<p class="mt-xs prose text-my-black max-w-[500px] tracking-wide">
			"The joy of Rachel is that she hears what you can do when you sing, not what you can't. How
			refreshing. So great to be lifted up and feel inspired again with a sense of direction and
			also fun. I love her lessons."
		</p>
	</div>

	<div class="relative self-start">
		<Picture
			imageClass={`h-[420px]`}
			meta={images.singing_coach[1].src}
			sizes={`${images.singing_coach[1].naturalDimensions.width}px`}
			alt=""
		/>

		<div class="absolute -bottom-sm right-0 w-full translate-y-full">
			<Images.BrickBg.Horizontal />
		</div>
	</div>
</div>

<ImageGalleryModalNewTwo
	bind:currentIndex={imageModalCurrentImageIndex}
	bind:isOpen={imageModalIsOpen}
	images={galleryImages}
/>
