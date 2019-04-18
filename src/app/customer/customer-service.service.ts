import { Injectable } from '@angular/core';
import { customer } from './customer';

@Injectable({
  providedIn: 'root'
})
export class CustomerServiceService {

  constructor() { }

  customer:customer[]=[
    new customer("001", "gustira", "syahputra","05-11-1996", "uta", "uta"),
    new customer("002", "azwan", "sitorus","05-11-1996", "azwan", "awan"),
    new customer("003", "situa", "linoa","05-11-1996", "situa", "situa"),
    new customer("004", "marogo", "kusono","05-11-1996", "morogo", "morogo"),
    new customer("005", "alama", "cimina","05-11-1996", "alama", "alama"),
  ]

  getcustomer(){
    return this.customer;
  }
}
