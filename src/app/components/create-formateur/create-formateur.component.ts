import { Component, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { FormControl,FormGroup,NgForm,Validators } from '@angular/forms';
import { first } from 'rxjs';
import { Formateur } from './../../models/Formateur';
import { AuthService } from 'src/app/services/auth.service';
import { FormateurService } from 'src/app/services/formateur.service';

@Component({
  selector: 'app-create-formateur',
  templateUrl: './create-formateur.component.html',
  styleUrls: ['./create-formateur.component.scss']
})
export class CreateFormateurComponent implements OnInit {
  @ViewChild("formDirective") formDirective : NgForm;
  @Output() create : EventEmitter<any> =new EventEmitter();
  form:FormGroup;
  isOpen =false;
  constructor(private authService :AuthService,private formateurService:FormateurService) { }

  ngOnInit(): void {
    this.form = this.createFormGroup();
  }


  createFormGroup():FormGroup{
    return new FormGroup ({
      nomEtPrenom : new FormControl ("",[Validators.required,Validators.minLength(4)]),
      specialite : new FormControl ("",[Validators.required,]),
      direction : new FormControl ("",[Validators.required,])

    })
  }


  onSubmit(formData:Pick<Formateur,"nomEtPrenom" | "direction" | "specialite">):void{
    this.formateurService
    .createFormateur(formData)
    .pipe(first())
    .subscribe(() => {
      this.create.emit(null);
    });
  this.form.reset();
  this.formDirective.resetForm();
  }

}
