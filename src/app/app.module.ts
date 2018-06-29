import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LoginComponent } from './shared/login/login.component';
import { SignupComponent } from './shared/signup/signup.component';
import {HomeComponent} from './home/home.component';
import {CookiesService} from './shared/services/cookies.service';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { HttpModule} from '@angular/http';
import {HttpClientModule} from '@angular/common/http';
import {AppRouteModule} from'./route.module';
import {HttpServiceService} from './shared/services/http-service.service';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignupComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    ReactiveFormsModule,
    AppRouteModule,
    HttpClientModule
  ],
  providers: [CookiesService, HttpServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
