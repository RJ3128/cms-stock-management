import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-confirm-dialog',
  templateUrl: './confirm-dialog.component.html',
  styleUrls: ['./confirm-dialog.component.css']
})
export class ConfirmDialogComponent implements OnInit {

  title = "Title";
  message: "Message";

  constructor(
    private dialogRef: MatDialogRef<ConfirmDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public formData: any
  ) { }

  ngOnInit() {
    this.title = this.formData.title;
    this.message = this.formData.message;
  }

  closeDialog(confirmed?: boolean) {
    this.dialogRef.close(confirmed);
  }

}
