import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustomerCreateComponent } from './customer-create/customer-create.component';
import { CustomerDetailsComponent } from './customer-details/customer-details.component';
import { CustomerListComponent } from './customer-list/customer-list.component';

const routes: Routes = [
  { 
    path: 'criar',
    component: CustomerCreateComponent,
  },
  { 
    path: 'detalhes',
    component: CustomerDetailsComponent,
  },
  { 
    path: 'listar',
    component: CustomerListComponent,
  },
  {
    path: '',
    redirectTo: 'listar',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CustomerRoutingModule { }
