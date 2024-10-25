import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { ImageCroppedEvent } from 'ngx-image-cropper';

@Component({
  selector: 'app-stock-form',
  templateUrl: './stock-form.component.html',
  styleUrls: ['./stock-form.component.css']
})
export class StockFormComponent implements OnInit {
  public title = '';
  public imageChangedEvent: any = '';
  public cropping: boolean = false;
  public primaryImage: any = '';
  public frontImage: any = '';
  public sideImage: any = '';
  public backImage: any = '';


  constructor(
    private dialogRef: MatDialogRef<StockFormComponent>,
    @Inject(MAT_DIALOG_DATA) public formData: any
  ) { }

  ngOnInit() {
    this.setTitle();
  }

  setTitle() {
    if (this.formData.newEntry) {
      this.title = 'New Stock';
    } else {
      this.title = 'Edit Stock';
    }
  }

  onFileChange(event: any): void {
    this.imageChangedEvent = event;
  }

  imageCropped(event: ImageCroppedEvent) {
    this.primaryImage = event.base64;
  }

  cropperReady() {
    console.log('This is where you add the ready button');
    this.cropping = true;
  }
  loadImageFailed() {
    // show message
  }


  cropImage() {
    if (this.primaryImage) {
      console.log('Cropped Image:', this.primaryImage);
      // You can now use the cropped image (e.g., send it to a server, display it, etc.)
    } else {
      console.log('No image has been cropped yet.');
    }
    this.imageChangedEvent = undefined;
    this.cropping = false;
  }

  closeDialog() {
    this.dialogRef.close();
  }

}
