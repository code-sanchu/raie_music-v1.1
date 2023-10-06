<script lang="ts" context="module">
	import { images } from '$lib/assets';
	import { PageFrame } from '$lib/components/+pages/album';

	const albumImages = [
		images.albums.this_music_thing.album_cover,
		images.albums.this_music_thing.band_at_wes_place,
		images.albums.this_music_thing.raie_by_bam,
		images.albums.this_music_thing.band_outside_goldsmiths_studios,
		images.albums.this_music_thing.living_room_gig,
		images.albums.this_music_thing.raie_by_bim,
		images.albums.this_music_thing.studio_dog_and_others
	];
</script>

<PageFrame images={albumImages} tracksMinWidth={600} albumKey="this_music_thing" noVideos />
