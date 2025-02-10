import {Component, OnInit} from '@angular/core';
import {Appointment} from '../models/appointment';

@Component({
	selector: 'app-appointment-list',
	templateUrl: './appointment-list.component.html',
	styleUrls: ['./appointment-list.component.css']
})
export class AppointmentListComponent implements OnInit {

	newAppointmentTitle: string = '';
	newAppointmentDate: Date = new Date(Date.now());
	appointments: Appointment[] = [];

	addAppointment () {
		if (this.newAppointmentTitle.trim().length && this.newAppointmentDate) {
			let newAppointment: Appointment = {
				id: Date.now(),
				title: this.newAppointmentTitle,
				date: this.newAppointmentDate
			};
			this.appointments.push(newAppointment);

			// reset placeholders
			this.newAppointmentTitle = '';
			this.newAppointmentDate = new Date();

			localStorage.setItem('appointments', JSON.stringify(this.appointments));
		}
	}

	removeAppointment (index: number) {
		this.appointments.splice(index, 1);
		// localStorage.removeItem();
	}

	ngOnInit (): void {
		let savedAppointment = localStorage.getItem("appointments");
		this.appointments = savedAppointment ? JSON.parse(savedAppointment) : [];
	}

}
