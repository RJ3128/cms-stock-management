import { Component, ElementRef, Inject, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { ImageCroppedEvent } from 'ngx-image-cropper';
import { StockManagementService } from '../stock-management.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-stock-form',
  templateUrl: './stock-form.component.html',
  styleUrls: ['./stock-form.component.css']
})
export class StockFormComponent implements OnInit {

  @ViewChild('myFileInput', { static: false }) myFileInput: ElementRef;

  public stockForm: FormGroup;
  public title = '';
  public imageChangedEvent: any = '';
  public primaryImage: any = '';
  public frontImage: any = undefined;
  public sideImage: any = undefined;
  public backImage: any = undefined;
  public selectedImageType = 'primary';
  public imageTypes = [
    { label: "Primary", value: "primary" },
    { label: "Front", value: "front" },
    { label: "Side", value: "side" },
    { label: "Back", value: "back" }
  ];
  public buttonLabel = 'Save';
  public isLoading: boolean = false;


  constructor(
    private dialogRef: MatDialogRef<StockFormComponent>,
    private formBuilder: FormBuilder,
    private stockManagementService: StockManagementService,
    private toastr: ToastrService,
    @Inject(MAT_DIALOG_DATA) public formData: any
  ) { }

  ngOnInit() {
    this.setTitle();
    this.groupStockForm();
  }

  setTitle() {
    if (this.formData.newEntry) {
      this.title = 'New Stock';
    } else {
      this.title = 'Edit Stock';
      this.buttonLabel = "Update";
    }
  }

  groupStockForm() {

    if (this.formData.newEntry) {

      this.stockForm = this.formBuilder.group({
        regNo: ['', Validators.required],
        make: ['', Validators.required],
        model: ['', Validators.required],
        modelYear: ['', Validators.required],
        kms: [0, Validators.required],
        colour: [''],
        vin: ['', Validators.required],
        retailPrice: [0],
        costPrice: [0],
        accessories: [''],
      });

    } else {

      this.stockForm = this.formBuilder.group({
        regNo: [(this.formData.regNo) ? this.formData.regNo : '', Validators.required],
        make: [(this.formData.make) ? this.formData.make : '', Validators.required],
        model: [(this.formData.model) ? this.formData.model : '', Validators.required],
        modelYear: [(this.formData.modelYear) ? this.formData.modelYear : '', Validators.required],
        kms: [(this.formData.kms) ? this.formData.kms : 0, Validators.required],
        colour: [(this.formData.colour) ? this.formData.colour : ''],
        vin: [(this.formData.vin) ? this.formData.vin : '', Validators.required],
        retailPrice: [(this.formData.retailPrice) ? this.formData.retailPrice : 0],
        costPrice: [(this.formData.costPrice) ? this.formData.costPrice : 0],
        accessories: [(this.formData.accessories) ? this.formData.accessories : ''],
      });
    }
  }

  //!! Image Upload Functions

  onFileChange(event: any): void {
    this.imageChangedEvent = event;
  }

  imageCropped(event: ImageCroppedEvent) {
    switch (this.selectedImageType) {
      case 'primary':
        this.primaryImage = event.base64;
        break;

      case 'front':
        this.frontImage = event.base64;
        break;

      case 'side':
        this.sideImage = event.base64;
        break;

      case 'back':
        this.backImage = event.base64;
        break;
    }

    this.myFileInput.nativeElement.value = '';
  }

  cropImage() {
    this.imageChangedEvent = undefined;
  }

  onSubmit() {
    this.isLoading = true;
    const stockData = this.stockForm.getRawValue();
    const images = {
      primaryImage: this.primaryImage,
      frontImage: this.frontImage,
      sideImage: this.sideImage,
      backImage: this.backImage
    };

    this.stockManagementService.addStock(stockData, images).subscribe((saveRes: any) => {
      if (saveRes && saveRes.error) {
        this.toastr.error(`${saveRes.message}`, 'Failed', { positionClass: 'toast-center-center' });
        this.isLoading = false;
      } else {
        this.toastr.info('Stock Added', 'Success', { positionClass: 'toast-center-center' });
        this.closeDialog();
        this.isLoading = false;
      }
    });
  }

  closeDialog() {
    this.dialogRef.close();
  }

}
