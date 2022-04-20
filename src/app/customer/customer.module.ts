import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomerListComponent } from './customer-list/customer-list.component';
import { CustomerDetailsComponent } from './customer-details/customer-details.component';
import { CustomerCreateComponent } from './customer-create/customer-create.component';
import { CustomerRoutingModule } from './curtomer.routes';
import { CustomerService } from './customer.service';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    CustomerListComponent,
    CustomerDetailsComponent,
    CustomerCreateComponent
  ],
  imports: [
    SharedModule, 
    CommonModule,
    CustomerRoutingModule,
  ],
  providers: [
    CustomerService
  ]
})
export class CustomerModule { }
