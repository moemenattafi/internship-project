
import { Injectable } from '@angular/core';
import { HttpHeaders,HttpClient } from '@angular/common/http';

import { first,catchError } from 'rxjs/operators';
import { Observable } from "rxjs";



import { Formateur } from '../models/Formateur';
import { Admin } from './../models/Admin';
import { ErrorHandlerService } from './error-handler.service';


@Injectable({
  providedIn: 'root'
})
export class FormateurService {
  private url ="http://localhost:3000/formateur";


  httpOptions: { headers:HttpHeaders }={
    headers : new HttpHeaders ({"content-type":"application/json"})
  }

  constructor(private http: HttpClient,
             private errorHandlerService: ErrorHandlerService) {}


  fetchAll():Observable<Formateur[]>
  {
    return this.http
    .get<Formateur[]>(this.url, { responseType :'json' })
    .pipe(
      catchError(this.errorHandlerService.handleError<Formateur[]>("fetchAll",[]))
    );
  }


  createFormateur(formData:Partial<Formateur>
                  ):Observable<Formateur>{
    return this.http
    .post<Formateur>(
      this.url,
      { nomEtPrenom:formData.nomEtPrenom,specialite:formData.specialite,direction:formData.direction},
   this.httpOptions).pipe(catchError(this.errorHandlerService.handleError<Formateur>("createFormateur")));
  }

  deleteFormateur(formateurId : Pick<Formateur,"idformateur">):Observable<{}>{
    return this.http
    .delete<Formateur>(`${this.url}/${formateurId}`,this.httpOptions).pipe(
      first(),
      catchError(this.errorHandlerService.handleError<Formateur>("deleteFormateur")))

  }

}

