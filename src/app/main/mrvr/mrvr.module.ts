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
import { HomepageComponent } from './homepage/homepage.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { MatButtonModule, MatCheckboxModule, MatFormFieldModule, MatInputModule, MatExpansionModule, MatIconModule, MatOptionModule, MatSelectModule, ErrorStateMatcher, ShowOnDirtyErrorStateMatcher, MatDialogModule  } from '@angular/material';
const routes: Routes = [
  {
    path: 'home',
    component: HomepageComponent
  },
  {
    path: 'detail',
    component: ProductDetailComponent
  },
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
  declarations: [MrvrComponent, ProductsComponent, VendorsComponent, UsersComponent, StripeComponent, ClientsComponent, HomepageComponent, ProductDetailComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    FlexLayoutModule,
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatCheckboxModule,
    MatFormFieldModule,
    MatInputModule,
    MatDialogModule,
    MatExpansionModule,
    MatIconModule,
    MatOptionModule,
    MatSelectModule,
  ],
  providers: [
    {provide: ErrorStateMatcher, useClass: ShowOnDirtyErrorStateMatcher}
  ]
})
export class MrvrModule { }
