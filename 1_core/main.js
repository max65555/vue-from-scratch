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
// login form component
////////////////////
app.component('login-form', {
	template: `
	<form v-on:submit.prevent="HandleSubmit" class="center-box">

	</span>		
	<custom-input v-for="(input,i) in inputs" :key= "i"
	 v-model="input.value" :label="input.label" :type="input.type"/> 			
	<button type="submit">Login</button>		
	</form>
	`,
	data: function () {
		return {
			greeting: 'hello',
			userName: '123',
			password: '123',
			userNameLabel: 'Email',
			passwordLabel: 'password',
			inputs: [
				{
					label: 'Email',
					value: '',
					type: 'email',
				},
				{
					label: 'password',
					value: '',
					type: 'password',
				},
			],
		};
	},
	methods: {
		HandleSubmit: function () {
			log(this.inputs[0].value + ' __ ' + this.inputs[1].value);
		},
	},
	components: ['custom-input'],
});
// custom input component
////////////////////
app.component('custom-input', {
	data: function () {
		return {
			title: 'Le Khanh Toan',
		};
	},
	computed: {
		inputValue: {
			get() {
				return this.modelValue;
			},
			set(value) {
				this.$emit('update:modelValue', value);
			},
		},
	},
	props: ['label', 'type', 'modelValue'],
	template: `
		<div class="component__custom-input--container">
			<label>{{label}}
			<input :type="type" placeholder="placeholder" class="component__custom-input--input" v-model="inputValue">
			</label>
			</div>
		`,
});
app.mount('#app');
