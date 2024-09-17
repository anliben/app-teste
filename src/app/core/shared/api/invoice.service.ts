import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Invoice } from '../interfaces/invoice.interface';

@Injectable({
  providedIn: 'root'
})
export class InvoiceService {

  http = inject(HttpClient)
  api = 'https://teste-api-production-df29.up.railway.app/api/v1/invoice'

  constructor() { }

  create(invoice: Invoice) {
    return this.http.post(this.api, invoice)
  }

}
