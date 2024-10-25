import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StockListComponent } from './stock-list/stock-list.component';
import { StockFormComponent } from './stock-form/stock-form.component';
import { StockManagementRoutingModule } from './stock-management.routing.module';
import { SharedModule } from 'src/app/shared/shared.module';



@NgModule({
  declarations: [StockListComponent, StockFormComponent],
  imports: [
    CommonModule,
    StockManagementRoutingModule,
    SharedModule
  ]
})
export class StockManagementModule { }
