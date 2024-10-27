import { Component, OnInit } from '@angular/core';
import { ICellRendererAngularComp } from 'ag-grid-angular';
import { ICellRendererParams, IAfterGuiAttachedParams } from 'ag-grid-community';

@Component({
  selector: 'app-ag-delete-button',
  templateUrl: './ag-delete-button.component.html',
  styleUrls: ['./ag-delete-button.component.css']
})
export class AgDeleteButtonComponent implements ICellRendererAngularComp {
  params: any;

  constructor() { }
  refresh(params: any): boolean {
    throw new Error('Method not implemented.');
  }
  agInit(params: ICellRendererParams): void {
    this.params = params;
  }

  onDelete() {
    const id = this.params.data._id;
    this.params.context.componentParent.onDelete(id);
  }

}
