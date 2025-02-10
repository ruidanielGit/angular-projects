import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Router, ActivatedRoute} from '@angular/router';
import {Reservation} from '../models/reservation';
import {ReservationService} from '../reservation/reservation.service';

@Component({
	selector: 'app-reservation-form',
	templateUrl: './reservation-form.component.html',
	styleUrls: ['./reservation-form.component.css']
})
export class ReservationFormComponent implements OnInit {

	reservationForm: FormGroup = new FormGroup({});

	constructor (private formBuilder: FormBuilder, private reservationService: ReservationService, private router: Router,
				 private activatedRoute: ActivatedRoute) {
	}

	ngOnInit () {
		this.reservationForm = this.formBuilder.group({
			checkInDate: ['', Validators.required],
			checkOutDate: ['', Validators.required],
			guestName: ['', Validators.required],
			guestEmail: ['', [Validators.required, Validators.email]],
			roomNumber: ['', Validators.required]
		});

		// check if there is an ID on the url  (will happen in case it's an Edit)
		let id = this.activatedRoute.snapshot.paramMap.get('id');
		if (id) {

			this.reservationService.getReservationById(id).subscribe(
				reservation => {
					if (reservation)
						this.reservationForm.patchValue(reservation);
				}
			);
		}
	}

	onSubmit () {
		if (this.reservationForm.valid) {
			let reservation: Reservation = this.reservationForm.value;

			// check if there is an ID on the url  (will happen in case it's an Edit) and remove the Old reservation
			let id = this.activatedRoute.snapshot.paramMap.get('id');

			if (id) {
				// Update
				this.reservationService.updateReservation(id, reservation).subscribe(() => {
					console.log("Updating processed")
				});
			} else {
				// New
				this.reservationService.addReservation(reservation).subscribe(() =>
				console.log("Reservation processed"));
			}
		}

		this.router.navigate(['/list']);
	}

}
