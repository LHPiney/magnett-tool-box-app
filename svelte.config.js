import azure from 'svelte-adapter-azure-swa';
import { vitePreprocess } from '@sveltejs/kit/vite';


/** @type {import('@sveltejs/kit').Config} */
const config = {
	extensions: ['.svelte'],
	preprocess: [ vitePreprocess()],
	vitePlugin: {
		inspector: true,
	},
	kit: {
		adapter: azure()
	}
};
export default config;