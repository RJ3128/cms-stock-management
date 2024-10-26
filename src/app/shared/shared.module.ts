import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { MatDialogModule } from '@angular/material/dialog';
import { AgGridModule } from 'ag-grid-angular';
import { ThumbnailRendererComponent } from './thumbnail-renderer/thumbnail-renderer.component';


@NgModule({
  declarations: [NavBarComponent, ThumbnailRendererComponent],
  imports: [
    CommonModule,
    MatDialogModule,
    AgGridModule.withComponents([])
  ],
  exports: [
    MatDialogModule,
    NavBarComponent,
    ThumbnailRendererComponent,
    AgGridModule
  ],
  entryComponents: [
    ThumbnailRendererComponent
  ]
})
export class SharedModule { }
