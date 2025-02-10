import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import {ProductListComponent} from './product-list/product-list.component';
import {MatCardModule} from '@angular/material/card';
import {FlexModule} from '@angular/flex-layout';
import {MatSnackBarModule} from '@angular/material/snack-bar';

@NgModule({
	declarations: [
		ProductListComponent
	],
	imports: [
		CommonModule,
		MatCardModule,
		FlexModule,
		MatSnackBarModule,
		MatInputModule,
		MatSelectModule
	]
})
export class ProductModule {
}
