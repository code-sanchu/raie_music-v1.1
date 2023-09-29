// eslint-disable-next-line @typescript-eslint/no-var-requires
const plugin = require('tailwindcss/plugin');

/** @type {import('tailwindcss').Config} */
export default {
	content: [
		'./src/**/*.{html,js,svelte,ts}',
		'./node_modules/flowbite-svelte/**/*.{html,js,svelte,ts}'
	],

	theme: {
		extend: {
			colors: {
				'my-black': {
					DEFAULT: '#161616',
					50: '#CBCBCB',
					100: '#C1C1C1',
					200: '#ACACAC',
					300: '#989898',
					400: '#848484',
					500: '#6F6F6F',
					600: '#5B5B5B',
					700: '#464646',
					800: '#323232',
					900: '#161616',
					950: '#080808'
				}
			},

			fontFamily: {
				sans: ['Quicksand', 'sans-serif'],
				sans2: ['Helvetica', 'sans-serif'],
				signature: ['BrianStrait', 'serif'],
				hand: ['Movement-Indirect', 'serif'],
				serif: ['Mate', 'serif']
			},

			screens: {
				xs: '410px',
				sm: '640px',
				md: '768px',
				lg: '1024px',
				xl: '1280px',
				'2xl': '1536px',
				'3xl': '1800px'
			},

			spacing: {
				xxxs: '.1rem',
				xxs: '.25rem',
				xs: '.5rem',
				sm: '1rem',
				md: '1.5rem',
				lg: '2rem',
				xl: '3rem',
				'2xl': '6rem',
				'2.5xl': '7.5rem',
				'3xl': '9rem'
			}
		}
	},

	plugins: [
		require('tailwind-scrollbar'),
		require('@tailwindcss/typography'),
		plugin(({ matchUtilities, theme }) => {
			matchUtilities(
				{
					'animation-delay': (value) => {
						return {
							'animation-delay': value
						};
					}
				},
				{
					values: theme('transitionDelay')
				}
			);
		})
	]
};
