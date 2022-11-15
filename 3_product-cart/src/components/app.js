let app = Vue.createApp({
	data() {
		return {
			isSideBarHiding: false,
			inventory: [],
			cart: {},
		};
	},
	async mounted() {
		const res = await fetch('./food.json');
		const data = await res.json();
		this.inventory = data;
		console.log(this.inventory);
	},
	methods: {
		addToCart(name, index) {
			if (!this.cart[name]) this.cart[name] = 0;
			this.cart[name] += this.inventory[index].quantity;
			console.log(this.cart);
		},
		showSideBar() {
			console.log(this.isSideBarHiding);
			this.isSideBarHiding = !this.isSideBarHiding;
		},
	},
});
app.component('side-bar', {
	props: ['toggle', 'cart', 'inventory'],
	computed: {
		cartTotal: function () {
			return (this.cart.carrots * 4.82).toFixed(2);
		},
	},
	methods: {
		roundDollars(value) {
			return value.toFixed(2);
		},
	},

	template: `
	<aside class="cart-container">
		<div class="cart">
			<h1 class="cart-title spread">
				<span>
					Cart
					<i class="icofont-cart-alt icofont-1x"></i>
				</span>
				<button v-on:click="toggle" class="cart-close">&times;</button>
			</h1>

			<div class="cart-body">
				<table class="cart-table">
					<thead>
						<tr>
							<th>
								<span class="sr-only">Product Image</span>
							</th>
							<th>Product</th>
							<th>Price</th>
							<th>Qty</th>
							<th>Total</th>
							<th>
								<span class="sr-only">Actions</span>
							</th>
						</tr>
					</thead>
					<tbody>
						<tr v-for="(item,i) in cart" :key="i">
							<td>		
								<i class="icofont-carrot icofont-3x"></i>
							</td>
							<td></td>
							<td>$4.82</td>
							<td class="center">{{cart.carrots}}</td>
							<td>\${{roundDollars(cart.carrots* 4.82)}}</td>
							<td class="center">
								<button class="btn btn-light cart-remove">
									&times;
								</button>
							</td>
						</tr>
					</tbody>
				</table>

				<p class="center">
					<em>No items in cart</em>
				</p>
				<div class="spread">
					<span>
						<strong>Total:</strong> \${{cartTotal}}
					</span>
					<button class="btn btn-light">Checkout</button>
				</div>
			</div>
		</div>
		</aside>`,
});
app.mount('#app');
