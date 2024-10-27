import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material';
import { AdminService } from '../admin.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})
export class UserFormComponent implements OnInit {

  public userForm: FormGroup;
  public title = '';

  constructor(
    private dialogRef: MatDialogRef<UserFormComponent>,
    private formBuilder: FormBuilder,
    private adminService: AdminService,
    private toastr: ToastrService,
  ) { }

  ngOnInit() {
    this.setTitle();
    this.groupUserForm();
  }

  setTitle() {
    this.title = 'Create User';
  }


  groupUserForm() {

    this.userForm = this.formBuilder.group({
      username: ['', Validators.required],
      email: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

  onSubmit() {
    const user = this.userForm.getRawValue();

    this.adminService.createUser(user).subscribe((saveRes: any) => {
      if (saveRes && saveRes.error) {
        this.toastr.error(`${saveRes.message}`, 'Failed', { positionClass: 'toast-center-center' });
      } else {
        this.toastr.info('User Added', 'Success', { positionClass: 'toast-center-center' });
        this.closeDialog();
      }
    });
  }

  closeDialog() {
    this.dialogRef.close();
  }

}
