import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NoopAnimationPlayer } from '@angular/animations';
import { ReactiveFormsModule} from "@angular/forms";
import { HttpClientModule,HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { MatButtonModule } from "@angular/material/button";
import { MatCardModule } from "@angular/material/card";
import { MatIconModule} from "@angular/material/icon";
import { MatInputModule} from "@angular/material/input";
import { MatListModule} from "@angular/material/list"
import { MatToolbarModule} from "@angular/material/toolbar";

import { NavigationComponent } from './components/navigation/navigation.component';
import { SignupComponent } from './components/signup/signup.component';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';

import { FormateursComponent } from './components/formateur/formateur.component';
import { CreateFormateurComponent } from './components/create-formateur/create-formateur.component';
import { AuthInterceptorService } from './services/auth-interceptor.service';
import { ParticipantRegistrationComponent } from './components/participant-registration/participant-registration.component';
import { CycleComponent } from './components/cycle/cycle.component';
import { CreateCycleComponent } from './components/create-cycle/create-cycle.component';


@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    SignupComponent,
    LoginComponent,
    HomeComponent,
    FormateursComponent,
    CreateFormateurComponent,

    ParticipantRegistrationComponent,
     CycleComponent,
     CreateCycleComponent
  ],
  imports: [

    BrowserModule,
    AppRoutingModule,
    MatButtonModule,
    MatCardModule,
    MatIconModule,
    MatInputModule,
    MatListModule,
    MatToolbarModule,
    ReactiveFormsModule,

    HttpClientModule
  ],
  providers: [
    {
      provide:HTTP_INTERCEPTORS,
      useClass:AuthInterceptorService,
      multi :true,
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
