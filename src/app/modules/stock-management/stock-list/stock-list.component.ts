import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { StockFormComponent } from '../stock-form/stock-form.component';
import { StockManagementService } from '../stock-management.service';
import { ThumbnailRendererComponent } from 'src/app/shared/thumbnail-renderer/thumbnail-renderer.component';

@Component({
  selector: 'app-stock-list',
  templateUrl: './stock-list.component.html',
  styleUrls: ['./stock-list.component.css']
})
export class StockListComponent implements OnInit {

  public columnDefs: any[] = [];
  public rowData: any[] = [];
  public frameworkComponents: any;
  public gridOptions: any;

  constructor(
    private dialog: MatDialog,
    private stockManagementService: StockManagementService,
  ) {

    this.gridOptions = {
      frameworkComponents: {
        thumbnailRenderer: ThumbnailRendererComponent
      }
    };
  }

  ngOnInit() {
    this.initialiseGrid();
  }

  initialiseGrid() {


    this.frameworkComponents = {
      thumbnailRenderer: ThumbnailRendererComponent
    };

    this.columnDefs = [
      {
        field: 'Image',
        width: 100,
        cellRenderer: 'thumbnailRenderer',
        valueGetter: (params) => {
          if (
            params.data &&
            params.data.images &&
            params.data.images.primaryImage
          ) {
            return params.data.images.primaryImage;
          }
        },
      },
      { headerName: 'Make', field: 'make' },
      { headerName: 'Model', field: 'model' },
      { headerName: 'KMS', field: 'kms' },
      { headerName: 'Colour', field: 'colour' },
      { headerName: 'Cost Price', field: 'costPrice' },
      { headerName: 'Retail', field: 'retailPrice' },
      {
        headerName: 'Accessories',
        field: 'accessories.accessories'
      }
    ];
  }

  onGridReady() {
    this.getStockData();
  }

  getStockData() {
    console.log('GETTING STOCK');
    this.stockManagementService.getStock().subscribe((stockData: any) => {
      console.log('RESPONSE: ', stockData);
      this.rowData = stockData;
    });
  }

  addStock() {
    const stockFormRef = this.dialog.open(StockFormComponent, {
      width: '80%',
      data: {
        newEntry: true
      },
      disableClose: true,
    });
  }

}
