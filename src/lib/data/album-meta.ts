const earthbound = {
	title: 'Earthbound',
	id: 'earthbound',
	links: {
		listen: [
			{
				href: 'https://soundcloud.com/raiemusic/sets/earthbound-ep',
				id: 'soundcloud',
				name: 'Soundcloud'
			}
		],
		buy: []
	},
	releaseDate: 'October 2016',
	description: [
		'Earthbound is an Indie/Folk Ballad about human determination and resourcefulness.',
		'Raie journeyed to Goa in India with friends and Earthbound was inspired by seeing the incredible resourcefulness of the people.  '
	],
	summary: [
		'Earthbound is an Indie/Folk Ballad about human determination and resourcefulness.',
		'Raie journeyed to Goa in India with friends and Earthbound was inspired by seeing the incredible resourcefulness of the people.'
	]
} as const;

const this_music_thing = {
	title: 'This Music Thing',
	id: 'this_music_thing',
	links: {
		listen: [
			{
				href: 'https://soundcloud.com/user966280536/sets/this-music-thing',
				id: 'soundcloud',
				name: 'Soundcloud'
			},
			{
				href: 'https://open.spotify.com/album/45Wzle2Mwc6DDrxLMdFO8Q?si=sMUDIVPaRcqKzho69_YznA&nd=1',
				id: 'spotify',
				name: 'Spotify'
			},
			{
				href: 'https://music.youtube.com/playlist?list=OLAK5uy_mVL3pbMKWEx7S2mP3WGnf7-Yg2TS1Hqlg',
				id: 'youtube_music',
				name: 'Youtube Music'
			}
		],
		buy: [
			{
				href: 'https://raie.bandcamp.com/album/this-music-thing',
				id: 'bandcamp',
				name: 'Bandcamp'
			},
			{
				href: 'https://music.apple.com/us/album/this-music-thing/1506845666',
				id: 'itunes',
				name: 'Itunes'
			}
		]
	},
	releaseDate: 'February 13, 2020',
	description: [
		'This Music Thing is a beautiful album of storytelling in the Country Americana music style.',
		"It's produced by Wes Maebe and features artists such as Chris Bell (Specimen, Gene Loves Jezebel, Spear Of Destiny, Thompson Twins, Hugh Cornwell) and Jon Klein (Specimen, The Banshees, Sinead O'Connor)... and a host of other wonderful musicians."
	],
	summary: [
		'This Music Thing is a beautiful album of storytelling in the Country Americana music style.',
		"It's produced by Wes Maebe and features artists such as Chris Bell (Specimen, Gene Loves Jezebel, Spear Of Destiny, Thompson Twins, Hugh Cornwell) and Jon Klein (Specimen, The Banshees, Sinead O'Connor)... and a host of other wonderful musicians."
	]
} as const;

export const albums_meta = {
	earthbound,
	this_music_thing
};

export type AlbumMeta = {
	title: string;
	id: string;
	links: {
		listen: {
			href: string;
			id: string;
			name: string;
		}[];
		buy: {
			href: string;
			id: string;
			name: string;
		}[];
	};
	releaseDate: string;
	description: string[];
	summary: string[];
};
