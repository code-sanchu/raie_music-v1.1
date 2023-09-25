import logo from './logo.png?w=300&format=avif;webp;jpg&as=picture&imagetools';
import brick_bg from './brick_bg.png?w=315&format=avif;webp;jpg&as=picture&imagetools';
import faceshot1 from './face_shot-1.png?w=500&format=avif;webp;jpg&as=picture&imagetools';

import galaxy_chris from './galaxy/chris_bell.jpg?w=480&format=avif;webp;jpg&as=picture&imagetools';
import galaxy_christiano from './galaxy/christiano-bass.jpg?w=500&format=avif;webp;jpg&as=picture&imagetools';
import galaxy_full_band from './galaxy/full-band.jpg?w=250&format=avif;webp;jpg&as=picture&imagetools';
import galaxy_jon from './galaxy/jon_dunn-acoustic.jpg?w=500&format=avif;webp;jpg&as=picture&imagetools';
import galaxy_raie from './galaxy/raie-lead_vocal-young_love.jpg?w=500&format=avif;webp;jpg&as=picture&imagetools';
import galaxy_tim from './galaxy/tim_gardner-violin-free_now.jpg?w=500&format=avif;webp;jpg&as=picture&imagetools';
import galaxy_wes from './galaxy/wesonator.jpg?w=500&format=avif;webp;jpg&as=picture&imagetools';

import earthbound_albany_band from './albums/earthbound/albany_theatre_13_piece_band.jpg?w=200;1000&format=avif;webp;jpg&as=picture&imagetools';
import earthbound_album_cover from './albums/earthbound/album-cover.jpg?w=200;240&format=avif;webp;jpg&as=picture&imagetools';
import earthbound_promo_by_sara_1 from './albums/earthbound/album_promo_shot-by_sara_samsavari.jpg?w=200;1000&format=avif;webp;jpg&as=picture&imagetools';
import earthbound_glam from './albums/earthbound/glam_pic-by_pete_pinto.jpg?w=200;426&format=avif;webp;jpg&as=picture&imagetools';
import earthbound_promo_by_sara_2 from './albums/earthbound/promo-by_sara_samsavari.jpg?w=200;1000&format=avif;webp;jpg&as=picture&imagetools';

import this_music_thing_album_cover from './albums/this-music-thing/this_music_thing-album_cover.jpg?w=200&format=avif;webp;jpg&as=picture&imagetools';

export const images = {
	logo: { src: logo, naturalDimensions: { width: 497, height: 166 } },
	brick_bg: { src: brick_bg, naturalDimensions: { width: 315, height: 37 } },

	faceshots: {
		1: { src: faceshot1, naturalDimensions: { width: 1037, height: 1300 } }
	},

	galaxy: {
		chris: {
			src: galaxy_chris,
			naturalDimensions: { width: 480, height: 640 }
		},
		['christiano-bass']: {
			src: galaxy_christiano,
			naturalDimensions: { width: 2048, height: 1536 }
		},
		'full-band': {
			src: galaxy_full_band,
			naturalDimensions: { width: 661, height: 371 }
		},
		['jon_dunn-acoustic']: {
			src: galaxy_jon,
			naturalDimensions: { width: 640, height: 480 }
		},
		['raie-lead_vocal-young_love']: {
			src: galaxy_raie,
			naturalDimensions: { width: 1538, height: 1594 }
		},
		['tim_gardner-violin-free_now']: {
			src: galaxy_tim,
			naturalDimensions: { width: 1600, height: 1200 }
		},
		wesonator: {
			src: galaxy_wes,
			naturalDimensions: { width: 640, height: 481 }
		}
	},

	albums: {
		earthbound: {
			albany_theatre_13_piece_band: {
				src: earthbound_albany_band,
				naturalDimensions: { width: 5121, height: 3419 }
			},
			album_cover: {
				src: earthbound_album_cover,
				naturalDimensions: { width: 240, height: 240 }
			},
			'album_promo_shot-by_sara_samsavari': {
				src: earthbound_promo_by_sara_1,
				naturalDimensions: { width: 1064, height: 984 }
			},
			'glam_pic-by_pete_pinto': {
				src: earthbound_glam,
				naturalDimensions: { width: 426, height: 639 }
			},
			'promo-by_sara_samsavari': {
				src: earthbound_promo_by_sara_2,
				naturalDimensions: { width: 2432, height: 3763 }
			}
		},

		this_music_thing: {
			album_cover: {
				src: this_music_thing_album_cover,
				naturalDimensions: { width: 700, height: 700 }
			}
		}
	}
};
