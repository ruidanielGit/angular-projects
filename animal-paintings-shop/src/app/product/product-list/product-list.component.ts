import {Component, OnInit} from '@angular/core';
import {MatSnackBar} from '@angular/material/snack-bar';
import {CartService} from '../../cart/cart.service';
import {Product} from '../../models/product';
import {ProductService} from '../product.service';

@Component({
	selector: 'app-product-list',
	templateUrl: './product-list.component.html',
	styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {

	products: Product[] = [];
	filteredProducts: Product[] = [];
	sortOrder: string = '';

	constructor (private productService: ProductService, private cartService: CartService,
				 private snackBar: MatSnackBar) {
	}

	ngOnInit () {
		this.productService.getProducts().subscribe((products) => {
			this.products = products;
			this.filteredProducts = products;
		});
	}

	addToCart (product: Product): void {
		this.cartService.addToCart(product).subscribe({
			next: () => {
				this.snackBar.open('Product added to cart!', '', {
					duration: 2000,
					horizontalPosition: 'right',
					verticalPosition: 'top'
				});
			}
		});
	}

	applyFilter (event: Event): void {
		let searchTerm = (event.target as HTMLInputElement).value;
		searchTerm = searchTerm.toLowerCase();

		this.filteredProducts = this.products.filter(
			product => product.name.toLowerCase().includes(searchTerm)
		);

		this.sortByPrice(this.sortOrder);
	}

	sortByPrice (sortValue: string): void {
		this.sortOrder = sortValue;

		if (this.sortOrder === 'priceLowHigh') {
			this.filteredProducts.sort((a, b) => a.price - b.price);
		} else if (this.sortOrder === 'priceHighLow') {
			this.filteredProducts.sort((a, b) => b.price - a.price);
		}
	}
}
