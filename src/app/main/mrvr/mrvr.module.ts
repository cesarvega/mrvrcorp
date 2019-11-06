import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MrvrComponent } from './mrvr.component';
import { RouterModule, Routes } from '@angular/router';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ProductsComponent } from './products/products.component';
import { VendorsComponent } from './vendors/vendors.component';
import { UsersComponent } from './users/users.component';
import { StripeComponent } from './stripe/stripe.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { ClientsComponent } from './clients/clients.component';
const routes: Routes = [
  {
    path: 'dash',
    component: MrvrComponent
  },
  {
    path: 'users',
    component: UsersComponent
  },
  {
    path: 'clients',
    component: ClientsComponent
  },
  {
    path: 'vendors',
    component: VendorsComponent
  },
  {
    path: 'products',
    component: ProductsComponent
  },
  {
    path: 'stripe',
    component: StripeComponent
  }
];

@NgModule({
  declarations: [MrvrComponent, ProductsComponent, VendorsComponent, UsersComponent, StripeComponent, ClientsComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    FlexLayoutModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class MrvrModule { }
