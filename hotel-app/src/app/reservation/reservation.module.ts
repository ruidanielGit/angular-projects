import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterLink} from '@angular/router';
import {HomeModule} from '../home/home.module';
import {ReservationFormComponent} from '../reservation-form/reservation-form.component';
import {ReservationListComponent} from '../reservation-list/reservation-list.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

@NgModule({
	declarations: [
		ReservationFormComponent,
		ReservationListComponent
	],
	imports: [
		CommonModule,
		FormsModule,
		ReactiveFormsModule,
		RouterLink,
		HomeModule
	]
})
export class ReservationModule {
}
