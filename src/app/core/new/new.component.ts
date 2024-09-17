import { HttpClient } from '@angular/common/http';
import { Component, inject, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { PoModule } from '@po-ui/ng-components';
import { PoTemplatesModule } from '@po-ui/ng-templates';
import { InvoiceService } from '../shared/api/invoice.service';
import { Router } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@Component({
  selector: 'app-new',
  templateUrl: './new.component.html',
  styleUrls: ['./new.component.css'],
  standalone: true,
  imports: [PoModule, PoTemplatesModule, BrowserAnimationsModule],
})
export class NewComponent implements OnInit {
  fields = [
    {
      property: 'address',
      label: 'Endereço',
      type: 'String',
    },
    {
      property: 'neighborhood',
      label: 'Município',
    },
    {
      property: 'state',
      label: 'Estado',
    },
    {
      property: 'document',
      label: 'RG',
      type: 'string',
    },
    {
      property: 'cpf',
      label: 'CPF',
      type: 'string',
    },
    {
      property: 'important_of',
      label: 'Importância de',
    },
    {
      property: 'reference_of',
      label: 'Referência de',
    },
    {
      property: 'received_of',
      label: 'Recebido de',
    },
    {
      property: 'value',
      label: 'Valor',
      type: 'string',
    },
  ];

  dynamicForm!: NgForm;
  http = inject(HttpClient);
  router = inject(Router);

  constructor(
    public invoice: InvoiceService
  ) {}

  ngOnInit() {}

  getForm(form: NgForm) {
    this.dynamicForm = form;
  }

  submit() {
    console.log(this.dynamicForm.value);
    const {
      address,
      cpf,
      important_of,
      neighborhood,
      received_of,
      reference_of,
      document,
      state,
      value,
    } = this.dynamicForm.value;

    if (
      address !== null &&
      cpf !== null &&
      important_of !== null &&
      neighborhood !== null &&
      received_of !== null &&
      reference_of !== null &&
      document !== null &&
      state !== null &&
      value !== null
    ) {

      const invoiceMock = {
        id: 0,
        address: address,
        cpf: cpf,
        important_of: important_of,
        neighborhood: neighborhood,
        received_of: received_of,
        reference_of: reference_of,
        document: document,
        state: state,
        value: value,
      }

      this.invoice.create(invoiceMock).subscribe({next: (response: any) => {
        console.log(response)
        this.router.navigate(['/'])
      } })

    }
  }
}
