import { Component, OnInit } from '@angular/core';
import { ICellRendererAngularComp } from 'ag-grid-angular';
import { ICellRendererParams } from 'ag-grid-community';

@Component({
  selector: 'app-ag-edit-button',
  templateUrl: './ag-edit-button.component.html',
  styleUrls: ['./ag-edit-button.component.css']
})
export class AgEditButtonComponent implements ICellRendererAngularComp {

  params: any;

  constructor() { }
  refresh(params: any): boolean {
    throw new Error('Method not implemented.');
  }
  agInit(params: ICellRendererParams): void {
    this.params = params;
  }

  onDelete() {
    const dataObj = this.params.data;
    this.params.context.componentParent.onEdit(dataObj);
  }

}
