<script lang="ts" context="module">
	import { images } from '$lib/assets';
	import { PageFrame } from '$lib/components/+pages/album';

	const albumImages = [
		images.albums.earthbound.album_cover,
		images.albums.earthbound['glam_pic-by_pete_pinto'],
		images.albums.earthbound.albany_theatre_13_piece_band,
		images.albums.earthbound['album_promo_shot-by_sara_samsavari'],
		images.albums.earthbound['promo-by_sara_samsavari']
	];
</script>

<PageFrame images={albumImages} tracksMinWidth={480} albumKey="earthbound" noVideos />
