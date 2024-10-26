import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { MatDialogModule } from '@angular/material/dialog';
import { MatProgressSpinnerModule } from '@angular/material';



@NgModule({
  declarations: [NavBarComponent],
  imports: [
    CommonModule,
    MatDialogModule,
    MatProgressSpinnerModule
  ],
  // entryComponents: [NavBarComponent]
  exports: [
    MatDialogModule,
    NavBarComponent,
    MatProgressSpinnerModule
  ]
})
export class SharedModule { }
