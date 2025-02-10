import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatIconModule} from '@angular/material/icon';
import {MatListModule} from '@angular/material/list';
import {CartViewComponent} from './cart-view/cart-view.component';


@NgModule({
	declarations: [
		CartViewComponent
	],
	imports: [
		CommonModule,
		MatCardModule,
		MatListModule,
		MatButtonModule,
		MatIconModule,
	]
})
export class CartModule {
}
