import { Component, OnInit } from '@angular/core';
import { Customer } from 'src/app/shared/models/customer-model';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {
  public customers: Customer[];
  constructor() { }

  ngOnInit(): void {
    this.getAllCustomers();
  }

  getAllCustomers() {
    const customerTemp: Customer[] = [];
    let customer = new Customer();
    customer.name = "Bryan";
    customer.lastname = "King Atoche";
    customer.age = 24;
    customer.birth = new Date();
    customer.death = new Date();
    customerTemp.push(customer);
    customerTemp.push(customer);
    customerTemp.push(customer);
    this.customers = customerTemp;
  }
}
