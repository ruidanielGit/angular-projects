import {Component, OnInit} from '@angular/core';
import {Book} from '../models/book.model'

@Component({
	selector: 'app-book',
	templateUrl: './book.component.html',
	styleUrls: ['./book.component.scss']
})
export class BookComponent implements OnInit {

	title: string = '';
	author: string = '';
	books: Book[] = [];

	addBookToLocalStorage () {
		if (this.author.trim().length && this.title.trim().length) {
			let newBook: Book = {
				id: Date.now(),
				title: this.title,
				author: this.author
			};
			this.books.push(newBook);

			this.author = '';
			this.title = '';

			localStorage.setItem('books', JSON.stringify(this.books))
		}
	}

	ngOnInit () {
		let savedBooks = localStorage.getItem("books");
		this.books = savedBooks ? JSON.parse(savedBooks) : [];
	}

	deleteBook (index: number) {
		this.books.splice(index, 1);
	}
}
