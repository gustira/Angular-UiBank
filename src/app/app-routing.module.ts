import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListCustomerComponent } from './customer/list-customer.component';
import { GetbyidCustomerComponent } from './customer/getbyid-customer.component';

const routes: Routes = [
  {path:"customers", component: ListCustomerComponent},
  {path:"get", component: GetbyidCustomerComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
