import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-customer-details',
  templateUrl: './customer-details.component.html',
  styleUrls: ['./customer-details.component.sass'],
})
export class CustomerDetailsComponent {
  userInfo: any = {};

  constructor(private router: Router) {
    const extras = this.router.getCurrentNavigation()?.extras as any;
    if (extras.avatar) {
      this.userInfo = extras;
    }
  }

}
