
import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { CustomMaterialModule } from './core/material.module';
import {FormsModule} from '@angular/forms';

import { AppComponent } from './app.component';
import { UserComponent } from './users/user/user.component';
import { LoginComponent } from './users/login/login.component';
import { from } from 'rxjs';
import { AppRoutingModule } from './core/app.routing.module';
import { HttpClientModule } from '@angular/common/http';
import { LoginService } from './users/login/login.service';

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    CustomMaterialModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [LoginService],
  bootstrap: [AppComponent]
})
export class AppModule { }
