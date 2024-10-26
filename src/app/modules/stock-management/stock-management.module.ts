import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StockListComponent } from './stock-list/stock-list.component';
import { StockFormComponent } from './stock-form/stock-form.component';
import { StockManagementRoutingModule } from './stock-management.routing.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { ImageCropperModule } from 'ngx-image-cropper';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
@NgModule({
  declarations: [StockListComponent, StockFormComponent],
  imports: [
    CommonModule,
    StockManagementRoutingModule,
    SharedModule,
    ImageCropperModule,
    FormsModule,
    ReactiveFormsModule
  ],
  entryComponents: [
    StockFormComponent,
  ]
})
export class StockManagementModule { }
