import { HttpClient } from '@angular/common/http';
import { Component, inject, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { PoModule, PoNotificationService } from '@po-ui/ng-components';
import { PoTemplatesModule } from '@po-ui/ng-templates';
import { InvoiceService } from '../shared/api/invoice.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new',
  templateUrl: './new.component.html',
  styleUrls: ['./new.component.css'],
  standalone: true,
  imports: [PoModule, PoTemplatesModule],
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

  constructor(
    public invoice: InvoiceService,
    public http: HttpClient,
    public router: Router,
    public notify: PoNotificationService
  ) {}

  ngOnInit() {}

  getForm(form: NgForm) {
    this.dynamicForm = form;
  }

  submit() {
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
    };

    this.invoice.create(invoiceMock).subscribe({
      next: (response: any) => {
        console.log(response);
        this.router.navigate(['/']);
      },
    });
  }
}
