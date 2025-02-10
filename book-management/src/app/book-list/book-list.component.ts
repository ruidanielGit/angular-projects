import {Component} from '@angular/core';
import {Store, select} from '@ngrx/store';
import {AppState} from '../app.state';
import {Book} from '../models/book';
import {AddBook, RemoveBook} from '../books/book.actions';
import {Observable} from 'rxjs';

@Component({
	selector: 'app-book-list',
	templateUrl: './book-list.component.html',
	styleUrls: ['./book-list.component.scss']
})
export class BookListComponent {

	books$: Observable<Book[]>;

	constructor (private store: Store<AppState>) {
		this.books$ = store.pipe(select('book'));
	}

	addBook (id: string, title: string, author: string) {
		this.store.dispatch(AddBook({id, title, author}));
	}

	removeBook (bookId: string) {
		this.store.dispatch(RemoveBook({bookId}));
	}

}
