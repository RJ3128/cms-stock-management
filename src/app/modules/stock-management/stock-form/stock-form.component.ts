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
  public croppedImage: any = '';

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
    this.croppedImage = event.base64;
  }

  imageLoaded(event) {
    // show cropper
  }
  cropperReady() {
    // cropper ready
  }
  loadImageFailed() {
    // show message
  }


  cropImage() {
    console.log('CROPPED IMAGE: ', this.croppedImage);
    if (this.croppedImage) {
      console.log('Cropped Image:', this.croppedImage);
      // You can now use the cropped image (e.g., send it to a server, display it, etc.)
    } else {
      console.log('No image has been cropped yet.');
    }
  }

  closeDialog() {
    this.dialogRef.close();
  }

}


// [imageChangedEvent]="imageChangedEvent" 
// [maintainAspectRatio]="true"    
// format="jpeg" output="base64" imageQuality="50" 
// (imageCropped) = "imageCropped($event)"
//   (imageLoaded) = "imageLoaded($event)"(cropperReady) = "cropperReady()"
//     (loadImageFailed) = "loadImageFailed()" >;