var app = Vue.createApp({
	template: `
        <div @click="TogglePurpleBox" class="trigger">Click</div>
        <purple-box :isVisible="isVisible"></purple-box>
	`,
	data() {
		return {
			isVisible: false,
		};
	},
	methods: {
		TogglePurpleBox: function () {
			this.isVisible = !this.isVisible;
		},
	},
});
app.component('purple-box', {
	template: `
    <div v-if="isVisible"class="purple-box">Purple Box</div>
    `,
	props: ['isVisible'],
});
app.mount('#app');
