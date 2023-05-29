import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BankAgencyModule } from 'src/banking-module/bank-agency/bank-agency.module';
import { AboutComponent } from 'src/about/about/about.component';
import { AuthGuardServiceComponent } from 'src/login-auth/auth-guard-service/auth-guard-service.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    AuthGuardServiceComponent,
    AppComponent,
    AboutComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BankAgencyModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
