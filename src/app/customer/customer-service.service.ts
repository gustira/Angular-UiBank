import { Injectable } from '@angular/core';
import { customer } from './customer';

@Injectable({
  providedIn: 'root'
})
export class CustomerServiceService {

  constructor() { }

  customer:customer[]=[
    new customer("001", "gustira", "syahputra","05-11-1996", "uta", "uta")
  ]

  getcustomer(){
    return this.customer;
  }
}
