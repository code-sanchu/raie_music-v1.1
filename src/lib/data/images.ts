import logo from '$assets/images/logo.png?w=110&format=avif&imagetools';
import faceshot1 from '$assets/images/face_shot-1.png?w=500&format=avif;webp;jpg&as=picture&imagetools';

export const images = {
	logo: { src: logo, naturalDimensions: { width: 497, height: 166 } },

	faceshots: {
		1: { src: faceshot1, naturalDimensions: { width: 1037, height: 1300 } }
	},

	galaxy: {
		chris: {
			src: '/images/galaxy/chris_bell.jpg',
			naturalDimensions: { width: 480, height: 640 }
		},
		['christiano-bass']: {
			src: '/images/galaxy/christiano-bass.jpg',
			naturalDimensions: { width: 2048, height: 1536 }
		},
		'full-band': {
			src: '/images/galaxy/full-band.jpg',
			naturalDimensions: { width: 661, height: 371 }
		},
		['jon_dunn-acoustic']: {
			src: '/images/galaxy/jon_dunn-acoustic.jpg',
			naturalDimensions: { width: 640, height: 480 }
		},
		['raie-lead_vocal-young_love']: {
			src: '/images/galaxy/raie-lead_vocal-young_love.jpg',
			naturalDimensions: { width: 1538, height: 1594 }
		},
		['tim_gardner-violin-free_now']: {
			src: '/images/galaxy/tim_gardner-violin-free_now.jpg',
			naturalDimensions: { width: 1600, height: 1200 }
		},
		wesonator: {
			src: '/images/galaxy/wesonator.jpg',
			naturalDimensions: { width: 640, height: 481 }
		}
	},

	albums: {
		earthbound: {
			albany_theatre_13_piece_band: {
				src: '/images/albums/earthbound/albany_theatre_13_piece_band.jpg',
				naturalDimensions: { width: 5121, height: 3419 }
			},
			album_cover: {
				src: '/images/albums/earthbound/album-cover.jpg',
				naturalDimensions: { width: 240, height: 240 }
			},
			'album_promo_shot-by_sara_samsavari': {
				src: '/images/albums/earthbound/album_promo_shot-by_sara_samsavari.jpg',
				naturalDimensions: { width: 1064, height: 984 }
			},
			'glam_pic-by_pete_pinto': {
				src: '/images/albums/earthbound/glam_pic-by_pete_pinto.jpg',
				naturalDimensions: { width: 426, height: 639 }
			},
			'promo-by_sara_samsavari': {
				src: '/images/albums/earthbound/promo-by_sara_samsavari.jpg',
				naturalDimensions: { width: 2432, height: 3763 }
			}
		},

		this_music_thing: {
			album_cover: {
				src: '/images/albums/this-music-thing/this_music_thing-album_cover.jpg',
				naturalDimensions: { width: 700, height: 700 }
			}
		}
	}
};
