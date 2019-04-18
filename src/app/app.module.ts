import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListCustomerComponent } from './customer/list-customer.component';
import { GetbyidCustomerComponent } from './customer/getbyid-customer.component';

@NgModule({
  declarations: [
    AppComponent,
    ListCustomerComponent,
    GetbyidCustomerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
