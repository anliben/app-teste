import { Component, ViewChild } from '@angular/core';
import { PoModalComponent, PoModule, PoTableAction } from '@po-ui/ng-components';
import { PoPageDynamicTableActions, PoPageDynamicTableCustomAction, PoTemplatesModule } from '@po-ui/ng-templates';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    PoModule,
    PoTemplatesModule,

  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  @ViewChild('modal', {static: true}) modal!: PoModalComponent;

  fields = [
    {
      property: 'address',
      label: 'Endereço',
      type: 'String',
      divider: 'Endereço'
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
      divider: 'Documentos'
    },
    {
      property: 'cpf',
      label: 'CPF',
      type: 'string',
    },
    {
      property: 'important_of',
      label: 'Importância de',
      divider: 'Referências e valores'
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

  readonly actions: PoPageDynamicTableActions = {
    new: '/new',
  };

  employee: any;

  actionsTable: Array<PoPageDynamicTableCustomAction> = [
    {
      label: 'Visualizar',
      action: this.openModel.bind(this)
    }
  ]

  openModel(invoice: any) {
    this.employee = invoice;
    this.modal.open();
  }
}
