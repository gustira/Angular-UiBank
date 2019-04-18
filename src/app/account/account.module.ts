import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListAccountComponent } from './list/list-account.component';
import { CreateAccountComponent } from './create/create-account.component';
import { AccountRoutingModule } from './account-routing.module';

@NgModule({
  declarations: [
    ListAccountComponent,
    CreateAccountComponent
  ],
  imports: [
    CommonModule,
    AccountRoutingModule
  ]
})
export class AccountModule { }
