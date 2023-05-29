import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from 'src/about/about/about.component';
import { AddBankComponent } from 'src/add-bank/add-bank/add-bank.component';
import { EditBankComponent } from 'src/edit-bank/edit-bank/edit-bank.component';
import { ListbankComponent } from 'src/list-bank/listbank/listbank.component';
import { AuthGuardServiceComponent } from 'src/login-auth/auth-guard-service/auth-guard-service.component';
import { AuthGuard } from 'src/services/auth.guard';

const routes: Routes = [
  { path: 'login', component: AuthGuardServiceComponent },
  { path: 'list', component: ListbankComponent, canActivate: [AuthGuard] },
  { path: 'add', component: AddBankComponent, canActivate: [AuthGuard] },
  { path: 'edit/:id', component: EditBankComponent, canActivate: [AuthGuard] },
  { path: 'about', component: AboutComponent },
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: '**', redirectTo: 'login' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
