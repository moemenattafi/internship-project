
import { Component, OnInit } from '@angular/core';
import { FormControl,FormGroup,Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { RegistrationService } from 'src/app/services/registration.service';

@Component({
  selector: 'app-participant-registration',
  templateUrl: './participant-registration.component.html',
  styleUrls: ['./participant-registration.component.scss']
})
export class ParticipantRegistrationComponent implements OnInit {
  registrationForm : FormGroup;
  constructor(private registrationService : RegistrationService, private router: Router) { }

  ngOnInit(): void {
    this.registrationForm=this.createForm();
  }
  createForm():FormGroup{
    return new FormGroup ({
      nomEtPrenom : new FormControl ("",[Validators.required,Validators.minLength(2)]),
      numCin : new FormControl ("",[Validators.required]),
      directionEtService : new FormControl ("",[Validators.required,Validators.minLength(7)]),
      entreprise : new FormControl ("",[Validators.required,Validators.minLength(7)]),
    })

  }
  register():void{
   console.log(this.registrationForm.value)
   this.registrationService
   .register(this.registrationForm.value)
   .subscribe((msg)=>{
    console.log(msg);
    this.registrationForm.reset();
   // console.log("participant registred!")
  });
  }

}
