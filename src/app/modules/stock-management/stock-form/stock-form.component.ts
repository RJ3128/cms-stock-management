import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-stock-form',
  templateUrl: './stock-form.component.html',
  styleUrls: ['./stock-form.component.css']
})
export class StockFormComponent implements OnInit {
  public title = '';

  constructor(
    private dialogRef: MatDialogRef<StockFormComponent>,
    @Inject(MAT_DIALOG_DATA) public formData: any
  ) { }

  ngOnInit() {
    console.log('DATA: ', this.formData);
    this.setTitle();
  }

  setTitle() {
    if (this.formData.newEntry) {
      this.title = 'New Stock';
    } else {
      this.title = 'Edit Stock';
    }
  }

  primaryImageChange(event) {
    console.log("EVENT: ", event);
  }

  closeDialog() {
    this.dialogRef.close();
  }

}
