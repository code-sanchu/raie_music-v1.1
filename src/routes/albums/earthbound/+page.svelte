<script lang="ts" context="module">
	import { CaretLeft, CaretRight } from 'phosphor-svelte';

	import { PageLayout } from '$lib/components';
	import { images } from '$lib/static';
</script>

<script lang="ts">
	let image1: HTMLImageElement;
	let image2: HTMLImageElement;
	let image3: HTMLImageElement;
	let image4: HTMLImageElement;
	let image5: HTMLImageElement;

	let image1IsInView: boolean;
	let image2IsInView: boolean;
	let image3IsInView: boolean;
	let image4IsInView: boolean;
	let image5IsInView: boolean;

	$: console.log('IMAGE 1 IS IN VIEW:', image1IsInView);
	$: console.log('IMAGE 2 IS IN VIEW:', image2IsInView);
	$: console.log('IMAGE 3 IS IN VIEW:', image3IsInView);
	$: console.log('IMAGE 4 IS IN VIEW:', image4IsInView);
	$: console.log('IMAGE 5 IS IN VIEW:', image5IsInView);

	let imagesContainer: HTMLDivElement;
	let scrollLeft: number;

	const updateInView = ({
		image,
		imagesContainer,
		onUpdate,
		name
	}: {
		imagesContainer: HTMLDivElement;
		image: HTMLImageElement;
		onUpdate: (arg0: { isInView: boolean }) => void;
		name: string;
	}) => {
		if (!imagesContainer || !image3) {
			return;
		}

		const containerRect = imagesContainer.getBoundingClientRect();
		// console.log('containerRect:', containerRect);
		const imageRect = image.getBoundingClientRect();
		// console.log('imageRect:', imageRect);

		const isTotallyInView =
			imageRect.left >= containerRect.left && imageRect.right <= containerRect.right;

		if (isTotallyInView) {
			// console.log(name, '- isTotallyInView:', isTotallyInView);
			onUpdate({ isInView: true });
			return;
		}

		const isTotallyOutOfView =
			imageRect.right < containerRect.left || imageRect.left > containerRect.right;

		if (isTotallyOutOfView) {
			// console.log(name, 'isTotallyOutOfView:', isTotallyOutOfView);
			onUpdate({ isInView: false });
			return;
		}

		const imageIsLargerThanContainerAndInView =
			imageRect.left <= containerRect.left && imageRect.right >= containerRect.right;

		if (imageIsLargerThanContainerAndInView) {
			onUpdate({ isInView: true });
			return;
		}

		const decimalInView =
			imageRect.left <= containerRect.left
				? (imageRect.right - containerRect.left) / imageRect.width
				: (containerRect.right - imageRect.left) / imageRect.width;

		// console.log(name, 'decimalInView:', decimalInView);

		const isInView = decimalInView >= 0.95;

		onUpdate({ isInView });
	};

	$: scrollLeft,
		updateInView({
			image: image1,
			imagesContainer,
			onUpdate: ({ isInView }) => (image1IsInView = isInView),
			name: '1'
		}),
		updateInView({
			image: image2,
			imagesContainer,
			onUpdate: ({ isInView }) => (image2IsInView = isInView),
			name: '2'
		}),
		updateInView({
			image: image3,
			imagesContainer,
			onUpdate: ({ isInView }) => (image3IsInView = isInView),
			name: '3'
		}),
		updateInView({
			image: image4,
			imagesContainer,
			onUpdate: ({ isInView }) => (image4IsInView = isInView),
			name: '4'
		}),
		updateInView({
			image: image5,
			imagesContainer,
			onUpdate: ({ isInView }) => (image5IsInView = isInView),
			name: '5'
		});

	const onClickNextButton = () => {
		if (image5IsInView) {
			return;
		}
		if (image4IsInView && !image5IsInView) {
			image5.scrollIntoView({ behavior: 'smooth' });
			return;
		}
		if (image3IsInView && !image4IsInView) {
			image4.scrollIntoView({ behavior: 'smooth' });
			return;
		}
		if (image2IsInView && !image3IsInView) {
			image3.scrollIntoView({ behavior: 'smooth' });
			return;
		}
		if (image1IsInView && !image2IsInView) {
			image2.scrollIntoView({ behavior: 'smooth' });
			return;
		}
	};

	const onClickPrevButton = () => {
		if (image1IsInView) {
			return;
		}
		if (image2IsInView && !image1IsInView) {
			image1.scrollIntoView({ behavior: 'smooth' });
			return;
		}
		if (image3IsInView && !image2IsInView) {
			image2.scrollIntoView({ behavior: 'smooth' });
			return;
		}
		if (image4IsInView && !image3IsInView) {
			image3.scrollIntoView({ behavior: 'smooth' });
			return;
		}
		if (image5IsInView && !image4IsInView) {
			image4.scrollIntoView({ behavior: 'smooth' });
			return;
		}
	};
	// todo: add gallery
	// todo: scroller isn't quite working right - scroll to 3 scrolling to far
