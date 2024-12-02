<script setup lang="ts">
import { ref } from 'vue'

import Button from './components/Button.vue';
import Employee from './components/Employee.vue'
import Username from './components/Username.vue';

import employeesList from './employees'

const employees = ref(employeesList)
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

			<h2>About us</h2>

			<p>Our main goal is to build the largest and least paid galley in the world with cheap labor.</p>
			<br>
			<div class="detailed-description">
				<p>For a <u class="dotted">$100</u> membership fee, we offer you to join our company as an intern. During the
					internship, you will not
					only receive mentoring from the best specialists (<Username>Krak3nDev</Username>, <Username>PlzTrustMe
					</Username>, <Username>Latand
					</Username>, <Username>pluresque</Username>
					etc.), but also
					participate in cultural corporate events from <Username>AlexFromLviv</Username> and <Username>Hellicer
					</Username>. After 9 months of unpaid internship, we have a 50% chance (it all depends on you 😉) that we
					guarantee you an offer of <u class="dotted">$500</u>
				</p>

				<br>

				<p>We offer full remote work. Management and communications in the company are carried out in accordance with
					the
					Agile methodology within our personal TelegramCRM system "Загальний Чат".
					We also guarantee growth within the company depending on the hours spent working (including on weekends) -
					from
					<u class="dotted">10</u> hours/day is a good indicator that you are striving to become better and, together
					with
					us,
					lead the company
					to heights.
				</p>
			</div>

		</div>

		<h2>Company employees:</h2>

		<div id="employees">
			<Employee v-for="(employee, index) in employees" :key="index" :employee="employee" />
		</div>

		<a
			href="https://github.com/ZGalera/invite/issues/new?assignees=&labels=join-request&projects=&template=join-organization.yml&title=Request+to+Join%3A+%5BYour+Name%5D">
			<Button id="join-button">Join our team</Button>
		</a>


	</div>
</template>
