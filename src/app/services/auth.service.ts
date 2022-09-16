import { Injectable } from '@angular/core';
import { HttpHeaders,HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';


import { Observable,BehaviorSubject } from 'rxjs';
import { first,tap,catchError } from 'rxjs/operators';


import { Admin } from '../models/Admin';
import { ErrorHandlerService } from './error-handler.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private url ="http://localhost:3000/auth";
  isAdminLoggedIn$ = new BehaviorSubject<boolean>(false);
  adminId:Pick<Admin,'id'>
  httpOptions: { headers:HttpHeaders }={
    headers : new HttpHeaders ({"content-type":"application/json"})
  }

  constructor(private http :HttpClient
             ,private errorHandlerService:ErrorHandlerService
             ,private router:Router) { }



  signup(admin:Omit<Admin,"id">):Observable<Admin>{
    return this.http
    .post<Admin>(`${this.url}/signup`,admin,this.httpOptions)
    .pipe(
      first(),
      catchError(this.errorHandlerService.handleError<Admin>("signup"))
    );
  }


  login(email:Pick<Admin,"email">,
        password:Pick<Admin,"password">
        ):Observable<{
          token:string;
          adminId:Pick<Admin,"id">}>
  {
    return this.http
    .post(`${this.url}/login`,{email,password},this.httpOptions)
    .pipe(
      first(),
      tap((tokenObject:{token: string; adminId:Pick<Admin,"id">})=>{
        this.adminId=tokenObject.adminId;
        localStorage.setItem("token",tokenObject.token);
        this.isAdminLoggedIn$.next(true);
        this.router.navigate(["formateurs"])///this is the page that we've been redirect to after login

      }),
      catchError(this.errorHandlerService.handleError<{token: string;adminId:Pick<Admin,"id">}>("login"))
    )
  }
}
