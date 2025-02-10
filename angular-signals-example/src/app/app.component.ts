import {Component, signal, effect,} from '@angular/core';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.scss']
})
export class AppComponent {
	title = 'angular-signals-example';
	theme = signal('light');
	label = this.theme();

	constructor () {
		effect(() => {
			this.label = this.theme();
		});
	}

	toggleDarkMode () {
		this.theme.update(currentValue => currentValue === 'light' ? 'dark' : 'light');
	}

}
