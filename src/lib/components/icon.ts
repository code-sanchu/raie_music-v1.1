import {
	AppleLogo,
	CircleNotch,
	Equalizer,
	FacebookLogo,
	Headphones,
	InstagramLogo,
	MusicNoteSimple,
	Parallelogram,
	Pause,
	Play,
	ShoppingCartSimple,
	SkipForward,
	SoundcloudLogo,
	SpeakerSimpleHigh,
	SpeakerSimpleSlash,
	SpotifyLogo,
	Stop,
	TwitterLogo,
	YoutubeLogo
} from 'phosphor-svelte';
import type { ComponentProps } from 'svelte';

export type IconProps = ComponentProps<Play>;

export const Icon = {
	Play,
	Next: SkipForward,
	Volume: SpeakerSimpleHigh,
	Mute: SpeakerSimpleSlash,
	Pause,
	Stop,
	Listen: Headphones,
	Shop: ShoppingCartSimple,
	Instagram: InstagramLogo,
	Facebook: FacebookLogo,
	Soundcloud: SoundcloudLogo,
	Youtube: YoutubeLogo,
	Twitter: TwitterLogo,
	AudioPlayer: Equalizer,
	Apple: AppleLogo,
	Spotify: SpotifyLogo,
	Itunes: MusicNoteSimple,
	Bandcamp: Parallelogram,
	Album: CircleNotch
};