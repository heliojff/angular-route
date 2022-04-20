import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CustomerService } from '../customer.service';

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.sass'],
})
export class CustomerListComponent implements OnInit {
  userList: Array<any> = [];

  constructor(
    private _router: Router,
    private _customerService: CustomerService
  ) {}

  ngOnInit(): void {
    this._getUsers();
  }

  showDetails(user: any) {
    this._router.navigate(['cliente/detalhes'], user);
  }

  private _getUsers() {
    this._customerService.getUserList(3).subscribe({
      next: (userList: any) => {
        this.userList = userList;
      },
      error: (err) => {
        console.log(err);
      },
    });
  }
}
