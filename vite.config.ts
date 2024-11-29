import vue from '@vitejs/plugin-vue'
import { defineConfig } from 'vite'
import { compression as viteCompression } from 'vite-plugin-compression2'
import { createHtmlPlugin } from 'vite-plugin-html'
import Sitemap from 'vite-plugin-sitemap'

/**
 * Vite configuration file.
 *
 * @see https://vite.dev/config/
 */
export default defineConfig({
	base: '', // 👈 https://stackoverflow.com/a/69746868
	plugins: [
		vue(),
		createHtmlPlugin({ minify: true }),
		viteCompression({ include: /\.(js|css|html)$/i }),
		Sitemap({ hostname: 'https://zgalera.github.io/zgalera-website/' }),
	],
})
