import { Cycle } from './../../models/Cycle';
import { Component, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { first } from 'rxjs';
import { FormControl,FormGroup,NgForm,Validators } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';
import { CycleService } from 'src/app/services/cycle.service';

@Component({
  selector: 'app-create-cycle',
  templateUrl: './create-cycle.component.html',
  styleUrls: ['./create-cycle.component.scss']
})
export class CreateCycleComponent implements OnInit {
  @ViewChild("formDirective") formDirective : NgForm;
  @Output() create : EventEmitter<any> =new EventEmitter();
  form:FormGroup;
  isOpen =false;

  constructor(private authService :AuthService,private cycleService:CycleService) { }

  ngOnInit(): void {
    this.form=this.createFormGroup();
  }


  createFormGroup():FormGroup{
    return new FormGroup ({
      entreprise: new FormControl ("",[Validators.required,]),
      numAction: new FormControl ("",[Validators.required,]),
      themeDeFormation: new FormControl ("",[Validators.required,]),
      lieuDeDeroulement: new FormControl ("",[Validators.required,]),
      debutDePeriode: new FormControl ("",[Validators.required,]),
      finDePeriode: new FormControl ("",[Validators.required,]),
      horaireDeDebut: new FormControl ("",[Validators.required,]),
      horaireDeFin : new FormControl ("",[Validators.required,]),
      debutPause: new FormControl ("",[Validators.required,]),
      finPause: new FormControl ("",[Validators.required,]),
      numSalle: new FormControl ("",[Validators.required,]),
      creditDimpot: new FormControl ("",[Validators.required,]),
      droitsDeTirageIndiv: new FormControl ("",[Validators.required,]),
      droitsDeTirageCollect: new FormControl ("",[Validators.required,]),
      modeDeFormation: new FormControl ("",[Validators.required,]),
      gouvernorat: new FormControl ("",[Validators.required,]),
    })

  }


   onSubmit(formData:Pick<Cycle,"entreprise" | "numAction" | "themeDeFormation" | "lieuDeDeroulement" | "debutDePeriode" | "finDePeriode" | "horaireDeDebut" | "horaireDeFin" | "debutPause" | "finPause" | "numSalle" | "creditDimpot" | "droitsDeTirageIndiv" | "droitsDeTirageCollect" | "modeDeFormation" | "gouvernorat" >):void{
    this.cycleService
    .createCycle(formData)
    .pipe(first())
    .subscribe(() => {
      this.create.emit(null);
    });
  // console.log(formData);
  this.form.reset();
  this.formDirective.resetForm();
  }

}
/*"entreprise" | "numAction" | "themeDeFormation" | "lieuDeDeroulement" | "debutDePeriode" | "finDePeriode" | "horaireDeDebut" | "horaireDeFin" | "debutPause" | "finPause" | "numSalle" | "creditDimpot" | "droitsDeTirageIndiv" | "droitsDeTirageCollect" | "modeDeFormation" | "gouvernorat" */
