import { Injectable } from '@angular/core';
import { HttpHeaders,HttpClient } from '@angular/common/http';

import { first,catchError } from 'rxjs/operators';
import { Observable } from "rxjs";

import { Cycle } from '../models/Cycle';
import { Admin } from '../models/Admin';
import { ErrorHandlerService } from './error-handler.service';

@Injectable({
  providedIn: 'root'
})
export class CycleService {
  private url ="http://localhost:3000/cycle";


  httpOptions: { headers:HttpHeaders }={
    headers : new HttpHeaders ({"content-type":"application/json"})
  }


  constructor(
             private http: HttpClient,
             private errorHandlerService: ErrorHandlerService
  ) { }

  fetchAll():Observable<Cycle[]>
  {
    return this.http
    .get<Cycle[]>(this.url, { responseType :'json' })
    .pipe(
      catchError(this.errorHandlerService.handleError<Cycle[]>("fetchAll",[]))
    );
  }

  createCycle(formData:Partial<Cycle>
    ):Observable<Cycle>{
return this.http
.post<Cycle>(
this.url,
{ entreprise:formData.entreprise,
  numAction :formData.numAction,
  themeDeFormation:formData.themeDeFormation,
  lieuDeDeroulement:formData.lieuDeDeroulement,
  debutDePeriode:formData.debutDePeriode,
  finDePeriode:formData.finDePeriode,
  horaireDeDebut:formData.horaireDeDebut,
  horaireDeFin :formData.horaireDeFin,
  debutPause:formData.debutPause,
  finPause:formData.finPause,
  numSalle:formData.numSalle,
  creditDimpot:formData.creditDimpot,
  droitsDeTirageIndiv:formData.droitsDeTirageIndiv,
  droitsDeTirageCollect:formData.droitsDeTirageCollect,
  modeDeFormation:formData.modeDeFormation,
  gouvernorat:formData.gouvernorat},
this.httpOptions).pipe(catchError(this.errorHandlerService.handleError<Cycle>("createCycle")));
}

deleteCycle(cycleId : Pick<Cycle,"idcycle">):Observable<{}>{
  return this.http
  .delete<Cycle>(`${this.url}/${cycleId}`,this.httpOptions).pipe(
    first(),
    catchError(this.errorHandlerService.handleError<Cycle>("deleteCycle")))

}








}
