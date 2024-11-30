<script setup lang="ts">
import { ref } from 'vue'

import Employee from './components/Employee.vue'
import Username from './components/Username.vue';

import employeesList from './employees'

const employees = ref(employeesList)

import { onMounted } from 'vue'

// Taken from: https://github.com/okineadev/okineadev-website/blob/0a43328daf7a5752a200618656aff2fa4c2993f3/src/index.html#L539-L560
// TODO: Refactor this
onMounted(() => {
	if (window.matchMedia('(prefers-reduced-motion: no-preference)').matches) {
		const contentElements = document.querySelectorAll('#container > *')
		const observer = new IntersectionObserver(
			(entries) => {
				entries.forEach((entry, index) => {
					if (entry.isIntersecting) {
						setTimeout(() => {
							entry.target.classList.add('animate')
							observer.unobserve(entry.target) // Stop observing once animated
						}, index * 200) // Apply delay based on index
					}
				})
			},
			{ threshold: 0.1 },
		) // Adjust threshold as needed

		for (const element of contentElements) {
			observer.observe(element)
		}
	}
})
</script>

<template>
	<div id="container">
		<div id="title">
			<h1>ZGalera</h1>
			<img src="./assets/zgalera-logo-black.svg" alt="">
		</div>

		<div id="description">
			<p>A forge where the best blacksmith of software development gather</p>
			<p>Anyone can join our friendly team and work for free!</p>
			<br>
			<p>Our main goal is to build the largest and least paid galley in the world with cheap labor.</p>
			<br>
			<p>For a <u class="dotted">$100</u> membership fee, we offer you to join our company as an intern. During the
				internship, you will not
				only receive mentoring from the best specialists (<Username>Krak3nDev</Username>, <Username>PlzTrustMe
				</Username>, <Username>Latand
				</Username>, <Username>pluresque</Username>
				etc.), but also
				participate in cultural corporate events from Alejandro and Hellicer. After 9 months of unpaid internship, we
				have a 50% chance (it all depends on you 😉) that we guarantee you an offer of <u class="dotted">$500</u></p>

			<br>
			<p>We offer full remote work. Management and communications in the company are carried out in accordance with the
				Agile methodology within our personal TelegramCRM system "Загальний Чат".
				We also guarantee growth within the company depending on the hours spent working (including on weekends) - from
				<u class="dotted">10</u> hours/day is a good indicator that you are striving to become better and, together with
				us,
				lead the company
				to heights.
			</p>
		</div>

		<h2>Company employees:</h2>

		<div id="employees">
			<Employee v-for="employee in employees" :key="employee.name" :employee="employee" />
		</div>

	</div>
</template>
