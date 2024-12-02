import { createApp } from 'vue'
import './scss/main.scss'
import App from './App.vue'
import Username from './components/Username.vue'
import makeBurst from './animations/sparks'

const app = createApp(App)
app.component('Username', Username)
app.mount('#app')

document.addEventListener('DOMContentLoaded', () => {
	// Animation
	// Taken from: https://github.com/okineadev/okineadev-website/blob/0a43328daf7a5752a200618656aff2fa4c2993f3/src/index.html#L539-L560

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

	// Cool click effect
	document.addEventListener('click', (e) => {
		const center = { x: e.pageX, y: e.pageY }
		makeBurst(center)
	})

	// const employeesCards = document.getElementsByClassName('employee')
	// for (let i = 0; i < employeesCards.length; i++) {
	// 	employeesCards[i].addEventListener('click', () => {

	//   })
	// }
})

// Source: https://gist.github.com/okineadev/753583c3df860294b05d7f450c9eb8b4
console.log(
	`%c
                                        ..
                          ..=+=+*==.:=-=..
                       .:%=-.*#*=*#++**@#...
                     .-@.:-*..     ..-=*#:*.
                     +-+=:.             ...:=.
                    ==@%%:....              .#.
                  ..#*+#=**##..              ::.
                .:--@+*+*+***+. .-.....==-... .-.
            ....:%+%+%*-%%+*%. .::+@%%#..::*+..*..
         .-+.:...+%:***@+***:...#=...:-+@+#=#+#:#.
       ..=    .=..:@:..:#%+:...+=:-%---+:.:.+-+-*.
      ..:.+.   .=..:+-==.%-.+:..:++:....=....-%.:.
      .+..-    .=..+.--.%%=..:    ....=...    .--.
     .=. -.     .+.*...-.@*.:.                  .=
     .#. *      .:.++:@..**%-@.+=+.*....*=-+:....:-
    .-:=-*       .#@.=.:+-+@=+*-+:*=:-+:.:...+-. .+
    .-..:#       .::.+-+@@+*#==:+#@@=*#+*---=.....=
    =: ..#-       .+..+*@@+#=%@@#-#-@%@@@@.@#:#*..-..
    =:   :=       .=. =.***#%-@-#:%-%-...:.-#:...=.
    +:   .-       ..: .*#*#@*#@*=-.@*==-=#.=..
   .-.-  +:         *.=@=%**%+==#:=..+%==@*=.
  .:-    ++         .=-.=+=**#@*@##+*:...-#++.-.
  .:-.   :=.         .==-+==%:*%=#++#*#%*###--..
  -...    -+          .+::=@:%*%%##:@*%-%. .-##...
  *.      --.          .+.=#:%####:%%+#%. .=+-:..+..
  +.      .-+           .-#-.%%#%++@@@-=    .#:-:.:..
  ..       .-         ..+%+.=*.#@=...=. .....*..-=.*.
            : .       :=..-         ..+...++-.+.-.+..
            .=.       . .%.         .-=..#+#-+*=-*=.
             .-..       ...  ..     .--::-.:.:.%.=.
              .:-.        ...:.  ..-=.    .-:...
               ..=.      ..---..=-.
                 .:-..+*..=:-#..
                    ..:-:..
`,
	'color: #fff; font-family: monospace; font-size: 10px;',
)
