import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { ListbankComponent } from 'src/list-bank/listbank/listbank.component';
import { HttpClientModule } from '@angular/common/http';
import { AddBankComponent } from 'src/add-bank/add-bank/add-bank.component';
import { FormsModule } from '@angular/forms';
import { EditBankComponent } from 'src/edit-bank/edit-bank/edit-bank.component';
import { BankService } from 'src/services/bank.service';
import { AuthService } from 'src/services/auth.service';
import { AuthGuard } from 'src/services/auth.guard';





@NgModule({
  declarations: [
    ListbankComponent,
    AddBankComponent,
    EditBankComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [
    BankService,
    AuthService,
    AuthGuard
  ]
})
export class BankAgencyModule { }
