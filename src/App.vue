<script setup lang="ts">
import { ref } from 'vue';
import Employee from './components/Employee.vue';
import employeesList from './employees';

const employees = ref(employeesList);

import { onMounted } from 'vue';

// Taken from: https://github.com/okineadev/okineadev-website/blob/0a43328daf7a5752a200618656aff2fa4c2993f3/src/index.html#L539-L560
// TODO: Refactor this
onMounted(() => {
  if (
    window.matchMedia("(prefers-reduced-motion: no-preference)").matches
  ) {
    const contentElements = document.querySelectorAll("#container > *");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry, index) => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              entry.target.classList.add("animate");
              observer.unobserve(entry.target); // Stop observing once animated
            }, index * 200); // Apply delay based on index
          }
        });
      },
      { threshold: 0.1 }
    ); // Adjust threshold as needed

    for (const element of contentElements) {
      observer.observe(element);
    }
  }
});
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
    </div>

    <h2>Company employees:</h2>

    <div id="employees">
      <Employee v-for="employee in employees" :key="employee.name" :employee="employee" />
    </div>

  </div>
</template>
