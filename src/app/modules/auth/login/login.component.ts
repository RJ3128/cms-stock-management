import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public loginForm: FormGroup;
  public loginMessage: string;
  public responseClass = "text-danger";

  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private router: Router
  ) { }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

  onAuthenticate(): void {
    const userCredentials = this.loginForm.getRawValue();
    this.authService.login(userCredentials).subscribe((response: any) => {
      if (response && response.success) {
        this.loginMessage = (response.message) ? response.message : '';
        this.responseClass = "text-success";
        localStorage.setItem('token', response.token);
        this.router.navigate(['stock/list']);
      } else {
        this.loginMessage = (response.message) ? response.message : '';
        this.responseClass = "text-danger";
      }
    });
  }

}
