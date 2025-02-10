import {Component, OnInit} from '@angular/core';
import {Product} from '../../models/product';
import {ProductService} from '../../product/product.service';
import {CartService} from '../cart.service';

@Component({
	selector: 'app-cart-view',
	templateUrl: './cart-view.component.html',
	styleUrls: ['./cart-view.component.scss']
})
export class CartViewComponent implements OnInit {

	cartItems: Product[] = [];
	totalPrice: number = 0;

	constructor (private cartService: CartService) {
	}

	ngOnInit () {
		this.cartService.getCartItems().subscribe((items) => {
			this.cartItems = items;
			this.totalPrice = this.getTotalPrice();
		});
	}

	getTotalPrice (): number {
		let total = 0;

		for (let item of this.cartItems) {
			total += item.price;
		}
		return total;
	}

	clearCart (): void {
		this.cartService.clearCart().subscribe();
	}

	checkoutCart (): void {
		this.cartService.checkoutCart(this.cartItems).subscribe();
	}
}
