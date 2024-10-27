import { Component, OnInit } from '@angular/core';
import { ICellEditorAngularComp } from 'ag-grid-angular';

@Component({
  selector: 'app-thumbnail-renderer',
  templateUrl: './thumbnail-renderer.component.html',
  styleUrls: ['./thumbnail-renderer.component.css']
})
export class ThumbnailRendererComponent implements ICellEditorAngularComp {
  getValue() {
    throw new Error('Method not implemented.');
  }

  public params: any;
  public image: any = undefined;
  public hasWelfare = 'noBorder';

  agInit(params: any): void {
    this.params = params;
    this.image = params.data.stockImages.primaryImage;
  }

  refresh(): boolean {
    return false;
  }

}
