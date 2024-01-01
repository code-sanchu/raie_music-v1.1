import { objToArr } from '$lib/helpers';

const follow = {
	facebook: { href: 'https://www.facebook.com/raiemusic', id: 'facebook', name: 'Facebook' },
	instagram: { href: 'https://www.instagram.com/raiemusic/', id: 'instagram', name: 'Instagram' }
} as const;

const listen = {
	soundcloud: {
		href: 'https://soundcloud.com/user966280536',
		id: 'soundcloud',
		name: 'Soundcloud'
	},
	spotify: {
		href: 'https://open.spotify.com/artist/3lO2Uzw6i6zDtWqOygwSdq',
		id: 'spotify',
		name: 'Spotify'
	},
	youtube: {
		href: 'https://www.youtube.com/channel/UCsJyxmD4BoTDQOocamxkgBQ',
		id: 'youtube',
		name: 'Youtube'
	}
} as const;

const buy = {
	bandcamp: { href: 'https://raie.bandcamp.com/', id: 'bandcamp', name: 'Bandcamp' },
	itunes: { href: 'https://music.apple.com/us/artist/raie/382873306', id: 'itunes', name: 'Itunes' }
} as const;

type RaieLink =
	| (typeof follow)[keyof typeof follow]
	| (typeof listen)[keyof typeof listen]
	| (typeof buy)[keyof typeof buy];

export const raie_links = {
	follow,
	listen,
	buy
};

export const raie_links_arrs = {
	follow: objToArr(follow) as RaieLink[],
	listen: objToArr(listen) as RaieLink[],
	buy: objToArr(buy) as RaieLink[]
};
