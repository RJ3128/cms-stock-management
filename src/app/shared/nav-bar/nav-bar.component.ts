import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  constructor(
    private router: Router
  ) { }

  ngOnInit() {
  }

  navigateStockList() {
    this.router.navigate(['stock/list']);
  }

  navigateUsers() {
    this.router.navigate(['admin/users']);
  }

  navigateLogin() {
    localStorage.removeItem('token');
    this.router.navigate(['login']);
  }

}
