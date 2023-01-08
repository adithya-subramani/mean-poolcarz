import { Component, Input, OnInit,Output,EventEmitter } from '@angular/core';
import {RideServiceService} from '../ride-service.service'

@Component({
  selector: 'app-ride-details',
  templateUrl: './ride-details.component.html',
  styleUrls: ['./ride-details.component.css']
})
export class RideDetailsComponent implements OnInit {

  constructor(private rideService:RideServiceService) { }
  iid:string='T101';
  passArr!:any;
  booked:boolean=false;
  @Input() id=''; 
  @Input() name=''; 
  @Input() car=''; 
  @Input() start=''; 
  @Input() stop=''; 
  @Input() seats=0; 
  @Output() registerEvent = new EventEmitter<boolean>();
  btnColor='green';
  bookRide(element:any){
    //booking
    if(this.booked==false){
      if(this.seats>0){
        this.booked=true;
        this.seats=this.seats-1;
        element.textContent='Cancel Ride';
        this.btnColor='red';
      }
      else alert("No seats available...");
    }
    //cancellation
    else{
      this.booked=false;
      this.seats=this.seats+1;
      element.textContent='Book Ride';
      this.btnColor='green';
    }
    // this.passArr=[{bookStat:this.booked,seatsN:this.seats}];
    this.registerEvent.emit(this.booked);
  }

  ngOnInit(): void {
  }
}
