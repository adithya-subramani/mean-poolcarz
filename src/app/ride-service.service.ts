import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class RideServiceService {

  constructor(private http:HttpClient) { }
  getRides():Observable<any[]>{
    return this.http.get<any[]>('http://localhost:3000/getrides');
  }
  addRide(ride:any):Observable<any>{
    const options=new HttpHeaders({'Content-Type':'application/json'})
    console.log(ride);
    return this.http.post('http://localhost:3000/addride',
    ride,{headers:options}).pipe(tap((data: any) => console.log('Data Fetched:' + JSON.stringify(data))));
  }
  updateRide(ride:any):Observable<any>{
    const options=new HttpHeaders({'Content-Type':'application/json'})
    console.log(ride);
    return this.http.put(`http://localhost:3000/updateride/${ride.id}`,
    ride,{headers:options}).pipe(tap((data: any) => console.log('Data Fetched:' + JSON.stringify(data))));
  }
}
