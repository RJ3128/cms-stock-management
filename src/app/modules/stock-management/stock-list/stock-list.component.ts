import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { StockFormComponent } from '../stock-form/stock-form.component';
import { StockManagementService } from '../stock-management.service';
import { ThumbnailRendererComponent } from 'src/app/shared/thumbnail-renderer/thumbnail-renderer.component';
import { AgDeleteButtonComponent } from 'src/app/shared/ag-delete-button/ag-delete-button.component';
import { AgEditButtonComponent } from 'src/app/shared/ag-edit-button/ag-edit-button.component';

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
  public paginationSize = 10;
  private gridApi: any;

  constructor(
    private dialog: MatDialog,
    private stockManagementService: StockManagementService,
  ) {

    this.gridOptions = {
      context: {
        componentParent: this,
      },
      rowSelection: 'single',
      defaultColDef: {
        sortable: true,
        resizable: true,
        filter: true,
      },
      animateRows: true,
      rowHeight: 80,
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
        headerName: '',
        field: 'fileButtons',
        enableRowGroup: true,
        suppressSizeToFit: true,
        cellRendererFramework: AgEditButtonComponent,
        width: 70
      },
      {
        headerName: '',
        field: 'fileButtons',
        enableRowGroup: true,
        suppressSizeToFit: true,
        cellRendererFramework: AgDeleteButtonComponent,
        width: 70
      },
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
      { headerName: 'Reg No', field: 'regNo' },
      {
        headerName: 'Accessories',
        field: 'accessories.accessories',
        cellEditor: 'agLargeTextCellEditor',
        width: 160,
      },
      { headerName: 'Colour', field: 'colour' },
      { headerName: 'Cost Price', field: 'costPrice' },
      { headerName: 'Retail', field: 'retailPrice' },
      { headerName: 'VIN', field: 'vin' },

    ];
  }

  onGridReady(event) {
    this.gridApi = event.api;
    this.getStockData();
  }

  onQuickFilterChanged(event: any) {
    this.gridApi.setQuickFilter(event.target.value);
  }

  onEdit(stockItem) {
    this.editStockItem(stockItem);
  }

  onDelete(id) {
    console.log('DELETE: ', id);
  }

  getStockData() {
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
    stockFormRef.afterClosed().subscribe(() => {
      this.getStockData();
    });
  }

  editStockItem(stockItem) {
    const stockFormRef = this.dialog.open(StockFormComponent, {
      width: '80%',
      data: stockItem,
      disableClose: true,
    });
    stockFormRef.afterClosed().subscribe(() => {
      this.getStockData();
    });
  }

}
