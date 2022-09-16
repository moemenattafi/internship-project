import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
//import { AuthGuardService } from './services/auth-guard.service';
import { SignupComponent } from './components/signup/signup.component';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { CycleComponent } from './components/cycle/cycle.component';
import { FormateursComponent } from './components/formateur/formateur.component';
import { ParticipantRegistrationComponent } from './components/participant-registration/participant-registration.component';

const routes: Routes = [
  {path:"",component:HomeComponent},
  {path:"cycle",component:CycleComponent},
  {path:"formateur",component:FormateursComponent,/*canActivate:[AuthGuardService]*/},
  {path:"login",component:LoginComponent},
  {path:"signup",component:SignupComponent},
  {path:"participant",component:ParticipantRegistrationComponent},
  {path:"**",redirectTo:""},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
