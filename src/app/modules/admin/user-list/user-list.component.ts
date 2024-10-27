import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { ToastrService } from 'ngx-toastr';
import { AgDeleteButtonComponent } from 'src/app/shared/ag-delete-button/ag-delete-button.component';
import { AdminService } from '../admin.service';
import { ConfirmDialogComponent } from 'src/app/shared/confirm-dialog/confirm-dialog.component';
import { UserFormComponent } from '../user-form/user-form.component';
@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  public columnDefs: any[] = [];
  public rowData: any[] = [];
  public frameworkComponents: any;
  public gridOptions: any;
  public paginationSize = 10;
  private gridApi: any;

  constructor(
    private dialog: MatDialog,
    private toastr: ToastrService,
    private adminService: AdminService
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
      rowHeight: 70,
    };
  }

  ngOnInit() {
    this.initialiseGrid();
  }

  initialiseGrid() {

    this.columnDefs = [

      {
        headerName: '',
        field: 'fileButtons',
        enableRowGroup: true,
        suppressSizeToFit: true,
        cellRendererFramework: AgDeleteButtonComponent,
        width: 70
      },
      { headerName: 'Username', field: 'username' },
      { headerName: 'Email', field: 'email' },

    ];
  }

  createUser() {
    const stockFormRef = this.dialog.open(UserFormComponent, {
      width: '30%',
      data: {
        newEntry: true
      },
      disableClose: true,
    });
    stockFormRef.afterClosed().subscribe(() => {
      this.getUsers();
    });
  }


  onDelete(user) {
    this.deleteUser(user);
  }

  onGridReady(event) {
    this.gridApi = event.api;
    this.getUsers();
  }

  onQuickFilterChanged(event: any) {
    this.gridApi.setQuickFilter(event.target.value);
  }

  getUsers() {
    this.adminService.getUsers().subscribe((stockData: any) => {
      this.rowData = stockData;
    });
  }

  deleteUser(user) {

    const confirmDialogRef = this.dialog.open(ConfirmDialogComponent, {
      data: {
        title: `Delete: ${user.username}`,
        message: 'Sure you want to delete this user?'
      },
      width: '40%',
      disableClose: true,
    });
    confirmDialogRef.afterClosed().subscribe((confirmed) => {
      if (confirmed) {
        this.adminService.deleteUser(user._id).subscribe((result: any) => {
          this.toastr.info('User Deleted', 'Success', { positionClass: 'toast-center-center' });
          this.getUsers();
        });
      }
    });

  }

}
