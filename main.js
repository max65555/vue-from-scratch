function log(message) {
	console.log(message);
} // let app = Vue.createApp({
// 	data: function () {
// 		return {
// 			message: 'Hello World',
// 			isVisibleBoxRed: false,
// 			isVisibleBoxGreen: false,
// 			isVisibleBoxBlue: false,

// 		};
// 	},
// });

// let app = Vue.createApp({
// 	data: function () {
// 		return {
// 			evMeBox: true,
// 			greeting: '',
// 			visibleInput: true,

// 		};
// 	},
// 	methods: {
// 		OnClickEvent: function () {
// 			this.evMeBox = !this.evMeBox;
// 		},
// 		keyUpEvent(object) {
// 			log(object.target);
// 			this.visibleInput = false;
// 		},
// 	},
// });
let app = Vue.createApp();
app.component('login-form', {
	template: `
	<h1>{{greeting}}</h1>
	<form v-on:submit.prevent="HandleSubmit" class="center-box">
	<custom-input />		
	<custom-input />		
	<button >Login</button>		
	</form>
	`,
	data: function () {
		return {
			userName: '',
			password: '',
		};
	},
	methods: {
		CheckLogin: function () {
			log(this.userName + ' __ ' + this.password);
		},
		HandleSubmit: function () {
			console.log('Submit Form');
		},
	},
	components: ['custom-input'],
});
app.component('custom-input', {
	data: function () {
		return {
			title: 'Le Khanh Toan',
		};
	},
	template: `
		<div class="component__custom-input--container">
			<h1>{{title}}</h1>
			<input type="text" v-model="input_data" placeholder="placeholder" class="component__custom-input--input">
		</div>
	`,
});
app.mount('#app');
