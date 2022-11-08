// let app = Vue.createApp({
// 	data: function () {
// 		return {
// 			message: 'Hello World',
// 			isVisibleBoxRed: false,
// 			isVisibleBoxGreen: false,
// 			isVisibleBoxBlue: false,

// 		};
// 	},
// });
function log(message) {
	console.log(message);
}
let app = Vue.createApp({
	data: function () {
		return {
			evMeBox: true,
			greeting: '',
			visibleInput: true,
		};
	},
	methods: {
		OnClickEvent: function () {
			this.evMeBox = !this.evMeBox;
		},
		keyUpEvent(object) {
			log(object.target);
			this.visibleInput = false;
		},
		// app.component();
	},
});
app.mount('#app');
