import {NgModule} from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {BrowserModule} from '@angular/platform-browser';
import {CartModule} from './cart/cart.module';
import {ProductModule} from './product/product.module';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {HttpClientModule} from '@angular/common/http';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatToolbarModule} from '@angular/material/toolbar';

@NgModule({
	declarations: [
		AppComponent
	],
	imports: [
		BrowserModule,
		AppRoutingModule,
		ProductModule,
		HttpClientModule,
		BrowserAnimationsModule,
		MatToolbarModule,
		MatButtonModule,
		CartModule
	],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule {
}
