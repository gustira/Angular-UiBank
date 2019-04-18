import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListCustomerComponent } from './customer/list-customer.component';
import { GetbyidCustomerComponent } from './customer/getbyid-customer.component';
import { AccountModule } from './account/account.module';

const routes: Routes = [
  {path:"customers", component: ListCustomerComponent},
  {path:"get", component: GetbyidCustomerComponent},
  // {path:"account", loadChildren: './account/account.module#AccountModule'}
  {path:"account", loadChildren: ()=> AccountModule }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
