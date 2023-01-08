import { Component, OnInit } from '@angular/core';
import {AuthServiceService} from '../auth-service.service'
import {RestService} from '../rest-service.service';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup;
  isLoggedIn:boolean=false;
  loginFail:boolean=false;
  userN!:string;

  constructor(private router:Router,private formBuilder: FormBuilder,private authService:AuthServiceService,private rest:RestService) { }
  
  public users!:any[];
  err!:string;

  logSubmit(un:string,pw:string){
    for(let i=0;i<this.users.length;i++){
      if(this.users[i].username===un && this.users[i].password===pw){
        this.isLoggedIn=true;
        this.userN=un;
        this.rest.setUser(un);
        this.router.navigate(['/book-ride']);
        break;
      }
    }
    if(this.isLoggedIn==false){
      this.loginFail=true;
    }
  }
  ngOnInit(){
    this.loginForm = this.formBuilder.group({
      userName: ['', Validators.required],
      passWord: ['', Validators.required]
    });
    this.authService.getUsers().subscribe({
      next:(data)=>this.users=data,
      error:(err)=>this.err=err
    })
  }

}
