const { createApp } = Vue
const configurazione = {
	data() {
		return {
			message: 'Welcome to VueJS!',
			firstName: "gabbo",
			lastName: "cyber",
		}
	},
	methods: {
		stampaMsg(questo) {
			alert(questo);
		},
		}
	}

let app = Vue.createApp(configurazione);

console.log("applicazione inizializzata ma non montata", app);

app.mount('#app');