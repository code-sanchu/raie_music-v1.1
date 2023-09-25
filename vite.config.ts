import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';
import { imagetools } from 'vite-imagetools';

const supportedExtensions = ['png', 'jpg', 'jpeg'];

export default defineConfig({
	plugins: [
		sveltekit(),
		imagetools({
			defaultDirectives(url) {
				const extension = url.pathname.substring(url.pathname.lastIndexOf('.') + 1);

				if (supportedExtensions.includes(extension)) {
					return new URLSearchParams({
						format: 'avif;webp;' + extension,
						picture: 'true'
					});
				}
				return new URLSearchParams();
			}
		})
	]
});
