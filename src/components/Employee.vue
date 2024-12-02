<script setup lang="ts">
import type { Employee } from '../types'
import Username from './Username.vue';

// == Generated with OpenAI o1 ==
// Import all avatar images
const avatarImages = import.meta.glob('../assets/avatars/*.png', {
	eager: true,
})

// Map GitHub usernames to image paths
const avatarMap = Object.fromEntries(
	Object.entries(avatarImages).map(([path, module]) => {
		const username = path.match(/\/(\w+)\.png$/i)?.[1].toLowerCase()

		return [
			username,
			(
				module as {
					default: string
				}
			).default,
		]
	}),
)

defineProps<{
	employee: Employee
}>()
</script>

<style src="../scss/employees.scss"></style>

<template>
	<div class="employee">
		<img class="avatar" :src="employee.customAvatar ? avatarMap[employee.github.toLowerCase()] :
			employee.customAvatarURL ? employee.customAvatarURL :
				`https://github.com/${employee.github.toLowerCase()}.png`" :alt="employee.name" width="90" height="90">

		<h3 class="name">{{ employee.name }}</h3>

		<Username>{{ employee.github }}</Username>
		<hr><!---------------------------------------->
		<span class="about">{{ employee.about }}</span>
	</div>
</template>
