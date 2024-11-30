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
			required: true,
			validator(value) {
				// Простий валідатор: відповідність GitHub username правилам
				return githubUsernameRegex.test(value);
			},
		},
	},
	computed: {
		username() {
			// Використовуємо слотний контент, якщо пропс `username` відсутній
			const slotContent = this.$slots.default && this.$slots.default()[0]?.children?.trim();
			return this.username || slotContent || 'unknown';
		},
	},
};
</script>