</script>

<PageLayout.VerticalSpacing />

<PageLayout.HorizontalSpacing>
	<div class="flex justify-center">
		<div class="max-w-[768px]">
			<h1 class="text-3xl mt-md text-site-2-red lg:text-4xl">Earthbound</h1>

			<p class="mt-xs text-site-classy-grey-light">2016</p>

			<div class="relative">
				<div
					class="overflow-hidden relative mt-sm w-full h-[190px]"
					bind:this={imagesContainer}
					on:scroll={() => {
						scrollLeft = imagesContainer.scrollLeft;
					}}
				>
					<div class="absolute left-0 top-0 flex gap-sm h-full">
						<!-- svelte-ignore a11y-click-events-have-key-events -->
						<!-- svelte-ignore a11y-no-noninteractive-element-interactions -->
						<img
							class="rounded-md border p-xs aspect-square object-cover scroll-mx-lg grayscale"
							src={images.albums.earthbound.album_cover}
							alt=""
							bind:this={image1}
							on:click={(e) => {
								e.currentTarget.scrollIntoView({ behavior: 'smooth' });
							}}
						/>

						<!-- svelte-ignore a11y-click-events-have-key-events -->
						<!-- svelte-ignore a11y-no-noninteractive-element-interactions -->
						<img
							class="rounded-md border p-xs aspect-video object-cover scroll-mx-lg grayscale"
							src={images.albums.earthbound.albany_theatre_13_piece_band}
							alt=""
							bind:this={image2}
							on:click={(e) => {
								e.currentTarget.scrollIntoView({ behavior: 'smooth' });
							}}
						/>

						<!-- svelte-ignore a11y-click-events-have-key-events -->
						<!-- svelte-ignore a11y-no-noninteractive-element-interactions -->
						<img
							class="rounded-md border p-xs aspect-[3/4] object-cover scroll-mx-lg grayscale"
							src={images.albums.earthbound['album_promo_shot-by_sara_samsavari']}
							alt=""
							bind:this={image3}
							on:click={(e) => {
								e.currentTarget.scrollIntoView({ behavior: 'smooth' });
							}}
						/>

						<!-- svelte-ignore a11y-click-events-have-key-events -->
						<!-- svelte-ignore a11y-no-noninteractive-element-interactions -->
						<img
							class="rounded-md border p-xs aspect-[3/4] object-cover grayscale scroll-mx-lg"
							src={images.albums.earthbound['glam_pic-by_pete_pinto']}
							alt=""
							bind:this={image4}
							on:click={(e) => {
								e.currentTarget.scrollIntoView({ behavior: 'smooth' });
							}}
						/>

						<!-- svelte-ignore a11y-click-events-have-key-events -->
						<!-- svelte-ignore a11y-no-noninteractive-element-interactions -->
						<img
							class="rounded-md border p-xs aspect-[3/4] object-cover grayscale scroll-mx-lg"
							src={images.albums.earthbound['promo-by_sara_samsavari']}
							alt=""
							bind:this={image5}
							on:click={(e) => {
								e.currentTarget.scrollIntoView({ behavior: 'smooth' });
							}}
						/>
					</div>
				</div>

				<button
					class="absolute bg-white/30 hover:bg-white/60 rounded-lg left-0 top-1/2 -translate-y-1/2 z-10 text-3xl hover:opacity-100 opacity-70 transition-all ease-in-out duration-75"
					type="button"
					on:click={onClickPrevButton}
				>
					<CaretLeft />
				</button>
				<button
					class="absolute right-0 bg-white/30 top-1/2 -translate-y-1/2 rounded-lg z-10 text-3xl hover:bg-white/40 opacity-70 hover:opacity-100 transition-all ease-in-out duration-75"
					type="button"
					on:click={onClickNextButton}
				>
					<CaretRight />
				</button>
			</div>

			<div class="mt-lg flex gap-md">
				<div class="prose">
					<p class="mt-xs">
						Earthbound is an Indie/Folk Ballad about human determination and resourcefulness.
					</p>
					<p class="mt-xs">
						Raie journeyed to Goa in India with friends and Earthbound was inspired by seeing the
						incredible resourcefulness of the people.
					</p>
				</div>
			</div>

			<div class="mt-lg">
				<h3>Tracklist</h3>
			</div>
		</div>
	</div>
</PageLayout.HorizontalSpacing>
