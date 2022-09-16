import { Injectable } from '@angular/core';
import { HttpHeaders,HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';


import { Observable,BehaviorSubject } from 'rxjs';
import { first,tap,catchError } from 'rxjs/operators';

import { Participant } from '../models/Participant';

import { ErrorHandlerService } from './error-handler.service';

@Injectable({
  providedIn: 'root'
})
export class RegistrationService {
  private url ="http://localhost:3000/participant";


  httpOptions: { headers:HttpHeaders }={
    headers : new HttpHeaders ({"content-type":"application/json"})
  }

  constructor(private http :HttpClient
    ,private errorHandlerService:ErrorHandlerService
    ,private router:Router) { }

  register(participant:Omit<Participant,'idparticipant'>){
    return this.http
    .post<Participant>(`${this.url}`,participant,this.httpOptions)
    .pipe(
      first(),
      catchError(this.errorHandlerService.handleError<Participant>("register"))
    );

  }
}
