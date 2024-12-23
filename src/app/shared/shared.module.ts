import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { MatDialogModule } from '@angular/material/dialog';
import { AgGridModule } from 'ag-grid-angular';
import { ThumbnailRendererComponent } from './thumbnail-renderer/thumbnail-renderer.component';
import { AgDeleteButtonComponent } from './ag-delete-button/ag-delete-button.component';
import { AgEditButtonComponent } from './ag-edit-button/ag-edit-button.component';
import { ConfirmDialogComponent } from './confirm-dialog/confirm-dialog.component';


@NgModule({
  declarations: [
    NavBarComponent,
    ThumbnailRendererComponent,
    AgDeleteButtonComponent,
    AgEditButtonComponent,
    ConfirmDialogComponent
  ],
  imports: [
    CommonModule,
    MatDialogModule,
    AgGridModule.withComponents([])
  ],
  exports: [
    MatDialogModule,
    NavBarComponent,
    ThumbnailRendererComponent,
    AgGridModule,
  ],
  entryComponents: [
    ThumbnailRendererComponent,
    AgDeleteButtonComponent,
    AgEditButtonComponent,
    ConfirmDialogComponent
  ]
})
export class SharedModule { }
