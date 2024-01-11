import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CustomerService } from '../services/customer.service';
import { Init } from 'v8';
import { Customer } from '../Model/customer.model';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-customer',
  standalone: true,
  imports: [CommonModule, RouterModule, FormsModule],
  providers: [CustomerService],
  templateUrl: './customer.component.html',
  styleUrl: './customer.component.css'
})
export class CustomerComponent implements OnInit {

  public customers: Array<Customer> | undefined;
  public customer: Customer = new Customer();
  /**
   *
   */
  constructor(private customerService: CustomerService) {

  }

  register() {
    this.customerService.InsertUpdate(this.customer)
      .subscribe(() => { alert('cadastrado com sucesso'); this.LoadCustomers(); });

  }

  ngOnInit(): void {
    this.LoadCustomers();
  }
  LoadCustomers() {
    this.customerService.GetAll().subscribe(data => {
      this.customers = data;
    })
  }

}
