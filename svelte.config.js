import cloudflare from '@sveltejs/adapter-cloudflare-workers';
import path from 'path';
import houdini from 'houdini-preprocess';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	preprocess: [houdini()],
	kit: {
		vite: {
			resolve: {
				alias: {
					$houdini: path.resolve('.', '$houdini')
				}
			}
		},
		adapter: cloudflare(),

		// hydrate the <div id="svelte"> element in src/app.html
		target: '#svelte'
	}
};

export default config;
