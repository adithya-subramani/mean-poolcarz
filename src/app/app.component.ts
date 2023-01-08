import { Component,OnInit } from '@angular/core';
import { LoginComponent } from './login/login.component';
import { BookRideComponent } from './book-ride/book-ride.component';
import {RestService} from './rest-service.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  constructor(public rest:RestService){}
  title = 'pool-carz-demo';
  isDone:boolean=false;
  ngOnInit(): void {
    // this.rest.setUser("");
  }
}
