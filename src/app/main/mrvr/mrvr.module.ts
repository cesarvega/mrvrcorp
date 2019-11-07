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
import { MatButtonModule, MatCheckboxModule, MatFormFieldModule, MatInputModule, MatExpansionModule, MatIconModule, MatOptionModule, MatSelectModule, ErrorStateMatcher, ShowOnDirtyErrorStateMatcher, MatDialogModule, MatDatepickerModule, MatMenuModule, MatRippleModule  } from '@angular/material';
import { ProdutDetailComponent } from './products/produt-detail/produt-detail.component';
const routes: Routes = [
  {
    path: 'home',
    component: HomepageComponent
  },
  {
    path: 'product-detail',
    component: ProdutDetailComponent
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
  declarations: [MrvrComponent, ProductsComponent, VendorsComponent, UsersComponent, StripeComponent, ClientsComponent, HomepageComponent, ProdutDetailComponent],
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
    MatDatepickerModule,
    MatMenuModule,
    MatRippleModule,

  ],
  providers: [
    {provide: ErrorStateMatcher, useClass: ShowOnDirtyErrorStateMatcher}
  ]
})
export class MrvrModule { }
