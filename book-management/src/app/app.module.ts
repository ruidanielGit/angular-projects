import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {EffectsModule} from '@ngrx/effects';
import {StoreModule} from '@ngrx/store';
import {StoreDevtoolsModule} from '@ngrx/store-devtools';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {AppState} from './app.state';
import {BookEffects} from './books/book.effects';
import {BookReducer} from './books/book.reducer';
import {BookListComponent} from './book-list/book-list.component';

@NgModule({
	declarations: [
		AppComponent,
		BookListComponent
	],
	imports: [
		BrowserModule,
		AppRoutingModule,
		StoreModule.forRoot<AppState>({book: BookReducer}),
		EffectsModule.forRoot([BookEffects]),
		StoreDevtoolsModule.instrument()
	],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule {
}
