import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { StockFormComponent } from '../stock-form/stock-form.component';

@Component({
  selector: 'app-stock-list',
  templateUrl: './stock-list.component.html',
  styleUrls: ['./stock-list.component.css']
})
export class StockListComponent implements OnInit {

  constructor(
    private dialog: MatDialog,
  ) { }

  ngOnInit() {
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
