let app = Vue.createApp({
	data() {
		return {
			isSideBarHiding: false,
			inventory: {
				carrots: 0,
				pineapples: 0,
				cherries: 0,
			},
			cart: {
				carrots: 0,
				pineapples: 0,
				cherries: 0,
			},
		};
	},
	methods: {
		addToCart(type) {
			//receive type and number
			this.cart[type] += this.inventory[type];
			console.log(this.cart);
		},
		showSideBar() {
			console.log(this.isSideBarHiding);
			this.isSideBarHiding = !this.isSideBarHiding;
		},
	},
});
app.component('side-bar', {
	props: ['toggle'],
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
						<tr>
							<td>
								<i class="icofont-carrot icofont-3x"></i>
							</td>
							<td>Carrot</td>
							<td>$1.00</td>
							<td class="center">1</td>
							<td>$1.00</td>
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
						<strong>Total:</strong> $1.00
					</span>
					<button class="btn btn-light">Checkout</button>
				</div>
			</div>
		</div>
		</aside>`,
});
app.mount('#app');
