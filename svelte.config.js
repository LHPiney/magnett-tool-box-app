
import azure from 'svelte-adapter-azure-swa';
import preprocess from 'svelte-preprocess';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	preprocess: preprocess(),
	kit: {
		adapter: azure({	
			comStaticWebAppConfig: {
				routes: [
					{ 
						route: '/api/*', 
						methods: ['GET', 'POST', 'PUT', 'DELETE'],
						allowedRoles: ['anonymous'] 
					},
				], 
				mimeTypes :  {'.json': 'application/json'}
			}
		})
	}
};

export default config;
