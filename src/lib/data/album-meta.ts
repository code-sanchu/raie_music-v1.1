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
		'Earthbound is Raie’s first EP recording to radio standard – produced by Wes Maebe, and is the forerunner for two further albums created by the Raie/Wes team and produced by The Wesonator!  The album features world renowned guitarist <a href="https://en.wikipedia.org/wiki/Elliott_Randall">Elliot Randal</a> on two tracks – Waxn’ Wane and Goliath – you can hear these on Raie’s Soundcloud',
		"It was her solo singer-songwriter debut and launched at South East London’s Albany Empire … check out the trailer <a href='https://www.youtube.com/watch?v=x0tdI3czVmE'>here</a> … the full Albany film is also on Raie’s YouTube channel … tune in to hear a really wonderful 13 piece band of top players! (flute, Cuban tres guitar, trumpet, percussion, accordion, keys and rhythm section plus 4 phenomenal backing singers with all the moves!"
	],
	summary: [
		'Earthbound is Raie’s first EP recording to radio standard – produced by Wes Maebe, and is the forerunner for two further albums created by the Raie/Wes team and produced by The Wesonator!  The album features world renowned guitarist <a href="https://en.wikipedia.org/wiki/Elliott_Randall">Elliot Randal</a> on two tracks – Waxn’ Wane and Goliath – you can hear these on Raie’s Soundcloud'
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
		'Raie worked with <a href="https://www.highvioletprandplugging.com/" target="_blank" >High Violet PR</a> to promote the re-launch of This Music Thing.',
		'The album has attracted some notoriety across the globe – featuring on various radio stations.',
		"Raie was interviewed with Wes Maebe and Jon Leon Guerrero on <a href='https://www.breakitdownshow.com/episodes/raie-and-wes-riding-the-healin-train' target='_blank'>The Break It Down Show</a> CA/USA... and we featured on <a href='https://www.facebook.com/markskinradio/posts/2998989593519887' target='_blank'>Markskin Radio</a> for Bluesmatters Magazine, on Soho Radio with the amazing <a href='https://en.wikipedia.org/wiki/Tony_Moore_(musician)' target='_blank'>Tony Moore</a>",
		"Raie’s top rate review by Martin Webb for <a href='http://rock-n-reel.co.uk/' target='_blank'>R&R magazine</a> (Jan and March editions) and a beautiful article by Steve Yourglivch in <a href='https://bluesmatters.com/' target='_blank'>Blues Matters Magazine</a>'s Blue Bloods section sang the praises of the album – you can see more reviews of Raie in the reviews archive section",
		'You can listen to the full album on Spotify and check out a couple of ‘moments from different performances on Raie’s YouTube channel … from a sofa performance to The Camden Round House and Cotton’s Restaurant …'
	],
	summary: [
		'Raie worked with <a href="https://www.highvioletprandplugging.com/" target="_blank" >High Violet PR</a> to promote the re-launch of This Music Thing.',
		'The album has attracted some notoriety across the globe – featuring on various radio stations.'
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
