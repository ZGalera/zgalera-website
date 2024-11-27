import { defineConfig } from 'vite';
import { createHtmlPlugin } from 'vite-plugin-html';
import { compression as viteCompression } from 'vite-plugin-compression2';
// import Sitemap from 'vite-plugin-sitemap';
import vue from '@vitejs/plugin-vue';

/**
 * Vite configuration file.
 *
 * @see https://vite.dev/config/
 */
export default defineConfig({
	plugins: [
		vue(),
		createHtmlPlugin({
			minify: true,
		}),
		viteCompression({
			include: /\.(js|css|html)$/i,
			// verbose: true
		}),
		// Sitemap({ hostname: 'https://zgalera.com' }),
	],
});
