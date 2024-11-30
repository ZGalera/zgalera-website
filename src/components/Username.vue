<template>
	<a class="github" :href="`https://github.com/${username}`">@<u>{{ username }}</u></a>
</template>

<script>
import githubUsernameRegex from 'github-username-regex';
export default {
	name: 'Username',
	props: {
		username: {
			type: String,
			required: false,
			validator: githubUsernameRegex.test
		},
	},
	computed: {
		username() {
			// Використовуємо пропс `username`, потім текст у слоті, інакше — 'unknown'
			const slotContent = this.$slots?.default()[0]?.children?.trim();
			return this.username || slotContent || 'unknown';
		}
	}
};
</script>
