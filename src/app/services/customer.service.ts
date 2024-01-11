import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Customer } from '../Model/customer.model';

@Injectable({
  providedIn: 'root'
})

export class CustomerService {


  private url = "https://localhost:7068/api";

  constructor(private httpclient: HttpClient) { }

  public Get(id: string) {
    return this.httpclient.get(`${this.url}/customer/${id}`);
  }

  public GetAll(): Observable<Customer[]> {
    return this.httpclient.get<Customer[]>(`${this.url}/customer`);
  }

  public InsertUpdate(customer: Customer) {
    return this.httpclient.post(`${this.url}/customer`, customer);
  }
}
