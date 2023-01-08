import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { BookRideComponent } from './book-ride/book-ride.component';
import { RideDetailsComponent } from './ride-details/ride-details.component';
import { OfferRideComponent } from './offer-ride/offer-ride.component';

const routes: Routes = [
  {path:'login',component: LoginComponent},
  {path:'',redirectTo:'/login',pathMatch:'full'},
  {path:'book-ride',component: BookRideComponent},
  {path:'offer-ride',component: OfferRideComponent}
  // {path:'login',component: LoginComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
