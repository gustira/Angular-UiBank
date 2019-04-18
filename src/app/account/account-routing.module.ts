import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListAccountComponent } from './list/list-account.component';
import { CreateAccountComponent } from './create/create-account.component';

const accountRoutes: Routes = [
  {path: 'list', component: ListAccountComponent},
  {path: 'create', component: CreateAccountComponent},
];

@NgModule({
  imports: [RouterModule.forChild(accountRoutes)],
  exports: [RouterModule]
})
export class AccountRoutingModule { }
