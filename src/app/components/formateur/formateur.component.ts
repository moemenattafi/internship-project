
import { Component, OnInit } from '@angular/core';

import { Observable  } from 'rxjs';

import { FormateurService } from 'src/app/services/formateur.service';
import { AuthService } from 'src/app/services/auth.service';

import { Formateur } from 'src/app/models/Formateur';
import { Admin } from 'src/app/models/Admin';

@Component({
  selector: 'app-formateur',
  templateUrl: './formateur.component.html',
  styleUrls: ['./formateur.component.scss']
})


export class FormateursComponent implements OnInit {

  formateurs$: Observable <Formateur[]>;
  adminId : Pick<Admin,'id'>;

  constructor(private formateurService : FormateurService,
              private authService : AuthService) { }

  ngOnInit(): void {
    this.formateurs$=this.fetchAll();
    this.adminId = this.authService.adminId;
  }


  fetchAll():Observable<Formateur[]>{
    return this.formateurService.fetchAll();
  }


  createFormateur():void{
  this.formateurs$=this.fetchAll();
  }

  deleteFormateur(formateurId):void{
    this.formateurService.deleteFormateur(formateurId).subscribe(()=>(this.formateurs$=this.fetchAll()))
  }

}
