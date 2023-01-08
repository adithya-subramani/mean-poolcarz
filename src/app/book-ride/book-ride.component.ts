import { Component, OnInit } from '@angular/core';
import {RideServiceService} from '../ride-service.service'
import {RestService} from '../rest-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-book-ride',
  templateUrl: './book-ride.component.html',
  styleUrls: ['./book-ride.component.css']
})
export class BookRideComponent implements OnInit {
  // rides:any[]=[
  //   {strt:"Office",stop:"Guindy",seats:3},
  //   {strt:"Guindy",stop:"Office",seats:2},
  //   {strt:"Chrompet",stop:"Guindy",seats:1},
  //   {strt:"Mambalam",stop:"Office",seats:7},
  //   {strt:"Office",stop:"Mambalam",seats:4}
  // ]
  rides!:any[];
  passId!:any;
  passName!:any;
  passCar!:any;
  passStart!:any;
  passStop!:any;
  passSeats!:any;
  option!:string;
  showFilter!:boolean;
  showAll!:boolean;
  offerBool!:boolean;
  selected!:boolean;
  rBooked!:boolean;
  constructor(private router:Router,private rideService:RideServiceService,private rest:RestService) { }
  showRides(){
    this.showFilter=true;
  }
  showAllRides(temp:string){
    this.showAll=true;
    this.option=temp;
  }
  offerRide(){
    this.router.navigate(['/offer-ride']);
    this.offerBool=true;
  }
  selectRide(pid:any,pname:any,pcar:any,pstart:any,pend:any,pseats:any){
    if(this.rest.getUser()==="") alert("Please login!");
    else{
      this.selected=true;
      this.passId=pid;
      this.passName=this.rest.getUser();
      this.passCar=pcar;
      this.passStart=pstart;
      this.passStop=pend;
      this.passSeats=pseats;
    }
  }
  bookDone(cBooked:boolean){
    this.rBooked=cBooked;
    if(this.rBooked==true)
      this.passSeats=this.passSeats-1;
    else
      this.passSeats=this.passSeats+1;
    this.rideService.updateRide({
      id:this.passId,
      name:this.passCar,
      strt:this.passStart,
      stop:this.passStop,
      seats:this.passSeats
    }).subscribe({
    next:()=>this.rideService.getRides().subscribe({next:(data)=>this.rides=data,error:(err)=>this.err=err}),
    error:(err)=>console.log(err)});
  }
  err!:string;
  ngOnInit(): void {
    this.rideService.getRides().subscribe({
      next:(data)=>this.rides=data,
      error:(err)=>this.err=err
    })
  }

}
