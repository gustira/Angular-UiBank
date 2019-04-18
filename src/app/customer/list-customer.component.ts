import { Component, OnInit } from '@angular/core';
import { CustomerServiceService } from './customer-service.service';

@Component({
  selector: 'app-list-customer',
  templateUrl: './list-customer.component.html',
  styleUrls: ['./list-customer.component.css']
})
export class ListCustomerComponent implements OnInit {
  listCustomer: any;
  constructor(private _customerServiceService: CustomerServiceService) {
    this.listCustomer=this._customerServiceService.getcustomer();
   }

  ngOnInit() {
  }

}
