import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup,FormControl, Validators } from '@angular/forms';
import {RideServiceService} from '../ride-service.service'
import {RestService} from '../rest-service.service';

@Component({
  selector: 'app-offer-ride',
  templateUrl: './offer-ride.component.html',
  styleUrls: ['./offer-ride.component.css']
})
export class OfferRideComponent implements OnInit {
  offerForm!: FormGroup;
  offerFail:boolean=false;
  isOffered:boolean=false;
  constructor(private formBuilder: FormBuilder,private rideService:RideServiceService,private rest:RestService) { }
  offSubmit(){
    if(this.rest.getUser()==="") alert("Please login!");
    else{
      this.rideService.addRide({
        id:Math.floor(Math.random()*100),
        name:this.offerForm.controls['name'].value,
        car:this.offerForm.controls['car'].value,
        strt:this.offerForm.controls['startLoc'].value,
        stop:this.offerForm.controls['destLoc'].value,
        seats:this.offerForm.controls['seats'].value
      }).subscribe({
        next:()=>this.isOffered=true
      });
    }
  }
  ngOnInit(){
    this.offerForm = this.formBuilder.group({
      name: ['', Validators.required],
      startLoc: ['', Validators.required],
      destLoc: ['', Validators.required],
      car: ['', Validators.required],
      seats: [0,this.validateSeats]
    });
  }
  validateSeats(c: FormControl): any {
    console.log(c.value);
      return (c.value>=0 && c.value<=8) ? null : {
        seatsInvalid: {
          message: "Seats must be between 0 & 8!"
        }
    };
  }
}
